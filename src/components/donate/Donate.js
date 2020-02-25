import React from 'react';
import styles from './Donate.module.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
        margin: "10px"
    },
    FormControl: {
        color: theme.palette.primary.contrastText
    },
    MuiOutlinedInput: {
        root: {
            margin: '20px'
        }
    },

}));

const Donate = () => {
    const classes = useStyles()

    const [selectedTypeDePayment, setSelectedTypeDePayment] = useState()

    const handleChange = () => {

    }

    const handleChangeType = (event) => {
        setSelectedTypeDePayment(event.target.value)
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
                    <div className={styles.back}>
                        <Link to="/">
                            <div className={styles.arrow1}/>
                            <span className={styles.arrow3}>Donate</span>
                        </Link>
                    </div>
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
                        <FormControl variant="outlined" className={`${classes.MuiOutlinedInput}` + styles.field} >
                            <InputLabel htmlFor="component-outlined">Ammount</InputLabel>
                            <OutlinedInput
                                required
                                data-type="number"
                                id="component-outlined"
                                placeholder={'100'}
                                name="sum"
                                onChange={handleChange}
                                label="Sum"
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={`${classes.MuiOutlinedInput}`+ styles.field} >
                            <InputLabel htmlFor="component-outlined" >Comment</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                placeholder={'Спасибо за ботa'}
                                name="comment"
                                onChange={handleChange}
                                label="Comment"
                                />
                        </FormControl>
                        <div className={styles.radioButton}>
                        <FormControl required variant="outlined" className={classes.FormControl} >
                                <RadioGroup aria-label="gender" name="gender1" value={selectedTypeDePayment} onChange={handleChangeType}>
                                <FormControlLabel value="AC" control={<Radio />} label="Банковской картой" />
                                <FormControlLabel value="PC" control={<Radio />} label="Яндекс.Деньгами" />
                            </RadioGroup>
                        </FormControl>
                        </div>
                        <Button variant="contained"  type="submit" disabled color="primary">
                            Перевести
                        </Button>
                    </form>

                </main>
            </div>
        </>
    )
}

export default Donate
