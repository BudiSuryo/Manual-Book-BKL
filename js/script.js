function scrollToHeading(selectedId) {
  if (selectedId) {
    const target = document.getElementById(selectedId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
