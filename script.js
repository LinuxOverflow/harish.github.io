
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const message = document.getElementById("message");
const subject = document.getElementById("subject");
let email = document.getElementById("email");



document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById("name");
    //                     name.value="";
    //                     email.value="";
    //                     subject.value="";
    //                     message.value="";
    // alert('Thank you for your message! I will get back to you soon.');
    const last = document.getElementById("last");
    last.classList = "last2";

    // if (name.value.trim().length < 3) {
    //     last.innerText = "Name must be at least 3 characters.";
    //     name.focus();
    //     return;
    // }

     if (
        name.value.trim() === "" &&
        email.value.trim() === "" &&
        subject.value.trim() === "" &&
        message.value.trim() === ""
    ) {
        last.innerHTML = "Please fill all fields.";
        setTimeout(() => {
        last.remove();

        window.location.reload();
    }, 4000);
        return;
    }

    if (name.value.trim() === "") {
        last.innerHTML = "Name cannot be empty.";
        name.focus();
        return;
    }
    if (email.value.trim() === "") {
        last.innerHTML = "Email cannot be empty.";
        email.focus();
        return;
    }

    let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        last.innerText = "Enter a valid email address.";
        email.focus();
        return;
    }
    // if (subject.value.trim().length < 3) {
    //     last.innerText = "Subject must be at least 3 characters.";
    //     subject.focus();
    //     return;
    // }
    // if (message.value.trim().length < 10) {
    //     last.innerText = "Message must be at least 10 characters.";
    //     message.focus();
    //     return;
    // }
        // Individual empty field check
    

    

    if (subject.value.trim() === "") {
        last.innerHTML = "Subject cannot be empty.";
        subject.focus();
        return;
    }

    if (message.value.trim() === "") {
        last.innerHTML = "Message cannot be empty.";
        message.focus();
        return;
    }

     
    // If everything is valid
    last.style.color = "lime";
    last.style.border = "2px solid lime";
    last.style.boxShadow = "1px 1px 10px 5px rgba(3, 157, 3, 0.3)"

    last.innerHTML = "Message sent successfully  ✔<br> Thank you for your message! I will get back to you soon.";

    // Clear form
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";


    setTimeout(() => {
        last.remove();

        window.location.reload();
    }, 6000);
    this.reset();
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}






// let section=document.querySelector("section");
// let j=0;

// while(j<200){
//     let star=document.createElement('i');
//     let x=Math.floor(Math.random()* window.
//     innerWidth);
//     star.style.left=`${x}px`;
//     let y=Math.floor(Math.random()* window.
//     innerHeight);
//     star.style.top=`${y}px`;

//     let size=Math.random()*4;
//     star.style.width=`${1+size}px`
//     star.style.height=`${1+size}px`

//     let duration =Math.random()*2;
//     star.style.animationDuration=`${duration+1}s`

//     section.appendChild(star);
//     j++;
// }





