import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    let signup = false;
    useEffect(() => {
        // Get the current URL
        const currentUrl = window.location.href;
    
        // Now, you can use the currentUrl in a condition
        if (currentUrl === 'http://localhost:5173/signup') {
          // Do something when the URL matches a specific condition
          signup=true;
        //   console.log(`Page is : ${currentUrl}`);
        //   console.log(`signup is : ${signup}`);
        }
      }, []);
      
    return(
        <>
        <div className="flex-overflow">
            <div className="flex bg-gray-400 w-screen justify-center">
                <div className="flex flex-col">
                    <h1 className="font-sans text-lg font-medium justify-center text-center">
                    {
                        signup ? <Link to='/signup'>Go to Sign Up</Link> :  <Link to='/login'>Go to Log In</Link>
                    }    
                    </h1>
                    <form action="" className="flex flex-col">
                    <input className="justify-center p-2 m-2" type="email" placeholder="Email" autoComplete="username" required/>
                    <input className="justify-center p-2 m-2" type="password" placeholder="Password" autoComplete="current-password" required/>
                    <button className="bg-cyan-700 text-white text-xs justify-end fitems-end m-2 p-2" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;