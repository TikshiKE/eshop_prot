const goBack = document.querySelector("#go-back-id");
const INDEX_LOCATION = "./index.html";

goBack.addEventListener("click", handleGoBack);

function handleGoBack() {
  window.location.href = INDEX_LOCATION;
}
