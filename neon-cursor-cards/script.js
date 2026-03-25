const cursor = document.querySelector(".cursor");

// Trail
const trails = [];
for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  div.classList.add("trail");
  document.body.appendChild(div);
  trails.push({ el: div, x: 0, y: 0 });
}

let mouseX = 0;
let mouseY = 0;
let color = "#00f7ff";

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

// Trail animation
function animate() {
  let x = mouseX;
  let y = mouseY;

  trails.forEach((t) => {
    t.x += (x - t.x) * 0.3;
    t.y += (y - t.y) * 0.3;

    t.el.style.left = t.x + "px";
    t.el.style.top = t.y + "px";

    t.el.style.background = color;

    x = t.x;
    y = t.y;
  });

  requestAnimationFrame(animate);
}

animate();

// Color change
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const c = card.getAttribute("data-color");
    if (c === "cyan") color = "#00f7ff";
    if (c === "pink") color = "#ff00c8";
    if (c === "green") color = "#00ff88";

    cursor.style.background = color;
    cursor.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
  });
});
