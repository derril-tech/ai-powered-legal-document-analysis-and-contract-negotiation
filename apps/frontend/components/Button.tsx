import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "destructive";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
	const base = "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
	const styles: Record<Variant, string> = {
		primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
		secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
		destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
	};
	return (
		<button className={clsx(base, styles[variant], className)} {...props}>
			{children}
		</button>
	);
}
