import React, { createContext, useReducer, useContext } from "react";
import {
    FIND_BY_ID,
    CREATE_USER,
    UPDATE_USER,
} from "./actions";

const StoreUSER = createContext();
const { USERInfo } = StoreUSER;

const reducer = (state, action) => {
    switch (action.type) {
       
        case CREATE_USER:
            return {
                ...state,
                posts: [...action.posts],
                loading: false
            };
        
        case UPDATE_USER:
            return {
                ...state,
                posts: [...action.posts],
                loading: false
            };
        
        case FIND_BY_ID:
            return {
                ...state,
                posts: [...action.posts],
                loading: false
            };

        default:
            return state;
    }
};

const StoreUSER= ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        posts: [],
        currentPost: {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        },
    });

    return <USERInfo value={[state, dispatch]} {...props} />;
};

const useStoreUSER = () => {
    return useContext(USERInfo);
};

export { StoreUSER, useStoreUSER };
