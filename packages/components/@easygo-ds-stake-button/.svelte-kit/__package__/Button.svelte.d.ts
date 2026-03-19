import { SvelteComponent } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import type { ButtonSize } from "./types.js";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: "primary" | undefined;
        size?: ButtonSize | undefined;
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        fullWidth?: boolean | undefined;
        type?: HTMLButtonAttributes["type"];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
