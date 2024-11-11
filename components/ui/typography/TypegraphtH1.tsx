import { TypographyProps } from "@/components/ui/typography/TypoGraphyH4";
import { cn } from "@/lib/utils";

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1 className={cn("scroll-m-20   text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    )
}
