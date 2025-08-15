// Proteksi halaman dari akses langsung
if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html"; // kembali ke halaman login
}// script.js placeholder
