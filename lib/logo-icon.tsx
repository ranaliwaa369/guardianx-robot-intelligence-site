import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

const LOGO_WIDTH = 1320
const LOGO_HEIGHT = 647
// Square region of the original logo containing the shield "G" mark (no padding, original pixels only).
const CROP = { left: 460, top: 42, size: 400 }

export async function renderLogoIcon(size: number) {
  const file = await readFile(join(process.cwd(), 'public/images/guardianx-logo.jpeg'))
  const src = `data:image/jpeg;base64,${file.toString('base64')}`
  const scale = size / CROP.size

  return new ImageResponse(
    (
      <div style={{ width: size, height: size, display: 'flex', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={LOGO_WIDTH * scale}
          height={LOGO_HEIGHT * scale}
          style={{ position: 'absolute', left: -CROP.left * scale, top: -CROP.top * scale }}
        />
      </div>
    ),
    { width: size, height: size },
  )
}
