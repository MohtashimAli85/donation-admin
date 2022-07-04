import { FilterForm, FilterButton } from "react-admin";
export function ToolBar({ filters, addFilter = true }) {
  return (
    <div className="flex justify-between mt-2 mb-12 items-center px-3">
      <FilterForm filters={filters} />
      {addFilter ? (
        <div>
          <FilterButton filters={filters} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
