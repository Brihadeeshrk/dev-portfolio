import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const tools = [
  "next js",
  "expo react native",
  "react testing library",
  "recoil",
  "sanity",
  "next-auth",
  "tailwindcss",
  "prisma",
  "framer motion",
  "node js",
  "ts-node",
  "express",
  "langchain",
  "nodemailer",
  "next-auth",
  "prisma",
  "mongoose",
  "hogan js",
  "openai api",
  "aws (ses, iam, s3)",
  "github actions",
  "firebase (firestore, realtime db, auth, storage, functions, hosting)",
  "mongodb",
  "vercel",
  "mysql",
  "microfrontend architecture",
];

export default function Tools() {
  return (
    <section>
      <p className="mt-5">--</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="font-medium">Tools</p>
          </AccordionTrigger>
          <AccordionContent>
            {tools.map((tool, index) => (
              <div key={index} className="my-2">
                <p className="font-medium italic">{tool}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
