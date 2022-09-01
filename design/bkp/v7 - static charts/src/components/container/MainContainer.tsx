import React, { CSSProperties } from "react";
import "./containerStyle.css";
type chilPropsType = {
  children?: React.ReactNode;
  styleAsProps?: CSSProperties;
  className?: string;
};
function MainContainer({ className, children, styleAsProps }: chilPropsType) {
  return (
    <section className={`section ${className}`} style={styleAsProps}>
      <div className="row">{children}</div>
    </section>
  );
}

export default MainContainer;
