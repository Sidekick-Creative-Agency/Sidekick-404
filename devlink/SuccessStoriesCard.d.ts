import * as React from "react";
import * as Types from "./types";

declare function SuccessStoriesCard(props: {
  as?: React.ElementType;
  id?: Types.Builtin.Text;
  logo?: Types.Asset.Image;
  imageGrid?: Types.Asset.Image;
  blockquote?: React.ReactNode;
  nameTitle?: React.ReactNode;
  company?: React.ReactNode;
  backgroundStyles?: Types.Basic.RichTextChildren;
  link?: Types.Basic.Link;
}): React.JSX.Element;
