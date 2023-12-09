const references = {
  form: document.querySelector("[data-search]"),
  fakeList: document.querySelector("#fake-search-id"),
  fakeInput: document.querySelector(".filter-input"),
};

const { form, fakeList, fakeInput } = references;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  fakeList.classList.toggle("is-hidden");
  fakeInput.value = "";
}
