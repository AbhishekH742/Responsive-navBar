//variables

const toggleEl = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggleEl.addEventListener('click', function(){
    // check whether the class show links is present along with links class in ul. if it is present then remove it if not add show-links class -- for that use toggle

    links.classList.toggle("show-links");
    document.querySelector('.nav-toggle').style.transform = "rotate(90deg)";



})