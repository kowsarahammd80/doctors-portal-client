import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
   
  const { register,  formState: { errors }, handleSubmit } = useForm();
  const [signUpError, setSignUpError] = useState('');

  const navigate = useNavigate()

  const {createUser,  updateUser} = useContext(AuthContext)

  const handleSignUp = (data) => {
      console.log(data)
      setSignUpError('')
      createUser(data.email, data.password)
      .then(result => {
         let user = result.user
          toast.success("Success Your Register")
          const userInfo ={
          displayName: data.name
         }
         updateUser(userInfo)
          .then(() => {

            navigate('/')

          })
           .catch(e => {
            console.error(e.message)
            setSignUpError(e.message)
          })
      })
      .catch(error => console.error(error))
  }

  return (
    <div className='h-[800px] flex justify-center items-center'>

      <div className='w-96 p-7'>

        <h2 className='text-xl text-center mb-6 font-semibold'> Sign Up ! </h2>

        <form onSubmit={handleSubmit(handleSignUp)}>

          <div className="form-control w-full max-w-xs">

            <label className="label"> <span className="label-text">Name</span></label>

            <input type='text' {...register("name", { required: "Your name is required" })} className="input input-bordered w-full max-w-xs" />

            {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}

          </div>

          <div className="form-control w-full max-w-xs">

            <label className="label"> <span className="label-text">Email</span></label>

            <input type='email' {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />

            {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}

          </div>

          <div className="form-control w-full max-w-xs">

           <label className="label"> <span className="label-text">Password</span></label>

             <input type='password' {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6  characters' },
             pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong'} })} className="input input-bordered w-full max-w-xs" />

             {errors.password && <p role="alert" className='text-red-400'>{errors.password?.message}</p>}

           

          </div>

          <input className='btn btn-accent w-full mt-6' value='login' type="submit" />

          { 

          signUpError &&

           <p className='text-red-400'>{signUpError}</p>

          }
          
        </form>

        <p className='mt-2'>New to Doctors Portal <Link className='text-secondary font-semibold' to='/login'>Already have an account</Link> </p>

        <div className="divider">OR</div>

        <button className='btn btn-outline w-full'>CONTINUE WITHE GOOGLE</button>

      </div>

    </div>
  );
};

export default SignUp;