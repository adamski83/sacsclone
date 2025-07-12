import { cn } from "@/lib/utils";
import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	error?: string;
	required?: boolean;
	helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{ label, error, required, helperText, className, id, rows = 4, ...props },
		ref
	) => {
		const textareaId =
			id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

		return (
			<div className="space-y-2">
				<label
					htmlFor={textareaId}
					className="block text-sm font-medium text-white"
				>
					{label}
					{required && <span className="text-red-400 ml-1">*</span>}
				</label>

				<textarea
					ref={ref}
					id={textareaId}
					rows={rows}
					className={cn(
						"w-full px-3 py-2 border rounded-md transition-colors resize-y",
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
							? `${textareaId}-error`
							: helperText
								? `${textareaId}-help`
								: undefined
					}
					{...props}
				/>

				{helperText && !error && (
					<p id={`${textareaId}-help`} className="text-sm text-gray-400">
						{helperText}
					</p>
				)}

				{error && (
					<p
						id={`${textareaId}-error`}
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

Textarea.displayName = "Textarea";
