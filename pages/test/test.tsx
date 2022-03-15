import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function SecondTestPost(){
    return(
    <>
        <Head>
            <title>2nd Test</title>
        </Head>
        <Layout>
        <h2>Second Test Post!</h2>
        <h3>
            <Link href="/testes"><a>Back</a></Link>
        </h3>
        </Layout>
    </>
    ) 
}