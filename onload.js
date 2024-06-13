const box = document.querySelector(".hero-product");

let transform = 0;

setInterval(() => {
  if (transform == 700) {
    transform = 0;
  }
  box.style.transform = `translatex(-${transform}%)`;
  transform += 100;
  console.log(transform);
}, 2000);
