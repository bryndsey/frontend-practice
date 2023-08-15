import useResizeObserver from "@react-hook/resize-observer";
import { useSpringValue, animated } from "@react-spring/web";
import { useRef, useEffect, ReactNode, forwardRef } from "react";

const CustomCursorArea = forwardRef<
  HTMLDivElement,
  {
    calculateRestPosition: () => { x: number; y: number };
    className: string;
    children: ReactNode;
  }
>(({ calculateRestPosition, className, children }, ref) => {
  const cursorHitboxRef = useRef<HTMLDivElement>(null!);
  const customCursorContainerRef = useRef<HTMLDivElement>(null!);

  const cursorX = useSpringValue(0, {
    config: {
      friction: 15,
      mass: 0.15,
      tension: 200,
    },
  });
  const cursorY = useSpringValue(0, {
    config: {
      friction: 15,
      mass: 0.15,
      tension: 200,
    },
  });

  const cursorOpacity = useSpringValue(0, {
    config: {
      duration: 200,
    },
  });

  useEffect(() => {
    const restPosition = calculateRestPosition();
    cursorX.set(restPosition.x);
    cursorY.set(restPosition.y);

    cursorOpacity.start(1);
  }, [cursorOpacity, cursorX, cursorY, calculateRestPosition]);

  useResizeObserver(cursorHitboxRef !== null ? cursorHitboxRef : null, () => {
    cursorX.set(cursorHitboxRef.current.clientWidth / 2);
    cursorY.set(cursorHitboxRef.current.clientHeight / 2);
  });

  return (
    <div className={className} ref={ref}>
      <div
        onPointerMove={(e) => {
          cursorX.start(e.pageX);
          cursorY.start(e.pageY);
        }}
        onPointerLeave={(e) => {
          cursorX.start(e.currentTarget.clientWidth / 2);
          cursorY.start(e.currentTarget.clientHeight / 2);
        }}
        ref={cursorHitboxRef}
        className="relative h-full w-full overflow-hidden"
      >
        <animated.div
          ref={customCursorContainerRef}
          style={{ x: cursorX, y: cursorY, opacity: cursorOpacity }}
          className="pointer-events-none absolute"
        >
          {children}
        </animated.div>
      </div>
    </div>
  );
});

CustomCursorArea.displayName = "CustomCursorArea";

export default CustomCursorArea;
