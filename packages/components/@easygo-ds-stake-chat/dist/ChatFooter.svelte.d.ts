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
export type ChatFooterProps = typeof __propDef.props;
export type ChatFooterEvents = typeof __propDef.events;
export type ChatFooterSlots = typeof __propDef.slots;
export default class ChatFooter extends SvelteComponent<ChatFooterProps, ChatFooterEvents, ChatFooterSlots> {
}
export {};
