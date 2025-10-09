interface IFilterProps {
  modalWidth: number;
  gridCols: number;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
}

export default function DepartmentFilter({
  modalWidth,
  gridCols,
  options,
  selected,
  onChange,
}: IFilterProps) {
  return (
    <div
      style={{ width: `${modalWidth}px` }}
      className={`absolute left-0 mt-2 z-50 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/20`}
    >
      <div
        className="grid gap-y-2 gap-x-6 text-center"
        style={{ gridTemplateColumns: `repeat(${gridCols},minmax(0,1fr))` }}
      >
        {options.map((d) => {
          const id = `department-${d}`;
          const checked = selected.includes(d);
          return (
            <label
              key={d}
              htmlFor={id}
              className="flex items-center gap-2 py-2 justify-start w-full cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  const next = selected.includes(d)
                    ? selected.filter((x) => x !== d)
                    : [...selected, d];
                  onChange(next);
                }}
                className="h-5 w-5 accent-royal "
                style={{
                  width: "16px",
                  height: "16px",
                  minWidth: "16px",
                  minHeight: "16px",
                }}
              />
              <span className="whitespace-nowrap">{d}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
