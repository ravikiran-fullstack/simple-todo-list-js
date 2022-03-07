const inputEle = document.getElementById("item");
const list = document.querySelector(".list");

function addItem() {
  console.log(inputEle.value);
  const item = inputEle.value;
  inputEle.value = "";

  const listItem = `<li>${item}</li>`;
  list.innerHTML += listItem;
}
