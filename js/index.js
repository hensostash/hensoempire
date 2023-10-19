window.addEventListener('scroll', () => {
    const hensoEmpire = document.getElementById('hensoEmpire');
    const additionalText = document.getElementById('additionalText');
    const boogieBomb = document.getElementById("boogieBomb");
    const headertab1 = document.getElementById("headertab1");
    const headertext = document.getElementById("headertext");
    const first_block = document.getElementById("first_block");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
        additionalText.classList.remove("fade-out");
        additionalText.classList.add("fade-in");
    } else {
        additionalText.style.display = 'none';
        hensoEmpire.style.display = "block";
        
        
    }
    if(scrollPosition > 100) {
        boogieBomb.style.display = 'block';
        boogieBomb.classList.remove("fade-outsize");
        boogieBomb.classList.add("fade-insize");
    } else {
        boogieBomb.classList.remove("fade-insize");
        boogieBomb.classList.add("fade-outsize");
    }
    if(scrollPosition>=200) {
        document.getElementById("header").style.display = "flex";
        document.getElementById("header").classList.remove("fade-outsize");
        document.getElementById("header").classList.add("fade-insize");
    } else {
        document.getElementById("header").classList.remove("fade-insize");
        document.getElementById("header").classList.add("fade-outsize");
    }
    if(scrollPosition>=350) {
        hensoEmpire.classList.remove("fade-in");
        hensoEmpire.classList.add("fade-out");
        headertext.style.display = "block";
        headertext.classList.remove("fade-out");
        headertext.classList.add("fade-in");
        
    } else {
        
        headertext.classList.remove("fade-in");
        headertext.classList.add("fade-out");
        hensoEmpire.classList.remove("fade-out");
        hensoEmpire.classList.add("fade-in");
    }
    if(scrollPosition>=400) {
        additionalText.classList.remove("fade-in");
        additionalText.classList.add("fade-out");
        headertab1.style.display = "block";
        headertab1.classList.remove("fade-out");
        headertab1.classList.add("fade-in");
    } else {
        headertab1.classList.remove('fade-in');
        headertab1.classList.add('fade-out');
        additionalText.style.display = "block";
    }
    if(scrollPosition>=450) {
        document.getElementById("first_block").style.display = "block";
        document.getElementById("first_block").classList.remove("fade-out");
        document.getElementById("first_block").classList.add("fade-in");
    } else {
    }
    if(scrollPosition>=480) {
        document.getElementById("test").style.display = "block";
        document.getElementById("test").classList.remove("fade-out");
        document.getElementById("test").classList.add("fade-in");
    } else {
    }
    if(scrollPosition>=485) {
        document.getElementById("breaker").style.display = "block";
        document.getElementById("breaker").classList.remove("fade-out");
        document.getElementById("breaker").classList.add("fade-in");
    } else {
    }
    if(scrollPosition>=490) {
        document.getElementById("textfield").style.display = "block";
        document.getElementById("textfield").classList.remove("fade-out");
        document.getElementById("textfield").classList.add("fade-in");
    } else {
       // document.getElementById("textfield").classList.remove("fade-in");
       // document.getElementById("textfieldc").classList.add("fade-out");
    }
    if(scrollPosition>=1100) {
        document.getElementById("second_block").style.display = "block";
        document.getElementById("second_block").classList.remove("fade-out");
        document.getElementById("second_block").classList.add("fade-in");
        document.getElementById("imageSecondBlock").style.display ="block";
        document.getElementById("imageSecondBlock").classList.remove("fade-out");
        document.getElementById("imageSecondBlock").classList.add("fade-in");
    } else {
        
    }
    if(scrollPosition>=1200) {
        document.getElementById("imageSecondBlock").classList.remove("fade-in");
        document.getElementById("imageSecondBlock").classList.add("addScaleHower");

    }
});