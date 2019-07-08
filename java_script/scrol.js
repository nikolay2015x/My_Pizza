window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.visibility = "visible";
    }
    else{
        document.getElementById("myBtn").style.visibility = "hidden";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }