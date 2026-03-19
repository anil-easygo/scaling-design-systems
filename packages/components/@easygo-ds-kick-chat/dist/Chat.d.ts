import { HTMLAttributes, PropsWithChildren } from "react";
export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
}
export type ChatSectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
export declare const Chat: import("react").ForwardRefExoticComponent<ChatProps & import("react").RefAttributes<HTMLDivElement>> & {
    Header: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLDivElement>>;
};
