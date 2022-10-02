const removeMain = document.getElementById("main");
removeMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.textContent = "Abena Adu is the champion";
console.log(newHeader.textContent);