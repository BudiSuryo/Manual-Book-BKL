<script>
function scrollToHeading(selectedId) {
  if (selectedId) {
    document.getElementById(selectedId).scrollIntoView({
      behavior: "smooth"
    });
  }
}
</script>
