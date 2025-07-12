import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	required?: boolean;
	helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			error,
			required,
			helperText,
			className,
			id,
			type = "text",
			...props
		},
		ref
	) => {
		const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

		return (
			<div className="space-y-2">
				<label
					htmlFor={inputId}
					className="block text-sm font-medium text-white"
				>
					{label}
					{required && <span className="text-red-400 ml-1">*</span>}
				</label>

				<input
					ref={ref}
					id={inputId}
					type={type}
					className={cn(
						"w-full px-3 py-2 border rounded-md transition-colors",
						"focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500",
						"disabled:opacity-50 disabled:cursor-not-allowed",
						error
							? "border-red-500 bg-red-50 text-red-900 focus:ring-red-500 focus:border-red-500"
							: "border-gray-300 bg-white text-gray-900",
						className
					)}
					aria-invalid={error ? "true" : "false"}
					aria-describedby={
						error
							? `${inputId}-error`
							: helperText
								? `${inputId}-help`
								: undefined
					}
					{...props}
				/>

				{helperText && !error && (
					<p id={`${inputId}-help`} className="text-sm text-gray-400">
						{helperText}
					</p>
				)}

				{error && (
					<p
						id={`${inputId}-error`}
						className="text-sm text-red-400"
						role="alert"
					>
						{error}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";
