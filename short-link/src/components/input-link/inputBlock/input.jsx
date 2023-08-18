import React from 'react';
import styles from './input.module.css'

export function Input({ url,error, handleInputChange, onBlur }) {

	return<input className={`${styles.input} ${error.length ? styles.error : ''}`}
		type="text" 
		value={url} 
		onChange={handleInputChange} 
		onBlur={onBlur}/>
}