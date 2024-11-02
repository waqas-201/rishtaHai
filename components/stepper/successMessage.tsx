import { CheckCircle } from 'lucide-react';

export default function SuccessMessage() {

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 p-6 animate-slide-in bg-white rounded-lg text-center">
            <CheckCircle className="text-primary w-16 h-16" />
            <h2 className="text-2xl font-bold text-gray-800">Success!</h2>
            <p className="text-gray-600">
                Your information was submitted successfully. Thank you!
            </p>
        </div>
    );
}
