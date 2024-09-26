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
  addUsersToLocalStorage([
    {
      firstname: 'Rurushu',
      lastname: 'Ranperuji',
      email: 'rurushu@test.com',
      phone: '09123456789',
      username: 'admin',
      password: 'admin',
    },
    {
      firstname: 'Jaydon',
      lastname: 'Frankie',
      email: 'demo@test.cc',
      phone: '09123456789',
      username: 'demo',
      password: 'demo',
    },
  ]);
}
