import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/input";

const Form = ({isSignInPage = true}) => {

  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName : ''
    }),
    email : '',
    password : ''
  })

  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
     <form className="flex flex-col items-center w-full">
      {!isSignInPage && <Input
        label="Full name"
        name="name"
        placeholder="Enter your full name"
        className="mb-6"
        value={data?.fullName}
        onChange={(e) => setData({...data, fullName:e.target.value})}
      />}
      <Input
        label="Email address"
        name="email"
        placeholder="Enter your email"
        className="mb-6"
        value={data?.email}
        type="email"
        onChange={(e) => setData({...data, email:e.target.value})}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        className="mb-6"
        value={data?.password}
        onChange={(e) => setData({...data, password:e.target.value})}
      />

      <Button label={isSignInPage ? 'Sign in' :"Sign up"} type="submit" className="w-1/2 mb-2"/>

      </form>
      <div>{isSignInPage ? "Didn't have an account": "Already have an account"}<span className="text-primary cursor-pointer underline">{isSignInPage ? 'Sign up' : 'Log in'} </span></div>
    </div>
  );
};

export default Form;
