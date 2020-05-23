import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  console.log('updatting global state:', action);
  switch (action.type) {
    case 'firstName':
    case 'lastName':
    case 'password':
    case 'email':
    case 'phoneNumber':
    case 'address':
    case 'city':
    case 'state':
    case 'zip':
    case 'camperFirstName':
    case 'camperLastName':
    case 'nickname':
    case 'birthday':
    case 'grade':
    case 'shirtsize':
    case 'allergies':
    case 'dietaryneeds':
      //takes in the name of what you want to change and the value of what you want it to be
      //ie action.type = name, action.value = kelsey
      return { ...state, [action.type]: action.value };

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const GlobalStateProvider = ({ value, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phoneNumber: '',
    camperFirstName: '',
    camperLastName: '',
    birthday: '',
    grade: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalStateProvider, useGlobalContext };

console.log(GlobalStateProvider, 'global state provider');
