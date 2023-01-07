const mediaQuery = window.matchMedia('(min-width: 600px)');
const imgplusdes = document.getElementsByClassName('desc-plus-image')  ; 
console.log(imgplusdes)


const qaBox = document.getElementsByClassName("qa-box");
const home = document.getElementById("home");
for (let i = 0; i < qaBox.length; i++) {
  const openBtn = document.getElementById(`add${i}`);
  const closeBtn = document.getElementById(`close${i}`);
  const ans = document.getElementById(`ans${i}`);
  openBtn.addEventListener("click", () => {
    ans.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    ans.style.animation = "ch-open 0.11199999955s";
  });
  closeBtn.addEventListener("click", () => {
    ans.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  });
}
const sheet = document.getElementById("sheetmode");
const modebtn = document.getElementById("bgmode");
modebtn.addEventListener("click", () => {
  if (modebtn.innerHTML == "☀️") {
    sheet.setAttribute("href", "lightmode.css");
    modebtn.innerHTML = "🌙";
  } else {
    sheet.setAttribute("href", "style.css");
    modebtn.innerHTML = "☀️";
  }
});
//////////////////////////////////////////////////////////////
var d = new Date();
var hr = d.getHours();
console.log(hr);
if (hr >= 19 && hr<=24 || hr>=0 && hr<=4) {
  sheet.setAttribute("href", "style.css");
  modebtn.innerHTML = "☀️";
  
} else{
  sheet.setAttribute("href", "lightmode.css");
  modebtn.innerHTML = "🌙";
}
///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////