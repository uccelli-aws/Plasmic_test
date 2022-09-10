// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.53 5.47a.75.75 0 00-1.28.53v5.25H6a.75.75 0 100 1.5h5.25V18a.75.75 0 101.5 0v-5.25H18a.75.75 0 100-1.5h-5.25V6a.75.75 0 00-.22-.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LIconIcon;
/* prettier-ignore-end */
