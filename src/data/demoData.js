export const projects = [
  {
    id: 1,
    name: 'Code Crusader: Anti-Virus Assault',
    category: 'Action · Single-player',
    platform: 'Windows',
    progress: 72,
    status: 'In production',
    color: 'indigo',
    initials: 'CC',
    milestone: 'Polish & QA',
    due: 'Nov 14, 2026',
  },
  {
    id: 2,
    name: 'Studio Operations',
    category: 'Internal tools',
    platform: 'Web',
    progress: 46,
    status: 'In progress',
    color: 'blue',
    initials: 'SO',
    milestone: 'Dashboard prototype',
    due: 'Nov 20, 2026',
  },
  {
    id: 3,
    name: 'Game Concept Lab',
    category: 'Research & design',
    platform: 'Prototype',
    progress: 28,
    status: 'Planning',
    color: 'violet',
    initials: 'GL',
    milestone: 'Concept review',
    due: 'Nov 27, 2026',
  },
]

export const tasks = [
  { id: 1, title: 'Review player movement and combat feel', project: 'Code Crusader', priority: 'High', status: 'In progress', owner: 'AR', color: 'indigo', due: 'Today' },
  { id: 2, title: 'Polish HUD and health bar states', project: 'Code Crusader', priority: 'Medium', status: 'In review', owner: 'NS', color: 'blue', due: 'Tomorrow' },
  { id: 3, title: 'Prepare project overview layout', project: 'Studio Operations', priority: 'Medium', status: 'To do', owner: 'KM', color: 'violet', due: 'Nov 02' },
  { id: 4, title: 'Run final gameplay smoke-test checklist', project: 'Code Crusader', priority: 'High', status: 'To do', owner: 'DY', color: 'orange', due: 'Nov 04' },
]

export const activities = [
  { id: 1, initials: 'AR', name: 'Alex R.', action: 'moved a task to', target: 'In progress', time: '18 min ago', color: 'indigo' },
  { id: 2, initials: 'NS', name: 'Nadia S.', action: 'updated the milestone', target: 'Polish & QA', time: '1 hour ago', color: 'blue' },
  { id: 3, initials: 'KM', name: 'Kevin M.', action: 'added a task to', target: 'Studio Operations', time: '3 hours ago', color: 'violet' },
]

export const team = [
  { initials: 'AR', name: 'Alex R.', role: 'Gameplay Programmer', status: 'Available', color: 'indigo' },
  { initials: 'NS', name: 'Nadia S.', role: 'UI / UX Designer', status: 'In focus', color: 'blue' },
  { initials: 'KM', name: 'Kevin M.', role: 'Game Designer', status: 'Available', color: 'violet' },
  { initials: 'DY', name: 'Dimas Y.', role: 'QA & Testing', status: 'In focus', color: 'orange' },
]