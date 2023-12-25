import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const SignUp = () => {
    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowconfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image : ""
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowconfirmPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const {name , value} = e.target
    setData((prev)=>{
        return{
            ...prev,
            [name] : value
        }
    })
  }

  const handleUploadProfileImage = async(e) => {
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data)

    setData((prev)=> {
        return{
            ...prev,
            image : data
        }
    } )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {firstName,email,password,confirmPassword} = data
    if(firstName && email && password && confirmPassword){
        if(password === confirmPassword){
            alert("Successfully");
            navigate('/login')
        }
        else{
            alert("Password Not match")
        }
    }
    else{
        alert("Please Enter required field")
    }
  }

  return (
    <div>
      <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
            <img src={data.image ? data.image : loginSignupImage} className="w-full h-full" />

            <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-400 bg-opacity-60 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
            </label>
          </div>

          <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type={"text"}
              id="firstName"
              name="firstName"
              className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded-xl focus-within:outline focus-within:outline-blue-300"
              value={data.firstName}
              onChange={handleOnChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type={"text"}
              id="lastName"
              name="lastName"
              className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded-xl focus-within:outline focus-within:outline-blue-300"
              value={data.lastName}
              onChange={handleOnChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type={"text"}
              id="email"
              name="email"
              className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded-xl focus-within:outline focus-within:outline-blue-300"
              value={data.email}
              onChange={handleOnChange}
            />

            <label htmlFor="password">Password</label>
            <div className="flex mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded-xl focus-within:outline focus-within:outline-blue-300">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className=" w-full bg-slate-200 rounded border-none outline-none"
                value={data.password}
                onChange={handleOnChange}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="flex mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded-xl focus-within:outline focus-within:outline-blue-300">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className=" w-full bg-slate-200 rounded border-none outline-none"
                value={data.confirmPassword}
                onChange={handleOnChange}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <button className="max-w-[150px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center rounded-full mt-4">
              Sign Up
            </button>
          </form>
          <p className="text-left text-sm mt-2">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-red-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
