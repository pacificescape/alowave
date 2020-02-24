import React from 'react';
import styles from './Main.module.css'

const Main = () => {
    return (
        <>
            <br />
            <div className={styles.Main}>
                <main className={styles.mainBlock}>
                    <div className={styles.avatarWrapper}>
                        <img
                            src="https://t.me/i/userpic/320/alowave.jpg"
                            alt="avatar"
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <div>Alowave — developer from my heart ♥</div>
                        <div>Python agnostic level coder</div>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <a className={styles.icon} href="https://github.com/alowave">
                            <i className="fab fa-github"/>
                        </a>
                        <a className={styles.icon} href="https://t.me/lowdev">
                            <i className="fab fa-telegram"/>
                        </a>
                        <a className={styles.icon} href="https://t.me/s/alowhair">
                            <i class="fas fa-cut"></i>
                        </a>
                        <a className={styles.icon} href="https://t.me/alowave">
                            <i class="fas fa-comment"></i>
                        </a>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Main
