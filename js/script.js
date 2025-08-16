document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const textContent = document.getElementById("textContent");

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escape karakter regex
    }

    searchButton.addEventListener("click", function () {
        let input = searchInput.value.trim();
        let content = textContent.innerHTML;

        if (input) {
            // Hapus highlight lama
            let cleanText = content.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");

            // Escape dulu input biar aman
            let safeInput = escapeRegExp(input);

            // Regex pencarian (case-insensitive)
            let regex = new RegExp("(" + safeInput + ")", "gi");

            // Tambahkan highlight
            let newText = cleanText.replace(regex, '<span class="highlight">$1</span>');

            textContent.innerHTML = newText;
        }
    });
});
