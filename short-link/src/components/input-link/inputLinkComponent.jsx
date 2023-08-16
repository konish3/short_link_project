import React, { useState } from 'react';
import Input from './inputBlock/input';
import Button from './buttonBlock/button';
import './inputLinkComponent.css';
import { useDispatch } from 'react-redux';

function InputLink(props) {
	const [url, setUrl] = useState('')
	const [error, setError] = useState('')
	const dispatch = useDispatch()



	function handleInput(type, e) {
		console.log(type, e.target.value)
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
				console.log(value)
				new URL(value);
			} catch (e) {
				console.log(e)
				setError('Invalid link')
				return
			}
		}
	}

	return <>
		<div className="block">
			<div className="block__content">
				<div className='block__content_text'>Введите ссылку</div>
				{/* <form onSubmit={}> */}
				<Input url={url} error={error}
					handleInputChange={handleInput.bind(null, 'change')}
					onBlur={handleInput.bind(null, 'blur')}>
				</Input>
				<Button url={url} setUrl={setUrl} dispatch={dispatch} error={error}></Button>
				{/* </form> */}
				<div className='block__content_error'>{error}</div>
			</div>
		</div>
	</>
}

export default InputLink;