import { Children, useEffect, useState, type ReactNode } from "react";
import TypingText from "./typing-text";

const About = ({ children }: { children: ReactNode }) => {
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
    }, 1000);

    return () => clearTimeout(timeout);
  }, [beginGPTResponse]);

  return (
    <div className="flex h-auto w-full flex-col gap-8 px-4">
      <div className="-me-4 flex w-full max-w-xs gap-4 self-end sm:max-w-sm md:max-w-md lg:max-w-sm">
        <div className="w-full flex-grow rounded-2xl bg-muted px-4 py-2 text-muted-foreground">
          {showTypingText ? (
            <TypingText
              text={`Write me an "about" section for my frontend software engineer portfolio without using any jargon or buzzwords, like "passionate".`}
              className="w-full text-left"
              grow={true}
              repeat={false}
              hideCursorOnComplete={true}
              alwaysVisibleCount={0}
              onComplete={() => setBeginGPTResponse(true)}
            />
          ) : (
            <p>Message ChatGPT</p>
          )}
        </div>
        {children}
      </div>

      {beginGPTResponse && (
        <div className="-ms-4 flex w-full max-w-xs gap-4 self-start sm:max-w-sm md:max-w-md lg:max-w-sm">
          <div
            className={`min-h-10 w-full rounded-2xl border bg-transparent px-4 py-2 text-muted-foreground`}
          >
            {showGPTResponse && (
              <TypingText
                text={`I build things for the web.`}
                className="w-full text-left"
                grow={true}
                repeat={false}
                hideCursorOnComplete={true}
                alwaysVisibleCount={0}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
