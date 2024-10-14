import { Label } from "../ui/label"
import { RadioGroupItem } from "../ui/radio-group"


const radioGroupWrapper = ({ itemValue, labelValue }: { itemValue: string, labelValue: string }) => {
    return (
        <div className="flex gap-2" >
            <RadioGroupItem value={itemValue} />
            <Label className="md:text-[12px] text-[10px] text-gray-500">{labelValue}</Label>

        </div>
    )
}

export default radioGroupWrapper