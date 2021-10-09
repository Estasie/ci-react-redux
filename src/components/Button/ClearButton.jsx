import React from 'react'
import {ReactComponent as Delete} from '../../assets/svgs/clear.svg'

export default function ClearButton(props) {
    const {onClick} = props;
    return (
        <button  onClick={e => onClick(e)} className="input-clear"><Delete /></button>
    )
}
