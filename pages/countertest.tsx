import Head from 'next/head'
import Counter from '../components/counter'

export default function CounterTest(){
    return(
        <>
        <Head>
            <title>Counter(State Test)</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'/>
        </Head>
        <Counter />

        </>
    ) 
}