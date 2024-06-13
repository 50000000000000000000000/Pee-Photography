// console.log("hello world");

const loadimg = document.querySelector(".loader");

console.log(loadimg);

const all = document.querySelector(".all");

console.log(all);

setTimeout(() => {
  loadimg.classList.add("disappear");

  all.classList.remove("disappear");
}, 3000); 