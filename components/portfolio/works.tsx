"use client"

import { Github, ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    title: "My Coffee Journey v2",
    description:
      "コーヒーの記録・評価・分析を一貫して管理できるReact Nativeアプリ。ブランド・豆・挽き目を正規化したデータモデル設計と、飲用記録とレビューの責務分離が設計の核。カレンダービューや分析画面で振り返り導線も整備。",
    tech: ["React Native", "TypeScript", "Supabase", "Expo", "Zustand"],
    status: "完成",
    github: "https://github.com/arki-s/MyCoffeeJourney-v2",
    // demo: "https://demo.com",
  },
  {
    title: "ニュース自動通知スクリプト",
    description:
      "AIがニュースを収集・要約してNotionに保存、プッシュ通知まで自動で行う実用スクリプト。GitHub Actionsで定期実行。API連携・自動化・LLM活用を実務レベルで組み合わせた日常利用中の成果物。",
    tech: ["Python", "Claude API", "GitHub Actions", "Notion API"],
    status: "完成",
    github: "https://github.com/arki-s/news-auto-notion",
  },
  {
    title: "飲み会シミュレーター",
    description:
      "入力条件をもとにAIが飲み会の展開をシミュレーションするWebアプリ。LLMを使ったプロトタイピングの実験作として、エンタメ性と実装検証を両立。機能拡張予定あり。",
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    status: "開発中",
    github: "https://github.com/arki-s/nomikai-simulator",
  },
  {
    title: "miniCRM",
    description:
      "現職で得た型安全な開発フロー・DB設計の知見を個人開発に落とし込んだ顧客管理システム。フロントエンドとバックエンドを分離した構成で業務系システム開発の構造整理力を示すポートフォリオ。本格実装進行中。",
    tech: ["Next.js", "Django", "PostgreSQL", "TypeScript"],
    status: "開発中",
    github: "https://github.com/arki-s/miniCRM",
    // demo: "https://demo.com",
  },
]

export function Works() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="works"
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground-warm mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Works<span className="text-primary">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {/* でもサイトがあるものが出てきたらアイコン表示予定 */}
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )} */}
                </div>
              </div>
              <div className="mb-4">
                <span
                  className="px-2 py-1 text-xs bg-secondary text-primary rounded border border-primary/30"
                >
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-secondary text-primary rounded border border-primary/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
