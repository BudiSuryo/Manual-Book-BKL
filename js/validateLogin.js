// validateLogin.js
const passwords = {
    "pages/dir-bisnis.html": "1234",
    "pages/dir-ops.html": "1234",
    "pages/kasir.html": "1234",
    "pages/tabungan.html": "1234",
    "pages/kolektor.html": "1234",
    "pages/adm_kredit.html": "1234",
    "pages/analis.html": "1234",
    "pages/audit.html": "1234",
    "pages/gm_marketing.html": "1234",
    "pages/gm_ops.html": "1234",
    "pages/hrd.html": "1234",
    "pages/ka_back_office.html": "1234",
    "pages/kabag_kredit.html": "1234",
    "pages/kacab.html": "1234",
    "pages/legal.html": "1234",
    "pages/untukteshtml.html": "1111"
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
