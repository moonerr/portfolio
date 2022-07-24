/// <reference types="react" />
import React from 'react';

interface ComponentProps {
}
declare const YourComponent: React.FC<ComponentProps>;

declare const index_d_YourComponent: typeof YourComponent;
declare namespace index_d {
  export {
    index_d_YourComponent as YourComponent,
  };
}

declare const Header: ({ text }: {
    text?: string | undefined;
}) => JSX.Element;

export { index_d as Ext, Header };
