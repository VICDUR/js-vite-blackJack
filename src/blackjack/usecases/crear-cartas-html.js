/**
 * Crea la imagen de la carta sobre el navegador
 * @param {String} carta 
 * @param {HTMLElement} divCartasPlayers Elemento de HTML donde se añadira la imagen
 * @returns {HTMLImageElement} imagen de retorno 
 */

export const crearCartasHtml = ( carta )=>{

    if ( !carta ) throw new Error(`La carta es un orgumento obligatorio`);

    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta;
        
};



