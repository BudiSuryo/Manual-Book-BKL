function scrollToHeading(selectedId) {
  if (selectedId) {
    const target = document.getElementById(selectedId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }
}
// pastikan global kalau script type=module atau ada bundler
window.scrollToHeading = scrollToHeading;
