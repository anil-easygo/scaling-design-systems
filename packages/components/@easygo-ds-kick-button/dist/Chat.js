import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import clsx from "clsx";
const ChatRoot = forwardRef(({ className, ...rest }, ref) => (_jsx("div", { ref: ref, className: clsx("flex flex-col overflow-hidden rounded-lg border border-chat-border bg-chat-body text-chat-text-default shadow-sm", className), ...rest })));
ChatRoot.displayName = "Chat";
const ChatHeader = forwardRef(({ className, children, ...rest }, ref) => (_jsx("div", { ref: ref, className: clsx("bg-chat-header px-4 py-3 text-sm font-semibold text-chat-text-default border-b border-chat-border", className), ...rest, children: children })));
ChatHeader.displayName = "ChatHeader";
const ChatBody = forwardRef(({ className, children, ...rest }, ref) => (_jsx("div", { ref: ref, className: clsx("bg-chat-body px-4 py-3 text-chat-text-default", className), ...rest, children: children })));
ChatBody.displayName = "ChatBody";
const ChatFooter = forwardRef(({ className, children, ...rest }, ref) => (_jsx("div", { ref: ref, className: clsx("bg-chat-footer px-4 py-3 border-t border-chat-border text-chat-text-default", className), ...rest, children: children })));
ChatFooter.displayName = "ChatFooter";
export const Chat = Object.assign(ChatRoot, {
    Header: ChatHeader,
    Body: ChatBody,
    Footer: ChatFooter
});
