/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*?url' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Extend the global import.meta type for glob functionality
interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
}
