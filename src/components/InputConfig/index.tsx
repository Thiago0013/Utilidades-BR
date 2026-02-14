import React from "react";

type InputConfigProps = {
    labelText: string;

} & React.ComponentProps<'input'>

export function InputConfig({labelText, ...props}:InputConfigProps){
    return(
        <>
            <label className="flex flex-col text-gray-800">
                {labelText}
                <input
                    className="p-2 text-black
                        focus:outline-none
                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                        border-b border-gray-400 rounded-lg px-4 py-2 outline-none
                        transition-all duration-300 ease-in-out
                        focus:ring-4 focus:ring-blue-500/30 focus:border-blue-5"
                    {...props}
                />
            </label>
        </>
    )
}