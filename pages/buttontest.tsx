import Head from 'next/head'
import Button from '../components/button'

export default function ButtonTest(){
    return(
        <>
        <Head>
            <title>Outline Links</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'/>
        </Head>
        <Button href='/' title='index'/>
        <Button href='/testposts' title='testposts'/>
        <Button href='/posts/1600021' title='kabukicho'/>
        <Button href='/testes' title='testes'/>
        <Button href='/buttontest' title='dummy'/>
        </>
    ) 
}