import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { HelloWorldPreviewProps } from "../typings/HelloWorldProps";

export function preview({ sampleText }: HelloWorldPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/HelloWorld.css");
}
