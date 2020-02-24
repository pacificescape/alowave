import React from 'react';
import styles from './Donate.module.css'
import { Link } from "react-router-dom";

const Main = () => {
    let title = 'На оплату серверов'
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
                    <iframe
                    src={`https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=${title}&successURL=https%3A%2F%2Falowave.cc&quickpay=shop&account=410015466202884`}
                    className={styles.iframe}
                    width="100%"
                    height="313"
                    frameBorder="0"
                    allowtransparency="true"
                    scrolling="no"
                    title="Donate">

                    </iframe>
                    <Link to="/">Main page</Link>
                </main>
            </div>
        </>
    )
}

export default Main
