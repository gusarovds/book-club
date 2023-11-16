import type { ReactElement } from 'react'
import Layout from '@/components/layout'
import type { NextPageWithLayout } from './_app'
import { Posts } from '@/components/Posts'
 
const Page: NextPageWithLayout = () => {
  return <Posts></Posts>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page
