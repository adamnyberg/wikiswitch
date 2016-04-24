window.addEventListener("keydown", function(e){
  if(e.altKey && e.keyCode == 83) {
    href = document.querySelector(".interwiki-sv a")
    if (!href) {
      href = document.querySelector(".interwiki-en a")
    }
    window.location.href = href;
  }
});
