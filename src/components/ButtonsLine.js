import React from 'react'
import styles from './ButtonsLine.module.css'

export const ButtonsLine = () => {
    return (
        <div className={styles.buttonsWrapper}>
            <a className={styles.icon} href="https://github.com/alowave">
                <i className="fab fa-github" />
            </a>
            <a className={styles.icon} href="https://t.me/lowdev">
                <i className="fab fa-telegram" />
            </a>
            <a className={styles.icon} href="https://t.me/alowave">
                <i className="fas fa-comment"></i>
            </a>
        </div>
    )
}
