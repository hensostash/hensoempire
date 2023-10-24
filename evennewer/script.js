var blocker = false;
var blocker2 = false;
var blocker3 = false;
window.addEventListener('scroll', () => {
  const hensoEmpire = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  const header = document.getElementById("header");
  const headertext = document.getElementById("headertext");
  const headertab1 = document.getElementById("headertab1");
  const headertab2 = document.getElementById("headertab2");
  const headertab3 = document.getElementById("headertab3");
  const scrollPosition = window.scrollY;
  

  if (scrollPosition > 230) {
    if (!blocker) { // Use = for assignment, not ==
      blocker = true; // Corrected assignment
      hensoEmpire.style.display = "block";
      hensoEmpire.classList.add("fade-in");

      setTimeout(() => {
        hensoEmpire.classList.remove("fade-in");
        hensoEmpire.classList.add("addScaleHower");
      }, 2000); // Adjusted the timeout to 2000ms (2 seconds) as per your request
    }
  }
  if(scrollPosition>240) {
    document.getElementById("breakerfirst").style.display = "block";
    document.getElementById("breakerfirst").classList.add("fade-in");
  }
  if(scrollPosition>250) {
    document.getElementById("textfirst2").style.display = "block";
    document.getElementById("textfirst2").classList.add("fade-in");
  }

  if (scrollPosition > 600) {
    if (!blocker2) { // Use = for assignment, not ==
      blocker2 = true; // Corrected assignment
      image2.style.display = "block";
      image2.classList.add("fade-in");

      setTimeout(() => {
        image2.classList.remove("fade-in");
        image2.classList.add("addScaleHower");
      }, 2000); // Adjusted the timeout to 2000ms (2 seconds) as per your request
    }
  }
  if(scrollPosition>610) {
    document.getElementById("breakerfirst2").style.display = "block";
    document.getElementById("breakerfirst2").classList.add("fade-in");
  }
  if(scrollPosition>620) {
    document.getElementById("secondBlockText1").style.display = "block";
    document.getElementById("secondBlockText1").classList.add("fade-in");
  }
  if (scrollPosition > 1300) {
    if (!blocker3) { // Use = for assignment, not ==
      blocker3 = true; // Corrected assignment
      image3.style.display = "block";
      image3.classList.add("fade-in");

      setTimeout(() => {
        image3.classList.remove("fade-in");
        image3.classList.add("addScaleHower");
      }, 2000); // Adjusted the timeout to 2000ms (2 seconds) as per your request
    }
  }
  if(scrollPosition >= 310) {
    header.style.display = "block";
    header.classList.add("headerAnimIn");
  } else {
    headertext.style.display = "none";
    headertext.classList.remove("fade-in");
    header.style.display = "none";
    header.classList.remove("fade-in");
    headertab1.style.display = "none";
    headertab2.style.display = "none";
    headertab3.style.display = "none";
  }
  if(scrollPosition >= 500) {
    headertext.style.display = "block";
    headertext.classList.add("fade-in");
  }
  if(scrollPosition>=900) {
    headertab1.style.display = "block";
    headertab1.classList.remove("fade-out");
    headertab1.classList.add("fade-in");
  } else {
    headertab1.classList.remove("fade-in");
    headertab1.classList.add("fade-out");
  }
  if(scrollPosition>=1600) {
    headertab2.style.display = "block";
    headertab2.classList.remove("fade-out");
    headertab2.classList.add("fade-in");
  } else {
    headertab2.classList.remove("fade-in");
    headertab2.classList.add("fade-out");
  }
  if(scrollPosition>=2400) {
    headertab3.style.display = "block";
    headertab3.classList.remove("fade-out");
    headertab3.classList.add("fade-in");
  }
    else {
      headertab3.classList.remove("fade-in");
      headertab3.classList.add("fade-out");
    }
  
});

const textElement = document.getElementById('textfirst');
const scrollOffset = 10; // Adjust the offset as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY - scrollOffset; // Apply the offset
  const gradientValue = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

  // Ensure the gradientValue stays within the 0-100 range
  const normalizedGradientValue = Math.max(0, Math.min(100, gradientValue));

  // Calculate the background color based on the gradient value
  const backgroundColor = `linear-gradient(hsl(0 0% 98%) ${normalizedGradientValue}%, hsl(0 0% 30%))`;

  // Update the background and background-clip properties, while keeping text color transparent
  textElement.style.background = backgroundColor;
  textElement.style.webkitBackgroundClip = 'text';
  textElement.style.backgroundClip = 'text';
});

