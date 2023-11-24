import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const containerWrapper = ({
  className,
  childern,
}: {
  className?: string;
  childern: ReactNode;
}) => {
  return <div className={cn("mx-auto w-full max-w-screen px-2.5 md:px-20", className)}>
    {childern}
  </div>;
};




export default containerWrapper