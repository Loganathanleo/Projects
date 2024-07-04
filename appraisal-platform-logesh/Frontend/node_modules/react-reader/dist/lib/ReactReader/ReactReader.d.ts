import React, { PureComponent } from 'react';
import { EpubView, type IEpubViewStyle, type IEpubViewProps } from '..';
import { type IReactReaderStyle } from './style';
import { type NavItem } from 'epubjs';
export type IReactReaderProps = IEpubViewProps & {
    title?: string;
    showToc?: boolean;
    readerStyles?: IReactReaderStyle;
    epubViewStyles?: IEpubViewStyle;
    swipeable?: boolean;
};
type IReactReaderState = {
    isLoaded: boolean;
    expandedToc: boolean;
    toc: NavItem[];
};
export declare class ReactReader extends PureComponent<IReactReaderProps, IReactReaderState> {
    state: Readonly<IReactReaderState>;
    readerRef: React.RefObject<EpubView>;
    constructor(props: IReactReaderProps);
    toggleToc: () => void;
    next: () => void;
    prev: () => void;
    onTocChange: (toc: NavItem[]) => void;
    renderToc(): import("react/jsx-runtime").JSX.Element;
    setLocation: (loc: string) => void;
    renderTocToggle(): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
