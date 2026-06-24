"use client"

import { Field, useField } from 'formik';
import classNames from 'classnames';
import { JSX } from 'react';
import { FormLabel } from './form-label';

type InputProps = {
    id: string;
    name: string;
    minLength?: number;
    maxLength?: number;
    label: string;
    required?: boolean;
    placeholder?: string;
    rows?: number;
    className?: string;
};

export function FormTextArea({ className, ...props }: InputProps) {
    const [, meta] = useField(props);
    const isInvalid = meta.error && meta.touched;

    return (
        <div className={classNames('relative flex flex-col max-w-full', className)}>
            <FormLabel
            htmlFor={props.id}
            required={props.required}
            label={props.label}
            />
            <Field
            as="textarea"
                className={classNames(
                    "w-full rounded border px-3 py-2 bg-white focus:outline-none focus:ring-0 transition-colors min-h-18 resize-y text-gray-600 text-[18px] ",
                    isInvalid
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-400"
                )}
                {...props}
            />
            {/* {isInvalid && (
                <FormErrorText>{meta.error}</FormErrorText>
            )} */}

        </div>
    )

}