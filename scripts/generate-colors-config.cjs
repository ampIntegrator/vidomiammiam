/**
 * Script qui parse _variables.scss et génère colors.json
 * Ainsi, le SCSS est la seule source de vérité pour les couleurs
 */

const fs = require('fs')
const path = require('path')

const scssPath = path.resolve(__dirname, '../src/styles/scss/myScss/_variables.scss')
const outputPath = path.resolve(__dirname, '../src/config/colors.json')

try {
  // Lire le fichier SCSS
  const scssContent = fs.readFileSync(scssPath, 'utf-8')

  // Extraire la map $main-colors
  const mapRegex = /\$main-colors:\s*\(([\s\S]*?)\);/
  const match = scssContent.match(mapRegex)

  if (!match) {
    throw new Error('$main-colors map not found in _variables.scss')
  }

  const mapContent = match[1]

  // Parser les lignes de la map
  const lines = mapContent.split('\n').filter(line => line.trim() && !line.trim().startsWith('//'))

  const colors = []

  lines.forEach(line => {
    // Match: 'primary': $primary,
    const colorMatch = line.match(/['"](\w+)['"]\s*:\s*\$(\w+)/)
    if (colorMatch) {
      const [, value, varName] = colorMatch

      // Créer le label avec majuscule
      const label = value.charAt(0).toUpperCase() + value.slice(1)

      colors.push({
        value,
        label,
        cssVar: `--color-${value}`
      })
    }
  })

  // Créer le répertoire config s'il n'existe pas
  const configDir = path.dirname(outputPath)
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true })
  }

  // Écrire le fichier JSON
  fs.writeFileSync(outputPath, JSON.stringify(colors, null, 2))

  console.log(`✅ Colors config generated: ${colors.length} colors found`)
  console.log(`📁 Output: ${outputPath}`)
  colors.forEach(c => console.log(`   - ${c.value} (${c.label})`))

} catch (error) {
  console.error('❌ Error generating colors config:', error.message)
  process.exit(1)
}
