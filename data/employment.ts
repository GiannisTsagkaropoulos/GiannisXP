export type Employment = {
  id: number
  start: string
  end: string
  position: string
  company: string
  details: {
    key: string
    name?: string
    value?: string | string[]
  }[]
}

export const employmentData: Employment[] = [
  {
    id: 1,
    start: "Jan 2025",
    end: "Jul 2025",
    position: "Software Engineer Intern",
    company: "Blueground",
    details: [
      {
        key: "bg-3", value: "Reduced partner integration time from days to less than 10 minutes by engineering an automated integration pipeline in Typescript during a major architecture migration from a legacy PHP monolith to a microservices event-driven architecture"
      }, {
        key: "bg-2", value: "Owned 2 successful E2E partner API certifications (Hostfully, Mews) and advanced 3 additional ones by designing the system architecture, implementing E2E testing, and leading certification calls"
      },
      {
        key:"bg-0", value: "Tech stack: Git, Github Actions, Docker, Typescript, Node.js, Fastify, Jest, MongoDB, Redis, Apache Kafka, BullMQ, AWS, Datadog"
      }
    ]
  },
  {
    id: 0,
    start: "Jan 2023",
    end: "Dec 2023",
    position: "Data Science, Apprenticeship",
    company: "SphearsAI",
    details: [
      {
        key: "ds-1", value: "Enabled data-driven \textbf{retail traffic forecasting} by developing a predictive application in   \textbf{R} that tracked transaction logistics, analyzed KPIs, and leveraged customer loyalty program data"
      }
    ]
  },
];
