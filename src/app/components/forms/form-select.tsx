"use client"

import { Field, useField } from 'formik';
import classNames from 'classnames';
import { JSX } from 'react';
import { FormErrorText } from './form';
import { FormLabel } from './form-label';

type InputProps = {
  id: string;
  name: string;
  helpText?: string | JSX.Element;
  minLength?: number;
  maxLength?: number;
  data: {
    label: string;
    value: string
  }[];
  label: string;
  required?: boolean;
  placeholder?: string;
  as?: string;
  className?: string;
};

export function FormSelect({ className, ...props }: InputProps) {
  const [, meta] = useField(props);

  const isInvalid = meta.error && meta.touched;

  return (
    <div className={classNames('relative flex flex-col max-w-full', className)}>

      <FormLabel
        htmlFor={props.id}
        required={props.required}
        label={props.label}
      />
      <div className="relative">
        <Field
          as="select"
          className={classNames(
            "w-full rounded border px-3 py-2 bg-white focus:outline-none focus:ring-0 transition-colors appearance-none text-[18px] text-gray-600",
            isInvalid
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-400 "
          )}
          {...props}
        >
          <option value="" disabled className=''>
            {props.placeholder || 'Select an option'}
          </option>

          {props.data.map((option) => (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          ))}
        </Field>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      {isInvalid && (
        <FormErrorText >{meta.error}</FormErrorText>
      )}

    </div>
  );

}