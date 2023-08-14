import React from 'react';
import './wrapper.css'
import InputLink from './input-link/inputLinkComponent';

function Wrapper (props) {
	return <>
		<header>
			<h2>Сокращатель</h2>
		</header>
		<main className='main'>
			<InputLink></InputLink>
		</main>
	</>
}

export default Wrapper;