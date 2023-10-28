import { createClient } from '@/prismicio'
import { ContactDocument } from 'prismicio-types'

export default function Page({ page }: { page: ContactDocument<string> }) {
  return <h1>{page.uid}</h1>
}

export async function getStaticProps({ previewData }: { previewData: any }) {
  const client = createClient({ previewData })
  console.log(client)
  const page = await client.getByUID('contact', 'contactme')

  return {
    props: { page },
  }
}
