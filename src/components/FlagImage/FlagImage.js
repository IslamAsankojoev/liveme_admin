import style from './FlagImage.module.scss'
import React from 'react'

const FlagImage = ({ flag, title, desc, tab }) => {
	return (
		<span className={style.flag}>
			<img
				src={`https://flagcdn.com/${flag}.svg`}
				width={'30px'}
				alt="language flag"
			/>
			&nbsp; {title ? ' title ' + flag : desc ? 'desc ' + flag : tab}
		</span>
	)
}
export default FlagImage
