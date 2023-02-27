import { crearCartasHtml, pedirCarta, valorCarta } from "./";

/**
 * turno de la computadora
 * @param {number} puntosMinimos  puntos del jugador que son los puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML  HTML para mostar los puntos
 * @param {HTMLElement} divCartasComputadora  HTML para mostar las cartas
 * @param {Array<string>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck = []) => {

    if (!puntosMinimos ) throw new Error ('Puntos minimos son necesarios');
    if (!puntosHTML ) throw new Error ('Argumentos PuntosHTML minimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
               
        const imgCarta = crearCartasHtml( carta );

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
};

