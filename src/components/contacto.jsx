/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState } from 'react';

export default function Contacto() {

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const HandleSumbit=(e)=>{
    e.preventDefault();
    CheckInputs();
    
  }

  function CheckInputs() {

    const items = document.querySelectorAll(".item");

    for (const item of items) {
      if (item.value === "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          item.classList.remove("error");
          item.parentElement.classList.add("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }

      })
    }



  }
  function formSubmit() {
    // e.preventDefault();

    const items = document.querySelectorAll(".item");

    for (const item of items) {
      console.log(item + "esto");
      
      if (item.value !== "") {
        setMsg("Send Successfully!")
      } else {
        setError("All field are required!")
      }
    }
  }

  return (
    <form className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8' onSubmit={HandleSumbit}>

      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-[1185px]:flex max-[1185px]:flex-col ">

          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>

            <div className="mt-2 field">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 item"
              />
              <div className="error-txt">Nombre can´t be blank</div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Apellido
            </label>

            <div className="mt-2 field">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 item"
              />
              <div className="error-txt">Apellido can´t be blank</div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>

            <div className="mt-2 field">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 item"
              />
              <div className="error-txt">Email can´t be blank</div>
            </div>

          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Asunto:
            </label>

            <div className="mt-2 field">
              <textarea
                required
                className="block w-full h-60 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 item"
              />
              <div className="error-txt">Text can´t be blank</div>
            </div>

          </div>


        </div>
       

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={formSubmit}
          >
            Enviar
          </button>
        </div>
        <p className="pt-2 text-end">
          {
            msg !== "" ?
              <span className="yes">{msg} </span> :
              <span className="not">{error} </span>
          }
        </p>
      </div>


    </form>
  )
}
