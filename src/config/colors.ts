/**
 * Configuration des couleurs - GÉNÉRÉ AUTOMATIQUEMENT depuis _variables.scss
 *
 * Pour ajouter/modifier des couleurs :
 * 1. Modifier $main-colors dans src/styles/scss/myScss/_variables.scss
 * 2. Exécuter : npm run generate:colors
 *
 * Ce fichier sera automatiquement mis à jour.
 */

import colorsData from './colors.json'

export interface ColorOption {
  value: string
  label: string
  cssVar: string
}

/**
 * Liste des couleurs disponibles dans l'application
 */
export const MAIN_COLORS: ColorOption[] = colorsData

/**
 * Génère les options de couleur pour les configs de blocs Payload
 * avec des labels plus descriptifs
 */
export function getColorFieldOptions() {
  const labelMap: Record<string, string> = {
    primary: 'Primary (Blue)',
    danger: 'Danger (Red)',
    success: 'Success (Green)',
    warning: 'Warning (Yellow)',
    teal: 'Teal',
    purple: 'Purple',
    info: 'Info',
    white: 'White',
  }

  return MAIN_COLORS.map(color => ({
    label: labelMap[color.value] || color.label,
    value: color.value,
  }))
}
