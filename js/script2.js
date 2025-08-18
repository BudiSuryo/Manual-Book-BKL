// ======================
// Scroll ke heading + highlight
// ======================
function scrollToHeading(selectedId) {
  if (!selectedId) return;

  const target = document.getElementById(selectedId);
  if (!target) return;

  // Scroll halus
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  // Hapus highlight sebelumnya
  const prev = document.querySelector(".highlight");
  if (prev) prev.classList.remove("highlight");

  // Tambahkan highlight ke target
  target.classList.add("highlight");

  // Hilangkan highlight setelah 5 detik (opsional)
  setTimeout(() => target.classList.remove("highlight"), 5000);
}

// Ekspos ke global (dipakai oleh onchange di <select>)
window.scrollToHeading = scrollToHeading;


// ======================
/* Generate Dropdown TOC otomatis dari semua <h3 id="..."> */
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("headingDropdown");
  if (!dropdown) return; // kalau dropdown nggak ada, skip

  // Ambil semua h3 yang punya id, hanya di dalam .content
  const headings = document.querySelectorAll(".content h3[id]");

  // Bersihkan option lama kecuali default "-- Daftar Isi --"
  dropdown.querySelectorAll("option:not([value=''])").forEach(opt => opt.remove());

  // Tambahkan option sesuai h3
  headings.forEach(h3 => {
    const option = document.createElement("option");
    option.value = h3.id;
    option.textContent = h3.textContent.trim();
    dropdown.appendChild(option);
  });
});
