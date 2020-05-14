import React from 'react';
import styles from './Donate.module.css'
import { Link } from "react-router-dom";
import { makeStyles, Divider, TextField, Box } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(2),
    },
    textField: {
        width: 200,
    },
    FormControl: {
        margin: '4px'
    },
    divider: {
        margin: 'auto'
    },
    color: theme.palette.primary.contrastText,

}));

function copyToClipboard(string) {
    let textarea;
    let result;

    try {
      textarea = document.createElement('textarea');
      textarea.setAttribute('readonly', true);
      textarea.setAttribute('contenteditable', true);
      textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
      textarea.value = string;

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      const range = document.createRange();
      range.selectNodeContents(textarea);

      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);

      textarea.setSelectionRange(0, textarea.value.length);
      result = document.execCommand('copy');
    } catch (err) {
      console.error(err);
      result = null;
    } finally {
      document.body.removeChild(textarea);
    }

    // manual copy fallback using prompt
    if (!result) {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const copyHotkey = isMac ? '⌘C' : 'CTRL+C';
      result = prompt(`Press ${copyHotkey}`, string); // eslint-disable-line no-alert
      if (!result) {
        return false;
      }
    }
    return true;
  }

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
        'На корм кошке'
    ]

    const randomComment = () => comments[Math.floor(Math.random() * comments.length)]

    const copyWallet = async (n) => {
        let boxElement = document.getElementsByClassName(styles.cryptowallet)[n]
        if(copyToClipboard(boxElement.innerHTML)) {
            onCopy(boxElement)
        }
    }

    const onCopy = (boxElement) => {
        boxElement.animate([
            { backgroundColor: '#ebebeb30' },
            { backgroundColor: '#00000030' }
        ], 1000);
    }

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
                    <Link to="/">
                        <div className={styles.back}>
                            <div className={styles.arrow} />
                        </div>
                    </Link>

                    <form method="POST" action={"https://money.yandex.ru/quickpay/confirm.xml"} autoComplete="off">
                        <input type="hidden" name="receiver" value="410015466202884" />
                        <input type="hidden" name="formcomment" value="Alowave donation ♥" />
                        <input type="hidden" name="short-dest" value="Alowave donation ♥" />
                        <input type="hidden" name="quickpay-form" value="donate" />
                        <input type="hidden" name="targets" value="Назначение платежа" />
                        <div className={styles.frotmControlWrapper}>
                            <TextField
                                required
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
                                    required
                                    aria-label="paymentType"
                                    name="paymentType"
                                    value={selectedTypeDePayment}
                                    onChange={handleChangeType}
                                    className={styles.wallet}>
                                    <FormControlLabel
                                        required
                                        className={styles.FormControlLabel}
                                        value="AC"
                                        control={
                                            <Radio
                                                required
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
                        <Button variant="contained" type="submit" disabled={ammountError} color="primary">
                            Перевести
                        </Button>
                    </form>
                    <br />
                    <Divider width="50%" className={classes.divider} />

                    <div className={styles.blockCryptography}>
                        <Box fontSize={14} textAlign="left" color="text.primary" className={styles.cryptowalletWrapper}>
                            <Box className={styles.walletName}>ETH</Box>

                            <Box color="secondary.main" className={styles.cryptowallet}>
                                0x5aC4972E493da4c45B7B273cd04515A3533d16Cb
                            </Box>

                            <Box className={styles.copyIcon} onClick={() => { copyWallet(0) }}>
                                    <i className="far fa-copy"></i>
                            </Box>
                        </Box>
                        <Box fontSize={14} textAlign="left" color="text.primary" className={styles.cryptowalletWrapper}>
                            <Box className={styles.walletName}>BTC</Box>

                            <Box color="secondary.main" className={styles.cryptowallet}>
                                19rWM1jdbG1bTZXTZsRGkCvYXELkbg3fFq
                            </Box>

                            <Box className={styles.copyIcon} onClick={() => { copyWallet(1) }}>
                                    <i className="far fa-copy"></i>
                            </Box>
                        </Box>
                        <Box fontSize={14} textAlign="left" color="text.primary" className={styles.cryptowalletWrapper}>
                            <Box className={styles.walletName}>BCH</Box>

                            <Box color="secondary.main" className={styles.cryptowallet}>
                                qps3mcngnjkkd0ntf3cfkvsaxyzs34vemg7g38utyp
                            </Box>

                            <Box className={styles.copyIcon} onClick={() => { copyWallet(2) }}>
                                    <i className="far fa-copy"></i>
                            </Box>
                        </Box>
                    </div>

                </main>
            </div>
        </>
    )
}

export default Donate
