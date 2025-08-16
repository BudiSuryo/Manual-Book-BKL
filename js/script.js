document.addEventListener("DOMContentLoaded", function () {
    const headingDropdown = document.getElementById("headingDropdown");
    const headings = document.querySelectorAll("#textContent h3");

    // 🔹 Buat opsi dropdown otomatis dari setiap <h3>
    headings.forEach(h3 => {
        let option = document.createElement("option");
        option.value = h3.id;
        option.textContent = h3.textContent;
        headingDropdown.appendChild(option);
    });

    // 🔹 Saat dropdown berubah
    headingDropdown.addEventListener("change", function () {
        let selected = headingDropdown.value;

        headings.forEach(h3 => {
            let section = h3.closest("section");
            section.style.display = "block";
            section.classList.remove("highlight");

            if (selected && h3.id !== selected) {
                section.style.display = "none";
            }

            if (selected && h3.id === selected) {
                section.classList.add("highlight");
            }
        });
    });
});
