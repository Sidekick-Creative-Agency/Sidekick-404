"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ScrollBlur.module.css";

export function ScrollBlur({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_scroll-blur")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "first")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "second")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "third")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "fourth")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "fifth")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "sixth")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "seventh")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "scroll-blur_item", "eighth")}
        tag="div"
      />
    </_Component>
  );
}
