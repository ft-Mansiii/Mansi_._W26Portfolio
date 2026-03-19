import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const groups = [
  // ... KEEP YOUR EXISTING `groups` ARRAY EXACTLY AS IT IS HERE ...
  {
    id: "languages",
    title: "Languages",
    items: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    id: "web",
    title: "Web & Frameworks",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    id: "db",
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
  },
];

const navItems = [
  { id: "languages", label: "Languages" },
  { id: "web", label: "Web" },
  { id: "db", label: "Databases" },
  { id: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [active, setActive] = useState("languages");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.5] }
    );

    groups.forEach((g) => {
      const el = sectionRefs.current[g.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Technical <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Arsenal</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Vertical Sticky Nav (Left Side) */}
          <div className="md:w-1/4 sticky top-32 hidden md:flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "text-left px-6 py-4 rounded-2xl transition-all duration-300 font-medium text-lg border",
                  active === item.id
                    ? "bg-violet-500/10 border-violet-500/30 text-violet-600 dark:text-violet-400 shadow-sm"
                    : "bg-transparent border-transparent text-foreground/60 hover:text-foreground hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Skill Panels (Right Side) */}
          <div className="md:w-3/4 space-y-12">
            {groups.map((group) => (
              <div key={group.id} id={group.id} ref={(el) => (sectionRefs.current[group.id] = el)} className="scroll-mt-32">
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2rem] p-8 md:p-10 shadow-lg">
                  <h3 className="text-2xl font-bold mb-8 text-foreground">{group.title}</h3>
                  
                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 px-5 py-3 rounded-full shadow-sm hover:-translate-y-1 transition-transform"
                      >
                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                        <span className="font-medium text-foreground/80">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};