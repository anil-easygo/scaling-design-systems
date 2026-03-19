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
export type ChatHeaderProps = typeof __propDef.props;
export type ChatHeaderEvents = typeof __propDef.events;
export type ChatHeaderSlots = typeof __propDef.slots;
export default class ChatHeader extends SvelteComponent<ChatHeaderProps, ChatHeaderEvents, ChatHeaderSlots> {
}
export {};
