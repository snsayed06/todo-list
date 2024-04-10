// Debounce on input type change
// import React, { useState, useEffect } from "react";

// const Debounce_Throttle = () => {
//   const [input, setInput] = useState("");

//   useEffect(() => {

//     const timer = setTimeout(()=>{
//       console.log("input", input);
//     },1000)
//     return () => {
//       clearTimeout(timer)
//     }
//   }, [input]);

//   const inputHandler = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <div>
//       <div>
//         <input value={input} onChange={(e) => inputHandler(e)} />
//       </div>
//     </div>
//   );
// };
// export default Debounce_Throttle;

// debounce for screen resize change /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";

// const Debounce_Throttle = () => {
//   const [input, setInput] = useState("");

//   const debounce = (func, delay) => {
//     let timeoutId;

//     return (...args) => {
//       // Clear the previous timeout if it exists
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }

//       // Set a new timeout to execute the function after the specified delay
//       timeoutId = setTimeout(() => {
//         func(...args); // Call the function with the provided arguments
//       }, delay);
//     };
//   };

//   const test = () => {
//     console.log("resize", window.innerWidth);
//   };

//   // Wrap test function with debounce to delay execution
//   const debouncedTest = debounce(test, 1000); // Adjust delay time (in milliseconds) as needed

//   useEffect(() => {
//     window.addEventListener("resize", debouncedTest);

//     return () => {
//       window.removeEventListener("resize", debouncedTest);
//     };
//   }, [debouncedTest]); // Include debouncedTest in dependency array to ensure it's updated correctly

//   const inputHandler = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={input} onChange={(e) => inputHandler(e)} />
//       </div>
//     </div>
//   );
// };

// export default Debounce_Throttle;
