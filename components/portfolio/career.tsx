"use client"

import { useInView } from "@/hooks/use-in-view"

const experiences = [
  {
    title: "リードエンジニア / リーダー補佐",
    company: "株式会社KIYONO",
    period: "2026年1月 - 2026年3月",
    description:
      "家具チェーン向けCRM開発にてリードエンジニアとして参画。型安全な開発フロー構築・DB設計見直し・ADR導入により開発工数を削減。ShopifyベースECサイトの機能拡張も並行担当。",
    tags: ["Next.js", "TypeScript", "Django", "PostgreSQL", "Docker", "GCP", "Shopify"],
  },
  {
    title: "エンジニア / ユニットマネージャー",
    company: "アナリックス株式会社",
    period: "2023年10月 - 2025年11月",
    description:
      "SESとして複数案件に従事。仕様不在の業務システム改修、モバイルアプリ開発、新規API開発を担当。優秀社員表彰受賞。",
    tags: ["React", "TypeScript", "React Native", "Express", "Laravel", "MySQL", "AWS"]
  },
  {
    title: "アシスタントマネージャー",
    company: "ミーレ・ジャパン株式会社",
    period: "2021年6月 - 2023年2月",
    description:
      "テクニカルサポートのコールセンター運営・業務改善を主導。放棄呼率を40%超→4%台に改善。CRMベンダーとの折衝によるシステム改修も実現。",
    tags: ["CRM運用", "テクサポ", "Microsoft 365", "業務改善", "チームマネジメント"],
  },
  {
    title: "SV / セキュリティマネージャー",
    company: "富士通コミュニケーションサービス株式会社",
    period: "2016年11月 - 2021年5月",
    description:
      "Google Workspaceテクニカルサポートにて20名チームを管理。一次回答KPIを60%台→90%へ改善、生産性25%向上。",
    tags: ["Google Workspace", "テクサポ", "KPI改善", "チームマネジメント"]
  },
]

export function Career() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="career"
      className="py-20 px-6 bg-card"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground-warm mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Career<span className="text-primary">.</span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isInView ? `${index * 150}ms` : "0ms" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2" />

              <div
                className={`ml-6 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:text-right md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
              >
                <div className="p-5 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors duration-300">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-secondary text-primary rounded border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
