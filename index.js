var toggleitm=document.querySelector(".navbar-toggle-itm");
function menu(){
    toggleitm.style.left="0";
}
function menuclose(){
    toggleitm.style.left="-60%";
}
function sendMessage() {
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
}