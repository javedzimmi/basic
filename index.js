const h1 = document.getElementById("h1");
const img = document.getElementById("img");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const inputText = document.getElementById("inputtext").value;
    const inputImg = document.getElementById("imgurl").value;

    if (inputText) {
        h1.textContent = inputText;
    }

    if (inputImg) {
        img.src = inputImg;
    }
});