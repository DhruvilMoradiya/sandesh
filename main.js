let all = document.querySelectorAll(".leftScrollEpaper > a > .epaper-news-img");
let link = document.querySelector(".list");
console.log(link);
// let links = [];
for (let i = 0; i < all.length; i++) {
  let resized = all[i].currentSrc;
  resized = resized.replace("//resize-img.sandesh.com", "//");
  resized = resized.replace("s-", "");
  let a = document.createElement("a");
  a.text = `Page - ${i + 1}`;
  a.href = resized;
  link.appendChild(a);
  //   links.push(resized);
}
// console.log(links);
