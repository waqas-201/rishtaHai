import { CheckCircle } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import { TypographySmall } from '../ui/typography/small';
import { IconWrapper } from './generel/IconWrapper';


export default function SuccessMessage() {

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 TypographySmall-6 animate-slide-in  rounded-lg text-center">
            <IconWrapper className='' >

            <CheckCircle className="text-primary w-16 h-16" />
            </IconWrapper>
            <h2 className="text-2xl font-bold text-gray-800">Success!</h2>
            <Separator />

            <TypographySmall className="text-gray-800">
                Your information has submitted successfully.
            </TypographySmall>

            <Separator />

            <TypographySmall className="text-gray-600">
                We will contact you via email/whatsapp shortly.
            </TypographySmall>

            <TypographySmall>

                Thank you!

            </TypographySmall>
        </div>
    );
}
