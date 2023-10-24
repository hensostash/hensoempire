var blocker = false;
var blocker2 = false;
window.addEventListener('scroll', () => {
  const hensoEmpire = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const header = document.getElementById("header");
  const headertext = document.getElementById("headertext");
  const headertab1 = document.getElementById("headertab1");
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
  if(scrollPosition >= 310) {
    header.style.display = "block";
    header.classList.add("headerAnimIn");
  } else {
    headertext.style.display = "none";
    headertext.classList.remove("fade-in");
    header.style.display = "none";
    header.classList.remove("fade-in");
  }
  if(scrollPosition >= 500) {
    headertext.style.display = "block";
    headertext.classList.add("fade-in");
  }
  if(scrollPosition>=900) {
    headertab1.style.display = "block";
    headertab1.classList.add("fade-in");
  }
});

const textElement = document.getElementById('textfirst');
const scrollOffset = 50; // Adjust the offset as needed

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
