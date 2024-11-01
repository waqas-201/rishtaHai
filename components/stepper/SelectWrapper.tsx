import { cn } from "@/lib/utils";
import { P } from "../ui/typography/P";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type SelectWrapperProps = {
    values: string[],
    text: string,
    className?: string,
    TextclassName?: string,
    containerClassName?: string,
    valueAt?: number
}

const SelectWrapper = ({
    values, text, className, TextclassName, containerClassName, valueAt = 0
}: SelectWrapperProps) => {
    return (
        <div className={cn("flex flex-col  items-start gap-[2px]", containerClassName)} >             <P className={cn("text-sm mb-1", TextclassName)}>{text}</P>
            <Select >
                <SelectTrigger className={cn("rounded-sm text-muted-foreground", className)}
                >
                    <SelectValue placeholder={values[valueAt]} />
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





