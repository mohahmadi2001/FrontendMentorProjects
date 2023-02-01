let ratings = document.querySelectorAll(".circle");
let btn = document.getElementById("btn");
let rateContent = document.querySelector(".rete_content");
let thankyou = document.querySelector(".thankyou");
let span = document.getElementById("rating");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    let rate = ratings[i].innerHTML;

    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains("selected");
      ratings[i].classList.remove("selected");
    }
    ratings[i].classList.add("selected");

    btn.addEventListener("click", () => {
      rateContent.style.display = "none";
      thankyou.style.display = "block";
      span.innerHTML = rate;
    });
  });
}
