import React from 'react';
import styles from './Donate.module.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     margin: {
//         margin: theme.spacing(1),
//     },
//     withoutLabel: {
//         marginTop: theme.spacing(3),
//     },
//     textField: {
//         width: 200,
//         margin: "10px"
//     },
// }));

const Donate = () => {
    // const classes = useStyles()
    let title = 'На оплату серверов'

    const [selectedValue, setSelectedValue] = useState()

    const handleChange = () => {
        setSelectedValue('a')
        console.log('setHandleChange')
    }

    return (
        <>
            <br />
            <div className={styles.Donate}>
                <main className={styles.mainBlock}>
                    <div className={styles.avatarWrapper}>
                        <img
                            src="https://t.me/i/userpic/320/alowave.jpg"
                            alt="avatar"
                            className={styles.avatar}
                        />
                    </div>
                    <Link to="/">Main page</Link>
                    {/*
                    <iframe
                        src={`https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=${title}&successURL=https%3A%2F%2Falowave.cc&quickpay=shop&account=410015466202884`}
                        className={styles.iframe}
                        width="100%"
                        height="313"
                        frameBorder="0"
                        allowtransparency="true"
                        scrolling="no"
                        title="Donate">

                    </iframe> */}

                    <form method="POST" action={"https://money.yandex.ru/quickpay/confirm.xml"}>
                        <input type="hidden" name="receiver" value="410015466202884" />
                        <input type="hidden" name="formcomment" value="Alowave donation ♥" />
                        <input type="hidden" name="short-dest" value="Alowave donation ♥" />
                        <input type="hidden" name="quickpay-form" value="donate" />
                        <input type="hidden" name="targets" value="Назначение платежа" />
                        <FormControl variant="outlined" className={styles.field}>
                            <InputLabel htmlFor="component-outlined">Ammount</InputLabel>
                            <OutlinedInput
                                required
                                data-type="number"
                                id="component-outlined"
                                value="4568.25"
                                name="sum"
                                onChange={handleChange}
                                label="Sum"
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={styles.field}>
                            <InputLabel htmlFor="component-outlined">Comment</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                value={'d'}
                                name="comment"
                                onChange={handleChange}
                                label="Comment"
                                />
                        </FormControl>
                        <div className={styles.radioButton}>
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="PC"
                                name="paymentType"
                                inputProps={{ 'aria-label': 'A' }}
                            />Яндекс.Деньгами
                        </div>
                        <div className={styles.radioButton}>
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="AC"
                                name="paymentType"
                                inputProps={{ 'aria-label': 'B' }}
                            />Банковской картой
                        </div>
                        <Button variant="contained"  type="submit" color="primary">
                            Перевести
                        </Button>
                    </form>

                </main>
            </div>
        </>
    )
}

export default Donate
