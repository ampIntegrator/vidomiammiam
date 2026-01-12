# Instructions - Ajouter des Prévisualisations aux Blocs

Ce guide vous explique comment ajouter des images de prévisualisation à tous vos blocs Payload CMS.

## 🎯 Objectif

Afficher une image de prévisualisation dans l'admin Payload CMS lorsqu'un utilisateur sélectionne un bloc pour construire une page.

## 📋 Étapes

### Étape 1 : Créer les images de prévisualisation

1. Consultez le fichier `blocks-list.md` dans ce dossier pour voir la liste complète des 19 blocs
2. Pour chaque bloc, créez une capture d'écran ou une illustration du rendu final
3. Enregistrez l'image dans ce dossier avec le nom indiqué dans `blocks-list.md`

**Spécifications des images :**
- Format : PNG ou JPG
- Dimensions recommandées : 800x450px (ratio 16:9)
- Poids : < 200KB
- Nommage : Utilisez le slug du bloc (ex: `accordion.png`, `stepper.png`)

### Étape 2 : Modifier les fichiers config.ts

Pour chaque bloc dans `/src/blocks/[NomDuBloc]/config.ts`, ajoutez la section `admin` avec le composant BlockPreview :

#### Template à copier

```typescript
import type { Block } from 'payload'

export const [NomDuBloc]: Block = {
  slug: '[slugDuBloc]',
  interfaceName: '[NomDuBloc]Block',
  admin: {
    description: {
      path: '@/components/BlockPreview/Component#BlockPreview',
      clientProps: {
        imagePath: '/block-previews/[nom-du-fichier].png',
        altText: '[NomDuBloc] preview - [Description du bloc]',
      },
    },
  },
  fields: [
    // ... vos champs existants
  ],
  labels: {
    // ... vos labels existants
  },
}
```

#### Exemple concret (Accordion)

**Avant :**
```typescript
export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlock',
  fields: [
    // ... fields
  ],
  labels: {
    plural: 'Accordions',
    singular: 'Accordion',
  },
}
```

**Après :**
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

### Étape 3 : Vérifier dans l'admin

1. Redémarrez le serveur si nécessaire : `npm run dev`
2. Ouvrez l'admin Payload : `http://localhost:3000/admin`
3. Créez ou modifiez une page
4. Ajoutez un bloc : vous devriez voir l'image de prévisualisation s'afficher

## 📝 Guide rapide par bloc

Voici le code exact à ajouter pour chaque bloc (section `admin` uniquement) :

### 1. Accordion
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/accordion.png',
      altText: 'Accordion - Système d\'accordéon avec items dépliables',
    },
  },
},
```

### 2. Tabs
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/tabs.png',
      altText: 'Tabs - Onglets horizontaux avec contenu dépliable',
    },
  },
},
```

### 3. Stepper
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/stepper.png',
      altText: 'Stepper - Liste numérotée d\'étapes',
    },
  },
},
```

### 4. Price List
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/price-list.png',
      altText: 'Price List - Cartes de prix avec features',
    },
  },
},
```

### 5. FWBanner
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/fw-banner.png',
      altText: 'Full Width Banner - Bannière pleine largeur',
    },
  },
},
```

### 6. FWImage
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/fw-image.png',
      altText: 'Full Width Image - Image pleine largeur avec citation',
    },
  },
},
```

### 7. Boxed Image
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/boxed-image.png',
      altText: 'Boxed Image - Image encadrée avec citation',
    },
  },
},
```

### 8. Title Figure Long
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/title-figure-long.png',
      altText: 'Title Figure Long - Blocs avec numérotation',
    },
  },
},
```

### 9. Figure On Top
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/figure-on-top.png',
      altText: 'Figure On Top - Items avec figure/badge en haut',
    },
  },
},
```

### 10. Title Text No Boxing
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/title-text-no-boxing.png',
      altText: 'Title Text No Boxing - Titre avec séparateur',
    },
  },
},
```

### 11. Title With Separator
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/title-with-separator.png',
      altText: 'Title With Separator - Titre avec séparateur coloré',
    },
  },
},
```

### 12. Text Image Container
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/text-image-container.png',
      altText: 'Text Image Container - Conteneur texte et image',
    },
  },
},
```

### 13. Icons Box
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/icons-box.png',
      altText: 'Icons Box - Items avec icône, titre et description',
    },
  },
},
```

### 14. Banner
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/banner.png',
      altText: 'Banner - Bannière d\'alerte colorée',
    },
  },
},
```

### 15. Colored Quote
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/colored-quote.png',
      altText: 'Colored Quote - Citation avec rich text',
    },
  },
},
```

### 16. Call to Action
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/cta.png',
      altText: 'Call to Action - Bloc CTA avec boutons',
    },
  },
},
```

### 17. Code Block
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/code.png',
      altText: 'Code Block - Bloc de code avec coloration syntaxique',
    },
  },
},
```

### 18. Media Block
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/media-block.png',
      altText: 'Media Block - Bloc média avec caption',
    },
  },
},
```

### 19. Related Posts
```typescript
admin: {
  description: {
    path: '@/components/BlockPreview/Component#BlockPreview',
    clientProps: {
      imagePath: '/block-previews/related-posts.png',
      altText: 'Related Posts - Affichage de posts reliés',
    },
  },
},
```

## ✅ Checklist de progression

Cochez au fur et à mesure que vous ajoutez les previews :

**Images créées :**
- [ ] accordion.png
- [ ] tabs.png
- [ ] stepper.png
- [ ] price-list.png
- [ ] fw-banner.png
- [ ] fw-image.png
- [ ] boxed-image.png
- [ ] title-figure-long.png
- [ ] figure-on-top.png
- [ ] title-text-no-boxing.png
- [ ] title-with-separator.png
- [ ] text-image-container.png
- [ ] icons-box.png
- [ ] banner.png
- [ ] colored-quote.png
- [ ] cta.png
- [ ] code.png
- [ ] media-block.png
- [ ] related-posts.png

**Configs modifiés :**
- [x] Accordion
- [x] Stepper
- [x] Icons Box
- [x] Banner
- [ ] Tabs
- [ ] Price List
- [ ] FWBanner
- [ ] FWImage
- [ ] Boxed Image
- [ ] Title Figure Long
- [ ] Figure On Top
- [ ] Title Text No Boxing
- [ ] Title With Separator
- [ ] Text Image Container
- [ ] Colored Quote
- [ ] Call to Action
- [ ] Code Block
- [ ] Media Block
- [ ] Related Posts

## 🔧 Dépannage

### L'image ne s'affiche pas

1. Vérifiez que l'image existe bien dans `/public/block-previews/`
2. Vérifiez le nom du fichier (sensible à la casse)
3. Redémarrez le serveur : `npm run dev`
4. Videz le cache du navigateur

### Erreur TypeScript

Si vous avez une erreur TypeScript, vérifiez que :
- La syntaxe est correcte
- Les accolades sont bien fermées
- Vous n'avez pas de virgule manquante

### L'image est trop grande

Optimisez votre image :
- Réduisez les dimensions à 800x450px
- Compressez avec un outil comme TinyPNG
- Utilisez le format JPG pour les photos, PNG pour les illustrations

## 📚 Ressources

- Composant BlockPreview : `/src/components/BlockPreview/`
- Documentation du composant : `/src/components/BlockPreview/README.md`
- Liste des blocs : `/public/block-previews/blocks-list.md`

---

**Dernière mise à jour :** 2025-12-05
