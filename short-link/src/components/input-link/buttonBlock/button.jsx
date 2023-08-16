import React from 'react';
import './button.css'
import { addLink } from '../../../store/myLinksSlice/myLinksSlice';

function Button ({url, setUrl, dispatch, error}) {
	return <>
		<button disabled={!url.length || error.length}><span className='button__text'>Сократить</span></button>
	</>
}

export default Button;