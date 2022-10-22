const chocBaseBtn = document.getElementById("chocBase");
const sugarBaseBtn = document.getElementById("sugarBase");
const peppBaseBtn = document.getElementById("peppBase");
const chocBaseImg = "./images/chocCookie.png";
const sugBaseImg = "./images/sugCookie.png";
const peppBaseImg = "./images/peppCookie.png";

function getCookieBase(imgPath) {
    const cookiePreview = document.getElementById("cookiePreviewBox");
    cookiePreview.innerHTML = '';

    const cookieImg = document.createElement("img");
    cookieImg.setAttribute("src", imgPath);
    cookieImg.classList.add("cookieImgSize");
    cookiePreview.append(cookieImg);

    console.log("cookie generated");
}

chocBaseBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getCookieBase(chocBaseImg);
});

sugarBaseBtn.addEventListener("click",  function(event) {
    event.preventDefault();
    getCookieBase(sugBaseImg)
});

peppBaseBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getCookieBase(peppBaseImg);
});