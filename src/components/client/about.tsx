import { useEffect, useState } from "react";
import TypingText from "./typing-text";
import { TypingAnimation } from "./typing-animation";

const About = () => {
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
    <div className="flex h-auto min-h-48 w-full flex-col gap-8 bg-red-500 px-4">
      <div className="-me-4 w-full max-w-xs self-end rounded-2xl bg-muted px-4 py-2 text-muted-foreground sm:max-w-sm md:max-w-md lg:max-w-sm">
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

        {/* <TypingAnimation
        delay={1000}
        duration={50}
        className="text-sm font-normal text-muted-foreground"
      >{`Write me an "about" section for my frontend software engineer portfolio without using any jargon or buzzwords, like "passionate".`}</TypingAnimation> */}
      </div>

      <div
        className={`-ms-4 mr-4 w-full max-w-xs self-start rounded-2xl border bg-transparent px-4 py-2 text-muted-foreground sm:max-w-sm md:max-w-md lg:max-w-sm`}
      >
        {showGPTResponse ? (
          <TypingText
            text={`I build things for the web.`}
            className="w-full text-left"
            grow={true}
            repeat={false}
            hideCursorOnComplete={true}
            alwaysVisibleCount={0}
          />
        ) : (
          <p aria-hidden="true" className="h-6">
            hidden placeholder
          </p>
        )}
      </div>
    </div>
  );
};

export default About;
