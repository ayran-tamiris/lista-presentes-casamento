const btnMobile = document.getElementById('btn-menu');

function toggleMenu(event) {

    if(event.type == 'touchstart'){
        event.preventDefault();
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

let produtos = document.getElementsByClassName("pro");

[].forEach.call(produtos, (el) => {
    el.addEventListener('click', (() => {
        alert('Queridos amigos e familiares, \nAo realizar a compra do item, pedimos por gentileza que comunique aos noivos, para que o produto seja removido da lista.');
    }));
});