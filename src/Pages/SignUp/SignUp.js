import React from 'react';

import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

import signupImage from "../../assets/register.e58071de.png";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const handleSignup = data => {
        console.log(data);
    }
    return (
        <div className="hero mt-6 mb-24 w-full mx-auto">
        <form onSubmit={handleSubmit(handleSignup)}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                <div className="text-center lg:text-left sm:w-full">
                    <h1 className="text-5xl font-bold text-center mb-8">Sign Up!</h1>
                    <img src={signupImage}></img>
                </div>
                <div className="card  sm:w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="name"{...register("name",{
                                 required:"Your Name is required",
                            })
                            } placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text"{...register("phone",{
                                 required:"phone number is required",
                                 minLength:{
                                    value:11,
                                    message:"Please valid Phone number"
                                 },
                                 maxLength:{
                                    value:11,
                                    message:"Please valid Phone Number",
                                 }

                            })
                            } placeholder="Phone Number" className="input input-bordered" />
                         {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Photo</span>
                            </label>
                            <input type="file"{...register("photo",{
                                 required:"Photo selection is Required is required",
                            })
                            } placeholder="Photo" className="input input-bordered" />
                            {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"{...register("email",{
                                 required:"Email Address is required",
                            })
                            } placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"{...register("password",{
                                required:"password is required",
                                minLength:{
                                    value:6,
                                    message:"Minium Password Length 6 Charecter"
                                },
                                maxLength:{
                                    value:20,
                                    message:"Maximum 20 characters"
                                },
                                pattern:{
                                    value:/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                                    message:"At least one uppercase character,At least one lowercase character,At least one digit,At least one special character"
                                }
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                    </div>
                    <p className='text-xl '>Already Login SharifsTrales <Link to="/login" className='text-teal-600 font-bold'>Please log  In</Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        
                        <div className="divider">OR</div>
                        
                    </div>
                    <div className="form-control m-6">
                            <button className="btn btn-primary" type='submit'>Google</button>
                        </div>

                </div>
            </div>
        </form>
    </div>
    );
};

export default SignUp;