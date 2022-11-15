import { FunctionComponent, JSX } from "preact";
import { Props } from "./type.ts";

export const Badge: FunctionComponent<
  JSX.HTMLAttributes<HTMLDivElement> & Props
> = (
  { class: classes, children, styleType, isHovering = true, ...otherProps },
) => {
  return (
    <div
      class={`duration-200 ease-linear hover:ease-linear text-${styleType}-500 bg-${styleType}-200 px-3 py-1 rounded-full font-semibold text-sm ${
        isHovering && `hover:text-white hover:bg-${styleType}-500`
      } ${classes}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};
