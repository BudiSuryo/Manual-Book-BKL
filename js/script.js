document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", function () {
        let input = searchInput.value.trim();
        if (!input) return;

        // Ambil semua <section> di dalam #textContent
        const sections = document.querySelectorAll("#textContent section");

        sections.forEach(section => {
            // Hapus highlight lama
            let cleanText = section.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");

            // Buat regex pencarian (case-insensitive)
            let regex = new RegExp("(" + input + ")", "gi");

            // Tambahkan highlight hanya di dalam section
            section.innerHTML = cleanText.replace(regex, '<span class="highlight">$1</span>');
        });
    });
});
