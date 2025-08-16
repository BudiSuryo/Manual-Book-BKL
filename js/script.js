function scrollToHeading(selectedId) {
  if (selectedId) {
    const target = document.getElementById(selectedId);
    if (target) {
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
      }, 2000); // 2 detik
    }
  }
}

// pastikan fungsi bisa diakses global (untuk onchange di <select>)
window.scrollToHeading = scrollToHeading;
