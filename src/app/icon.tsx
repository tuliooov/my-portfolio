import Image from 'next/image'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      // <div
      //   style={{
      //     fontSize: 24,
      //     background: 'black',
      //     width: '100%',
      //     height: '100%',
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     color: 'white',
      //   }}
      // >
      // </div>
      <img src={'https://images.prismic.io/blogtulioov/6556bd87531ac2845a253b44_profile.ico?auto=format%2Ccompress&rect=0%2C0%2C256%2C256&w=828&fit=max'} alt='favicon marco tulio'  width={size.width} height={size.height} />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}