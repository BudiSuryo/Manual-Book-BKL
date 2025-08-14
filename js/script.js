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

function jumpToKeyword() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  if (!keyword) return;

  // Cari semua elemen teks (bisa disesuaikan: p, li, div, span, dll)
  const elements = document.querySelectorAll("p, li, div, span");

  for (let el of elements) {
    if (el.textContent.toLowerCase().includes(keyword)) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.backgroundColor = "#ffff99"; // highlight sementara
      setTimeout(() => el.style.backgroundColor = "", 2000); // hilangkan highlight
      break; // lompat ke elemen pertama saja
    }
  }
}
