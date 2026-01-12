import type { GlobalConfig } from 'payload'

export const Socials: GlobalConfig = {
  slug: 'socials',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook',
          admin: {
            placeholder: 'https://facebook.com/votre-page',
            description: 'URL de votre page Facebook',
          },
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter / X',
          admin: {
            placeholder: 'https://twitter.com/votre-compte',
            description: 'URL de votre profil Twitter/X',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram',
          admin: {
            placeholder: 'https://instagram.com/votre-compte',
            description: 'URL de votre profil Instagram',
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn',
          admin: {
            placeholder: 'https://linkedin.com/company/votre-entreprise',
            description: 'URL de votre page LinkedIn',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'youtube',
          type: 'text',
          label: 'YouTube',
          admin: {
            placeholder: 'https://youtube.com/@votre-chaine',
            description: 'URL de votre chaîne YouTube',
          },
        },
        {
          name: 'tiktok',
          type: 'text',
          label: 'TikTok',
          admin: {
            placeholder: 'https://tiktok.com/@votre-compte',
            description: 'URL de votre profil TikTok',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'whatsapp',
          type: 'text',
          label: 'WhatsApp',
          admin: {
            placeholder: 'https://wa.me/33123456789',
            description: 'Lien WhatsApp (format: https://wa.me/numero)',
          },
        },
        {
          name: 'discord',
          type: 'text',
          label: 'Discord',
          admin: {
            placeholder: 'https://discord.gg/votre-serveur',
            description: 'URL de votre serveur Discord',
          },
        },
      ],
    },
  ],
}
