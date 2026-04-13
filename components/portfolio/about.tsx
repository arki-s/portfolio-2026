"use client"

import { useInView } from "@/hooks/use-in-view"

const skills = [
  "React", "TypeScript", "Python", "Django", "Next.js",
  "AWS", "MySQL", "PostgreSQL", "Docker", "GraphQL", "Node.js",
  "REST APIs", "Git", "CI/CD", "Agile", "System Design"
]

export function About() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground-warm mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          About<span className="text-primary">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              グローバルCS・業務改善・マネジメントの現場を経て、
              エンジニアへ。
              <br />
              「仕様の矛盾を見つけ、チームを動かし、コードを書く」——
              そんな動き方が自分のスタイルです。
              <br />
              要件定義から実装・保守まで一気通貫で関われることと、
              エンジニアリングと組織改善を同時に動かせることが強みです。
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mt-4">
              現在はフリーランス・受託案件を中心に、
              上流工程から関われる環境を探しています。
            </p>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-secondary text-primary rounded-md border border-primary/30 hover:border-primary/60 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
