document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const textContent = document.getElementById("textContent");

    searchButton.addEventListener("click", function () {
        let input = searchInput.value.trim();
        let content = textContent.innerHTML;

        if (input) {
            // Hapus highlight lama
            let cleanText = content.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");

            // Regex pencarian (case-insensitive)
            let regex = new RegExp("(" + input + ")", "gi");

            // Tambahkan highlight
            let newText = cleanText.replace(regex, '<span class="highlight">$1</span>');

            textContent.innerHTML = newText;
        }
    });
});
