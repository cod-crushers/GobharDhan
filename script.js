document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const adminID = document.getElementById('adminID').value;
    const password = document.getElementById('password').value;

    const correctAdminID = "Admin";  // Correct Admin ID
    const correctPassword = "Strong@123";  // Correct Password

    if (adminID === correctAdminID && password === correctPassword) {
        window.location.href = "dashboard.html";  // Redirect to another page on success
    } else {
        document.getElementById('error-msg').innerText = "Invalid Admin ID or Password!";
    }
});

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMqb8QVIk2JA4whwQzqK3iByhlz_cyKfQ",
  authDomain: "gobarshakti.firebaseapp.com",
  projectId: "gobarshakti",
  storageBucket: "gobarshakti.firebasestorage.app",
  messagingSenderId: "30357776390",
  appId: "1:30357776390:web:8a0c74e5eb5e2dc4b1bb87",
  measurementId: "G-2F8CRHDMBV"
};

