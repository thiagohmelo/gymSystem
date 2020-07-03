//LOGICA PARA pagina fiar marcada no menu

const currentPage = location.pathname
const menuItens = document.querySelectorAll('header .links a')


for (item of menuItens) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}





















// MODAL EXAMPLE
// const modalOverlay = document.querySelector('.modal-overlay')
// const cards = document.querySelectorAll('.card')

// for (let card of cards) {
//     card.addEventListener('click', function() {
//         const videoId = card.getAttribute('id')
//         window.location.href = `/video?id=${videoId}` 
//     } )
// }



