# Block Previews - Images d'Illustration des Composants

Ce dossier contient les images de prévisualisation des blocs Payload CMS pour l'interface d'administration.

## 📁 Structure du Dossier

```
/public/block-previews/
├── README.md                 # Ce fichier
├── INSTRUCTIONS.md          # Guide détaillé d'implémentation
├── blocks-list.md           # Liste complète des 19 blocs à illustrer
├── accordion.png            # (À créer)
├── tabs.png                 # (À créer)
├── stepper.png              # (À créer)
└── ... (16 autres images)   # (À créer)
```

## 🎯 Objectif

Permettre aux utilisateurs de l'admin Payload CMS de voir une prévisualisation visuelle de chaque bloc avant de l'ajouter à leur page.

## 🚀 Ce qui a été fait

### ✅ Infrastructure mise en place

1. **Dossier créé** : `/public/block-previews/`
2. **Composant React** : `/src/components/BlockPreview/Component.tsx`
   - Affiche les images de prévisualisation dans l'admin
   - Style automatique (padding, border, shadow)
3. **Documentation complète** :
   - `blocks-list.md` : Liste des 19 blocs avec descriptions
   - `INSTRUCTIONS.md` : Guide pas à pas pour implémenter
   - `/src/components/BlockPreview/README.md` : Doc du composant

### ✅ Exemples implémentés

4 blocs ont été configurés comme exemples :

- **Accordion** (`/src/blocks/Accordion/config.ts`)
- **Stepper** (`/src/blocks/Stepper/config.ts`)
- **Icons Box** (`/src/blocks/IconsBox/config.ts`)
- **Banner** (`/src/blocks/Banner/config.ts`)

Ces blocs afficheront leur image de prévisualisation dès que vous créerez les fichiers PNG correspondants.

## 📝 Prochaines Étapes

### 1. Créer les images

Pour chaque bloc listé dans `blocks-list.md`, créez une image de prévisualisation :

**Spécifications :**
- Format : PNG ou JPG
- Dimensions : 800x450px (ratio 16:9)
- Poids : < 200KB
- Nommage : Utilisez le slug du bloc (ex: `accordion.png`)

**Méthodes suggérées :**
- Capture d'écran du frontend avec le bloc en action
- Mockup dans Figma/Sketch/Photoshop
- Illustration simplifiée du layout du bloc

### 2. Appliquer le pattern aux autres blocs

Consultez `INSTRUCTIONS.md` pour le code exact à copier-coller dans chaque fichier `config.ts`.

**Blocs restants à configurer (15)** :
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

## 📚 Fichiers de Documentation

| Fichier | Description |
|---------|-------------|
| `README.md` | Vue d'ensemble (ce fichier) |
| `INSTRUCTIONS.md` | Guide d'implémentation détaillé avec code copy-paste |
| `blocks-list.md` | Liste complète des 19 blocs avec descriptions |
| `/src/components/BlockPreview/README.md` | Documentation du composant React |

## 🔧 Utilisation

Une fois les images créées et les configs modifiés :

1. Redémarrez le serveur : `npm run dev`
2. Ouvrez l'admin : `http://localhost:3000/admin`
3. Créez ou éditez une page
4. Ajoutez un bloc : l'image de prévisualisation s'affiche automatiquement

## 💡 Exemple de Code

Voici comment un bloc est configuré :

```typescript
export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlock',
  admin: {
    description: {
      path: '@/components/BlockPreview/Component#BlockPreview',
      clientProps: {
        imagePath: '/block-previews/accordion.png',
        altText: 'Accordion - Système d\'accordéon avec items dépliables',
      },
    },
  },
  fields: [
    // ... vos champs
  ],
}
```

## 🎨 Convention de Nommage

| Slug du Bloc | Nom du Fichier |
|--------------|----------------|
| `accordion` | `accordion.png` |
| `stepper` | `stepper.png` |
| `iconsBox` | `icons-box.png` |
| `fwBanner` | `fw-banner.png` |
| `priceList` | `price-list.png` |
| `titleFigureLong` | `title-figure-long.png` |
| etc. | (voir blocks-list.md) |

**Règle :** CamelCase → kebab-case

## 📊 Progression

**Infrastructure :** 100% ✅
**Exemples :** 4/19 blocs (21%) ⏳
**Images créées :** 0/19 (0%) ⏳

## ❓ Questions Fréquentes

### Où placer les images ?

Directement dans ce dossier : `/public/block-previews/`

### Quel format utiliser ?

PNG pour les illustrations/mockups, JPG pour les captures d'écran réelles.

### Dois-je redémarrer le serveur ?

Oui, après avoir modifié les fichiers `config.ts`. Non, si vous ajoutez juste de nouvelles images.

### L'image ne s'affiche pas ?

Vérifiez :
1. Le fichier existe dans `/public/block-previews/`
2. Le nom correspond exactement (sensible à la casse)
3. Le chemin dans `imagePath` commence par `/block-previews/`

## 🔗 Liens Utiles

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Composant BlockPreview](/src/components/BlockPreview/)
- [Liste des blocs](./blocks-list.md)
- [Instructions d'implémentation](./INSTRUCTIONS.md)

---

**Créé le :** 2025-12-05
**Dernière mise à jour :** 2025-12-05
**Auteur :** Claude Code
