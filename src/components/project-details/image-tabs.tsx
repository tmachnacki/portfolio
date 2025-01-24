import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MockBrowser } from "./mock-browser.tsx";
import type { ProjectImage } from "@/components/home/project.astro";
import { Compare } from "./compare.tsx";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useEffect, useRef, useState, type UIEvent } from "react";
import { cn } from "@/lib/utils";

interface ImageTabProps {
  projectTitle: string;
  projectUrl?: string;
  images: ProjectImage[];
  className?: string;
}

export const ImageTabs = ({
  projectTitle,
  projectUrl,
  images,
  className,
}: ImageTabProps) => {
  const [shadowLeft, setShadowLeft] = useState(false);
  const [shadowRight, setShadowRight] = useState(true);

  const tabsListRef = useRef<HTMLDivElement | null>(null);

  const onScrollHandler = (event: UIEvent<HTMLElement>) => {
    setShadowLeft(event.currentTarget.scrollLeft > 0);
    setShadowRight(
      event.currentTarget.clientWidth <
        event.currentTarget.scrollWidth - event.currentTarget.scrollLeft,
    );
  };

  useEffect(() => {
    if (tabsListRef.current) {
      setShadowLeft(tabsListRef.current.scrollLeft > 0);
      setShadowRight(
        tabsListRef.current.clientWidth <
          tabsListRef.current.scrollWidth - tabsListRef.current.scrollLeft,
      );
    }
  }, [tabsListRef]);

  return (
    <Tabs defaultValue={images[0].label} className={className}>
      {images.map((image) => (
        <TabsContent
          value={image.label}
          key={`${image.label}-content`}
          className="rounded-lg"
        >
          <MockBrowser url={projectUrl}>
            <div className="m-0 aspect-4/3 h-auto w-full overflow-hidden rounded-b-lg animate-in fade-in-0">
              {image.compare && image.compareImages && (
                <Compare
                  firstImage={image.compareImages.imageOne.src}
                  secondImage={image.compareImages.imageTwo.src}
                />
              )}
              <img
                src={image.image.src}
                alt={image.label}
                className="object-cover object-center"
                // width={1600}
                // height={1200}
                draggable={false}
              />
            </div>
          </MockBrowser>
        </TabsContent>
      ))}

      {/* <TooltipProvider delayDuration={400}>
        <Tooltip key={`${image.label}-trigger`}>
          <TooltipTrigger asChild></TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            {image.label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}

      <div className="relative w-full" draggable={false}>
        <span
          aria-hidden
          className={cn(
            "absolute -top-2 left-0 z-50 h-full w-0 bg-gradient-to-r from-background to-transparent opacity-0 transition",
            shadowLeft && "w-8 opacity-100",
          )}
        ></span>

        <span
          aria-hidden
          className={cn(
            "absolute -top-2 right-0 z-50 h-full w-0 bg-gradient-to-l from-background to-transparent opacity-0 transition",
            shadowRight && "w-8 opacity-100",
          )}
        ></span>

        <TabsList
          className={cn(
            "relative mt-2 flex h-max w-full items-center justify-start gap-4 overflow-x-auto bg-transparent px-1 py-2",
          )}
          onScroll={onScrollHandler}
          ref={tabsListRef}
        >
          {images.map((image) => (
            <TabsTrigger
              className="m-0 flex w-24 shrink-0 grow-0 flex-col space-y-2 p-0 hover:ring-2 hover:ring-ring/50"
              value={image.label}
              draggable={false}
              title={image.label}
              key={`${image.label}-trigger`}
            >
              {/* <p className="text-xs text-muted-foreground block">{image.label}</p> */}
              <div
                className="block aspect-4/3 h-auto w-full overflow-hidden rounded-sm"
                draggable={false}
              >
                <img
                  src={image.image.src}
                  alt={image.label}
                  className="object-cover object-center"
                  draggable={false}
                  // width={400}
                  // height={300}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};
