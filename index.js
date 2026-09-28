const toDoSection = document.getElementById("to-do-list");
const btnAddToList = document.getElementById("add-to-list");
const listItem = document.getElementById("item");


btnAddToList.addEventListener("click", () => {
  if (listItem.value.trim() === "") return;

  toDoSection.innerHTML += `
    <li class="new-item">
      <input class="check-box" type="checkbox">
      <span class="item-text">${listItem.value}</span>
      <button class="delete-btn">
      <svg class="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48 24 48C10.7 48 0 58.7 0 72S10.7 96 24 96l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0-16.2-43.2C307.1-7.7 295.2-16 281.8-16L166.2-16zM32 144l0 304c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304-48 0 0 304c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-304-48 0zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z"/></svg>
      </button>
    </li>
  `;
  listItem.value = "";
});


toDoSection.addEventListener("click", (event) => {
  
  
  const deleteBtn = event.target.closest(".delete-btn");
  
  if (deleteBtn) {
    const li = deleteBtn.closest("li"); 
    li.remove();
    return;
  }


  if (event.target.classList.contains("check-box")) {
    const li = event.target.closest("li");
    const itemText = li.querySelector(".item-text");
    if (event.target.checked) {
      itemText.classList.add("strikethrough");
    } else {
      itemText.classList.remove("strikethrough");
    }
  }
});
