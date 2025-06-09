export interface IInput {
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    customContainerClasses?: string;
    customLabelClasses?: string;
    customInputClasses?: string;
}

const Input: React.FC<IInput> = ({
    type = "text",
    name,
    value,
    onChange,
    label,
    placeholder,
    customContainerClasses,
    customLabelClasses,
    customInputClasses,
}) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${customContainerClasses}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`text-base font-semibold ${customLabelClasses}`}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-2 py-1 w-full outline outline-items-accent-light rounded-md font-normal focus:outline-2 focus:outline-items-accent ${customInputClasses}`}
            />
        </div>
    );
};

export default Input;