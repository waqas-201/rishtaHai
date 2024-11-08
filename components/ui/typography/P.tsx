import { cn } from "@/lib/utils";

export function P({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("leading-7  text-gray-600 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    )
}
