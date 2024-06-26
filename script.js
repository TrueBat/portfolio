function stars() {
    let numDots = 0.8 * window.innerWidth; // Number of dots equal to the width of the screen
    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement('div');
        dot.className = 'dot';
        let size = Math.random() * 3; // Random size up to 3px
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        let initialTop = Math.random() * 100;
        let initialLeft = Math.random() * 100;
        dot.style.top = `${initialTop}vh`;
        dot.style.left = `${initialLeft}vw`;
        dot.style.animationDelay = `${Math.random() * 5}s`; // Add a random delay
        document.body.appendChild(dot);

        let angle = 0;
        let radius = Math.random() * 3; // Radius of the circular path (1 to 3 pixels)
        let speed = Math.random() * 0.017; // Speed of the movement

        function moveDot() {
            let x = initialLeft + radius * Math.cos(angle);
            let y = initialTop + radius * Math.sin(angle);
            dot.style.left = `${x}vw`;
            dot.style.top = `${y}vh`;
            angle += speed;
            requestAnimationFrame(moveDot);
        }

        moveDot();
    }
}

window.onload = () => {
    stars();
    document.getElementById('menu-button').addEventListener('click', function () {
        var nav = document.getElementById('navbar');
        if (nav.style.right === '-100%') {
            nav.style.right = '0';
        } else {
            nav.style.right = '-100%';
        }
    });
};
