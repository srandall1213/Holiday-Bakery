const chocBaseBtn = document.getElementById("chocBase");
const sugarBaseBtn = document.getElementById("sugarBase");
const peppBaseBtn = document.getElementById("peppBase");
const chocBaseImg = "./assets/images/chocCookie.png";
const sugBaseImg = "./assets/images/sugCookie.png";
const peppBaseImg = "./assets/images/peppCookie.png";

function getCookieBase(imgPath) {
    const cookieBox = document.getElementById("cookieBox");
    cookieBox.innerHTML = '';

    const cookieImg = document.createElement("img");
    cookieImg.setAttribute("src", imgPath);
    cookieImg.classList.add("cookieImgSize");
    cookieBox.append(cookieImg);

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