// "use client"

// import { useState } from "react";
// import { FormLabel } from "./form-label";


// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
//     type: string;
//     className?: string;
//     placeholder?: string;
//     required?: boolean;
//     name?: string;
// }

// export function FormInput({ type, className, placeholder, required, name, ...props }: InputProps) {
//     const [isInvalid, setIsInvalid] = useState(false);

//     const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {

//         if (required && !e.target.value.trim()) {
//             setIsInvalid(true);
//         }

//         if (props.onBlur) props.onBlur(e);
//     };

//     const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {

//         if (e.currentTarget.value.trim()) {
//             setIsInvalid(false);
//         }
        
//         if (props.onInput) props.onInput(e);
//     };

//     const borderValidationClass = isInvalid
//         ? "border-red-500 focus:border-red-500"
//         : "border-gray-300 focus:border-blue-500";

//     return (
//         <div className="w-full flex flex-col py-1.5">
//             {type === "text" ? (
//                 <>
//                     <FormLabel required={required}>{name}</FormLabel>
//                     <input
//                         type="text"
//                         required={required}
//                         name={name}
//                         onBlur={handleBlur}
//                         onInput={handleInput}
//                         className={`w-full p-2 text-md border focus:outline-none rounded-sm h-11 font-normal text-black-7 px-3 transition-colors duration-150 ${borderValidationClass} ${className || ""}`}
//                         placeholder={placeholder}
//                         {...props}
//                     />
//                 </>
//             ) : type === "textarea" ? (
//                 <>
//                     <FormLabel required={required}>{name}</FormLabel>
//                     <textarea
//                         required={required}
//                         onBlur={handleBlur}
//                         name={name}
//                         onInput={handleInput}
//                         className={`w-full p-2 text-md border min-h-30 font-normal rounded-sm text-black-7 px-3 focus:outline-none transition-colors duration-150 ${borderValidationClass} ${className || ""}`}
//                         placeholder={placeholder}
//                         {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
//                     />
//                 </>
//             ) : type === "search" ? (
//                 <input
//                     type="search"
//                     required={required}
//                     onBlur={handleBlur}
//                     onInput={handleInput}
//                     className={`w-full h-11 text-slate-700 px-3 font-normal rounded-sm text-md border focus:outline-none transition-colors duration-150 ${borderValidationClass} ${className || ""}`}
//                     placeholder={placeholder || "Enter keyword"}
//                     {...props}
//                 />
//             ) : null}

//             {isInvalid && (
//                 <p className="mt-0.75 text-[16px] text-red-600  mb-0">
//                     {name} is required
//                 </p>
//             )}
//         </div>
//     );
// }

