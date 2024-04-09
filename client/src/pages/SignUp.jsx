import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import pic from "../images/clip-message.png"
import "../styles/SignUp.css"

function SignUp() {
    const [data, setData] = useState({
		name: "",
        contact_number: "",
		role: "",
		email: "",
		password: "",
        verified: 0,
	});
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:9000/api/hr/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			setError(error.response.data.message);
		}
	};

    return (
      <div className="SignUp">
        <div className="SignUP-Container">
            <div className='Title'>Devsinc</div>
            <div className="Headings">
                <div>JOB PORTAL</div>
                <div>&</div>
                <div>ONBOARDING</div>
            </div>
            <div className="Welcome">Welcome! Please login to your account</div>
            <div className="SignUp-Form">
                <form onSubmit={handleSubmit}>
                    <div className="signup-input-div">
                        <input className="user-inp" type='text' placeholder='Name' name='name' value={data.name} onChange={handleChange} required />
                        <input className="user-inp" type='email' placeholder='Email' name='email' value={data.email} onChange={handleChange} required />
                        <input className="user-inp" type='text' placeholder='Role' name='role' value={data.role} onChange={handleChange} required />
                        <input className="user-inp" type='text' placeholder='Contact Number' name='contact_number' value={data.contact_number} onChange={handleChange} required />
                        <input className="user-inp" type='password' placeholder='Password' name='password' value={data.password} onChange={handleChange} required />
                        {error && <div className="custom-error">{error}</div>}
                        <button className='login-btn' type="submit">Sign Up</button>
                    </div>
                </form>
                <Link className="Link" to="/login"><button className='signup-btn'>Log in</button></Link>
            </div>
        </div>
        <div className='Img-Part'>
            <img src={pic} alt="Clip Message" />
        </div>
      </div>
    );
}
  
export default SignUp;
