const fireSound = new Audio('./assets/fire.wav');
const burstSound = new Audio('./assets/burst.wav');
const powerDownSound = new Audio('./assets/powerDown.wav');

function random(min, max) {
  return Math.floor(Math.random()*(max-min+1)) + min;
}

const app = new Vue({
  el: '.wrapper',
  data() {
    return {
      score: 0,
      energy: 10,
      x: 200,
      y: 475  ,
      angle: 0,
      bullets: [],
      enemies: [],
      enemyReached: false
    }
  },
  created() {
    this.updateBullet();
    this.updateEnemy();
  },
  methods: {
    rotateClockwise() {
      this.angle -= 10;
      if (this.angle < 0) {
        this.angle = 350;
      }
    },
    rotateCounterClockwise() {
      this.angle +=10;
      if (this.angle > 360) {
        this.angle = 10;
      }
    },
    fire() {
      this.bullets.push({
        x: this.x,
        y: this.y,
        angle: this.angle + 135
      })
      fireSound.play();
    },
    outOfScreen(bullet) {
      if (this.bullets[bullet].x < 0 || this.bullets[bullet].y < 0 || this.bullets[bullet].x > 400 || this.bullets[bullet].y > 500) {
        this.bullets.splice(bullet, 1);
      }
    },
    updateBullet() {
      setInterval(() => {
        const distance = 30;
        this.bullets.forEach((bullet, i) => {
          this.outOfScreen(i);
          bullet.x += Math.sin((Math.PI / 180) * (bullet.angle + 45)) * distance
          bullet.y += Math.cos((Math.PI / 180) * (bullet.angle + 45)) * distance
        });
        this.checkCollision();
      }, 30);
    },
    checkCollision() {
      this.bullets.forEach((bullet) => {
        this.enemies.forEach((enemy, i) => {
          if (Math.abs(bullet.x - enemy.x) < (25+7.5) && Math.abs(bullet.y - enemy.y) < (25+7.5)) {
            burstSound.play();
            this.enemies.splice(i, 1);
            this.score++;
          } 
        })
      })
    },
    enemyReachedBottom() {
      this.enemies.forEach((enemy, i) => {
        if (enemy.y > 490) {
          this.enemies.splice(i, 1);
          this.enemyReached = true;
          powerDownSound.play();
          this.energy--;
          setTimeout(() => {
            this.enemyReached = false;
          }, 500);
        }
      })
    },
    updateEnemy() {
      const n = 50 / 2;
      setInterval(() => {
        this.enemies.forEach(enemy => {
          enemy.y += 2;
        });
        this.enemyReachedBottom();
      }, 30);

      setInterval(() => {
        this.enemies.push({
          x: random(n, 400 - n),
          y: 0,
          type: random(1,4),
        })
      }, 5000)
    },
    
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    app.fire();
  } else if (event.key === "a") {
    app.rotateCounterClockwise()
  } else if (event.key === "d") {
    app.rotateClockwise()
  }
  document.removeEventListener("keydown", this)
});