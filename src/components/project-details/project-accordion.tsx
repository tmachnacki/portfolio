import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ProjectAccordionProps {
  accordionClassName?: string;
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  accordionContentClassName?: string;
  tech?: any; // astro component slot
  features?: any; // astro component slot
}

export const ProjectAccordion = ({
  accordionClassName,
  accordionItemClassName,
  accordionTriggerClassName,
  accordionContentClassName,
  tech,
  features,
}: ProjectAccordionProps) => {
  return (
    <Accordion
      className={cn("relative z-10", accordionClassName)}
      type="multiple"
    >
      {tech && (
        <AccordionItem value="tech-stack" className={accordionItemClassName}>
          <AccordionTrigger className={accordionTriggerClassName}>
            Tech Stack
          </AccordionTrigger>
          <AccordionContent className={accordionContentClassName}>
            {tech}
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
