import styles from './Header.module.css'

export default function Header() {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Aladdin Family Vacation</h1>
                <p>
                    Enter a Bitmask Number into the input section to bring 
                    an Aladdin family member on the family vacation. <br />
                    Add the numbers together to take different members together 
                    or even all of them.
                    Different combinations bring different members!
                </p>
            </header>
        </div>
    )
}