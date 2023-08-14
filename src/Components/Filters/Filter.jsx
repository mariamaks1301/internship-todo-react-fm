import React from "react";
import ResetApp from "../Reset/ResetApp";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/reducers/filter";

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className="todo__filters">
            <div className="todo__filter">5 items left</div>
            <div className="todo__filter-row">
                <p
                    className="todo__filter todo__filter-all"
                    onClick={() => {
                        dispatch(changeFilter("all"));
                    }}
                >
                    All
                </p>
                <p
                    className="todo__filter todo__filter-active"
                    onClick={() => dispatch(changeFilter("active"))}
                >
                    Active
                </p>
                <p
                    className="todo__filter todo__filter-completed"
                    onClick={() => dispatch(changeFilter("completed"))}
                >
                    Completed
                </p>
            </div>
            <div className="todo__filter">
                <ResetApp />
            </div>
        </div>
    );
};

export default Filter;