const imageElement = document.getElementById('pop-out-image');
const imageScrollOffset = 250; // Adjust the offset as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const moveValue = Math.min(500, Math.max(0, (scrollPosition - imageScrollOffset) / 10)); // Adjust the values as needed

  // Apply the transform property to move the image slightly upwards
  imageElement.style.transform = `translateY(-${moveValue}px)`;
});

const imageElement2 = document.getElementById('pop-out-image2');
const imageScrollOffset2 = 850; // Adjust the offset as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const moveValue = Math.min(500, Math.max(0, (scrollPosition - imageScrollOffset2) / 10)); // Adjust the values as needed

  // Apply the transform property to move the image slightly upwards
  imageElement2.style.transform = `translateY(-${moveValue}px)`;
});

const imageElement3 = document.getElementById('pop-out-image3');
const imageScrollOffset3 = 1300; // Adjust the offset as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const moveValue = Math.min(500, Math.max(0, (scrollPosition - imageScrollOffset3) / 10)); // Adjust the values as needed

  // Apply the transform property to move the image slightly upwards
  imageElement3.style.transform = `translateY(-${moveValue}px)`;
});




const textElement2 = document.getElementById('secondBlockText1');
const textElement3 = document.getElementById('secondBlockText2');
const scrollOffset2 = 300; // Adjust the offset as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY - scrollOffset2; // Apply the offset
  const gradientValue = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

  // Ensure the gradientValue stays within the 0-100 range
  const normalizedGradientValue = Math.max(0, Math.min(100, gradientValue));

  // Calculate the background color based on the gradient value
  const backgroundColor = `linear-gradient(hsl(0 0% 98%) ${normalizedGradientValue}%, hsl(0 0% 30%))`;

  // Update the background and background-clip properties, while keeping text color transparent
  textElement2.style.background = backgroundColor;
  textElement2.style.webkitBackgroundClip = 'text';
  textElement2.style.backgroundClip = 'text';
  textElement3.style.background = backgroundColor;
  textElement3.style.webkitBackgroundClip = 'text';
  textElement3.style.backgroundClip = 'text';
});

const textElement4 = document.getElementById('secondBlockText3');
const textElement5 = document.getElementById('secondBlockText4');
const scrollOffset3 = 300; // Adjust the offset as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY - scrollOffset3; // Apply the offset
  const gradientValue = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

  // Ensure the gradientValue stays within the 0-100 range
  const normalizedGradientValue = Math.max(0, Math.min(100, gradientValue));

  // Calculate the background color based on the gradient value
  const backgroundColor = `linear-gradient(hsl(0 0% 98%) ${normalizedGradientValue}%, hsl(0 0% 30%))`;

  // Update the background and background-clip properties, while keeping text color transparent
  textElement4.style.background = backgroundColor;
  textElement4.style.webkitBackgroundClip = 'text';
  textElement4.style.backgroundClip = 'text';
  textElement5.style.background = backgroundColor;
  textElement5.style.webkitBackgroundClip = 'text';
  textElement5.style.backgroundClip = 'text';
});


document.addEventListener('DOMContentLoaded', function() {
  const imgElement1 = document.getElementById('headertab1');
  const imgElement2 = document.getElementById('headertab2');
  const imgElement3 = document.getElementById('headertab3');
  const targetElement1 = document.getElementById('pop-out-image');
  const targetElement2 = document.getElementById('pop-out-image2');
  const targetElement3 = document.getElementById('pop-out-image3');

  imgElement1.addEventListener('click', function() {
    // Calculate the offset of the target element 1
    const offset = targetElement1.getBoundingClientRect().top + window.scrollY -200;

    // Smoothly scroll to the target element 1
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });

  imgElement2.addEventListener('click', function() {
    // Calculate the offset of the target element 2
    const offset = targetElement2.getBoundingClientRect().top + window.scrollY -200;

    // Smoothly scroll to the target element 2
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });

  imgElement3.addEventListener('click', function() {
    // Calculate the offset of the target element 3
    const offset = targetElement3.getBoundingClientRect().top + window.scrollY -200;

    // Smoothly scroll to the target element 3
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopButton = document.getElementById('scrollToTop');
  
  // Show/hide the button based on scroll position
  window.addEventListener('scroll', function() {
      if (window.scrollY > 450) {
          scrollToTopButton.style.display = 'block';
          scrollToTopButton.classList.remove("fade-out");
          scrollToTopButton.classList.add("fade-in");
      } else {
        scrollToTopButton.classList.remove("fade-in");
        scrollToTopButton.classList.add("fade-out");
      }
  });
  
  // Scroll to the top when the button is clicked
  scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

