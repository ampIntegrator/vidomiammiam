import type { Payload } from 'payload'

export const seedHeaderFooter = async (payload: Payload): Promise<void> => {
  payload.logger.info('— Seeding Header and Footer globals...')

  // Seed Header with 4 nav items (3 with mega menus, 1 simple)
  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [
        // 1. Services - avec mega menu (Primary - Blue)
        {
          link: {
            type: 'custom',
            url: '/services',
            label: 'Services',
            newTab: false,
          },
          hasMegaMenu: true,
          color: 'primary',
          megaMenuSlots: [
            {
              title: 'SEO & Référencement',
              links: [
                { label: 'Audit SEO', url: '/services/audit-seo' },
                { label: 'Référencement naturel', url: '/services/referencement-naturel' },
                { label: 'SEO local', url: '/services/seo-local' },
                { label: 'SEO technique', url: '/services/seo-technique' },
              ],
            },
            {
              title: 'Marketing Digital',
              links: [
                { label: 'Growth Hacking', url: '/services/growth-hacking' },
                { label: 'Marketing de contenu', url: '/services/content-marketing' },
                { label: 'Social Media', url: '/services/social-media' },
                { label: 'Email Marketing', url: '/services/email-marketing' },
              ],
            },
            {
              title: 'Développement Web',
              links: [
                { label: 'WordPress', url: '/services/wordpress' },
                { label: 'PrestaShop', url: '/services/prestashop' },
                { label: 'Magento', url: '/services/magento' },
                { label: 'Développement sur mesure', url: '/services/dev-sur-mesure' },
              ],
            },
          ],
        },
        // 2. Solutions - avec mega menu (Success - Green)
        {
          link: {
            type: 'custom',
            url: '/solutions',
            label: 'Solutions',
            newTab: false,
          },
          hasMegaMenu: true,
          color: 'success',
          megaMenuSlots: [
            {
              title: 'Par secteur',
              links: [
                { label: 'E-commerce', url: '/solutions/ecommerce' },
                { label: 'SaaS', url: '/solutions/saas' },
                { label: 'Immobilier', url: '/solutions/immobilier' },
                { label: 'Santé', url: '/solutions/sante' },
              ],
            },
            {
              title: 'Par taille',
              links: [
                { label: 'TPE/PME', url: '/solutions/tpe-pme' },
                { label: 'ETI', url: '/solutions/eti' },
                { label: 'Grandes entreprises', url: '/solutions/grandes-entreprises' },
                { label: 'Startups', url: '/solutions/startups' },
              ],
            },
            {
              title: 'Par objectif',
              links: [
                { label: 'Augmenter le trafic', url: '/solutions/augmenter-trafic' },
                { label: 'Générer des leads', url: '/solutions/generer-leads' },
                { label: 'Améliorer conversions', url: '/solutions/ameliorer-conversions' },
                { label: 'Fidéliser clients', url: '/solutions/fideliser-clients' },
              ],
            },
          ],
        },
        // 3. Ressources - avec mega menu (Danger - Red)
        {
          link: {
            type: 'custom',
            url: '/ressources',
            label: 'Ressources',
            newTab: false,
          },
          hasMegaMenu: true,
          color: 'danger',
          megaMenuSlots: [
            {
              title: 'Apprendre',
              links: [
                { label: 'Blog', url: '/posts' },
                { label: 'Guides & Tutoriels', url: '/ressources/guides' },
                { label: 'Études de cas', url: '/ressources/etudes-cas' },
                { label: 'Webinaires', url: '/ressources/webinaires' },
              ],
            },
            {
              title: 'Outils',
              links: [
                { label: 'Audit SEO gratuit', url: '/audit-form' },
                { label: 'Calculateur ROI', url: '/outils/roi-calculator' },
                { label: 'Générateur de mots-clés', url: '/outils/keyword-generator' },
                { label: 'Analyseur de performance', url: '/outils/performance-analyzer' },
              ],
            },
            {
              title: 'Support',
              links: [
                { label: 'Documentation', url: '/ressources/documentation' },
                { label: 'FAQ', url: '/ressources/faq' },
                { label: 'Centre d\'aide', url: '/ressources/help-center' },
                { label: 'Contactez-nous', url: '/contact' },
              ],
            },
          ],
        },
        // 4. À propos - simple link (no mega menu)
        {
          link: {
            type: 'custom',
            url: '/a-propos',
            label: 'À propos',
            newTab: false,
          },
          hasMegaMenu: false,
        },
      ],
      ctaButtonSuccess: {
        text: 'Audit Gratuit',
        url: '/audit-form',
      },
      ctaButtonDanger: {
        text: 'Démo',
        url: '/demo',
      },
      ctaButtonPrimary: {
        text: 'Contactez-nous',
        url: '/contact',
      },
    },
    depth: 0,
    context: {
      disableRevalidate: true,
    },
  })

  // Seed Footer with 4 columns of 5 links each
  await payload.updateGlobal({
    slug: 'footer',
    data: {
      columns: [
        // Column 1: Services
        {
          title: 'Services',
          links: [
            {
              link: {
                type: 'custom',
                url: '/services/referencement-naturel',
                label: 'Référencement naturel',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/services/audit-seo',
                label: 'Audit SEO',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/services/growth-hacking',
                label: 'Growth Hacking',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/services/content-marketing',
                label: 'Marketing de contenu',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/services/wordpress',
                label: 'WordPress',
                newTab: false,
              },
            },
          ],
        },
        // Column 2: Solutions
        {
          title: 'Solutions',
          links: [
            {
              link: {
                type: 'custom',
                url: '/solutions/ecommerce',
                label: 'E-commerce',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/saas',
                label: 'SaaS',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/tpe-pme',
                label: 'TPE/PME',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/startups',
                label: 'Startups',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/grandes-entreprises',
                label: 'Grandes entreprises',
                newTab: false,
              },
            },
          ],
        },
        // Column 3: Ressources
        {
          title: 'Ressources',
          links: [
            {
              link: {
                type: 'custom',
                url: '/posts',
                label: 'Blog',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/ressources/guides',
                label: 'Guides & Tutoriels',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/ressources/etudes-cas',
                label: 'Études de cas',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/ressources/faq',
                label: 'FAQ',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/audit-form',
                label: 'Audit SEO gratuit',
                newTab: false,
              },
            },
          ],
        },
        // Column 4: Entreprise
        {
          title: 'Entreprise',
          links: [
            {
              link: {
                type: 'custom',
                url: '/a-propos',
                label: 'À propos',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/equipe',
                label: 'Notre équipe',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/carrieres',
                label: 'Carrières',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/partenaires',
                label: 'Partenaires',
                newTab: false,
              },
            },
            {
              link: {
                type: 'custom',
                url: '/contact',
                label: 'Contact',
                newTab: false,
              },
            },
          ],
        },
      ],
      legalLinks: [
        {
          label: 'Mentions légales',
          url: '/mentions-legales',
        },
        {
          label: 'Politique de confidentialité',
          url: '/politique-confidentialite',
        },
        {
          label: 'CGU',
          url: '/cgu',
        },
        {
          label: 'Cookies',
          url: '/cookies',
        },
      ],
    },
    depth: 0,
    context: {
      disableRevalidate: true,
    },
  })

  payload.logger.info('✓ Header and Footer seeded successfully')

  // Seed Socials
  await payload.updateGlobal({
    slug: 'socials',
    data: {
      iconColor: 'white',
      facebook: 'https://facebook.com/uptodemo',
      twitter: 'https://twitter.com/uptodemo',
      instagram: 'https://instagram.com/uptodemo',
      linkedin: 'https://linkedin.com/company/uptodemo',
      youtube: 'https://youtube.com/@uptodemo',
      tiktok: '',
      whatsapp: '',
      discord: '',
    },
    depth: 0,
  })

  payload.logger.info('✓ Socials seeded successfully')
}
