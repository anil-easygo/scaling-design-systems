import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {}

export type ChatSectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const basePanel =
  "flex flex-col rounded-chat border border-chat-border bg-chat-body shadow-chat overflow-hidden h-[95vh]";
const headerBase =
  "bg-chat-header px-4 py-4 text-sm font-semibold text-chat-text-default border-b-2 border-chat-border shadow-lg z-10 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent";
const bodyBase =
  "flex-1 overflow-y-auto px-4 py-4 text-chat-text-default bg-chat-body";
const footerBase =
  "bg-chat-footer px-4 py-4 text-chat-text-default text-sm border-t-2 border-chat-border shadow-[0_-8px_16px_-4px_rgba(0,0,0,0.3)] z-10 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const ChatRoot = forwardRef<HTMLDivElement, ChatProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={clsx(basePanel, "w-full max-w-md", className)} {...rest} />
));

ChatRoot.displayName = "Chat";

const ChatHeader = forwardRef<HTMLDivElement, ChatSectionProps>(({ className, children, ...rest }, ref) => (
  <div ref={ref} className={clsx(headerBase, className)} {...rest}>
    {children}
  </div>
));
ChatHeader.displayName = "ChatHeader";

const ChatBody = forwardRef<HTMLDivElement, ChatSectionProps>(({ className, children, ...rest }, ref) => (
  <div ref={ref} className={clsx(bodyBase, className)} {...rest}>
    {children}
  </div>
));
ChatBody.displayName = "ChatBody";

const ChatFooter = forwardRef<HTMLDivElement, ChatSectionProps>(({ className, children, ...rest }, ref) => (
  <div ref={ref} className={clsx(footerBase, className)} {...rest}>
    {children}
  </div>
));
ChatFooter.displayName = "ChatFooter";

export const Chat = Object.assign(ChatRoot, {
  Header: ChatHeader,
  Body: ChatBody,
  Footer: ChatFooter
});
