import type { CollectionBeforeOperationHook } from 'payload'

export const beforeMediaOperation: CollectionBeforeOperationHook = async ({ args, operation }) => {
  // Only handle create operations with file uploads
  if (operation === 'create' && args.req?.file) {
    const file = args.req.file

    try {
      // Check if it's an SVG by looking at the file content or name
      const filename = file.name || 'upload'
      let mimeType = file.mimetype

      // If mimetype is not set or file is SVG, detect it
      if (!mimeType || filename.toLowerCase().endsWith('.svg')) {
        // Check if file content starts with SVG tags
        const fileStart = file.data?.toString('utf-8', 0, 100) || ''
        if (fileStart.includes('<svg') || fileStart.includes('<?xml') || filename.toLowerCase().endsWith('.svg')) {
          mimeType = 'image/svg+xml'
          file.mimetype = mimeType
        }
      }

    } catch (error) {
      console.error('Error in beforeMediaOperation hook:', error)
    }
  }

  return args
}
