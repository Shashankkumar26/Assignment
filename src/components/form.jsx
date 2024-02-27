// Filename - Form.js
import './form.css';
import { useState } from "react";
import search from "./search.png"
export default function Form() {
	// States for registration
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [inputError, setInputError] = useState('Must be at least 8 characters');
	const [emailError, setemailError] = useState('Email should be valid');

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		const value = e.target.value;
		setSubmitted(false);
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			setemailError('Email should be valid');
		}
		else {
			setemailError(null);
		}
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		const value = e.target.value;
		setSubmitted(false);

		if (value.length < 8) {
			setInputError('Must be at least 8 characters');
		} else {
			setInputError(null);
		}
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		// if (password.length >= 5) {
		// 	// submit form
		//   } else {
		// 	setInputError('Input must be at least 5 characters');
		//   }
		if (name === "" || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) || password.length < 8) {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}
			>
				<h1>User {name} successfully registered!!</h1>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}
			>
				<h1>Please enter all the fields correctly</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<div>
				<h1 className='text-[20px] font-bold'>Sign up</h1>
			</div>




			<form className='formdata'>

				<div className='mt-2'><label className="label text-[14px] font-bold">Name<sup>*</sup><br /></label>

					<input
						onChange={handleName}
						className="input mt-1 rounded-md  border-gray-300 border-2 hover:border-gray-500 focus:outline-none focus:border-gray-500 px-4 py-4 "
						placeholder='Enter your name'
						value={name}
						type="text"

					/>
				</div>

				<div className='mt-3'><label className="label text-[14px] font-bold mt-2">Email<sup>*</sup></label>
					<br />
					<input
						onChange={handleEmail}
						className="input mt-1 rounded-md  border-gray-300 border-2 hover:border-gray-500 focus:outline-none focus:border-gray-500 px-4 py-4"
						placeholder='Enter your email'
						value={email}
						type="email"
					/>
					{/* { <div style={{ color: 'black' }}>{emailError}</div>} */}
				</div>

				<div className='mt-3'><label className="label text-[14px] font-bold ">Password<sup>*</sup></label>
					<br />
					<input

						onChange={handlePassword}
						className="input mt-1 rounded-md  border-gray-300 border-2 hover:border-gray-500 focus:outline-none focus:border-gray-500 px-4 py-4"
						placeholder='Create password'
						value={password}
						type="password"
					/>
					{<div className="text-[12px] mt-1 text-gray-400">{inputError}</div>}
				</div>



				<button
					onClick={handleSubmit}
					className="btn mt-4 rounded-md bg-[#C0FF72]  py-2 transition duration-300 ease-in-out hover:bg-[#9be15d] hover:shadow-md"
					type="submit"
				>
					Create Account
				</button>


			</form>

			<div className='w-[90%] py-2 flex justify-center items-center border-2 gap-2 rounded-md transition duration-300 ease-in-out hover:shadow-md cursor-pointer'>
				<img src={search} alt="" className='h-[20px] w-auto' />
				<p className='text-[14px] text-black font-bold'>Signup with Google</p>
			</div>

			<div className="flex justify-center items-center w-[90%] gap-2 py-2" >
               <p className=' text-[13px] text-gray-400 '>Already have an account?</p>
			   <span className='text-[13px] font-bold cursor-pointer'> Log in</span>
			</div>


			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>
		</div>
	);
}
