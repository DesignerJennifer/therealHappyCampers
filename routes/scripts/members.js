let currentUser;
let currentUserSavedData;

$.get("/api/user_data").then(function(data) {
    currentUser = data.id;
  });
  