// import { useStoreContext } from "../../Utils/CamperState"
// import { CREATE_CAMPER } from "../../Utils/actions"
// import API from "../../Utils/api"

// function CreateCamperForm() {
//     const [state, dispatch] = useStoreContext();
// }

const handleSubmit = e => {
  e.preventDefault();
  dispatch({ type: CREATE_CAMPER });
  API.savePost({
    camperFirstName: current.value,
    camperLastName: current.value,
    nickname: current.value,
    birthday: current.value,
    grade: current.value,
    shirtsize: current.value,
    allergies: current.value,
    dietaryNeeds: current.value,
  })

    .then(result => {
      dispatch({
        type: CREATE_CAMPER,
        post: result.data,
      });
    })
    .catch(err => console.log(err));
};
