import React from "react";
import { visibleFilters } from "../redux/actions/ListActions";
const FilterBtns = (props) => {
    let filter = props.visibilityFilter;
    const setFilter = (filter) => {
        props.changeFilter(filter);
    };
    return (
        <div>
            <div className="flex justify-around  mb-4">
                <button
                    className={`px-4 py-2 mr-2 rounded ${
                        filter === visibleFilters.SHOW_ALL
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                    }`}
                    onClick={() => setFilter(visibleFilters.SHOW_ALL)}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 mr-2 rounded ${
                        filter === visibleFilters.SHOW_COMPLETED
                            ? "bg-green-500 text-white"
                            : "bg-gray-200"
                    }`}
                    onClick={() => setFilter(visibleFilters.SHOW_COMPLETED)}
                >
                    Completed
                </button>
                <button
                    className={`px-4 py-2 rounded ${
                        filter === visibleFilters.SHOW_ACTIVE
                            ? "bg-yellow-500 text-white"
                            : "bg-gray-200"
                    }`}
                    onClick={() => setFilter(visibleFilters.SHOW_ACTIVE)}
                >
                    Active
                </button>
            </div>
        </div>
    );
};

export default FilterBtns;
