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
export type ChatBodyProps = typeof __propDef.props;
export type ChatBodyEvents = typeof __propDef.events;
export type ChatBodySlots = typeof __propDef.slots;
export default class ChatBody extends SvelteComponent<ChatBodyProps, ChatBodyEvents, ChatBodySlots> {
}
export {};
