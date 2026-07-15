/**
 * Extrae los últimos 4 dígitos numéricos al final de una cadena de texto.
 * @param texto Cadena de la cual extraer los dígitos.
 * @returns Los últimos 4 dígitos o una cadena vacía si no se encuentran.
 */
export function extraerUltimosDigitos(texto: string): string {
    const match = texto.match(/\d{4}$/);
    return match ? match[0] : '';
}
