import type React from "react";

export interface IButton {
    type?: "button" | "reset" | "submit" | undefined;
    text: string;
    customClasses?: string;
    onClick?: (e?: unknown) => void;
}

const Button: React.FC<IButton> = ({
    type = "button",
    text,
    customClasses,
    onClick
}) => {
    return (
        <button
            type={type}
            className={`px-3 py-2 rounded-md cursor-pointer font-semibold ${customClasses} transition-all duration-300 ease-in`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;