import * as React from "react";
import * as Types from "./types";

declare function AccordionItem(props: {
  as?: React.ElementType;
  question?: React.ReactNode;
  answer?: Types.Basic.RichTextChildren;
  contentId?: Types.Builtin.Text;
  triggerId?: Types.Builtin.Text;
}): React.JSX.Element;
