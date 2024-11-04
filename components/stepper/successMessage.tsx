import { CheckCircle } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import { TypographySmall } from '../ui/typography/small';


export default function SuccessMessage() {

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 TypographySmall-6 animate-slide-in bg-white rounded-lg text-center">
            <CheckCircle className="text-primary w-16 h-16" />
            <h2 className="text-2xl font-bold text-gray-800">Success!</h2>


            <TypographySmall className="text-gray-600">
                We will contact you via email/whatsapp shortly.
            </TypographySmall>
            <Separator />


            <TypographySmall className="text-gray-600">
                Your information was submitted successfully. Thank you!
            </TypographySmall>
        </div>
    );
}
