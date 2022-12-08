import Link from 'next/link'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <span>aels</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
