const lst = document.querySelectorAll('.lst');
function activeLink(){
    lst.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
lst.forEach((item) =>
item.addEventListener('click', activeLink));