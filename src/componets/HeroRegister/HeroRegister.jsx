import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/_firebase_config";
import { useState } from "react";


const HeroRegister = () => {
    const[registerError,setRegisterError]=useState('')
    const handleOnSubmit=e=>{
        e.preventDefault();
        console.log('submitted form')
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
            setRegisterError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleOnSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button value="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
  {
    registerError && <p>{registerError}</p>
  }
</div>
    );
};

export default HeroRegister;