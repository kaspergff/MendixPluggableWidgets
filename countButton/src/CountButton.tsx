import "./ui/CountButton.css";

import { ReactElement, createElement, useState } from "react";

export interface CountButtonProps {
    startCount: number;
}

export function CountButton({ startCount }: CountButtonProps): ReactElement {
    const [count, setCount] = useState(startCount);
    const handleIncrease = (): void => {
        const newCount = count + 1;
        return setCount(newCount);
    };
    const handleDecrease = (): void => {
        const newCount = count - 1;
        return setCount(newCount);
    };
    return (
        <div className="flex flex-row gap-4">
            <div className="p-2 border-2 rounded-sm" onClick={handleDecrease}>
                Decrease
            </div>
            <div className="text-5xl">{count}</div>
            <div className="p-2 border-2 rounded-sm" onClick={handleIncrease}>
                Increase
            </div>
        </div>
    );
}
