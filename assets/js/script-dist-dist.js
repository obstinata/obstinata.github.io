for(var anchor=document.querySelector("#navbar").querySelectorAll("a"),i=0;i<anchor.length;i++)window.location.href==anchor[i].href&&anchor[i].classList.add("active"),window.location.href.indexOf("about")>-1?document.body.classList.add("about"):window.location.href.indexOf("contacts")>-1?document.body.classList.add("contacts"):document.body.classList.add("home");var btnToggleMenu=document.querySelector(".btn--toggle-menu");function toggleMenu(){document.querySelector("#navbar").classList.toggle("open-menu")}btnToggleMenu.addEventListener("click",toggleMenu);