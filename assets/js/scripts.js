

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleDetails(workId) {
  const workDetails = document.getElementById(workId);
  if (workDetails.style.display === "block") {
    workDetails.style.display = "none";
  } else {
    workDetails.style.display = "block";
  }
}



function showAnimation(box) {
  const canvas = box.querySelector(".language-animation");
  const ctx = canvas.getContext("2d");
  const width = (canvas.width = canvas.offsetWidth);
  const height = (canvas.height = canvas.offsetHeight);
  let particles = [];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 5 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
    });

    requestAnimationFrame(animate);
  }

  animate();

  document
    .querySelectorAll(".language-box")
    .forEach((box) => box.classList.remove("active"));
  box.classList.add("active");
}




function showProjectDetails(project) {
  const details = project.querySelector(".project-details");
  if (details) {
    if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
      details.style.display = "block";
    } else {
      details.classList.add("hidden");
      details.style.display = "none";
    }
  }
}
