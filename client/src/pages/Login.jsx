import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import pic from "../images/clip-message.png"
import "../styles/Login.css"
import { Link } from "react-router-dom";

function Login({ setUser }) {
    const [data, setData] = useState({ 
        email: "", 
        password: "",
    });
	const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://recruitment-and-onboarding-backend.vercel.app/api/hr";
			const { data: res } = await axios.post(url, data);			
            setUser(res.data);

            if (res.data.role === "HR") {
                window.location = '/hr';
            } else {
                window.location = '/onboarding';
            }
		} catch (error) {
			setError(error.response.data.message);
		}
	}

    return (
      <div className="Login">
        <div className="Input-Container">
            <div className="Title">Devsinc</div>
            <div className="Headings">
                <div>JOB PORTAL</div>
                <div>&</div>
                <div>ONBOARDING</div>
            </div>
            <div className="Welcome">Welcome! Please login to your account</div>
            <div className="Input-Form">
                <form className='Form-Div' onSubmit={handleSubmit}>
                    <div className="input-div">
                        <input className="custom-user-inp" type='email' placeholder='Email' name='email' value={data.email} onChange={handleChange} required />
                        <input className="custom-user-inp" type='password' placeholder='Password' name='password' value={data.password} onChange={handleChange} required />
                        {error && <div className="custom-error">{error}</div>}
                    </div>
                    <button className='login-btn' type="submit">Login</button>
                </form>
                <Link className="Link" to="/signup"> <button className='signup-btn'>Sign Up</button></Link>
            </div>
        </div>
        <div className="Img-Part">
            <img src={pic} />
        </div>
      </div>
    );
}
  
  export default Login;