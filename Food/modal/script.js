const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const secondBtn = document.getElementById("insideBtn");
const secondModal = document.getElementById("myModalSecond");
const secondSpan = document.getElementsByClassName("closeSecond")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
secondBtn.onclick = function () {
  secondModal.style.display = "block";
  modal.style.display = "none";
};
secondSpan.onclick = function() {
  secondModal.style.display = "none";
  modal.style.display = "block";
};
window.onclick = function(event) {
  if (event.target == secondModal) {
    secondModal.style.display = "none";
    modal.style.display = "block";
  }
};



