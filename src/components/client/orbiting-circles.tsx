import { useEffect, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/client/ui/tooltip";
import { usePrefersReducedMotion } from "@/components/client/use-prefers-reduced-motion";

export interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  angle?: number;
  pathClassName?: string;
  tooltipClassName?: string;
  tooltipGradientClassName?: string;
  tooltipLabel?: string;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  angle = 0,
  pathClassName,
  tooltipClassName,
  tooltipGradientClassName,
  tooltipLabel,
}: OrbitingCirclesProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);

  const paused = prefersReducedMotion || hovered;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className={cn(
              "stroke-black/10 stroke-1 dark:stroke-white/10",
              pathClassName,
            )}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <TooltipProvider delayDuration={400}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              style={
                {
                  "--duration": duration,
                  "--radius": radius,
                  "--delay": -delay,
                } as React.CSSProperties
              }
              className={cn(
                "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
                { "[animation-direction:reverse]": reverse },
                paused && "paused",
                className,
              )}
              onPointerEnter={() => {
                setHovered(true);
              }}
              onPointerLeave={() => {
                setHovered(false);
              }}
            >
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent
            className={tooltipClassName}
            tooltipGradientClassName={tooltipGradientClassName}
          >
            {tooltipLabel}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
