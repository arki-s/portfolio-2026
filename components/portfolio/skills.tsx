"use client"

import { useInView } from "@/hooks/use-in-view"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🎸" },
  { name: "Next.js", icon: "▲" },
  { name: "AWS", icon: "☁️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Shopify", icon: "🛒" },
]

export function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-6 bg-card"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground-warm mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tech Stack<span className="text-primary">.</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group p-6 rounded-lg border-l-4 border-l-primary border-y border-r border-border transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: isInView ? `${index * 50}ms` : "0ms",
                backgroundColor: "#2a1208"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3d1a0a"
                e.currentTarget.style.boxShadow = "0 0 24px rgba(232, 100, 12, 0.25)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2a1208"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-foreground">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
