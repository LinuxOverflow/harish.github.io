
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
        const message=document.getElementById("message");
        const subject=document.getElementById("subject");
        const email=document.getElementById("email");
        const name=document.getElementById("name");

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
                                name.value="";
                                email.value="";
                                subject.value="";
                                message.value="";
            // alert('Thank you for your message! I will get back to you soon.');
            const last=document.getElementById("last");
            last.classList="last2";
            last.innerText="Thank you for your message! I will get back to you soon.";
            
                            setTimeout(() => {
                                last.remove();
                               
                                window.location.reload();
                            }, 4000);
            // this.reset();
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





  