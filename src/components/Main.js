import React from 'react';
import styles from './Main.module.css'
import { Link } from "react-router-dom";

const Main = () => {
    let bell = true;

    return (
        <>
            <div className={styles.Main}>
                <main className={styles.mainBlock}>
                    <div className={styles.avatarWrapper}>
                        <img
                            src="https://t.me/i/userpic/320/alowave.jpg"
                            alt="avatar"
                            className={styles.avatar}
                        />
                    </div>
                    {bell ? <Link to="/bell">
                        <div className={styles.toBell}>
                            <div className={styles.bell}>
                                <i className="fas fa-bell"></i>
                            </div>
                        </div>
                    </Link> : null}
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
                        <a className={styles.icon} href="https://t.me/alowave">
                            <i className="fas fa-comment"></i>
                        </a>
                    </div>
                    <div className={styles.donateWrapper}>
                        <Link to="/donate" className={styles.donate + '' +  styles.icon}>
                            Поддержать
                        </Link>
                    </div>
                    <br/>
                    <span className={styles.myProjectsTitle}>Мои пректы:</span>
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
