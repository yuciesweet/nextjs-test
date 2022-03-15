import styles from './layout.module.css'

export default function Div({ children }){
    return <div className={styles.container}>{children}</div>
}
