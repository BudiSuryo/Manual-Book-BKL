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
    var password = document.getElementById("password").value;
    var select = document.getElementById("role");
    var page = select.value;

    if (!page) {
        alert("Silakan pilih bagian!");
        return false;
    }

    if (passwords[page] && password === passwords[page]) {
        var loading = document.getElementById("loading");
        if (loading) loading.style.display = "block";
        window.location.href = page;
        return false;
    } else {
        var errorBox = document.getElementById("errorBox");
        var errorMessage = document.getElementById("errorMessage");
        if (errorBox && errorMessage) {
            errorMessage.textContent = "Password salah!";
            errorBox.style.display = "block";
        } else {
            alert("Password salah!");
        }
        return false;
    }
}