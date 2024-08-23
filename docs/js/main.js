// Helper function to animate the scroll
function smoothScroll(targetElement, duration) {
    let targetPosition = targetElement.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
}

// Listen for click events on anchor links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const duration = 800; // Duration in milliseconds

        smoothScroll(targetElement, duration);
    });
});

function toggleMenu() {
  let navBar= document.getElementById("navbar");
  let navItem= document.getElementById("nav");
  let profileTitle= document.getElementById("title");
  let hamburgercointainer= document.getElementById("hamburger-container-id");
  let navItems = document.getElementById("nav");
  if (navItems.className === "nav-items") {
      navItems.className += " active";
      profileTitle.style.display ="none";
      navBar.style.flexDirection="column";
      navBar.style.justifyContent="center";
      navBar.style.alignItems="center";
      hamburgercointainer.style.justifyContent="flex-end"
  } else { 
      navItems.className = "nav-items";
      profileTitle.removeAttribute('style');
      navBar.style.flexDirection="row";
      navBar.style.justifyContent="space-around";
      navBar.style.alignItems="center";
      hamburgercointainer.removeAttribute('style');
  }
}

//nav bacbground change event
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const navbar = document.querySelector('#navbar');
  let navItem= document.getElementById("nav");
  body.addEventListener('scroll', () => {
    // if (navbar.scrollTop>0) {
    //   navBar.style.background='transparent';
    //   navItem.style.background='#8F8D8D';
    // }
    if (body.scrollTop >= 40) {
        navbar.style.background = '#8F8D8D';
        navbar.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow='';
    }
  });
});

function onClear(){
    var email_id=document.getElementById("email-id");
    var email_text=document.getElementById("email-text");
    var emails = email_id.value.split(';'); // Assuming emails are separated by semicolons
    var allEmailsValid = emails.every(function(email) {
        return validateEmail(email.trim()); // Check each email
    });
    
    if (!allEmailsValid) {
        // Handle invalid email
        email_id.value=('Invalid email');
        // You can also manipulate the DOM to show an error message
    } else {
        // All emails are valid
        email_id.value="";
        email_text.value="";
    }
}
    

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }