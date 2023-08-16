import React, { useState } from 'react';
import './input.css'

function Input({ url, handleInputChange }) {


	return <>
		<input className='input' type="text" value={url} onChange={(e) => handleInputChange(e)}/>
	</>
}

export default Input;