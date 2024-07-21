import React, { Ref } from 'react';
import { twMerge } from 'tailwind-merge';

const Stack = React.forwardRef(
  ({ component: Component = 'div', direction="column", spacing=3, className, ...props }: {component: string; direction: string; spacing: number | string } & HTMLElement, ref: Ref<any>) => {

    if (typeof spacing === "number") {
      spacing = "gap-" + spacing
    }

    direction = direction === "column" ? "flex-col" : direction === "row" ? "flex-row" : direction

    return (
      <Component
        // @ts-ignore
        ref={ref}
        className={twMerge('flex justify-center items-center', direction, spacing, className)}
        {...props}
      />
    );
  }
);

export default Stack;
