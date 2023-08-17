import React from 'react';
import './wrapper.css'
import InputLink from './input-link/inputLinkComponent';
import MyLinks from './myLink/myLinksComponent';
import AllLink from './allLink/allLinksComponent';
import PageNumber from './pagination/paginationComponent';

function Wrapper(props) {
	return <>
		<div className="wrapper">
			<header>
				<h2>Сокращатель</h2>
			</header>
			<main className='main'>
				<div className="left-side">
					<InputLink></InputLink>
					<MyLinks></MyLinks>
				</div>
				<div className="right-side">
					<AllLink></AllLink>
				</div>
			</main>
		</div>
	</>
}

export default Wrapper;