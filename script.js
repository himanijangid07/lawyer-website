window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader-block").style.visibility = "visible";
    } else {
        document.querySelector(".loader-block").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

function openAccident() {
  let open = document.getElementById("accident");
  let close = document.getElementById("health");
  let close1 = document.getElementById("insurance");
  close.style.display = "none";
  close1.style.display = "none";
  open.style.display = "flex";
}

function openHealth() {
  let open = document.getElementById("accident");
  let close = document.getElementById("health");
  let close1 = document.getElementById("insurance");
  close1.style.display = "none";
  open.style.display = "none";
  close.style.display = "flex";
}

function openInsurance() {
  let open = document.getElementById("accident");
  let close = document.getElementById("health");
  let close1 = document.getElementById("insurance");
  close.style.display = "none";
  open.style.display = "none";
  close1.style.display = "flex";
}