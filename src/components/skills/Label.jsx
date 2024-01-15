export default function Label({ indicator, children }) {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <span className="relative overflow-hidden rounded-md px-3 py-1 pb-1.5 text-[13px] font-semibold dark:bg-amber-600/10 bg-amber-200/70 text-amber-600 dark:text-amber-500">
      {children}
      <span
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-amber-500 dark:bg-amber-500"
        style={{ width: `${percentage}%` }}
      />
    </span>
  );
}
