import React, {useState} from 'react';
import Input from './inputBlock/input';
import Button from './buttonBlock/button';
import './inputLinkComponent.css';
import { useDispatch } from 'react-redux';

function InputLink(props) {

	const [url, setUrl] = useState('')
	const [status, setStatus] = useState('typing')
	const [error, setError] = useState(null)
	const dispatch = useDispatch()
	console.log(url)

	
	function handleInputChange(e) {
		setUrl(e.target.value);
	}

	return <>
		<div className="block">
			<div className="block__content">
				<div className='block__content_text'>Введите ссылку</div>
				{/* <form onSubmit={}> */}
					<Input url={url} handleInputChange={handleInputChange}></Input>
					<Button url={url} setUrl={setUrl} dispatch={dispatch}></Button>
				{/* </form> */}
				<div className='block__content_error'>{error}</div>
			</div>
		</div>
	</>
}

export default InputLink;

// const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
// if (typeof url !== 'string') {
// 	setError('Введенные данные не являются строкой!')
// } else if (url.length > 2048) {
// 	setError('Длина введенных данных слишком большая!')
// } else if (urlPattern.test(url)) {
// 	setError('Введенные данные не являются ссылкой')
// }

// const urlPattern = new RegExp('^(https?:\\/\\/)?' +
// 	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
// 	'((\\d{1,3}\\.){3}\\d{1,3}))' +
// 	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
// 	'(\\?[;&a-z\\d%_.~+=-]*)?' +
// 	'(\\#[-a-z\\d_]*)?$', 'i');
// if (!urlPattern.test(url)) {
// 	setError('Некорректная ссылка')
// } else {
// 	setError('')
// }