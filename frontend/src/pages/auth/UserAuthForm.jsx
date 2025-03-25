import { Link } from "react-router-dom";
import { InputBox } from "@/components/ui/InputBox";
const UserAuthForm = ({ type }) => {
  return (
    <section className='h-cover flex items-center justify-center font-satoshi'>
      <form action='' className='w-[80%] max-w-[400px]'>
        <h1 className='text-4xl capitalize text-center'>{type == "Sign In" ? "Welcome Back" : "Join the Club"}</h1>

        {type != "Sign In" ? <InputBox /> : ""}
      </form>
    </section>
  );
};
export default UserAuthForm;
