import { Layout } from '@/layout/Layout'
import { createClient } from '@/prismicio'
import * as prismic from '@prismicio/client'
import { BlogDocument } from 'prismicio-types'
import styled from 'styled-components'

// const contentAboutPageStyle = cva(
//   'w-full',
//   'max-w-screen-md',
//   'mx-auto',
//   'my-4',
// )

export const ContentStyled = styled.div`
  /* width: 100%; */
`

export default function Page({ page }: { page: BlogDocument<string> }) {
  console.log(page)
  return (
    <Layout>
      <h1>{page.data.title[0]?.text}</h1>
      <p>Publicado: {page.first_publication_date}</p>
      <p>Atualizado: {page.last_publication_date}</p>
      <br />
      {!!page.data.video.html && (
        <div dangerouslySetInnerHTML={{ __html: page.data.video.html }}></div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: prismic.asHTML(page.data.content) }}
      ></div>
    </Layout>
  )
}

// Fetch content from prismic
export async function getStaticProps({
  params,
  previewData,
}: {
  params: any
  previewData: any
}) {
  const client = createClient({ previewData })
  const page = await client.getByUID('blog', params.uid)
  return {
    props: { page },
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('blog')

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  }
}
