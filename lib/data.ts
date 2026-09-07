// Structural (locale-independent) project data. Translatable fields
// (title, description, badge label) live in messages/*.json under the
// "Projects" namespace, keyed by `id`, and are resolved in the components
// that render this data via `useTranslations("Projects")`.
export const projects = [
  {
    id: 1,
    zoneKey: "monastir",
    typeKey: "industriel",
    power: "150 kWc",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsw2JNnVyO4FEqaUmOJxmVGDHN-6FQjhbGnt84HH4BTJ3OhxQIK7l4Pan9WN9PkLL70G8wpnc_0ybGP8wCvR73R9gqN137ucBL5CUfc8ij_Gw9xHebMfkQ5ZwvYYcNkflteOQqszrXFJrfo52t3Nea2HMZL45VSMUUpiRAz8GZfEHN-oWRyGIkaTNerkkOsS7OJKfsx8JI4MxvaK4US5tjbsdKSFdcbPG5oEnCN_VzIdevm2TIveL4XA",
    badgeColor: "bg-primary text-on-primary",
  },
  {
    id: 2,
    zoneKey: "sousse",
    typeKey: "residentiel",
    power: "5 kWc",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRVzh__1N1_h7l9ARMwUpWX4KJT1cWuBHBWUyDnOS4T6LyUEq0ExxBOSTc-fdslNEDewWkJ7aLHF5f7JLUN5HhMQmQlSPITYB0c_FiryV6imgGOb9j_pnK3N20ZafdxExV3Lsuw7jKr0XcCnQ8F8kc3rODSJQ3-vVOgyDNjJ9-c9pZftwx7Y7Nf_zEKHrK5AiQ8MnMe_Vf9M8Jvkm5A-WmXj9hs6cGvtHJOKZB354tzWtEyoV7ineRnA",
    badgeColor: "bg-technical-blue text-on-primary",
    beforeAfter: true,
  },
  {
    id: 3,
    zoneKey: "mahdia",
    typeKey: "agricole",
    power: "120 m³",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmoZ9ZYwRD_vntAYavxzjrCnl3u8JyZQolTDD-2QtllHTj3tVdqazHTc7JINFMwPf_nqa1TrUrgIbuC5N6K8f_v3Gq3t9UQ3rGFHyi0tKUVidxeHvjUnDjmYcR_6J4E04fG0FDql54fvnrWWze-4ifwxhSvX82HxsnqFk1bdnEb4cip2vgo98SlFMc9Ne9oDzbYQ6INF3Bo6w1xT8RF-iBw83sqYOCSQHUMBq5u0gyNlvemVHmQhDnDQ",
    badgeColor: "bg-solar-orange text-white",
  },
] as const;

export const zoneKeys = ["all", "monastir", "mahdia", "sousse"] as const;
export const typeKeys = ["all", "residentiel", "industriel", "agricole"] as const;

export type ZoneKey = (typeof zoneKeys)[number];
export type TypeKey = (typeof typeKeys)[number];
