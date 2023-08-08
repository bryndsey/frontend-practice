export function LinkButton({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={link ?? "#"} className="rounded-full border px-4 py-2 text-xs">
      {children}
    </a>
  );
}
