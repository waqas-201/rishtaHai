import { cn } from "@/lib/utils";
import { TypographyProps } from "./TypoGraphyH4";

export function TypographySmall({ children, className }: TypographyProps) {
    return (
        <small className={cn("text-sm font-medium leading-none", className)}>
            {children}
        </small>
    )
}
