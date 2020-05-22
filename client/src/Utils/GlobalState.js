import React, { createContext, useReducer, useContext } from "react";


const GlobalContext = createContext();
const { Provider: GlobalState } = GlobalContext;

const reducer = (state, action) => {
    switch (action.type) {

        case "firstName":
        case "lastName":
        case "password":
        case "email":
        case "phoneNumber":
        case "address":
        case "city":
        case "state":
        case "zip":
        case "camperFirstName":
        case "camperLastName":
        case "nickname":
        case "birthday":
        case "grade":
        case "shirtsize":
        case "allergies":
        case "dietaryneeds":



            //takes in the name of what you want to change and the value of what you want it to be 
            //ie action.type = name, action.value = kelsey 
            return { ...state, [action.type]: action.value }

        default:
            return state
    }

    // case CREATE_USER:
    //     return {
    //         ...state,
    //         firstName: [...action.user],
    //         lastName: [...action.user],
    //         userName: [...action.user],
    //         password: [...action.user],
    //         email: [...action.user],
    //         phoneNumber: [...action.user],
    //         address: [...action.user],
    //         city: [...action.user],
    //         state: [...action.user],
    //         zip: [...action.user],
    //         camerFirstName: [...action.user],
    //         camperLastName: [...action.user],
    //         nickname: [...action.user],



    //     };

    // case UPDATE_USER:
    //     return {
    //         ...state,
    //         posts: [...action.posts],
    //         loading: false
    //     };

    //     case FIND_BY_ID:
    //         return {
    //             ...state,
    //             posts: [...action.posts],
    //             loading: false
    //         };

    //     default:
    //         return state;
    // }
};

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        camperFirstName: "",
        camperLastName: "",
        nickname: "",
        birthday: "",
        grade: "",
        shirtsize: "",
        allergies: "",
        dietaryneeds: ""
    });

    return (
        <GlobalState value={[state, dispatch]} >
            {children}
        </GlobalState>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalStateProvider, useGlobalContext };
