export const articleList = [
    {
        slug: 'roi-van-ai-6-12-weken',
        title: 'De ROI van AI in 6–12 weken: van pilot naar product',
        teaser: 'Een pragmatische route naar meetbare resultaten zonder vendor lock-in.',
        date: '2025-08-31',
        read: '6 min',
        tags: ['ROI', 'Implementatie'],
    },
    {
        slug: 'avg-en-eu-ai-act-in-praktijk',
        title: 'AVG & EU AI Act in de praktijk: wat moet je nu regelen?',
        teaser: 'Concrete maatregelen voor privacy, explainability en governance.',
        date: '2025-07-12',
        read: '8 min',
        tags: ['Compliance', 'Risk'],
    },
    {
        slug: 'guardrails-en-evaluatie',
        title: 'Guardrails & evaluatie: hoe voorkom je hallucinaties?',
        teaser: 'Meetmethodes, evaluatiekaders en fail-safes die echt werken.',
        date: '2025-06-02',
        read: '5 min',
        tags: ['Kwaliteit', 'MLOps'],
    },
];

export function getArticleBySlug(slug) {
    return articleList.find((a) => a.slug === slug) || null;
}


