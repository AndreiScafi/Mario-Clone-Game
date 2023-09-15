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

/* End of Player */

/* Plataform */
class Plataform {
    constructor({ x, y }) {
        this.position = {
            x: x,
            y: y
        };

        this.width = 200;
        this.height = 20;
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
/* End of Plataform */

const player = new Player();
const platforms = [new Plataform({
    x: 200, y: 100
}), new Plataform({
    x: 600, y: 200
})];

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}





/* Animation Function */

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();

    platforms.forEach(platform => {
        platform.draw();
    })


    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5;
            })

        } else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5;
            })
        }
    }

    //Platform collision detection:
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0;
        }
    })
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

