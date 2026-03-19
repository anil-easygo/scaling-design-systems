import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        className?: string | undefined;
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
export type ChatProps = typeof __propDef.props;
export type ChatEvents = typeof __propDef.events;
export type ChatSlots = typeof __propDef.slots;
export default class Chat extends SvelteComponent<ChatProps, ChatEvents, ChatSlots> {
}
export {};
