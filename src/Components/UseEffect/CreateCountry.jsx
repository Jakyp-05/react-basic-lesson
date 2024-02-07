import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import './Main.css'
import CreatePost from './CreatePost'

const API_URL = 'https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/country'

function CreateCountry() {
	const [post, setPost] = useState([])
	const [isActive, setIsActive] = useState(false)
	const [country, setCountry] = useState([])
	const [service, setService] = useState(false)

	useEffect(() => {
		const getPost = async () => {
			try {
				const res = await axios.get(API_URL)

				if (res.status === 200) {
					setPost(res.data)
					setService(false)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getPost()
	}, [service])

	const handleGetId = async id => {
		setIsActive(true)
		try {
			const res = await axios.get(`${API_URL}/${id}`)
			if (res.status === 200) {
				setCountry(res.data)
			}
		} catch (error) {
			console.log(error)
		}
	}
	console.log(country)

	// const submitPut = async () => {
	//   try{
	//     const res = await axios.put(`${API_URL}/${id}`, {
	//       name: country.name,
	//       avatar: country.avatar
	//     });

	//     if(res.status === 200) {
	//       setIsActive(false)
	//       const ubdatePost = await axios.get(API_URL)
	//       setPost(ubdatePost.data)
	//     }

	//   } catch(error) {
	//     console.log(error);
	//   }
	// }

	const hundleUbdate = async () => {
		try {
			const res = await axios.put(`${API_URL}/${country.id}`, country)

			if (res.status === 200) {
				setIsActive(false)
				setService(true)
				alert('Success Updated post')
			}
			console.log(res)
		} catch (error) {
			alert('Something wrong is server')
		}
	}

	const handleDelete = async id => {
		let check = window.confirm('Вы сереьно хотите уделять???')
		if (check) {
			try {
				const res = await axios.delete(`${API_URL}/${id}`)
				if (res.status === 200) {
					setService(true)
          alert("Thank you❤️")
				}
				console.log(res)
			} catch (error) {
				alert('Error something wrong how to do solve')
			}
		} else {
      alert("Вы молодцы 🤫🤫")
    }
	}

	// const sumbitDelete = async id => {
	// 	try {
	// 		const res = await axios.delete(`${API_URL}/${id}`)

	// 		if (res.status === 200) {
	// 			const ubdatePost = await axios.get(API_URL)
	// 			console.log(ubdatePost)
	// 		}
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	return (
		<div className='content'>
			<CreatePost clicked={setService} />
			<div className='post'>
				{post.map(item => (
					<Post
						key={item.id}
						data={item}
						ubdate={handleGetId}
						onDelete={handleDelete}
					/>
				))}
			</div>
			{isActive && (
				<div className='overlay'>
					<div className='popup-container'>
						<input
							type='text'
							placeholder='name'
							onChange={e => setCountry({ ...country, name: e.target.value })}
							value={country.name}
						/>
						<input
							type='url'
							placeholder='Image url'
							onChange={e => setCountry({ ...country, avatar: e.target.value })}
							value={country.avatar}
						/>
						<div className='btns'>
							<button onClick={() => hundleUbdate()}>Submit</button>
							<button onClick={() => setIsActive(false)}>Close</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default CreateCountry
