export const useCaseList = [
    {
        slug: 'cao-assistent',
        name: 'CAO Assistent',
        image: '/img/cao.png',
        outcome: ['-40% afhandeltijd', '+20% NPS'],
        blurb: 'Vragen over CAO/HR automatisch beantwoorden met traceerbare bronnen.',
    },
    {
        slug: 'groot-pdf-naar-rapport',
        name: 'Groot PDF → Rapport',
        outcome: ['-70% handwerk', '<3 mnd payback'],
        blurb: "Lange PDF's samenvatten naar een direct bruikbaar Word-rapport.",
    },
    {
        slug: 'inkomende-opdrachten-automatisch',
        name: 'Inkomende opdrachten automatisch verwerken',
        outcome: ['+33% productiviteit'],
        blurb: 'Orders uit e-mail/WhatsApp identificeren en boeken in systemen.',
    },
    {
        slug: 'n8n-integraties',
        name: 'n8n Integraties',
        outcome: ['Snelle koppelingen', 'Geen lock-in'],
        blurb: 'Workflow-automatisering tussen ERP/CRM en AI-services.',
    },
];

export function getUseCaseBySlug(slug) {
    return useCaseList.find((u) => u.slug === slug) || null;
}


