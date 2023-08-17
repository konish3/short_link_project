import React from 'react';
import './allLinksComponent.css'
import { useSelector } from 'react-redux';
import ItemLink from '../itemLink/itemLinkComponent';
import PageNumber from '../pagination/paginationComponent';
import { useQuery, gql } from '@apollo/client';

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

function AllLink(props) {
	const { loading, error, data } = useQuery(GET_ALL_LINKS, { /*pollInterval: 500, */})
	const allLinks = useSelector(state => state.allLinks)

	console.log(data)

	if(loading) return <><h2>Loading...</h2></>

	const itemLink = allLinks
	.map((item, index) => <ItemLink key={index + 1} index={index + 1} url={item.url} shortUrl={item.short_url} clicks={item.clicks}></ItemLink>)

	return <>
		<section className="all-links">
			<div className="all-links__title">Список ссылок</div>
			<div className="all-links__items">
				{itemLink}
			</div>
		</section>
		<PageNumber></PageNumber>
	</>
}

export default AllLink;