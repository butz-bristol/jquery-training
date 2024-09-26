/*

*** Functions ***

*/

function addUserToLocalStorage(userProfile) {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function removeUserFromLocalStorage() {
  localStorage.setItem('userProfile', JSON.stringify(null));
}

function getUserFromLocalStorage() {
  const result = localStorage.getItem('userProfile');
  const userProfile = result ? JSON.parse(result) : null;
  return userProfile;
}

function addUsersToLocalStorage(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getUsersFromLocalStorage() {
  const result = localStorage.getItem('users');
  const users = result ? JSON.parse(result) : null;
  return users;
}

function findByMatchingProperties(users, properties) {
  return users.filter(function (entry) {
    return Object.keys(properties).every(function (key) {
      return entry[key] === properties[key];
    });
  });
}

function handleInput() {
  var firstname = $('#firstname').val();
  var lastname = $('#lastname').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var username = $('#username').val();
  var password = $('#password').val();
  if (firstname) {
    initialState = { ...initialState, firstname: firstname };
  }
  if (lastname) {
    initialState = { ...initialState, lastname: lastname };
  }
  if (email) {
    initialState = { ...initialState, email: email };
  }
  if (phone) {
    initialState = { ...initialState, phone: phone };
  }
  if (username) {
    initialState = { ...initialState, username: username };
  }
  if (password) {
    initialState = { ...initialState, password: password };
  }
  console.log(initialState);
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-center',
  preventDuplicates: true,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '3000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};
