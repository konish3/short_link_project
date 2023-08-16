import React from 'react';
import styles from './input.module.css'

function Input({ url,error, handleInputChange, onBlur }) {

	return <>
		<input className={!error.length ? styles.input : styles.error}
		type="text" value={url} onChange={handleInputChange} onBlur={onBlur}/>
	</>
}

export default Input;