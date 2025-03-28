import { Link } from "react-router-dom";
import { InputBox } from "@/components/ui/InputBox";
import AnimatedContent from "@/components/with-motion/AnimatedContent";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "@/common/session";


const UserAuthForm = ({ type }) => {

  const userAuthThroughServer = (serverRoute, formData) => {

    axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        // console.log(data)
        storeInSession("user", JSON.stringify(data));

        console.log(sessionStorage);
      })

      .catch(({ response }) => {
        toast.error(response.data.error);
      })
    }


  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type == "Sign In" ? "/user/login" : "/user/register";

    // eslint-disable-next-line no-useless-escape
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    // form data
    // eslint-disable-next-line no-undef
    let form = new FormData(formElement);

    console.log(form);

    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    console.log(formData);

    let { fullname, email, password } = formData;

    // form validation
    if (fullname) {
      if (fullname.length < 5) {
        return toast.error("Full name is not short.");
      }
    }
    if (email) {
      if (!email.length) {
        return toast.error("Email is invalid.");
      }
      if (!emailRegex.test(email)) {
        return toast.error("Invalid email.");
      }
    }
    if (password) {
      if (!password.length) {
        return toast.error("Password must be 8 characters long.");
      }
      if (!passwordRegex.test(password)) {
        return toast.error(
          "Password should be 6 to 20 letters long with a numeric, 1 lowercase and 1 uppercase letter."
        );
      }
    }

    userAuthThroughServer(serverRoute, formData);
  };


  return (
    <AnimatedContent>
      <section className='h-cover flex items-center justify-center font-satoshi mt-8'>
        <Toaster />
        <form action='' id="formElement" className='w-[80%] max-w-[400px]'>
          <h1 className='text-2xl md:text-3xl capitalize text-center font-bold'>
            {type == "Sign In" ? "Welcome Back" : "Join the Club"}
          </h1>

          <div className='flex items-center justify-center space-x-4 cursor-pointer py-3'>
            <span className='p-4 border border-gray-300 rounded-full hover:drop-shadow-sm'>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 48 48'>
                <path
                  fill='#fbc02d'
                  d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'></path>
                <path
                  fill='#e53935'
                  d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'></path>
                <path
                  fill='#4caf50'
                  d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'></path>
                <path
                  fill='#1565c0'
                  d='M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'></path>
              </svg>
            </span>
            <span className='p-4 border border-gray-200 rounded-full hover:drop-shadow-sm'>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='25' height='25' viewBox='0 0 30 30'>
                <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
              </svg>
            </span>
            <span className='p-4 border border-gray-200 rounded-full hover:drop-shadow-sm'>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 50 50'>
                <path d='M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z'></path>
              </svg>
            </span>
          </div>

          <div className='relative w-full flex items-center gap-2 my-2 opacity-10 uppercase text-black font-bold'>
            <hr className='w-1/2 border-black' />
            <p>or</p>
            <hr className='w-1/2 border-black' />
          </div>

          {type != "Sign In" ? <InputBox name='fullname' type='text' placeholder='Full Name' icon='ph-user' /> : ""}
          <InputBox name='email' type='email' placeholder='Email' icon='ph-at' />
          <InputBox name='password' type='password' placeholder='Password' icon='ph-key' />

          {/* Login Authentication - Link */}
          <span className='flex justify-center items-center'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='mt-6 rounded-md bg-pink-800 px-6 py-2.5 text-white transition-colors text-tinyhover:bg-pink-800/80'>
              {type.replace("Join the Club", "Sign Up")}
            </button>
          </span>

          {type == "Sign In" ? (
            <p className='mt-8 text-gray-800 text-base text-center'>
              Don't have an account?
              <Link to='/user/register' className='underline text-pink-700 text-base ml-1'>
                Register here
              </Link>
            </p>
          ) : (
            <p className='mt-8 text-gray-800 text-base text-center'>
              Already a member?
              <Link to='/user/login' className='underline text-pink-700 text-base ml-1'>
                Sign In here
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimatedContent>
  );
};
export default UserAuthForm;
