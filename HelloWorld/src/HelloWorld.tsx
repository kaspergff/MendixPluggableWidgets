import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { HelloWorldContainerProps } from "../typings/HelloWorldProps";

import "./ui/HelloWorld.css";

export function HelloWorld({ sampleText }: HelloWorldContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
