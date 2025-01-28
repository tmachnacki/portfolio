import { cn } from "@/lib/utils";

interface MockBrowserProps extends React.ComponentPropsWithoutRef<"div"> {
  url?: string;
  className?: string;
}

export const MockBrowser = ({
  url,
  className,
  children,
  ...props
}: MockBrowserProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-lg bg-transparent backdrop-blur border",
        className
      )}
      {...props}
      aria-label="Browser mockup"
      draggable={false}
    >
      <div className="relative w-full h-10 bg-border flex items-center gap-4 justify-between sm:justify-center px-4 ">
        <div className="sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-[50%] flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-red-800 to-red-500"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-yellow-800 to-yellow-500"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-green-800 to-green-500"></span>
        </div>
        <div className="rounded-md h-6 border border-input text-muted-foreground bg-background/50 text-[11px] px-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          {url && <span className="block truncate">{url}</span>}
        </div>
      </div>
      {children}
    </div>
  );
};
