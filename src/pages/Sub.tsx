import {useState} from 'react'
import MainContainer from '../components/MainContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Soumission = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [image, setImage] = useState('')
    const [size, setSize] = useState(0)
    const [cracks, setCracks] = useState('')


	const submitHandler = () => {
		console.log('submit')
	}

    return (
			<MainContainer>
				<Header />
				<div className='container'>
					<div className='d-flex justify-content-center align-items-center flex-column'>
						<div>
							<h1 className=''>Soumission</h1>
						</div>
						<div>
							<form>
								<div className='form-group my-2'>
									<label htmlFor='name'>Name</label>
									<input
										type='text'
										className='form-control'
										id='name'
										value={name}
										onChange={(e) => setName(e.target.value)}
										aria-describedby='nameHelp'
									/>
								</div>
								<div className='form-group my-2'>
									<label htmlFor='email'>Email address</label>
									<input
										type='email'
										className='form-control'
										id='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='form-group my-2'>
									<label htmlFor='phone'>Phone</label>
									<input
										type='tel'
										/* pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' */
										className='form-control'
										id='phone'
										name='phone'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										aria-describedby='phoneHelp'
									/>
								</div>
								<div className='form-group my-2'>
									<label htmlFor='phone'>City</label>
									<input
										type='text'
										className='form-control'
										id='city'
										name='city'
										value={city}
										onChange={(e) => setCity(e.target.value)}
										aria-describedby='cityHelp'
									/>
								</div>
								<div className='form-group my-2'>
									<label htmlFor='size'>drive way size (scare feet)</label>
									<input
										type='number'
										pattern='([0-9]{3})-[0-9]{2}-[0-9]{3}'
										className='form-control'
										id='size'
										name='size'
										value={size}
										onChange={(e) => setSize(parseInt(e.target.value))}
										placeholder='150'
										aria-describedby='sizeHelp'
									/>
								</div>
								<div className='form-group my-2'>
									<div className='my-2'>
										<label htmlFor='cracks'>Cracks</label>
									</div>
									<div className='d-flex align-items-center flex-column'>
										<div className='d-flex justify-content-between w-50'>
											<label htmlFor='cracks' className=''>
												little to no cracks
											</label>
											<input
												type='radio'
												id='cracks'
												name='cracks'
												value={cracks}
												onChange={(e) => setCracks(e.target.value)}
												aria-describedby='cracksHelp'
												className=''
											/>
										</div>
										<div className='d-flex justify-content-between w-50'>
											<label htmlFor='cracks'>Medium cracks</label>
											<input
												type='radio'
												id='cracks'
												name='cracks'
												value={cracks}
												onChange={(e) => setCracks(e.target.value)}
												aria-describedby='cracksHelp'
												className=''
											/>
										</div>
										<div className='d-flex justify-content-between w-50'>
											<label htmlFor='cracks'>Large cracks</label>
											<input
												type='radio'
												id='cracks'
												name='cracks'
												value={cracks}
												onChange={(e) => setCracks(e.target.value)}
												aria-describedby='cracksHelp'
												className=''
											/>
										</div>
									</div>
								</div>
								<div className='form-group'>
									<label htmlFor='imageInput'>Images</label>
									<input
										type='file'
										accept='image/*'
										className='form-control'
										id='imageInput'
										value={image}
										onChange={(e) => setImage(e.target.value)}
										aria-describedby='imageHelp'
									/>
								</div>
							</form>
							<button onClick={() => submitHandler()} className='btn btn-primary m-2'>
								Submit
							</button>
							<div className='m-5'>
								<div>{name}</div>
								<div>{email}</div>
								<div>{phone}</div>
								<div>{city}</div>
								<div>{size}</div>
								<div>{cracks}</div>
								<div>{image}</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</MainContainer>
		)
}

export default Soumission