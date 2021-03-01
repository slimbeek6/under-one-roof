import React, { createContext, useReducer, useContext } from "react";
import { use } from "../../../routes/apiRoutes";
import {
    ADD_EXPENSE,
    UPDATE_EXPENSE,
    DELETE_EXPENSE,
    GET_EXPENSES
} from "./actions";

const StoreContext = createContext();
const {Provider} = StoreContext;

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

const StoreProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        expenses: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };