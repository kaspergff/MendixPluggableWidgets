import { ReactElement, createElement } from "react";

import { CountButton } from "./CountButton";

export function preview(): ReactElement {
    return <CountButton startCount={0} />;
}

export function getPreviewCss(): string {
    return require("./ui/CountButton.css");
}
