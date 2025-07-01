import cn from "@meltdownjs/cn";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, required, className, id, ...props }, ref) => {
		return (
			<div className="space-y-2">
				<label htmlFor={id} className="block text-sm font-medium text-white">
					{label}
					{required && <span className="text-red-400 ml-1">*</span>}
				</label>
				<input
					ref={ref}
					id={id}
					className={cn(
						"w-full px-3 py-2 border rounded-md transition-colors",
						"focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500",
						error
							? "border-red-500 bg-red-50 text-red-900"
							: "border-gray-300 bg-white text-gray-900",
						className,
					)}
					aria-invalid={error ? "true" : "false"}
					aria-describedby={error ? `${id}-error` : undefined}
					{...props}
				/>
				{error && (
					<p id={`${id}-error`} className="text-sm text-red-400" role="alert">
						{error}
					</p>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";
