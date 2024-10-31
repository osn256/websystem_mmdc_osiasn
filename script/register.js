function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password match the specified credentials
    if (email === "osias@mmdc.com.ph" && password === "1234") {
      window.location.href = "index.html"; // Redirect to index.html
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }

  // Add event listener to the login button
  document.getElementById('loginButton').addEventListener('click', validateLogin);