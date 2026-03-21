const list = document.querySelectorAll(".list");

list.forEach((item) =>
  item.addEventListener("click", function (e) {
    list.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
  }),
);
