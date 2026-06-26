import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariants =
	| "primary"
	| "outline"
	| "secondary"
	| "success"
	| "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: ButtonVariants;
	fullWidth?: boolean;
	isLoading?: boolean;
}

const Button = ({
	children,
	variant = "primary",
	fullWidth = false,
	isLoading = false,
	className,
	disabled,
	...rest
}: ButtonProps) => {
	const variantClasses = {
		primary:
			"bg-primary-500 text-[#051626] font-semibold hover:bg-primary-600 active:translate-y-0",
		outline:
			"border border-primary-500 text-primary-500 hover:bg-primary-500/10",
		secondary: "bg-gray-800 text-white hover:bg-gray-700",
		success: "bg-green-500 text-[#051626] hover:brightness-90",
		danger: "bg-red-500 text-white hover:brightness-90",
	};

	return (
		<button
			type="button"
			className={`px-5 py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2
        ${variantClasses[variant]}
        ${className}
        ${fullWidth ? "w-full" : ""}`}
			disabled={disabled || isLoading}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
