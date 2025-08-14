function validateLogin() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  const credentials = {
    kasir: "kasir123",
    tabungan: "tabungan123",
    kolektor: "kolektor123"
  };

  if (password === credentials[role]) {
    window.location.href = `pages/${role}.html`;
    return false;
  } else {
    alert("Password salah!");
    return false;
  }
}