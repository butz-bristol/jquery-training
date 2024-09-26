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
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};
