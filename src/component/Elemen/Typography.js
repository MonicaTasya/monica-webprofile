import { cn } from "../../utils/helpers/cn";
import { SansitaRegular, AfacadRegular } from "../../utils/helpers/font";

export const HS1 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      SansitaRegular.className, // font langsung dari next/font/local
      "text-[7vw] lg:text-[5vw] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);
export const HS2 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      SansitaRegular.className, // font langsung dari next/font/local
      "text-[6vw] lg:text-[4vw] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);
export const HS3 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      SansitaRegular.className, // font langsung dari next/font/local
      "text-[5vw] lg:text-[2vw] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const HA1 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      AfacadRegular.className,
      "text-[6vw] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const HA2 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      AfacadRegular.className,
      "text-[5vw] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const HA3 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      AfacadRegular.className,
      "text-[4vw] lg:text-[32px] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const HA4 = ({ className, children, ...props }) => (
  <h1
    className={cn(
      AfacadRegular.className,
      "text-[3vw] lg:text-[20px] tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);
