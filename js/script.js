var callsearchform = document.querySelector(".btn-index-search");
var searchform = document.querySelector(".index-search-form");
var arrival = document.getElementById("arrival");
var adultammount = document.getElementById("adultammount");
var childammount = document.getElementById("childammount");

var isStorageAvailable = true;
var storageadult = "";
var storagechild = "";

try {
  storageadult = localStorage.getItem("adultammount");
} catch (err) {
  isStorageAvailable = false;
}

try {
  storagechild = localStorage.getItem("childammount");
} catch (err) {
  isStorageAvailable = false;
}

callsearchform.addEventListener("click", function (evt) {
  evt.preventDefault();
  adultammount.value = storageadult;
  childammount.value = storagechild;
  if (searchform.classList.contains("show-form")) {
    searchform.classList.remove("show-form");
    searchform.classList.remove("form-error");
  } else {
    searchform.classList.add("show-form");
  }
});

searchform.addEventListener("submit", function (evt) {
  if (!arrival.value || !adultammount.value) {
    evt.preventDefault();
    searchform.classList.add("form-error");
  } else {
    if (isStorageAvailable) {
      localStorage.setItem("adultammount", adultammount.value);
      localStorage.setItem("childammount", childammount.value);
    }
  }
});