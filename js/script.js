console.log("validateLogin triggered");
console.log("Tombol diklik");
function validateLogin() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  const credentials = {
    kasir: "1234",
    tabungan: "1234",
    kolektor: "1234",
    adm_kredit: "1234",
    analis: "1234",
    audit: "1234",
    gm_marketing: "1234",
    gm_ops: "1234",
    hrd: "1234",
    ka_back_office: "1234",
    kabag_kredit: "1234",
    kacab: "1234",
    legal: "1234"    
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

// PASANG EVENT LISTENER SEKALI SAJA DI LUAR FUNCTION
// ASSUMSI: Input pencarian punya id="searchInput", tombol cari id="searchButton"
document.getElementById("searchButton").addEventListener("click", jumpToKeyword);

function jumpToKeyword() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  if (!keyword) return;

  // Bersihkan highlight sebelumnya
  const allElements = document.querySelectorAll("p, li, div, span");
  allElements.forEach(el => el.style.backgroundColor = "");

  let firstMatch = null;
  let matchCount = 0;

  allElements.forEach(el => {
    if (el.textContent.toLowerCase().includes(keyword)) {
      el.style.backgroundColor = "#ffff99"; // highlight
      if (!firstMatch) firstMatch = el;
      matchCount++;
    }
  });

  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  console.log(`Ditemukan ${matchCount} elemen yang cocok.`);
}
