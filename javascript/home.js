// // home.js

// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('nav a');
//     const mainContent = document.querySelector('main');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             // Change the content based on the clicked link
//             const linkText = this.innerText.toLowerCase();
//             mainContent.innerHTML = `<p>${linkText} content goes here.</p>`;
//         });
//     });
// });



// document.addEventListener('DOMContentLoaded', function () {
//     const movingText = document.getElementById('movingText');
//     const movingElement = document.getElementById('movingElement');
//     const mainElement = document.querySelector('main');

//     function getRandomPosition() {
//         const mainRect = mainElement.getBoundingClientRect();
//         const maxX = mainRect.width - movingElement.clientWidth;
//         const maxY = mainRect.height - movingElement.clientHeight;
//         const randomX = Math.floor(Math.random() * maxX);
//         const randomY = Math.floor(Math.random() * maxY);
//         return { x: randomX, y: randomY };
//     }

//     movingElement.addEventListener('mouseover', () => {
//         const newPosition = getRandomPosition();
//         movingElement.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
//     });

//     movingText.addEventListener('click', () => {
//         console.log('Click event fired!');
//         alert('You clicked the moving text!');
//     });

//     movingElement.addEventListener('click', () => {
//         console.log('CLick event fired!');
//         alert('You clicked the moving element!');
//     });

//     setInterval(() => {
//         const newPosition = getRandomPosition();
//         movingText.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
//     }, 2000);
// });


// document.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const parallaxBackground = document.querySelector('.parallax-background');

//     parallaxBackground.style.transform = 'translateY(' + (scrollPosition * -(0.4)) + 'px)';
// });

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const headerTitle = document.querySelector('h1');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {

          
            event.preventDefault();
            

            const linkText = this.textContent;
            const linkHref = this.querySelector('a').href;

            const itemRect = this.getBoundingClientRect();
            const headerRect = headerTitle.getBoundingClientRect();

            const centerX = window.innerWidth / 2;

            //translation values
            const translateX = centerX - (itemRect.left + itemRect.width / 2);
            const translateY = headerRect.top - itemRect.top;

            navItems.forEach(nav => nav.classList.remove('animate'));

            this.style.transition = 'transform 0.3s ease';
            this.style.transform = `translate(${translateX}px, ${translateY}px) rotate(360deg)`;

            // headerTitle.style.transition = 'opacity 0.3s ease';
            // headerTitle.style.opacity = '0';

            // Wait for the animation to complete
            setTimeout(() => {
                // Update the H1 text
                headerTitle.textContent = linkText;

                this.style.transition = '';
                this.style.transform = '';
              

                window.location.href = linkHref;
            }, 300); 
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    var hamburger = document.querySelector('.hamburger');
  
    navToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
       
        if (hamburger.textContent == '☰') { // for opening and clsoing the nav menu on mobile or small device
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
     
        
    });
});