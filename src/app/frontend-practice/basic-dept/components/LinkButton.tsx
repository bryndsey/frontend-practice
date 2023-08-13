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
      className="before:bg-content hover:text-backdrop border-content relative z-10 overflow-clip rounded-full border px-7 pb-1.5 pt-2 text-xs font-semibold transition-all duration-[250ms] before:absolute before:inset-0 before:-z-10 before:translate-y-full before:transition-all before:duration-[250ms] hover:before:translate-y-0"
    >
      {children}
    </a>
  );
}
