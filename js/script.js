console.log("validateLogin triggered");
function validateLogin() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  const credentials = {
    kasir: "kasir123",
    tabungan: "tabungan123",
    kolektor: "kolektor123"
  };

  // Show loading
  document.getElementById("loading").style.display = "flex";

  setTimeout(() => {
    if (password === credentials[role]) {
      window.location.href = `pages/${role}.html`;
    } else {
      showError("Password salah!");
    }

    // Hide loading
    document.getElementById("loading").style.display = "none";
  }, 1000); // Simulasi delay 1 detik

  return false;
}

function showError(message) {
  const errorBox = document.getElementById("errorBox");
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = message;
  errorBox.style.display = "block";

  setTimeout(() => {
    errorBox.style.display = "none";
  }, 3000); // Hide after 3 seconds
}
