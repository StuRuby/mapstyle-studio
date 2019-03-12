declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const content: any
    export default content
}
declare module '*.jpg' {
    const content: any
    export default content
}
declare module '*.jpeg' {
    const content: any
    export default content
}
declare module '*.gif' {
    const content: any
    export default content
}