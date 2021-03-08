import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_EXPENSE,
    UPDATE_EXPENSE,
    DELETE_EXPENSE,
    GET_EXPENSES
} from "./actions";

const ExpenseContext = createContext({
    expenseName: "",
    expenseAmount: "",
    expenseDate: Date.now(),
    expenseType: "",
    paid: false,
    paidBy: "0"
});

const {Provider} = ExpenseContext;

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.expense]
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => {
                    return expense._id !== action._id;
                })
            };
        case GET_EXPENSES:
            return {
                ...state,
                expenses: [...action.expenses]
            };
        default: 
        return state;
    }
};

const ExpenseProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        expenses: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useExpenseContext = () => {
    return useContext(ExpenseContext);
};

export { ExpenseProvider, useExpenseContext };