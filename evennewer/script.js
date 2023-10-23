window.addEventListener('scroll', () => {
  const hensoEmpire = document.getElementById('image1');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 450) {
    hensoEmpire.classList.remove("fade-out");
    hensoEmpire.classList.add("fade-in");
  } else {
    hensoEmpire.classList.remove("fade-in");
    hensoEmpire.classList.add("fade-out"); 
  }
});