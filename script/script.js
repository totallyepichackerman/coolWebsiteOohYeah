let pageCount = 3;
let currentPage = 0;
let pages;

let pageCountEl = document.getElementById('total-pages');
let pageNumberEl = document.getElementById('current-page');

initializePages();

function initializePages() {
    pages = document.getElementsByClassName('page');
    pageCountEl.textContent = pageCount;
}

function nextPage() {
    if(currentPage + 1 >= pageCount)
        return;

    pages[currentPage].classList.toggle('hidden');
    
    currentPage++;

    pages[currentPage].classList.toggle('hidden');
    pageNumberEl.textContent = currentPage + 1;
}

function prevPage() {
    if(currentPage - 1 < 0)
        return;

    pages[currentPage].classList.toggle('hidden');
    
    currentPage--;
    
    pages[currentPage].classList.toggle('hidden');
    pageNumberEl.textContent = currentPage + 1;
}

function toggleNav() {
    let navbar = document.getElementById('sidebar-nav');
    navbar.classList.toggle('sidebar-shown');
}

function toggleNose() {
    let nose = document.getElementById('clown-nose');
    nose.classList.toggle('nose-shown');
}