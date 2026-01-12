/**
 * Retourne la classe de couleur de texte appropriée selon la couleur de fond
 * Pour les fonds clairs (white, warning), retourne 'text-dark'
 * Pour les fonds foncés, retourne 'text-white' (ou vide selon le cas)
 */
export function getTextColorClass(backgroundColor: string): string {
  const lightBackgrounds = ['white', 'warning']

  if (lightBackgrounds.includes(backgroundColor)) {
    return 'text-dark'
  }

  // Pour les autres couleurs, on peut retourner 'text-white' ou rien
  // selon ce que définit déjà le SCSS
  return ''
}
