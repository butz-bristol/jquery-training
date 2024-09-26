/*

*** State ***

*/

var initialState = {
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  email: '',
  phone: '',
  loading: false,
  users: getUsersFromLocalStorage(),
  userProfile: getUserFromLocalStorage(),
};
console.log(initialState);

if (initialState.userProfile === null) {
  addUserToLocalStorage(null);
}
if (initialState.users?.length === 0 || initialState.users === null) {
  addUsersToLocalStorage([]);
}
