"use client"

import { Form as FormikForm, Formik } from 'formik';
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import * as Yup from 'yup';
import type { AxiosError } from 'axios';
import axios from 'axios';

import { IconCheck, IconX } from '@tabler/icons-react';
import { ContentPanel } from './content';
import { FormRow, FormWrapper } from './forms/form';
import { FormText } from './forms/form-text';
import { FormTextArea } from './forms/form-text-area';
import { FormSelect } from './forms/form-select';
import { Button } from './button';
import FormButton from './forms/form-button';


export function ContactForm({ csrfToken }: { csrfToken?: string }) {
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const [formState, setFormState] = useState<{
        state: 'idle' | 'submitting' | 'submitted';
        message: string | undefined | null;
        isError: boolean;
    }>({
        state: 'idle',
        message: '',
        isError: false
    });
    return (
        <>
            <Formik
                validationSchema={Yup.object({
                    name: Yup.string().max(100, 'Must be 50 characters or less').required('Name is required'),
                    email: Yup.string().email('Invalid email address'),
                    contact_number: Yup.string()
                        .matches(/^(09|\+639)\d{9}$/, 'Invalid phone number format.')
                        .required('Contact number is required'),
                    subject: Yup.string().max(50, 'Must be 100 characters or less').required('Subject is required'),
                    message: Yup.string().max(1000, 'Must be 100 characters or less').required('Message is required')
                })}
                initialValues={{
                    // csrf_token: csrfToken,
                    name: '',
                    email: '',
                    contact_number: '',
                    subject: '',
                    message: ''
                }}
                onSubmit={async (values, { resetForm }) => {
                    setFormState((prev) => ({ ...prev, state: 'submitting' }));

                    // if (executeRecaptcha) {
                    //     try {
                    //         const gReCaptchaToken = await executeRecaptcha('enquiryFormSubmit');
                    //         const response = await axios.post('/api/contact', { ...values, gReCaptchaToken });

                    //         setFormState((prev) => ({ ...prev, state: 'submitted', message: response.data.message }));

                    //         resetForm();
                    //     } catch (err) {
                    //         const error = err as AxiosError<{ message: string }>;

                    //         setFormState((prev) => ({
                    //             ...prev,
                    //             state: 'submitted',
                    //             message: error.response?.data.message,
                    //             isError: true
                    //         }));
                    //     }
                    // }
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <FormikForm>
                        <FormWrapper>
                            {formState.state === 'submitted' && (
                                <span>
                                    {formState.isError ? <IconCheck className='text-green-500 w-5 h-5' /> :
                                        <IconX className='text-green-500 w-5 h-5' />}
                                </span>
                            )}
                            <p>{formState.message}</p>
                        </FormWrapper>
                        <FormRow>
                            <div className="col-span-12 py-1.5">
                                <FormText id="name" name="name" label="Name" type="text" required />
                            </div>
                            <div className="col-span-12 py-1.5">
                                <FormSelect
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    placeholder="Select a subject"
                                    data={[
                                        { value: 'General Inquiry', label: 'General Inquiry' },
                                        { value: 'Recruitment Inquiry', label: 'Recruitment Inquiry' },
                                        { value: 'Public Affairs', label: 'Public Affairs' },
                                        { value: 'Operational Updates', label: 'Operational Updates' },
                                        { value: 'Technical Support', label: 'Technical Support' },
                                        { value: 'Family Support', label: 'Family Support' },
                                        { value: 'Training and Education', label: 'Training and Education' },
                                        { value: 'Community Outreach', label: 'Community Outreach' }
                                    ]}
                                    required />
                            </div>
                            <div className="col-span-6 py-1.5">
                                <FormText id="email" name="email" label="Email" type="text" />
                            </div>
                            <div className="col-span-6 py-1.5">
                                <FormText id="contact_number" name="contact_number" label="Contact Number" type="text"
                                    required />
                            </div>
                            <div className="col-span-12 py-1.5">
                                <FormTextArea id="message" name="message" label="Message" rows={5}
                                    required />
                            </div>
                        </FormRow>
                         <p className='text-[12px] text-light py-1.5  '>By clicking the "Submit Inquiry" button, you consent to the Philippine Marine Corps' collection, storage, and processing of your personal information. The data collected will only be used for the purpose indicated in the subject matter of your query and will only be accessed by duly authorized personnel.</p>
                             <FormButton disabled={!isValid} loading={isSubmitting}>
                                Submit Inquiry
                             </FormButton>
                    </FormikForm>
                )}
            </Formik>
        </>
    )
}