import style from './FlagImage.module.scss';
import {useRecordContext} from 'react-admin';
import React from 'react';

const FlagImage = ({flag, title, desc, tab}) =>{
    const record = useRecordContext();

    React.useEffect(()=>{
        console.log(record)
        }, [])
    return(
            <span className={style.flag}><img src={`https://flagcdn.com/${flag}.svg`} width={'30px'}/>&nbsp; {title ? ' title ' + flag : desc ? 'desc ' + flag : tab }</span>
    )
}
export default FlagImage;

