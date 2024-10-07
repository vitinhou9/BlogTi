
// evento de cliques >>>>
document.addEventListener('DOMContentLoaded', () => {
    function adicionarContadorDeCliques(linkId, displayId) {
        let contador = localStorage.getItem(`contador-${linkId}`) ||0;
        const link = document.querySelector(`[data-id='${linkId}']`);
        const contadorDisplay = document.getElementById(`contador-${displayId}`);
        
        contadorDisplay.textContent = contador;

        link.addEventListener('click', (event) => {
            contador++;
            localStorage.setItem(`contador-${linkId}`,contador);
            contadorDisplay.textContent = contador;
        });
    }
   
// filtro de categorias >>>>
function filtrarCards(categoria){
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if(categoria === 'all' || card.classList.contains(categoria)){
            card.classList.add('show');
        }else{
            card.classList.remove('show');
        }
    });

}
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const categoria = link.getAttribute('data-category');

            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            filtrarCards(categoria);

        });
     });

     document.querySelectorAll('.contadorLink').forEach(link => {
        const linkId = link.getAttribute('data-id');
        adicionarContadorDeCliques(linkId, linkId);
    });
});
