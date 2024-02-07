import React from 'react'

const UseInfo = ({ info }) => {
	return (
		<div>
			<img src={info.avatar} />
			<div className='text'>
				<h2>
					{info.last_name} {info.first_name}
				</h2>
				<p>{info.email}</p>
			</div>
		</div>
	)
}

export default UseInfo
