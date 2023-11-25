/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {
         colors: {
          'primary': "#1476ff",
           'primary-light': "#a0c8ff",
           'secondary': "#f3f5ff",
           'light': "#f9faff",
         },
       },
     },
     plugins: [],
   }