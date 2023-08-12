export function LinkButton({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={link ?? "#"}
      className="relative z-10 overflow-clip rounded-full border border-slate-800 px-7 pb-1.5 pt-2 text-xs font-semibold transition-all duration-[250ms] before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-stone-800 before:transition-all before:duration-[250ms] hover:text-neutral-100 hover:before:translate-y-0"
    >
      {children}
    </a>
  );
}
