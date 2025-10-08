const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tokyo.jpg") {
    myImage.setAttribute("src", "images/cityscape.jpg");
  } else {
    myImage.setAttribute("src", "images/tokyo.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(attempts = 0) {
  // Prevent infinite recursion
  if (attempts > 10) {
    console.warn("Too many attempts to set username");
    return;
  }
  
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName || myName.trim() === "") {
    setUserName(attempts + 1);
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};