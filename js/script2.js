// Generate Dropdown TOC otomatis dari semua <h3 id="...">
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("headingDropdown");
  if (!dropdown) return; // kalau dropdown nggak ada, skip

  // cari semua h3 di dalam .content
  const headings = document.querySelectorAll(".content h3[id]");

  // hapus option lama kecuali yang default
  dropdown.querySelectorAll("option:not([value=''])").forEach(opt => opt.remove());

  // isi option otomatis
  headings.forEach(h3 => {
    const option = document.createElement("option");
    option.value = h3.id;
    option.textContent = h3.textContent;
    dropdown.appendChild(option);
  });
});


// scroll halus ke heading
      target.scrollIntoView({ behavior: "smooth" });

      // hapus highlight sebelumnya (jika ada)
      const previous = document.querySelector(".highlight");
      if (previous) previous.classList.remove("highlight");

      // tambahkan highlight ke target
      target.classList.add("highlight");

      // opsional: hilangkan highlight setelah beberapa detik
      setTimeout(() => {
        target.classList.remove("highlight");
      }, 5000); // 5 detik
    }
  }
}

// pastikan fungsi bisa diakses global (untuk onchange di <select>)
window.scrollToHeading = scrollToHeading;
