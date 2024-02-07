import React, { useState } from 'react'
import axios from 'axios'
import './Main.css'

const URL = 'https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/country'

function CreatePost({clicked}) {
	const [name, setName] = useState('')
	const [url, setUrl] = useState('')

	const handelCreate = async () => {
		const payload = {
			name: name,
			avatar: url
		}
		try{
			const response = await axios.post(URL, payload)

			if(response.status === 201) {
				alert('succes created post')
				setName('')
				setUrl('')
				clicked(true)
			}

			console.log(response);
		} catch(error){
			console.log(error);
		}
	}
	return (
		<div className='container'>
			<h1>Create Country</h1>
			<label for='name'>Country name</label>
			<input type='text' id='name' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
			<label for="url">Image</label>
			<input type='url' id='url' placeholder='image url' onChange={(e) => setUrl(e.target.value)} value={url}/>
			<button className='btn' onClick={handelCreate}>Create</button>
		</div>
	)
}

export default CreatePost
