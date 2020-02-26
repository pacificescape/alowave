import React from 'react';
import styles from './Donate.module.css'
import { Link } from "react-router-dom";
import { makeStyles, Divider, TextField, Typography, Box } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
    FormControl: {
        margin: theme.spacing(1)
    },
    override: {
        FormControl: {
            marginTop: theme.spacing(1)
        }
    },
    divider: {
        margin: 'auto'
    },
    color: theme.palette.primary.contrastText,

}));

const Donate = () => {
    const classes = useStyles()

    const [selectedTypeDePayment, setSelectedTypeDePayment] = useState()
    const [ammountError, setAmmountError] = useState(false)
    const [ammount, setAmmount] = useState('')
    const [comment, setComment] = useState('')

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleAmmountChange = (event) => {
        if (RegExp(/\D/).test(event.target.value)) {
            setAmmountError(true)
            setAmmount(event.target.value)
            return
        }

        setAmmount(event.target.value)
        setAmmountError(false)
    }

    const handleChangeType = (event) => {
        setSelectedTypeDePayment(event.target.value)
    }

    const comments = [
        'Спасибо за бота',
        'Люблю тебя, солнышко',
        'Деньги тебе плачу',
        'На корм кошке',
    ]

    const randomComment = () => comments[Math.floor(Math.random() * comments.length)]

    return (
        <>
            <div className={styles.Donate}>
                <main className={styles.mainBlock}>
                    <div className={styles.avatarWrapper}>
                        <img
                            src="https://t.me/i/userpic/320/alowave.jpg"
                            alt="avatar"
                            className={styles.avatar}
                        />
                    </div>
                    {/* <div className={styles.back}>
                        <Link to="/">
                            <div className={styles.arrow1}/>
                            <span className={styles.arrow3}>Donate</span>
                        </Link>
                    </div> */}
                    <Link to="/">
                        <div className={styles.back2}>
                            <div className={styles.arrow2} />
                        </div>
                    </Link>
                    <br />
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

                    <form method="POST" action={"https://money.yandex.ru/quickpay/confirm.xml"} autoComplete="off">
                        <input type="hidden" name="receiver" value="410015466202884" />
                        <input type="hidden" name="formcomment" value="Alowave donation ♥" />
                        <input type="hidden" name="short-dest" value="Alowave donation ♥" />
                        <input type="hidden" name="quickpay-form" value="donate" />
                        <input type="hidden" name="targets" value="Назначение платежа" />
                        <div className={styles.frotmControlWrapper}>
                            <TextField
                                className={classes.FormControl}
                                onChange={handleAmmountChange}
                                error={ammountError}
                                label="Ammount"
                                name="sum"
                                value={ammount}
                                placeholder={'100'}
                                variant="outlined"
                                id="ammountSum"
                                color="secondary"
                            />
                            <TextField
                                className={classes.FormControl}
                                onChange={handleCommentChange}
                                label="Comment"
                                name="comment"
                                value={comment}
                                placeholder={randomComment()}
                                variant="outlined"
                                id="comment"
                                color="secondary"
                            />
                        </div>
                        <div className={styles.radioButton}>
                            <FormControl required variant="outlined">
                                <RadioGroup
                                    aria-label="gender"
                                    name="gender1"
                                    value={selectedTypeDePayment}
                                    onChange={handleChangeType}
                                    className={styles.wallet}>
                                    <FormControlLabel
                                        className={styles.FormControlLabel}
                                        value="AC"
                                        control={
                                            <Radio
                                                icon={<img src="AC.png" alt="AC" className={styles.disabledWallet} />}
                                                checkedIcon={<img src="AC.png" alt="AC" className={styles.enabledWallet} />}
                                            >
                                            </Radio>}>
                                    </FormControlLabel>
                                    <FormControlLabel
                                        className={styles.FormControlLabel}
                                        value="PC"
                                        control={
                                            <Radio
                                                icon={<img src="PC.gif" alt="PC" className={styles.disabledWallet} />}
                                                checkedIcon={<img src="PC.gif" alt="PC" className={styles.enabledWallet} />}
                                            ></Radio>}>
                                    </FormControlLabel>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <br />
                        <Button variant="contained" type="submit" color="primary">
                            Перевести
                        </Button>
                    </form>
                    <br />
                    <Divider width="50%" className={classes.divider} />
                    <div className={styles.Cryptography}>
                        <Box fontSize={14} textAlign="left" color="text.primary" className={styles.cryptowalletWrapper}>
                        <Box width='10%' display='inline'>ETH</Box><Box color="secondary.main" className={styles.cryptowallet}>
                                0x5aC4972E493da4c45B7B273cd04515A3533d16Cb</Box>
                        </Box>
                        <Box fontSize={14} textAlign="left" color="text.primary" my='10px' className={styles.cryptowalletWrapper}>
                            <Box width='10%'>BTC</Box><Box color="secondary.main" className={styles.cryptowallet}>
                                19rWM1jdbG1bTZXTZsRGkCvYXELkbg3fFq</Box>
                        </Box>
                        <Box fontSize={14} textAlign="left" color="text.primary" className={styles.cryptowalletWrapper}>
                            <Box width='10%'>BCH</Box><Box color="secondary.main" className={styles.cryptowallet}>
                                qps3mcngnjkkd0ntf3cfkvsaxyzs34vemg7g38utyp</Box>
                        </Box>
                    </div>

                </main>
            </div>
        </>
    )
}

export default Donate
