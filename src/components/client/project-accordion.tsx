import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export interface ProjectAccordionProps {
  accordionClassName?: string;
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  accordionContentClassName?: string;
  techStack?: React.ReactNode;
  features?: React.ReactNode;
}

export const ProjectAccordion = ({
  accordionClassName,
  accordionItemClassName,
  accordionTriggerClassName,
  accordionContentClassName,
  techStack,
  features,
}: ProjectAccordionProps) => {
  return (
    <Accordion
      className={cn("relative z-10", accordionClassName)}
      type="multiple"
    >
      {techStack && (
        <AccordionItem value="tech-stack" className={accordionItemClassName}>
          <AccordionTrigger className={accordionTriggerClassName}>
            Tech Stack
          </AccordionTrigger>
          <AccordionContent className={accordionContentClassName}>
            {techStack}
          </AccordionContent>
        </AccordionItem>
      )}

      {features && (
        <AccordionItem value="features" className={accordionItemClassName}>
          <AccordionTrigger className={accordionTriggerClassName}>
            Features
          </AccordionTrigger>
          <AccordionContent className={accordionContentClassName}>
            {features}
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};
