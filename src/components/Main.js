import React from 'react';
import styles from './Main.module.css'
import { Link } from "react-router-dom";

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
                        <div>Alowave — developer from my heart ♥ </div>
                        <div>Python agnostic level coder</div>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <a className={styles.icon} href="https://github.com/alowave">
                            <i className="fab fa-github"/>
                        </a>
                        <a className={styles.icon} href="https://t.me/lowdev">
                            <i className="fab fa-telegram"/>
                        </a>
                        <a className={styles.icon} href="https://t.me/alowhair">
                            <i class="fas fa-fan"></i>
                        </a>
                        <a className={styles.icon} href="https://t.me/alowave">
                            <i class="fas fa-comment"></i>
                        </a>
                    </div>
                    <div className={styles.donateWrapper}>
                        <Link to="/donate" className={styles.donate + '' +  styles.icon}>
                            <i class="fas fa-coins"></i> <span>Donate</span>
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    My projects:
                    <div className={styles.projectsWrapper}>
                        <div className={styles.project}>
                            <a className={styles.projectIcon} href="https://t.me/yamdbot">
                                <img src="https://t.me/i/userpic/320/yamdbot.jpg" alt="yamdbot"></img>
                            </a>
                        </div>
                        <div className={styles.project}>
                            <a className={styles.projectIcon} href="https://t.me/ccurbot">
                                <img src="https://t.me/i/userpic/320/ccurbot.jpg" alt="ccurbot"></img>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Main
