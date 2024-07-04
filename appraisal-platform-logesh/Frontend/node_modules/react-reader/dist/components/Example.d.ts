import { type ReactNode } from 'react';
type Props = {
    title: string;
    actions?: ReactNode;
    above?: ReactNode;
    children: ReactNode;
};
export declare const Example: ({ title, actions, children, above }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
