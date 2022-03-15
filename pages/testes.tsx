import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function FirstTestPost(){
    return(
    <>
        <h1>First Test Post!</h1>
        <h3 className={styles.title}>
            <Link href="/test/test"><a>Go To Second Test</a></Link>
        </h3>
        <Image
            src="/img/almondeye.jpg"
            height={216}
            width={384}
            alt="horse"
        />
    </>
    ) 
}