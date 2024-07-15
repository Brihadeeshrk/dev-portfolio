import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        brihadeesh rk
      </h1>
      <p className="mb-4">
        {` I am a proficient full-stack developer with expertise in Node.js, Express, React Native, and Next.js. 
Currently, I work as a Full Stack Engineering Consultant at Crecientech Infosystems, where I develop scalable servers and seamless multi-screen/page apps. 
A supporter of typescript and dark mode, I balance my obsession to my laptop with a passion for fitness and Formula 1 racing.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
