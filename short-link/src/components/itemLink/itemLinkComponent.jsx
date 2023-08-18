import React from 'react';
import styles from './itemLinkComponent.module.scss';

export function ItemLink({ index, url, shortUrl, clicks }) {

	return <div className={styles.item}>
		<div className={styles.number}>{index}</div>
		<div className={styles.links}>
			<div className={styles.url}>{url}</div>
			<div className={styles.short_url}>{shortUrl}</div>
		</div>
		<div className={styles.clicks}><span className={styles.ckicks_text}>{clicks}</span></div>
	</div >
}


