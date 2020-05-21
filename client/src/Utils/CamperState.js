import React, { createContext, useReducer, useContext } from "react";
import {
    FIND_BY_ID,
    CREATE_CAMPER,
    UPDATE_CAMPER,
} from "./actions";

const StoreCamper = createContext();
const { CamperInfo } = StoreCamper;

const reducer = (state, action) => {
    switch (action.type) {
       
        case CREATE_CAMPER:
            return {
                ...state,
                posts: [...action.posts],
                loading: false
            };
        
        case UPDATE_CAMPER:
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

const StoreCamper= ({ value = [], ...props }) => {
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

    return <CamperInfo value={[state, dispatch]} {...props} />;
};

const useStoreCamper = () => {
    return useContext(CamperInfo);
};

export { StoreCamper, useStoreCamper };
