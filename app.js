function toggleNav() {
  let drop = document.getElementById("myNav");
  if (drop.className === "nav") {
    drop.className += " responsive";
  } else {
    drop.className = "nav";
  }
}
