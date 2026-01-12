# BlockPreview Component

Composant React pour afficher des images de prévisualisation des blocs dans l'admin Payload CMS.

## Utilisation

### 1. Créer l'image de prévisualisation

Placez votre image dans `/public/block-previews/` avec le nom correspondant au slug du bloc :

```
/public/block-previews/
  ├── accordion.png
  ├── stepper.png
  ├── icons-box.png
  └── ...
```

**Format recommandé :**
- Dimensions : 800x450px (ratio 16:9)
- Format : PNG ou JPG
- Poids : < 200KB

### 2. Ajouter dans la config du bloc

Dans le fichier `config.ts` de votre bloc, ajoutez la propriété `admin.description` :

```typescript
import type { Block } from 'payload'

export const MonBloc: Block = {
  slug: 'monBloc',
  interfaceName: 'MonBlocBlock',
  admin: {
    description: {
      path: '@/components/BlockPreview/Component#BlockPreview',
      clientProps: {
        imagePath: '/block-previews/mon-bloc.png',
        altText: 'MonBloc preview - Description du bloc',
      },
    },
  },
  fields: [
    // ... vos champs
  ],
  labels: {
    plural: 'Mes Blocs',
    singular: 'Mon Bloc',
  },
}
```

### 3. Propriétés

| Propriété | Type | Requis | Description |
|-----------|------|--------|-------------|
| `imagePath` | `string` | Oui | Chemin vers l'image dans `/public/` |
| `altText` | `string` | Non | Texte alternatif pour l'accessibilité |

## Exemples

### Exemple complet

```typescript
export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlock',
  admin: {
    description: {
      path: '@/components/BlockPreview/Component#BlockPreview',
      clientProps: {
        imagePath: '/block-previews/accordion.png',
        altText: 'Accordion block preview - Système d\'accordéon avec items dépliables',
      },
    },
  },
  fields: [
    // ... fields
  ],
  labels: {
    plural: 'Accordions',
    singular: 'Accordion',
  },
}
```

## Blocs déjà configurés

Les blocs suivants ont déjà été configurés comme exemples :

- ✅ Accordion (`accordion.png`)
- ✅ Stepper (`stepper.png`)
- ✅ Icons Box (`icons-box.png`)
- ✅ Banner (`banner.png`)

## À faire

Consultez `/public/block-previews/blocks-list.md` pour la liste complète des blocs à configurer.

## Style

Le composant applique automatiquement un style avec :
- Padding et bordure légère
- Background gris clair
- Border radius
- Box shadow sur l'image
- Image responsive (max-width: 100%)

Pas besoin de CSS supplémentaire !
