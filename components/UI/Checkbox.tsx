import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
	label: string;
	error?: string;
	helperText?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, error, helperText, className, id, ...props }, ref) => {
		const checkboxId =
			id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

		return (
			<div className="space-y-2">
				<div className="flex items-start">
					<input
						ref={ref}
						type="checkbox"
						id={checkboxId}
						className={cn(
							"mt-1 mr-3 h-4 w-4 text-orange-600 border-gray-300 rounded transition-colors",
							"focus:ring-orange-500 focus:ring-2",
							"disabled:opacity-50 disabled:cursor-not-allowed",
							error && "border-red-500",
							className
						)}
						aria-invalid={error ? "true" : "false"}
						aria-describedby={
							error
								? `${checkboxId}-error`
								: helperText
									? `${checkboxId}-help`
									: undefined
						}
						{...props}
					/>
					<label
						htmlFor={checkboxId}
						className="text-sm text-white cursor-pointer"
					>
						{label}
					</label>
				</div>

				{helperText && !error && (
					<p id={`${checkboxId}-help`} className="text-sm text-gray-400 ml-7">
						{helperText}
					</p>
				)}

				{error && (
					<p
						id={`${checkboxId}-error`}
						className="text-sm text-red-400 ml-7"
						role="alert"
					>
						{error}
					</p>
				)}
			</div>
		);
	}
);

Checkbox.displayName = "Checkbox";
