export const capabilityLevels = [
    {
        id: 1,
        key: 'niveau-1',
        title: 'Niveau 1: Prompten',
        summary: '(Enkel) prompt + AI',
        badges: [
            { label: 'AI', color: 'bg-indigo-100 text-indigo-700' },
            { label: 'Prompt', color: 'bg-rose-100 text-rose-700' },
            
        ],
        description:
            'Ad‑hoc interactie met het model. Handig voor verkennen, maar geen herbruikbaarheid of borging.',
    },
    {
        id: 2,
        key: 'niveau-2',
        title: 'Niveau 2: Promptsjablonen',
        summary: 'Herbruikbaar prompt + AI + evt specifieke (bedrijfs-) info',
        badges: [
            { label: 'AI', color: 'bg-indigo-100 text-indigo-700' },
            { label: 'Prompt', color: 'bg-rose-100 text-rose-700' },
            { label: 'Sjabloon', color: 'bg-rose-100 text-rose-700' },
            { label: 'Informatie', color: 'bg-violet-100 text-violet-700' },
        ],
        description:
            'Gestandaardiseerde promptsjablonen leveren consistente output. Optioneel gevoed met eigen context of kennisbanken.',
    },
    {
        id: 3,
        key: 'niveau-3',
        title: 'Niveau 3: Workflow Automatisering',
        summary:
            'Herbruikbaar prompt + AI + Specifieke (bedrijfs-) info + APIs + andere processen / tools',
        badges: [
            { label: 'AI', color: 'bg-indigo-100 text-indigo-700' },
            { label: 'Prompt', color: 'bg-rose-100 text-rose-700' },
            { label: 'Sjabloon', color: 'bg-rose-100 text-rose-700' },
            { label: 'Informatie', color: 'bg-violet-100 text-violet-700' },
            { label: 'APIs & Tools ', color: 'bg-fuchsia-100 text-fuchsia-700' },
        ],
        description:
            'Einde‑tot‑einde workflows met integraties (bijv. CRM, ticketing, RPA). Output wordt automatisch verwerkt in processen.',
    },
    {
        id: 4,
        key: 'niveau-4',
        title: 'Niveau 4: Agents',
        summary:
            'Herbruikbaar prompt + AI + Specifieke (bedrijfs-) info + APIs + andere processen / tools + BESLISSEN',
        badges: [
            { label: 'AI', color: 'bg-indigo-100 text-indigo-700' },
            { label: 'Prompt', color: 'bg-rose-100 text-rose-700' },
            { label: 'Sjabloon', color: 'bg-rose-100 text-rose-700' },
            { label: 'Informatie', color: 'bg-violet-100 text-violet-700' },
            { label: 'APIs & Tools ', color: 'bg-fuchsia-100 text-fuchsia-700' },
            { label: 'Beslissingslogica', color: 'bg-amber-100 text-amber-700' },
        ],
        description:
            'Autonome agents die meerdere stappen plannen, acties uitvoeren en beslissingslogica toepassen met guardrails.',
    },
];


