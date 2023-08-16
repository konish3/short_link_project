import React, { useState } from 'react';
import './input.css'

function Input({ url, handleInputChange }) {


	return <>
		<input className='input' type="text" value={url} onChange={handleInputChange}/>
	</>
}

export default Input;