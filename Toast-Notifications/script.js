function showToast(message, type) {
  const box = document.getElementById("toastBox");
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  let icon = "";
  if ((type = "success")) icon = "\u2714";
  if ((type = "error")) icon = "\u274c";
  if ((type = "info")) icon = "\u2139";
  if ((type = "Warning")) icon = "\u26A0";

  toast.innerHTML = `
  <span style="font-size:22px;">${icon}</span>
  <span>${message}</span>
  `;
  box.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3200);
}
