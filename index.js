/*

*** Render Application ***

*/

function handleInput() {
  var username = $('#username').val();
  var password = $('#password').val();
  if (username) {
    initialState = { ...initialState, username: username };
  }
  if (password) {
    initialState = { ...initialState, password: password };
  }
}

function renderApplication(container) {
  var loading = false;
  var viewUser = getUrlParameter('view');

  var checkUser = findByMatchingProperties(initialState.users, {
    username: viewUser,
  });

  var fullName =
    initialState.userProfile?.firstname +
    ' ' +
    initialState.userProfile?.lastname;
  var selectedUser = {
    fullname: checkUser[0]?.firstname + ' ' + checkUser[0]?.lastname,
    username: checkUser[0]?.username,
    email: checkUser[0]?.email,
    phone: checkUser[0]?.phone,
  };

  const render = () => {
    initialState.userProfile === null
      ? $(container).html(`
          <div class="d-flex flex-column min-vh-100 min-vw-100 text-center">
              <div class="d-flex flex-grow-1 justify-content-center align-items-center">
                  <div class="card col-4">
                      <div class="card-body">
                          <h3>Login</h3><hr/>
                          <form>
                              <div class="mb-3">
                                  <input
                                  class="form-control"
                                  type="text"
                                  id="username"
                                  placeholder="Username"
                                  oninput="handleInput()"
                                  />
                              </div>
                              <div class="mb-3">
                                  <input
                                  class="form-control"
                                  type="password"
                                  id="password"
                                  placeholder="Password"
                                  oninput="handleInput()"
                                  />
                              </div>
                              <div class="mb-3">
                                  <button
                                  class="btn btn-primary ${
                                    loading && 'disabled'
                                  }"
                                  type="button"
                                  id="login"
                                  >
                              ${loading ? 'Logging in...' : 'Login'}
                              </button>
                              </div>
                              <a href="register.html">Register</a>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        `)
      : $(container).html(`
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">JQuery </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">${fullName}</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-danger ${
                              loading && 'disabled'
                            }" id="logout" type="button">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <input
                                    class="form-control"
                                    type="text"
                                    id="firstname"
                                    placeholder="First Name"
                                    oninput="handleInput()"
                                    value="${checkUser[0]?.firstname ?? ''}"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                    class="form-control"
                                    type="text"
                                    id="lastname"
                                    placeholder="Last Name"
                                    oninput="handleInput()"
                                    value="${checkUser[0]?.lastname ?? ''}"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                    class="form-control"
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    oninput="handleInput()"
                                    value="${checkUser[0]?.email ?? ''}"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                    class="form-control"
                                    type="text"
                                    id="phone"
                                    placeholder="Phone"
                                    oninput="handleInput()"
                                    value="${checkUser[0]?.phone ?? ''}"
                                    />
                                </div>
                                <div class="mb-3">
                                    <input
                                    class="form-control"
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    oninput="handleInput()"
                                    value="${checkUser[0]?.username ?? ''}"
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-3">
            <h2>List of Users</h2>
                <table id="users" class="table">
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>

                <div class="card col-4 ${
                  checkUser[0] === undefined && 'd-none'
                }">
                    <div class="card-body">
                    <h5 class="card-title">${selectedUser.fullname}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        @${selectedUser.username}
                    </h6>
                    <p class="card-text">
                        Email: ${selectedUser.email ?? 'Email not available'}
                    </p>
                    <p class="card-text">
                        Contact: ${
                          selectedUser.phone ?? 'Contact not available'
                        }
                    </p>
                    <button class="btn btn-primary card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>
                     <button class="btn btn-danger card-link">
                        Delete
                    </button>
                    <a href="./index.html" class="btn btn-warning card-link">
                        Close
                    </a>
                    </div>
                </div>
            </div>
            `);

    // Add event listeners
    $('#view').on('click', () => {
      initialState = { ...initialState, viewUser: {} };
      render();
    });

    $('#logout').on('click', () => {
      loading = true;
      render();
      console.log(loading);
      removeUserFromLocalStorage();
      toastr.success(`Logged out!`);
      setTimeout(function () {
        location.reload();
        loading = false;
      }, 1500);
    });

    $('#login').on('click', () => {
      if (initialState.username === '') {
        toastr.error('Please input your username');
        return;
      }

      if (initialState.password === '') {
        toastr.error('Please input your password');
        return;
      }

      var matchUser = findByMatchingProperties(initialState.users, {
        username: initialState.username,
        password: initialState.password,
      });

      if (matchUser.length > 0) {
        loading = true;
        render();
        toastr.success(`Welcome, ${matchUser[0].firstname}`);

        addUserToLocalStorage(matchUser[0]);
        setTimeout(function () {
          location.reload();
        }, 3000);
      } else {
        toastr.error('Incorrect username or password');
      }
    });

    $('#users').DataTable({
      data: initialState.users,
      columns: [
        {
          data: 'firstname',
        },
        { data: 'lastname' },
        { data: 'username' },
        {
          data: null,
          render: (data) =>
            `<a href="?view=${data.username}" class="btn btn-sm btn-primary" id="view">View</a>`,
        },
      ],
    });
  };

  render(); // Initial render
}
