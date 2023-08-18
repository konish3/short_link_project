import React from 'react';
import styles from './itemLinkComponent.module.scss';
import { useDispatch } from 'react-redux';
import { setClicks } from '../../store/reducers/shortLinksReducer';

export function ItemLink({ id, url, shortUrl, clicks }) {
	const dispatch = useDispatch()
	const onClickUrl = (id) => {
		dispatch(setClicks(id))
	}

	return <div className={styles.item}>
		<div className={styles.number}>{id}</div>
		<div className={styles.links}>
			<div className={styles.url}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
			<div className={styles.short_url}><a onClick={()=> onClickUrl(id)} href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></div>
		</div>
		<div className={styles.clicks}><span className={styles.ckicks_text}>{clicks}</span></div>
	</div >
}


