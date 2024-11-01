import { ReactNode } from "react";

export default function TransitionWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="fade slide">
            {children}
        </div>
    );
}
