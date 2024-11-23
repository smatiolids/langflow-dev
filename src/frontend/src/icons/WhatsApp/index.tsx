import React, { forwardRef } from "react";
import WhatsAppSVGIcon from "./whatsapp";

export const WhatsAppIcon = forwardRef<
  SVGSVGElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return <WhatsAppSVGIcon ref={ref} {...props} />;
});
