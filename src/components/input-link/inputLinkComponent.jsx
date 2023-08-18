import React, { useCallback, useEffect, useState } from 'react';
import {Input} from './inputBlock/input';
import {Button} from './buttonBlock/button';
import './inputLinkComponent.css';
import { useDispatch } from 'react-redux';
import { setMyLinks, setClicks } from './../../store/reducers/shortLinksReducer';

export function InputLink(props) {
	const [url, setUrl] = useState('')
	const [error, setError] = useState('')
	const dispatch = useDispatch()

	const handleInput = useCallback((type, e) => {
		const value = e.target.value.trim();
		setUrl(value);

		if (value.length > 2048) {
			setError('Invalid link length')
		} else if (!/^http(s)?:\/\//.test(value)) {
			setError('Invalid link')
		} else {
			setError('');
		}

		if (type === 'blur') {
			try {
				new URL(value);
			} catch (e) {
				setError('Invalid link')
			}
		}
	}, [])

	const onClickButton = () => {
		dispatch(setMyLinks(url))
		setUrl('')
	}
	const onClickUrl = () => {
		dispatch(setClicks(url))
	}

	return <div className='block'>
		<div className='block__content'>
			<div className='block__content_text'>Введите ссылку</div>
			<div className="block__content-row">
				{/* <form onSubmit={}> */}
				<Input
					url={url}
					error={error}
					handleInputChange={handleInput.bind(null, 'change')}
					onBlur={handleInput.bind(null, 'blur')}
					onClickUrl={onClickUrl} />
				<Button
					url={url}
					onClick={onClickButton}
					text='Coкратить'
					error={error} />
				{/* </form> */}
			</div>
			<div className='block__content_error'>{error}</div>
		</div>
	</div>
}