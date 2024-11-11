import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { P } from "@/components/ui/typography/P";
import { cn } from "@/lib/utils";

type SelectWrapperProps = {
    values: string[],
    text: string,
    className?: string,
    TextclassName?: string,
    containerClassName?: string,
    valueAt?: number
    valueIs?: string
}

const SelectWrapper = ({
    values, text, className, TextclassName, containerClassName, valueAt = 0, valueIs
}: SelectWrapperProps) => {
    return (
        <div className={cn("flex flex-col  items-start gap-[2px]", containerClassName)} >             <P className={cn("text-sm mb-1 text-white", TextclassName)}>{text}</P>
            <Select >
                <SelectTrigger className={cn("rounded-sm text-muted-foreground", className)}
                >
                    <SelectValue placeholder={valueIs || values[valueAt]} />
                </SelectTrigger>
                <SelectContent className="text-muted-foreground" >
                    {values.map((value) => (
                        <SelectItem key={value} value={value}>
                            {value}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

export default SelectWrapper





