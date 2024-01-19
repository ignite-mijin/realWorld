// Note: Title Component
import "@/stories/Foundation/Title/title.css";
import { PropsWithChildren } from "react";

interface TitleProps {
  color?: string;
  type?: "pageTitle" | "sectionTitle";
  children: string | React.ReactNode;
}

export const Title = ({
  color,
  type = "sectionTitle",
  children,
  ...props
}: PropsWithChildren<TitleProps>) => {
  const classNameList = ["title", `title-mode-${type}`].join(" ");
  return type === "pageTitle" ? (
    <h1 className={classNameList} style={{ color }} {...props}>
      {children}
    </h1>
  ) : (
    <h2 className={classNameList} {...props}>
      {children}
    </h2>
  );
};
