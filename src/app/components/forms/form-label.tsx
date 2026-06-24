import classNames from "classnames";

interface FormLabelProps {
    htmlFor: string;
    label: string;
    required?: boolean;
    className?: string;
}

export function FormLabel({ htmlFor, label, required, className }: FormLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={classNames(
                "mb-0.75 font-medium text-darker text-[18px]",
                { "after:content-['*'] after:inline-block after:ml-1.5 after:text-red-600 after:text-[18px] after:leading-none": required },
                className
            )}
        >
            {label}
        </label>

    )
}