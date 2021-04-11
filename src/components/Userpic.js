import React, { useState } from 'react';

export const Userpic = (props) => {
    const [url, setUrl] = useState(`https://tx.me/i/userpic/320/${props.username}.jpg`)

    const handleChangeSrc = () => {
        setUrl(`https://tx.me/i/userpic/320/${props.username}.jpg`)
    }

    return (
        <a className={props.styles} href={`https://t.me/${props.username}`}>
            <img
                src={url}
                onError={handleChangeSrc}
                alt={props.username}></img>
        </a>
    )
}
