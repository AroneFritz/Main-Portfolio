var canvas = document.querySelector("#wrapper-canvas");

// Set initial dimensions to window size
var dimensions = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Set canvas style to fill window
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';

// Particles.js configuration
particlesJS('wrapper-canvas', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ['#1788ae', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6']
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#1788ae',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: ['grab', 'repulse']
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// Custom cursor movement interaction
document.addEventListener('mousemove', function(event) {
  var pJSDom = window.pJSDom || [];
  if (pJSDom.length > 0) {
    var particles = pJSDom[0].pJS.particles.array;
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    particles.forEach(function(particle) {
      var dx = mouseX - particle.x;
      var dy = mouseY - particle.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 200) {
        // Calculate attraction/repulsion force
        var force = (200 - distance) / 200;
        particle.vx += dx * force * 0.05;
        particle.vy += dy * force * 0.05;

        // Limit velocity
        var speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 2) {
          particle.vx *= 2 / speed;
          particle.vy *= 2 / speed;
        }
      }
    });
  }
});

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function setWindowSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

setWindowSize();
window.addEventListener('resize', debounce(setWindowSize, 250));
