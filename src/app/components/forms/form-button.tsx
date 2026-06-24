import { ButtonLoader } from "../button-loader";
import classNames from "classnames";

type ButtonProps = {
    loading?: boolean;
    disabled?: boolean;
    children: string;
    type?: 'button' | 'submit';
};

export default function FormButton({ loading, disabled, children, type = 'submit', }: ButtonProps) {

    const isButtonDisabled = disabled || loading
    return (
        <button type={type} disabled={loading || disabled} className={classNames
            (
                "text-[16px] relative flex flex-row items-center p-4 rounded-sm h-9.5",
                {
                    "bg-gray-200 border-gray-200 text-light" :isButtonDisabled,
                    "cursor-pointer hover:bg-secondary-400 bg-secondary-500 text-white" : !isButtonDisabled
                }
            )
        }>
            <span className="text-[16px]">{children}</span>
            {loading && (
                <span className="flex justify-center items-center">
                    <ButtonLoader />
                </span>
            )}
        </button>
    )
}
