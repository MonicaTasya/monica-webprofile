import { cn } from "../../utils/helpers/cn";

const DefaultLayout = ({
  className,
  decoration = <></>,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        `relative mx-auto flex flex-col w-full justify-center text-black gap-4 px-[10vw] py-[5vw] lg:px-4 lgpy-10 xl:px-30 xl:py-20 2xl:px-60`,
        className
      )}
      {...props}
    >
      {decoration}
      <div className="relative w-full max-w-[1440px]">{children}</div>
    </section>
  );
};
export default DefaultLayout;
