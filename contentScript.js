document.getElementById("read-content").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    function printTitle() {
      let all = document.querySelectorAll(
        ".leftScrollEpaper > a > .epaper-news-img"
      );
      let links = [];
      for (let i = 0; i < all.length; i++) {
        let resized = all[i].currentSrc;
        resized = resized.replace("//resize-img.sandesh.com", "//");
        resized = resized.replace("s-", "");
        links.push(resized);
      }
      const body = document.getElementsByTagName("body")[0];
      body.innerHTML = "";
      let list = document.createElement("div");
      for (let j = 0; j < links.length; j++) {
        // const element = links[j];
        let a = document.createElement("img");
        let br = document.createElement("br");
        a.text = `Page - ${j + 1}`;
        a.src = links[j];
        list.appendChild(a);
        list.appendChild(br);
      }
      body.appendChild(list);
      console.log(links);
    }

    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        // files: ["main.js"], // To call external file instead
        func: printTitle,
      })
      .then(() => console.log("Injected a function!"));
  });
});
