// validateLogin.js
const passwords = {
    "kasir.html": "1234",
    "tabungan.html": "1234",
    "kolektor.html": "1234",
    "adm_kredit.html": "1234",
    "analis.html": "1234",
    "audit.html": "1234",
    "gm_marketing.html": "1234",
    "gm_ops.html": "1234",
    "hrd.html": "1234",
    "ka_back_office.html": "1234",
    "kabag_kredit.html": "1234",
    "kacab.html": "1234",
    "legal.html": "1234"
};

function validateLogin() {
    const password = document.getElementById("password").value;
    const select = document.getElementById("role");
    const page = select.value;

    // Cek jika belum pilih bagian
    if (!page) {
        alert("Silakan pilih bagian!");
        return false;
    }

    // Validasi password
    if (passwords[page] && password === passwords[page]) {
        // Simpan status login
        sessionStorage.setItem("isLoggedIn", "true");

        // Tampilkan loading
        const loading = document.getElementById("loading");
        if (loading) loading.style.display = "block";

        // Redirect ke halaman
        window.location.href = page;
        return false;
    } else {
        // Tampilkan pesan error
        const errorBox = document.getElementById("errorBox");
        const errorMessage = document.getElementById("errorMessage");
        if (errorBox && errorMessage) {
            errorMessage.textContent = "Password salah!";
            errorBox.style.display = "block";
        } else {
            alert("Password salah!");
        }
        return false;
    }
}
