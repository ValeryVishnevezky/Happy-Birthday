
function burstConfetti() {
  confetti({
	angle: randomInRange(55, 125),
	spread: randomInRange(50, 70),
	particleCount: randomInRange(50, 100),
	origin: { y: 1 },
  });
}

function startSideConfetti(duration = 1000) {
	const end = Date.now() + duration;
	const colors = ["#add8e6", "#ffb6c1"];
  
	function frame() {
	  confetti({
		particleCount: 2,
		angle: 60,
		spread: 55,
		origin: { x: 0 },
		colors: colors,
	  });
  
	  confetti({
		particleCount: 2,
		angle: 120,
		spread: 55,
		origin: { x: 1 },
		colors: colors,
	  });
  
	  if (Date.now() < end) {
		requestAnimationFrame(frame);
	  }
	}
  
	frame();
  }


function startConfetti(duration = 3000) {
	const animationEnd = Date.now() + duration
	const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
	const interval = setInterval(function () {
		const timeLeft = animationEnd - Date.now()
		if (timeLeft <= 0) {
			clearInterval(interval)
			return
		}
		const particleCount = 50 * (timeLeft / duration)
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			})
		)
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			})
		)
	}, 250)
}
