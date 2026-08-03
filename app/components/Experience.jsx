const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Founder)",
      company: "Smart-Chama Project",
      date: "Nov 2025 - Present",
      description: "Architecting a fintech solution for digitizing Table Banking groups. Integrating M-Pesa Daraja API for automated payments and building complex interest calculation engines using Java Spring Boot and Next.js.",
    },
    {
      title: "Software Developer (Shadow Role)",
      company: "Tech Company (NDA)", 
      date: "June 2025 - Nov 2025",
      description: "Completed a 5-month intensive shadow developer program. Collaborated with senior developers on production code, learned enterprise Git workflows, and contributed to backend optimization tasks.",
    },
    {
      title: "Software Engineering Student",
      company: "Technical University of Mombasa", 
      date: "Upcoming (Jan 2026)",
      description: "Preparing to return to school to deepen theoretical knowledge in Computer Science and Systems Architecture while continuing freelance development.",
    },
  ];

  return (
    // Changed max-w-3xl to max-w-5xl to fix the alignment shift
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      
      {/* Header with Blue 03 */}
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
        <span className="text-blue-600 mr-2">03.</span> Experience
        <span className="ml-4 h-px bg-slate-300 flex-grow max-w-xs"></span>
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-300 ml-3 space-y-12">
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            
            {/* The Dot: Inner background now matches the book-page color, with the orange border */}
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#F5F2EB] border-4 border-[#FF9900]"></span>
            
            {/* The Content */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
              <span className="text-sm font-mono text-slate-600 bg-slate-200 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">
                {exp.date}
              </span>
            </div>
            
            <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
            
            {/* Description fixed to text-slate-700 for high visibility */}
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              {exp.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;