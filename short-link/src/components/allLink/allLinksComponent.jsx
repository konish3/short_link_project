import React from 'react';
import './allLinksComponent.css'
import {ItemLink} from '../itemLink/itemLinkComponent';
import PageNumber from '../pagination/paginationComponent';

export function AllLink({ loading, allLinks }) {

	if (loading) return <><h2>Loading...</h2></>

	return <>
		<section className="all-links">
			<div className="all-links__title">Список ссылок</div>
			<div className="all-links__items">
				{
					allLinks.map((item, index) => <ItemLink
						key={(index + 1).toString()}
						index={index + 1}
						url={item.url}
						shortUrl={item.short_url}
						clicks={item.clicks} />)
				}
			</div>
		</section>
		<PageNumber />
	</>
}