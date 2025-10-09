interface IFilterProps {
  modalWidth: number;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
}

export default function DepartmentFilter({
  modalWidth,
  options,
  selected,
  onChange,
}: IFilterProps) {
  return (
    <div
      style={{ width: `${modalWidth}px` }}
      className={`absolute left-0 mt-2 z-50 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-white/20`}
    >
      <div className="grid grid-cols-3 gap-y-2 gap-x-6 text-center">
        {options.map((d) => {
          const id = `department-${d}`;
          const checked = selected.includes(d);
          return (
            <label
              key={d}
              htmlFor={id}
              className="flex items-center gap-1 px-3 py-2 justify-center"
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
                className="h-5 w-5 accent-royal"
                style={{
                  minWidth: "1rem",
                  minHeight: "1rem",
                }}
              />
              <span>{d}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
