const snowflakeBtn = document.getElementById("snowSprink");
const treeBtn = document.getElementById("treeSprink");
const candyBtn = document.getElementById("candySprink");
const snowflakeImg = "./assets/images/snowflakeSprink.png";
const treeImg = "./assets/images/treeSprink.png";
const candyImg = "./assets/images/candySprink.png";

function getSprinkles(imgPath) {
    const sprinkleBox = document.getElementById("sprinkleBox");
    sprinkleBox.innerHTML = '';

    const spinklesImg = document.createElement("img");
    spinklesImg.setAttribute("src", imgPath);
    spinklesImg.classList.add("sprinkleImgSize");
    sprinkleBox.append(spinklesImg);

    console.log("sprinkles generated");
}

snowflakeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getSprinkles(snowflakeImg);
});

treeBtn.addEventListener("click",  function(event) {
    event.preventDefault();
    getSprinkles(treeImg)
});

candyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getSprinkles(candyImg);
});