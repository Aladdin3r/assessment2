import styles from './Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <h1>Aladdin Family Vacation</h1>
            <p>
                Enter a Bitmask Number into the input section to bring 
                an Aladdin family member on the family vacation. 
            </p>
        </header>
    )
}