import { ACHIEVEMENTS_DATA } from "lib/achievements-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Achievements() {
  return (
    <section>
      <p className="mt-5">--</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="font-medium">Achievements</p>
          </AccordionTrigger>
          <AccordionContent>
            {ACHIEVEMENTS_DATA.map((exp) => (
              <div key={exp.id} className="my-8">
                <p className="font-medium italic">{exp.title}</p>
                <p className="text-sm">
                  given by{" "}
                  <span className="text-orange-500">{exp.awardee}</span> in{" "}
                  {exp.year}
                </p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
