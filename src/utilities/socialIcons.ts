// Social media icons for footer - excluded from IconsBox picker
export const socialIcons = [
  'icon-instagram',
  'icon-x-twitter', // Twitter/X icon
  'icon-youtube',
  'icon-linkedin',
  'icon-whatsapp',
  'icon-facebook',
  'icon-discord',
  'icon-tik-tok', // TikTok icon
] as const

export type SocialIcon = typeof socialIcons[number]
