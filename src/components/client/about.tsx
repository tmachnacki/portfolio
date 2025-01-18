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
    <div className="flex w-full flex-col gap-8">
      <div className="ml-4 w-full max-w-sm self-end rounded-2xl bg-muted px-4 py-2 text-muted-foreground">
        {showTypingText ? (
          <TypingText
            text={`Write me an "about" section for my frontend software engineer portfolio without using any jargon or buzzwords, like "passionate".`}
            className="w-full"
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
        className={`mr-4 w-full max-w-sm self-start rounded-2xl border bg-transparent px-4 py-2 text-muted-foreground ${showGPTResponse ? "opacity-100" : "opacity-0"}`}
      >
        {showGPTResponse && (
          <TypingText
            text={`I build things for the web.`}
            className="w-full"
            grow={true}
            repeat={false}
            hideCursorOnComplete={true}
            alwaysVisibleCount={0}
          />
        )}
      </div>
    </div>
  );
};

export default About;
