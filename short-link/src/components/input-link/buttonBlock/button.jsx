import React from 'react';
import './button.css'
import { addLink } from '../../../store/myLinksSlice/myLinksSlice';

function Button ({url, setUrl, dispatch}) {
	return <>
		<button><span className='button__text'>Сократить</span></button>
	</>
}

export default Button;