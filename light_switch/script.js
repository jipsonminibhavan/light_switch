const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  document.body.classList.toggle("body-dark");
  btn.classList.toggle("button-dark");

  if (document.body.classList.contains("body-dark")) {
    document.title = "Good Night!";
    btn.innerText = "Good Night!";
  } else {
    document.title = "Good Morning!";
    btn.innerText = "Good Morning!";
  }
});
