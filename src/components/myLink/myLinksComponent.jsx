import React from 'react';
import {ItemLink} from '../itemLink/itemLinkComponent';
import './myLinksComponent.css'


export function MyLinks({ myLinks }) {
	return <section className="my-links">
		<div className="my-links__title">Мои ссылки</div>
		<div className="my-links__items">
			{
				myLinks.map((item, index) => <ItemLink
					key={(index + 1).toString()}
					id={item.index ?? index + 1}
					url={item.url}
					shortUrl={item.short_url}
					clicks={item.clicks} />)
			}
		</div>
	</section>
}