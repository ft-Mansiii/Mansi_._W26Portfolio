import profilePic from "@/assets/image.jpeg"; 

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Bio & <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Vision</span>
        </h2>

        {/* The Main Glass Container */}
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-2xl rounded-[2.5rem] p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-12 gap-12 items-center">

            {/* Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-400/30 blur-3xl rounded-full"></div>
                <img
                  src={profilePic}
                  alt="Mansi"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/30 dark:border-white/10 shadow-xl relative z-10"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-7 space-y-6 text-foreground/80 text-lg leading-relaxed">
              <div className="bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/5 p-6 rounded-2xl mb-6">
                <p className="text-foreground text-base">
                  <span className="font-semibold text-violet-500">Core Vision:</span> <span className="italic">"The most dangerous phrase in the language is, 'We've always done it this way.'"</span> – Grace Hopper. <br className="hidden md:block mt-2"/>
                  I approach software development with a mindset of continuous improvement. My focus is on breaking down complex problems and engineering innovative, user-centric solutions that defy conventional limitations.
                </p>
              </div>

              <p>
                I am <span className="text-violet-500 font-semibold">Mansi</span>, a passionate Software Engineer driven by a love for building robust backend architectures and seamless web applications. Currently studying Computer Programming at George Brown College, I thrive on tackling new technological challenges, participating in global coding competitions, and collaborating with cross-functional teams to bring ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* BENTO BOX HIGHLIGHTS (Completely Rephrased) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card spanning 2 columns */}
          <div className="md:col-span-2 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-lg border border-white/30 dark:border-white/10 p-8 rounded-[2rem] shadow-lg flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Global Competitor</h4>
            <p className="text-foreground/80 text-lg">
              Placed in the <strong>top 12% worldwide</strong> and ranked <strong>10th nationally</strong> at the prestigious IEEEXtreme 19.0 programming competition.
            </p>
          </div>

          {/* Square Card */}
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 p-8 rounded-[2rem] shadow-lg">
            <h4 className="text-xl font-bold mb-3 text-violet-500">High Honors</h4>
            <p className="text-foreground/70">
              Consistently recognized for scholastic achievements as a 4× Dean’s List scholar with a <strong>3.85 GPA</strong>.
            </p>
          </div>

          {/* Square Card */}
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 p-8 rounded-[2rem] shadow-lg">
            <h4 className="text-xl font-bold mb-3 text-violet-500">Event Organizer</h4>
            <p className="text-foreground/70">
              Spearheaded the planning and technical execution of <strong>Husky Hacks</strong>, the premier student hackathon at George Brown.
            </p>
          </div>

          {/* Large Card spanning 2 columns */}
          <div className="md:col-span-2 bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 p-8 rounded-[2rem] shadow-lg flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-3 text-violet-500">Knowledge Catalyst</h4>
            <p className="text-foreground/80 text-lg">
              Dedicated over <strong>1000 hours</strong> to guiding and mentoring students in full-stack web development, Java, and system algorithms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};