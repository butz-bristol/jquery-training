/*

*** Render Application ***

*/

function renderApplication(container) {
  let count = 0; // Local state

  const render = () => {
    $(container).html(`
        <div class="d-flex flex-column min-vh-100 min-vw-100 text-center">
           <div class="d-flex flex-grow-1 justify-content-center align-items-center">
                <div class="card col-4"">
                    <div class="card-body">
                        <h3>Register</h3><hr/>
                        <form>
                            <div class="mb-3">
                                <input
                                class="form-control"
                                type="text"
                                id="firstname"
                                placeholder="First Name"
                                oninput="handleInput()"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                class="form-control"
                                type="text"
                                id="lastname"
                                placeholder="Last Name"
                                oninput="handleInput()"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                class="form-control"
                                type="text"
                                id="email"
                                placeholder="Email"
                                oninput="handleInput()"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                class="form-control"
                                type="text"
                                id="phone"
                                placeholder="Phone"
                                oninput="handleInput()"
                                />
                            </div>
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
                                class="btn btn-primary"
                                type="button"
                                id="register"
                                >
                            Create Account
                            </button>
                            </div>
                            <a href="index.html">Go to Login</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `);

    // Add event listeners
    $('#register').on('click', () => {
      if (initialState.firstname === '') {
        toastr.error('Please input your first name');

        return;
      }
      if (initialState.username === '') {
        toastr.error('Please input your last name');

        return;
      }
      if (initialState.username === '') {
        toastr.error('Please input your username');

        return;
      }

      if (initialState.password === '') {
        toastr.error('Please input your password');
        return;
      }
      render();
      toastr.success('Account has been created!');
      initialState.users.push({
        firstname: initialState.firstname,
        lastname: initialState.lastname,
        email: initialState.email,
        phone: initialState.phone,
        username: initialState.username,
        password: initialState.password,
      });
      addUsersToLocalStorage(initialState.users);
    });
  };

  render(); // Initial render
}
