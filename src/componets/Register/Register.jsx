import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/_firebase_config";
import { useState } from "react";
import { FiEyeOff,FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";





const Register = () => {
    const[showPassword,setShowPassword]=useState(false);
    const[registerError,setRegisterError]=useState('');
    const[success,setSuccess]=useState('');
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const accepted=e.target.terms.checked
        console.log(name,email,password,accepted)
        if(password.length<6){
            setRegisterError('Password should be 6 character or longer')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have  at least one upper case character')
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept Our terms and condition');
            return;
        }
        setRegisterError('');
        setSuccess('')
        //create a user
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('user created successfully')
            //update profile
            updateProfile(result.user,{
                displayName:name,
                photoURL:"https://example.com/jane-q-user/profile.jpg"
            })
            .then(()=>{
                console.log('Profile Updated')
            })
            .catch()
            //send verification email
            sendEmailVerification(result.user)
            .then(()=>{
                alert('please check your email and verify your email')
            })
        })
        .catch(error=>{
            console.error(error)
            setRegisterError(error.message)
        })
    }
    return (
        <div className=" ">
            <div className="mx-auto w-full lg:w-1/2 md:w-3/4">
            <h3 className="mb-8">register this</h3>
            <form onSubmit={handleRegister}>
                <input className="mb-4 border border-3 border-green-400 w-full    py-2   px-4" type="text" placeholder="Your Name"  name="name" id="" required />
                <input className="mb-4 border border-3 border-green-400 w-full    py-2   px-4" type="email" placeholder="Email Address"  name="email" id="" required />
                <br />
                <div className="mb-4 relative border border-3 border-green-400">
                <input className=" w-full py-2 px-4" type={showPassword?'text':"password"} placeholder="Password" name="password" id="" required />
                <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>
                    {
                        showPassword?<FiEye />:<FiEyeOff />
                    }
                </span>
                </div>
                <br />
                <div className="">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">Accept our <a href=""></a>Terms and Condition</label>
                </div>
                <br />
                <input className="btn btn-secondary mb-4 w-full" type="submit" value="register" />
            </form>
            {
                  registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
            <p>Already have an account? <Link className="underline text-green-400" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;