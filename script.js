/* Canvas */
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

/* End of Canvas */

/* Gravity */

const gravity = .5;

/* End of Gravity */

/* Player */
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

const player = new Player();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

/* End of Player */

/* Animation Function */

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();

    if (keys.right.pressed) {
        player.velocity.x = 5
    } else if (keys.left.pressed) {
        player.velocity.x = -5
    } else player.velocity.x = 0;
}

animate();

/* End of Animation Function */

/* Player Movement */

addEventListener('keydown', ({ keyCode }) => {
    /*  console.log(keyCode); */

    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = true;
            break;
        case 37:
            console.log('left');
            keys.left.pressed = true;
            break;

        case 68:
            console.log('right');
            keys.right.pressed = true;
            break;
        case 39:
            console.log('right');
            keys.right.pressed = true;
            break;

        case 87:
            console.log('up');
            player.velocity.y -= 20;
            break;
        case 38:
            console.log('up');
            player.velocity.y -= 20;
            break;

        case 83:
            console.log('down');
            break;
        case 40:
            console.log('down');
            break;


        case 32:
            console.log('jump');
            break;
    }
    console.log(keys.right.pressed)
})

addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode);

    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = false;
            break;
        case 37:
            console.log('left');
            keys.left.pressed = false;
            break;

        case 68:
            console.log('right');
            keys.right.pressed = false;
            break;
        case 39:
            console.log('right');
            keys.right.pressed = false;
            break;

        case 87:
            console.log('up');
            player.velocity.y = 0;
            break;
        case 38:
            console.log('up');
            player.velocity.y = 0;
            break;

        case 83:
            console.log('down');
            break;
        case 40:
            console.log('down');
            break;


        case 32:
            console.log('jump');
            break;
    }
    console.log(keys.right.pressed)
})


/* End of Player Movement */

