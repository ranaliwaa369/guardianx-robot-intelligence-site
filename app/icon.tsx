import { renderLogoIcon } from '@/lib/logo-icon'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return renderLogoIcon(64)
}
