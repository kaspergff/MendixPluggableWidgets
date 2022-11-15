import "./style.css";

import { ReactElement, SetStateAction, createElement, useState } from "react";

interface Props {
    input?: string;
}

export function TailwindStyling({ input }: Props): ReactElement {
    const [tailwind, setTailwind] = useState(input ?? "");

    const handleInput = (value: string | SetStateAction<string>): void => {
        return setTailwind(value);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className={tailwind}>
                This is styled by tailwindCSS. But it doesn&apos;t really work. Try: italic border-2 p-2
            </div>
            <input value={tailwind} onChange={e => handleInput(e.target.value)}></input>
        </div>
    );
}
