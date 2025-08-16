document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("headingDropdown");
    const headings = document.querySelectorAll("#textContent h3");

    headings.forEach((heading, index) => {
        // kalau <h3> belum ada id, buat otomatis
        if (!heading.id) {
            heading.id = "heading-" + (index + 1);
        }

        // buat <option> untuk dropdown
        const option = document.createElement("option");
        option.value = heading.id;
        option.textContent = heading.textContent;
        dropdown.appendChild(option);
    });

    // ketika user pilih heading, langsung scroll
    dropdown.addEventListener("change", function () {
        const selectedId = this.value;
        if (selectedId) {
            document.getElementById(selectedId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
