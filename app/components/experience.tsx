import { EXPERIENCE_DATA } from "lib/experience-data";
import Link from "next/link";

export default function WorkExperience() {
  return (
    <section>
      <p className="my-6 font-medium">Works</p>
      {EXPERIENCE_DATA.map((exp) => (
        <div key={exp.id} className="my-8">
          <p className="font-medium italic">{exp.title}</p>
          <p className="text-sm">
            {exp.company}, {exp.startDate} - {exp.endDate}
          </p>
          <p className="text-sm">{exp.description}</p>

          <div className="ml-2">
            <p className="my-3 font-medium">projects</p>
            <ul className="text-sm list-none mt-2">
              {exp.projects.map((project, index) => (
                <div key={index} className="mt-4">
                  <p className="font-semibold">{project.name}</p>
                  <ul className="list-none mt-2">
                    {project.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="ml-4 before:content-['↳'] before:mr-2"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>

          <div className="text-sm mt-2">
            <strong>tech used -- </strong> {exp.technologies.join(", ")}
          </div>
          <p className="text-sm">
            company website:{" "}
            <Link href={exp.company_link} className="underline text-orange-500">
              here
            </Link>
          </p>
        </div>
      ))}
    </section>
  );
}
