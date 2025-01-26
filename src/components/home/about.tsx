import {
  Children,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

import TypingText from "./typing-text";
import avatar from "@/assets/avatar.webp";
import { GPTIcon } from "./gpt";

const About = ({ children }: { children?: ReactNode }) => {
  const [showTypingText, setShowTypingText] = useState(false);
  const [beginGPTResponse, setBeginGPTResponse] = useState(false);
  const [showGPTResponse, setShowGPTResponse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTypingText(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!beginGPTResponse) return;

    const timeout = setTimeout(() => {
      setShowGPTResponse(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [beginGPTResponse]);

  return (
    <div className="flex min-h-40 w-full flex-col gap-8 px-4 lg:h-auto lg:min-h-0">
      <div className="-me-4 flex w-full max-w-lg gap-3 self-end ps-4 lg:max-w-sm">
        <div className="flex w-full flex-grow items-center rounded-2xl bg-muted px-4 py-2 text-muted-foreground">
          {showTypingText ? (
            <TypingText
              text={`Write me an "about" section for my frontend software engineer portfolio without using any jargon or buzzwords, like "passionate".`}
              className="w-full text-left font-sans text-sm"
              grow={true}
              repeat={false}
              hideCursorOnComplete={true}
              alwaysVisibleCount={0}
              onComplete={() => setBeginGPTResponse(true)}
            />
          ) : (
            <p className="align-middle text-sm">Message ChatGPT</p>
          )}
        </div>
        <div className="aspect-square h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
          <img
            src={avatar.src}
            alt="Portrait of Tim Machnacki"
            className="h-full w-full scale-[260%] object-contain object-center"
          />
        </div>
      </div>

      {beginGPTResponse && (
        <div className="-ms-4 flex w-auto max-w-lg gap-3 self-start pe-4 lg:max-w-sm">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border">
            <GPTIcon
              className={cn(
                "size-5 flex-shrink-0",
                !showGPTResponse && "animate-spin",
              )}
            />
          </div>
          {showGPTResponse && (
            <div
              className={`flex min-h-10 w-full items-center rounded-2xl border bg-transparent px-4 py-2 text-muted-foreground`}
            >
              <TypingText
                text={`I build things for the web.`}
                className="w-full text-left font-sans text-sm"
                grow={true}
                repeat={false}
                hideCursorOnComplete={true}
                alwaysVisibleCount={0}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default About;
