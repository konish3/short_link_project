import React, { useEffect, useState } from 'react';
import './App.css';
import { InputLink } from './components/input-link/inputLinkComponent';
import { MyLinks } from './components/myLink/myLinksComponent';
import { AllLink } from './components/allLink/allLinksComponent';
import { gql, useQuery } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux';
import { setAllLinks } from './store/reducers/shortLinksReducer';

const GET_ALL_LINKS = gql`
	query short_urls{
		short_urls{
			data{
				id
				url
				short_url
				clicks
				created_at
				updated_at
			}
		}
	}
`;

function App() {
	const allLinks = useSelector(state => state.shortLinks.allLinks)
	const myLinks = useSelector(state => state.shortLinks.myLinks)
	const dispatch = useDispatch()
	const { loading, error, data } = useQuery(GET_ALL_LINKS)

	useEffect(() => {
		if(!loading) {
			dispatch(setAllLinks(data))
		}
	},[loading])

	return <div className="wrapper">
		<header>
			<h2>Сокращатель</h2>
		</header>
		<main className='main'>
			<div className="left-side">
				<InputLink />
				<MyLinks myLinks={myLinks} />
			</div>
			<div className="right-side">
				<AllLink data={data} error={error} loading={loading} allLinks={allLinks} />
			</div>
		</main>
	</div>
}

export default App;