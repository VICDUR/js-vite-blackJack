
/**
 * Obtener el valor de la carta 
 * @param {string} carta Ejemplo: A Q J K
 * @returns {number} Valor de la carta:  10 o 11
 */

export const valorCarta = ( carta  ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
            : valor * 1;
};