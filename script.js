const inputValue = document.querySelector("#input");

const btnSubmit = document.querySelector("button");

btnSubmit.addEventListener("click", () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue.value)) {
    inputValue.classList.remove("error");
    inputValue.classList.add("success");
    return true;
  } else {
    inputValue.classList.remove("success");
    inputValue.classList.add("error");
    return false;
  }
});
