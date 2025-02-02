import { useEffect, useRef, useState, type UIEvent } from "react";
import type { ProjectImage } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MockBrowser } from "./mock-browser.tsx";
import { Compare } from "./compare.tsx";

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
          className="overflow-hidden rounded-lg"
        >
          <MockBrowser url={projectUrl}>
            <div
              className="m-0 aspect-4/3 h-auto w-full overflow-hidden rounded-b-lg duration-300 animate-in fade-in-0 motion-reduce:animate-none motion-reduce:transition-none"
              draggable={false}
            >
              {image.compare && image.compareImages ? (
                <Compare
                  firstImage={image.compareImages.imageOne}
                  firstImageAlt={image.compareImages.labelOne}
                  secondImage={image.compareImages.imageTwo}
                  secondImageAlt={image.compareImages.labelTwo}
                />
              ) : (
                <img
                  src={image.image.src}
                  alt={image.label}
                  className="h-auto w-full object-cover object-center"
                  draggable={false}
                />
              )}
            </div>
          </MockBrowser>
        </TabsContent>
      ))}

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
              className="group m-0 flex w-24 shrink-0 grow-0 flex-col space-y-2 p-0 hover:ring-1 hover:ring-ring/50"
              value={image.label}
              draggable={false}
              title={image.label}
              key={`${image.label}-trigger`}
            >
              <div
                className="block aspect-4/3 h-auto w-full overflow-hidden rounded group-data-[state=active]:ring-1 group-data-[state=active]:ring-ring"
                draggable={false}
              >
                <img
                  src={image.image.src}
                  alt={image.label}
                  className="h-auto w-full rounded object-cover object-center"
                  draggable={false}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};
