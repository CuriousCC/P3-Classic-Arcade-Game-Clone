
class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 200;
        this.y = 400;
        this.speed = 200;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.xBorder = this.x > 500;
        this.yBorder = this.y <= 0;
        
        
        // function checkCollisions() { //code adapted from MDN: https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection
            for (let enemy of allEnemies) {
                if (player.x < enemy.x+enemy.width &&
                    player.x + player.width > enemy.x &&
                    player.y < enemy.y + enemy.height &&
                    player.height + player.y > enemy.y){
                        return true;
                        alert("collided");
                    } 
                else {
                    return false;
                }
            }
        // }   
        }
    
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-boy.png';
        this.height = 75;
        this.width = 50;
    }

    render() {
        super.render();
    }

    update(dt) {
        super.update();
        // if(this.yBorder){
        //     this.y = 400;
        // }
        //check for win/////////////////
    }

    handleInput(keyPressed) {
        if (keyPressed == 'left') {
            this.x = this.x -= 56;
            if (this.x <= 0) {
                this.x = 0;
            }
        } else if (keyPressed == 'up') {
            this.y = this.y -= 43;
            if (this.y <= 10) {
                this.x = 200;
                this.y = 400;
            }
        } else if (keyPressed == 'right') {
            this.x = this.x += 56;
            if (this.x >= 400) {
                this.x = 400;
            }
        } else if (keyPressed == 'down') {
            this.y = this.y += 43;
            if (this.y >= 400) {
                this.y = 400;
            }
        }
    }
}

const player = new Player;

function resetPlayerPos(player) {
    this.x = 200;
    this.y = 400;
}
class Enemy extends Entity {
    constructor(x, y, speed) {
        super();
        this.sprite += "enemy-bug.png";
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 75;
    }

    update(dt) {
        super.update();
        if (this.xBorder) {
            this.x = -10;
        } else {
            this.x += dt * this.speed;
        }
    }

    render() {
        super.render();
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy(-175, 60, 100);
const enemy2 = new Enemy(-100, 150, 20);
const enemy3 = new Enemy(-300, 230, 15);
const allEnemies = [enemy1, enemy2, enemy3];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
