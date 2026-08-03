const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"],
    },
    {
      title: "Backend & Systems",
      skills: ["Java Spring Boot", "Node.js", "REST APIs", "PostgreSQL/MySQL", "M-Pesa Daraja API"],
    },
    {
      title: "Tools & Environment",
      skills: ["Git & GitHub", "Linux", "Postman", "Docker", "VS Code", "IntelliJ IDEA"],
    },
  ];

  return (
    // Sitting beautifully on the global stone-50 background
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-stone-900 mb-12 flex items-center">
          <span className="text-blue-600 mr-2">02.</span> Technical Skills
          <span className="ml-4 h-px bg-stone-300 flex-grow max-w-xs"></span>
        </h2>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              // Clean, stark white cards that pop off the stone-50 background
              className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-stone-900 mb-6 border-b pb-2 border-stone-100">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-stone-600 font-medium">
                    {/* The Signature Orange Dot! */}
                    <span className="w-2 h-2 bg-[#FF9900] rounded-full mr-3 shadow-sm"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;