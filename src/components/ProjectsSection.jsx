import { ExternalLink, Github as GithubIcon, FileText } from "lucide-react";

// Updated image imports matching your files
import locallyImg from "../assets/Logo locally.jpeg";
import gomokuImg from "../assets/gomoku.jpeg";
import wellnessImg from "../assets/wellness.jpeg";
import profileImg from "../assets/flight .jpeg";
import inventoryImg from "../assets/inventory.jpeg";
import tourGuideImg from "../assets/tour guide.jpeg"; // <-- Make sure this image is in your assets!

const projects = [
  {
    id: 1,
    title: "Locally (Capstone Project)",
    description: "A comprehensive full-stack ecosystem engineered to optimize local food distribution. It bridges the gap between regional producers and everyday consumers utilizing highly scalable REST APIs and a responsive React UI.",
    image: locallyImg,
    tags: ["React", "Spring Boot", "MongoDB"],
    liveUrl: "#",
    videoUrl: "#",
    codeUrl: "https://github.com/Ivan-here/Capstone-Project.git",
    docsUrl: "https://drive.google.com/drive/folders/1a8QOjFa8YVds4-JfVqb1t8gHhPl6J1_h?usp=sharing",
    figmaUrl: "https://www.figma.com/design/4Wh2n47oWLlFx35L0ef9ak/Local-Food-Service-App-Mockups?node-id=0-1&t=HP0Jn16GJ3Dngt0j-1",
    inProgress: true,
  },
  {
    id: 2,
    title: "Smart Tour Guide App",
    description: "An intelligent mobile application built with Android Studio that acts as a personal virtual tour guide. By snapping a photo of a historical landmark, users can instantly access its cultural significance and rich history.",
    image: tourGuideImg,
    tags: ["Android Studio", "Java", "Mobile Dev"],
    liveUrl: "#",
    videoUrl: "https://youtu.be/66LEXYRLp5s",
    codeUrl: "https://github.com/SaKsHaTGaRg/Tour-Guide-App.git",
    docsUrl: "",
    figmaUrl: "",
    inProgress: false,
  },
  {
    id: 3,
    title: "Gomoku AI",
    description: "A Java-based strategic board game featuring an intelligent AI opponent. Developed using advanced algorithmic decision-making and efficient data structures to simulate challenging and responsive gameplay.",
    image: gomokuImg,
    tags: ["Java", "Algorithms", "Data Structures"],
    liveUrl: "https://replit.com/@sakshatgarg/GOMOKU-with-AI",
    videoUrl: "#",
    codeUrl: "https://github.com/SaKsHaTGaRg/GOMOKU-with-AI.git",
  },
  {
    id: 4,
    title: "Student Wellness Hub",
    description: "A robust Spring Boot backend architecture designed to manage and deliver student health resources. It features secure RESTful endpoints tailored specifically for educational and wellness platforms.",
    image: wellnessImg,
    tags: ["Spring Boot", "Java", "REST API"],
    liveUrl: "#",
    videoUrl: "https://youtu.be/96iJFgbxzGg",
    codeUrl: "https://gitlab.com/SakshatGarg/comp3095-assignment01.git",
  },
  {
    id: 5,
    title: "Flight Management System",
    description: "An object-oriented console application simulating real-world airline operations. Built in C#, it deeply integrates core OOP pillars like polymorphism, encapsulation, and class inheritance.",
    image: profileImg,
    tags: ["C#", "OOP", ".NET"],
    liveUrl: "https://replit.com/@sakshatgarg/Flight-Reservation-System", 
    videoUrl: "#",
    codeUrl: "https://github.com/SaKsHaTGaRg",
  },
  {
    id: 6,
    title: "Inventory Management System",
    description: "A dynamic MVC-patterned web application for tracking stock and operational logistics. Powered by ASP.NET and Supabase, it seamlessly handles complete CRUD workflows for enterprise inventory management.",
    image: inventoryImg,
    tags: ["ASP.NET", "MVC", "Supabase"],
    liveUrl: "#",
    videoUrl: "https://youtu.be/SsbUodLrQrU",
    codeUrl: "https://github.com/SaKsHaTGaRg/Assignment02Comp2139.git",
  },
];

const hasValidLink = (url) => typeof url === "string" && url.trim() !== "" && url !== "#";
const isYouTube = (url) => typeof url === "string" && (url.includes("youtube.com") || url.includes("youtu.be"));

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
          Selected <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Works</span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const demoUrl = project.demoUrl ?? "";
            const liveUrl = project.liveUrl ?? (isYouTube(demoUrl) ? "#" : demoUrl);
            const videoUrl = project.videoUrl ?? (isYouTube(demoUrl) ? demoUrl : "#");
            const codeUrl = project.codeUrl ?? project.githubUrl ?? "";
            const docsUrl = project.docsUrl ?? "";
            const figmaUrl = project.figmaUrl ?? ""; 

            return (
              <div key={project.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                    <div className="absolute inset-0 bg-violet-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-wider text-violet-500 bg-violet-500/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.inProgress && (
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        In Progress
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {hasValidLink(liveUrl) && (
                      <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground font-medium hover:text-violet-500 transition-colors">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {hasValidLink(videoUrl) && (
                      <a href={videoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground font-medium hover:text-violet-500 transition-colors">
                        <ExternalLink size={18} /> Watch Demo
                      </a>
                    )}
                    {hasValidLink(codeUrl) && (
                      <a href={codeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground font-medium hover:text-violet-500 transition-colors">
                        <GithubIcon size={18} /> Source Code
                      </a>
                    )}
                    {hasValidLink(docsUrl) && (
                      <a href={docsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground font-medium hover:text-violet-500 transition-colors">
                        <FileText size={18} /> Documentation
                      </a>
                    )}
                    {hasValidLink(figmaUrl) && (
                      <a href={figmaUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground font-medium hover:text-violet-500 transition-colors">
                         Wireframes
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};