import React, { useState } from "react";


export const InputBox = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisible, setpasswordVisible] = useState(false);

  return (
    <section className='py-3'>
      <div className='relative w-[100%]'>
        <input
          className='p-3 w-full bg-slate-300/25 active:bg-white focus:bg-white rounded-lg pl-10 focus:ring-0'
          name={name}
          type={type == "password" ? (passwordVisible ? "text" : "password") : type}
          id={id}
          defaultValue={value}
          placeholder={placeholder}
        />
        <i className={"absolute left-4 top-1/2 -translate-y-1/2 text-gray-700/50 ph " + icon}></i>

        {
          type == "password" ?
          <i className={
              "ph ph-eye" + (!passwordVisible ? " ph-eye-closed" : "") + " absolute left-[auto] right-4 top-1/2 -translate-y-1/2 text-gray-700/50 cursor-pointer"}
            onClick={() => setpasswordVisible((currentVal) => !currentVal)}></i>
         : ""
        }
      </div>
    </section>
  );
};

export default InputBox;
