// fudge
const fudgeFrostBtn = document.getElementById("fudgeFrost");
const fudgeFrostImg = "./assets/images/fudgeFrost.png";
//cream cheese
const ccFrostBtn = document.getElementById("creamCheeseFrost");
const ccFrostImg = "./assets/images/creamCheeseFrost.png";
//snickerdoodle 
const doodleFrostBtn = document.getElementById("doodleFrost");
const doodleFrostImg = "./assets/images/snickerdoodleFrost.png";

function getFrosting(imgPath) {
    const frostingBox = document.getElementById("frostingBox");
    frostingBox.innerHTML = '';

    const frostingImg = document.createElement("img");
    frostingImg.setAttribute("src", imgPath);
    frostingImg.classList.add("frostingImgSize");
    frostingBox.append(frostingImg);

    console.log("frosting generated");
}

fudgeFrostBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getFrosting(fudgeFrostImg);
});

ccFrostBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getFrosting(ccFrostImg);
});

doodleFrostBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getFrosting(doodleFrostImg);
});