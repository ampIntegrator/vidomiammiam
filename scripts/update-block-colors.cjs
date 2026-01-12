/**
 * Script qui met à jour tous les fichiers de config de blocs
 * pour utiliser getColorFieldOptions() au lieu des options hardcodées
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const blocksDir = path.resolve(__dirname, '../src/blocks')

// Pattern des options de couleurs hardcodées à remplacer
const colorOptionsPattern = /options:\s*\[\s*\{\s*label:\s*['"]Primary \(Blue\)['"],\s*value:\s*['"]primary['"]\s*\},[\s\S]*?\{\s*label:\s*['"]Info['"],\s*value:\s*['"]info['"]\s*\},?\s*\]/g

const files = [
  'Accordion/config.ts',
  'BoxedImage/config.ts',
  'FigureOnTop/config.ts',
  'FWBanner/config.ts',
  'FWImage/config.ts',
  'IconsBox/config.ts',
  'PriceList/config.ts',
  'Stepper/config.ts',
  'Tabs/config.ts',
  'TextImageContainer/config.ts',
  'TitleFigureLong/config.ts',
  'TitleTextNoBoxing/config.ts',
  'TitleWithSeparator/config.ts',
]

let updatedCount = 0

files.forEach(file => {
  const filePath = path.join(blocksDir, file)

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`)
    return
  }

  let content = fs.readFileSync(filePath, 'utf-8')
  const originalContent = content

  // Ajouter l'import si pas déjà présent
  if (!content.includes('getColorFieldOptions')) {
    content = content.replace(
      /import type { Block } from 'payload'/,
      `import type { Block } from 'payload'\nimport { getColorFieldOptions } from '@/config/colors'`
    )
  }

  // Remplacer les options hardcodées par getColorFieldOptions()
  content = content.replace(colorOptionsPattern, 'options: getColorFieldOptions()')

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content)
    updatedCount++
    console.log(`✅ Updated: ${file}`)
  } else {
    console.log(`⏭️  Skipped (no changes needed): ${file}`)
  }
})

console.log(`\n🎉 Updated ${updatedCount} file(s)`)
