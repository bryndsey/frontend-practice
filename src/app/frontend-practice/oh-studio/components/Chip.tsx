export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full bg-stone-200 bg-opacity-50 px-2.5 py-1.5 text-sm">
      {children}
    </div>
  );
}
