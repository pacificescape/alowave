import React from 'react'
import styles from './Main.module.css'
import { Link } from 'react-router-dom'
import { Userpic } from './Userpic'
import { ButtonsLine } from './ButtonsLine'

const Main = () => {

    return (
        <>
            <div className={styles.Main}>
                <main className={styles.mainBlock}>
                    <div className={styles.avatarWrapper}>
                        <Userpic username={'alowave'} styles={styles.avatar}/>
                    </div>
                    <div className={styles.textWrapper}>
                        <div>
                            Alowave - dev with animals <br/>
                            Python Dev, HTML programmer, Indian Teacher
                        </div>
                    </div>
                    <ButtonsLine/>
                    <div className={styles.donateWrapper}>
                        <Link to="/donate" className={styles.donate + '' +  styles.icon}>
                            Поддержать
                        </Link>
                    </div>
                    <br/>
                    <span className={styles.myProjectsTitle}>Мои проекты:</span>
                    <div className={styles.projectsWrapper}>
                        <div className={styles.project}>
                            <Userpic username={'yamdbot'} styles={styles.projectIcon}/>
                        </div>
                        <div className={styles.project}>
                            <Userpic username={'ccurbot'} styles={styles.projectIcon}/>
                        </div>
                        <div className={styles.project}>
                            <Userpic username={'tikdobot'} styles={styles.projectIcon}/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Main
