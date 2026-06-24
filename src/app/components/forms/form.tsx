"use client"

import { HTMLAttributes, JSX, ReactNode } from "react"
import { Field, useField } from 'formik';

export function FormWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full">{children}</div>
    )
}

export function FormRow({ children }: { children: ReactNode }) {
    return (
        <div className="relative grid grid-cols-12 flex-row flex-wrap gap-x-6">{children}</div>
    )
}


export function FormGroup({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col max-w-full ">{children}</div>
    )
}

export function FormErrorText({ children }: { children: ReactNode }) {
    return (
        <p  className="inline-block text-[16px] tracking-wide text-red-600 font-normal mb-0 mt-0.5">{children}</p>
    )
}

