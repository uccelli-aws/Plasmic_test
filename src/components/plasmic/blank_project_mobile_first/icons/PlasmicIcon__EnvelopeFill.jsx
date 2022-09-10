// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EnvelopeFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 77 68"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.24 15.109l38.26 20.65 38.26-20.65c-.486-1.878-1.678-3.554-3.383-4.755-1.705-1.2-3.821-1.854-6.002-1.854H9.625c-2.18 0-4.297.654-6.002 1.854C1.92 11.555.726 13.231.241 15.11zM77 19.962L48.727 35.22 77 49.908V19.962zm-.808 34.46L44.068 37.735 38.5 40.74l-5.568-3.005L.809 54.42c.752 1.511 1.986 2.796 3.552 3.698 1.566.902 3.395 1.382 5.264 1.381h57.75c1.87.001 3.698-.479 5.264-1.38 1.566-.903 2.8-2.188 3.553-3.699zM0 49.907L28.273 35.22 0 19.962v29.946z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnvelopeFillIcon;
/* prettier-ignore-end */
