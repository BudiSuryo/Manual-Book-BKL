document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("headingDropdown");

  dropdown.addEventListener("change", function () {
    const selectedId = this.value;
    if (selectedId) {
      document.getElementById(selectedId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
