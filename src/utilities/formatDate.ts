export function formatDate(dateString: string | Date | null | undefined): string {
  if (!dateString) return ''

  const date = typeof dateString === 'string' ? new Date(dateString) : dateString

  const day = date.getDate()
  const month = date.toLocaleDateString('fr-FR', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
