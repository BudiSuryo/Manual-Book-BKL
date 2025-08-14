rchbconsole.log("validateLogin triggered");
console.log("Tombol diklik");
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
  const keyword = document.getElementById("searchButton").addEventListener("click", jumpToKeyword).value.toLowerCase();
  if (!keyword) return;

  // Bersihkan highlight sebelumnya
  const allElements = document.querySelectorAll("p, li, div, span");
  allElements.forEach(el => el.style.backgroundColor = "");

  let firstMatch = null;

  allElements.forEach(el => {
    if (el.textContent.toLowerCase().includes(keyword)) {
      el.style.backgroundColor = "#ffff99"; // highlight
      if (!firstMatch) firstMatch = el;
    }
  });

  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  let matchCount = 0;
allElements.forEach(el => {
  if (el.textContent.toLowerCase().includes(keyword)) {
    el.style.backgroundColor = "#ffff99";
    if (!firstMatch) firstMatch = el;
    matchCount++;
  }
});
console.log(`Ditemukan ${matchCount} elemen yang cocok.`);
}
