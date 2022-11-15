import { ReactElement, createElement } from "react";

import { TailwindStyling } from "./TailwindStyling";
import { TailwindStylingPreviewProps } from "../typings/TailwindStylingProps";

export function preview({ input }: TailwindStylingPreviewProps): ReactElement {
    return <TailwindStyling input={input} />;
}

export function getPreviewCss(): string {
    return require("./style.css");
}
