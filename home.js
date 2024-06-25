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

document.addEventListener('DOMContentLoaded', function () {
    const movingText = document.getElementById('movingText');
    const movingElement = document.getElementById('movingElement');
    const mainElement = document.querySelector('main');

    function getRandomPosition() {
        const mainRect = mainElement.getBoundingClientRect();
        const maxX = mainRect.width - movingElement.clientWidth;
        const maxY = mainRect.height - movingElement.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        return { x: randomX, y: randomY };
    }

    movingElement.addEventListener('mouseover', () => {
        const newPosition = getRandomPosition();
        movingElement.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    });

    movingText.addEventListener('click', () => {
        console.log('Click event fired!');
        alert('You clicked the moving text!');
    });

    movingElement.addEventListener('click', () => {
        console.log('CLick event fired!');
        alert('You clicked the moving element!');
    });

    setInterval(() => {
        const newPosition = getRandomPosition();
        movingText.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }, 2000);
});

