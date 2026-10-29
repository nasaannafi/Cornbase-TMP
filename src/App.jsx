import { useState } from 'react'
import {
  Activity, ArrowDownRight, ArrowRight, ArrowUpRight, Bell, CalendarDays,
  CheckCheck, ChevronDown, CircleHelp, Command, FolderKanban, Gamepad2,
  LayoutDashboard, Menu, MoreHorizontal, Plus, Search, Settings2, ShieldCheck,
  Sparkles, Target, Users, X, Zap,
} from 'lucide-react'
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { activities, projects, tasks, team } from './data/demoData'

const chartData = [
  { day: 'Mon', completed: 12, created: 8 },
  { day: 'Tue', completed: 18, created: 11 },
  { day: 'Wed', completed: 15, created: 9 },
  { day: 'Thu', completed: 24, created: 13 },
  { day: 'Fri', completed: 20, created: 10 },
  { day: 'Sat', completed: 29, created: 15 },
  { day: 'Sun', completed: 34, created: 12 },
]

const navGroups = [
  { label: 'WORKSPACE', items: [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Projects', icon: FolderKanban, count: '3' },
    { label: 'Production Board', icon: CheckCheck },
    { label: 'Team', icon: Users },
  ]},
  { label: 'MANAGE', items: [
    { label: 'Milestones', icon: Target },
    { label: 'Reports', icon: Activity },
  ]},
]

function Avatar({ initials, color = 'indigo', size = '' }) {
  return <span className={`avatar avatar-${color} ${size}`}>{initials}</span>
}

function Sidebar({ active, setActive, open, setOpen }) {
  return <>
    {open && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-mark"><Command size={20} strokeWidth={2.4} /></div>
        <div><strong>cornbase</strong><span>STUDIO WORKSPACE</span></div>
        <button className="icon-button sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={18} /></button>
      </div>
      <button className="workspace-switcher">
        <div className="studio-logo">BC</div>
        <div className="workspace-text"><strong>Boiled Corn Studio</strong><span>Studio workspace</span></div>
        <ChevronDown size={15} className="muted-icon" />
      </button>
      <nav className="nav">
        {navGroups.map(group => <div className="nav-group" key={group.label}>
          <p className="nav-label">{group.label}</p>
          {group.items.map(item => {
            const Icon = item.icon
            return <button key={item.label} onClick={() => { setActive(item.label); setOpen(false) }} className={`nav-item ${active === item.label ? 'active' : ''}`}>
              <Icon size={18} strokeWidth={1.9} /><span>{item.label}</span>{item.count && <span className="nav-count">{item.count}</span>}
            </button>
          })}
        </div>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon"><Sparkles size={16} /></div>
          <strong>Make room for ideas</strong>
          <p>Keep your team and projects moving together.</p>
          <button onClick={() => setActive('Projects')}>Explore workspace <ArrowRight size={14} /></button>
        </div>
        <button className="nav-item"><Settings2 size={18} /><span>Settings</span></button>
        <button className="nav-item"><CircleHelp size={18} /><span>Help & support</span></button>
        <div className="profile">
          <Avatar initials="NJ" color="indigo" />
          <div className="profile-copy"><strong>Studio Admin</strong><span>Workspace owner</span></div>
          <MoreHorizontal size={18} className="muted-icon" />
        </div>
      </div>
    </aside>
  </>
}

function Header({ active, setOpen }) {
  return <header className="topbar">
    <div className="topbar-left">
      <button className="icon-button mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
      <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>{active}</strong></div>
    </div>
    <div className="topbar-actions">
      <button className="search-button"><Search size={16} /><span>Search anything...</span><kbd>⌘ K</kbd></button>
      <button className="icon-button notification-button" aria-label="Notifications"><Bell size={18} /><i /></button>
      <Avatar initials="NJ" color="indigo" />
    </div>
  </header>
}

function StatCard({ label, value, note, trend, icon: Icon, color, negative = false }) {
  return <article className="stat-card">
    <div className="stat-top"><span>{label}</span><span className={`stat-icon ${color}`}><Icon size={18} /></span></div>
    <div className="stat-value-row"><strong>{value}</strong><span className={`trend ${negative ? 'trend-negative' : ''}`}>{negative ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}{trend}</span></div>
    <p>{note}</p>
  </article>
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className={`project-art art-${project.color}`}>
      {project.initials === 'CC' ? <><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><ShieldCheck size={30} /></div><span className="art-kicker">GAME PROJECT</span></> :
        project.initials === 'SO' ? <><div className="abstract-grid" /><div className="art-core"><LayoutDashboard size={29} /></div><span className="art-kicker">INTERNAL TOOL</span></> :
        <><div className="abstract-grid" /><div className="art-core"><Gamepad2 size={30} /></div><span className="art-kicker">CONCEPT LAB</span></>}
      <button className="project-more" aria-label={`More options for ${project.name}`}><MoreHorizontal size={18} /></button>
    </div>
    <div className="project-body">
      <div className="project-heading"><div><h3>{project.name}</h3><p>{project.category}</p></div><span className={`status-dot status-${project.color}`}></span></div>
      <div className="project-meta"><span><span className="meta-label">PLATFORM</span>{project.platform}</span><span><span className="meta-label">NEXT MILESTONE</span>{project.milestone}</span></div>
      <div className="progress-row"><span>Progress</span><strong>{project.progress}%</strong></div>
      <div className="progress-track"><div className={`progress-fill fill-${project.color}`} style={{ width: `${project.progress}%` }} /></div>
      <div className="project-footer"><span><CalendarDays size={14} /> Due {project.due}</span><button aria-label="View project" className="round-arrow"><ArrowUpRight size={16} /></button></div>
    </div>
  </article>
}

function TaskRow({ task }) {
  return <div className="task-row">
    <span className={`task-check ${task.status === 'In review' ? 'checked' : ''}`}>{task.status === 'In review' && <CheckCheck size={13} />}</span>
    <div className="task-copy"><strong>{task.title}</strong><span>{task.project}</span></div>
    <span className={`priority priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
    <Avatar initials={task.owner} color={task.color} size="avatar-small" />
    <span className="task-due">{task.due}</span>
  </div>
}

function Dashboard({ setActive }) {
  return <div className="page-content">
    <section className="welcome-row">
      <div><div className="eyebrow"><span className="eyebrow-dot" /> THURSDAY, OCTOBER 29, 2026</div><h1>Good afternoon, team <span>✳</span></h1><p>Here’s what’s happening across your studio today.</p></div>
      <div className="welcome-actions"><button className="button-secondary"><CalendarDays size={16} /> This week <ChevronDown size={14} /></button><button className="button-primary" onClick={() => setActive('Production Board')}><Plus size={17} /> Create task</button></div>
    </section>
    <section className="stats-grid">
      <StatCard label="Active projects" value="03" trend="+1 this month" note="Across your workspace" icon={FolderKanban} color="stat-indigo" />
      <StatCard label="Tasks completed" value="84" trend="12.8%" note="Compared to last week" icon={CheckCheck} color="stat-green" />
      <StatCard label="Overdue tasks" value="05" trend="2 from last week" note="Needs your attention" icon={CalendarDays} color="stat-orange" negative />
      <StatCard label="Team members" value="08" trend="+2 this month" note="Across 4 disciplines" icon={Users} color="stat-blue" />
    </section>
    <section className="main-grid">
      <article className="panel activity-panel">
        <div className="panel-heading"><div><h2>Production activity</h2><p>Task completion across the studio</p></div><button className="select-small">Last 7 days <ChevronDown size={14} /></button></div>
        <div className="chart-legend"><span><i className="legend-completed" /> Completed</span><span><i className="legend-created" /> Created</span><span className="chart-total"><strong>152</strong><small>tasks touched</small></span></div>
        <div className="chart-wrap"><ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 8, right: 4, left: -22, bottom: 0 }}>
            <defs><linearGradient id="completedFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5965e8" stopOpacity={0.19} /><stop offset="100%" stopColor="#5965e8" stopOpacity={0.01} /></linearGradient></defs>
            <CartesianGrid stroke="#edf0f6" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9299ab', fontSize: 11 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9299ab', fontSize: 11 }} />
            <Tooltip contentStyle={{ border: '1px solid #e7eaf2', borderRadius: 10, fontSize: 12, boxShadow: '0 8px 24px #19244212' }} />
            <Area type="monotone" dataKey="completed" name="Completed" stroke="#5965e8" strokeWidth={2.5} fill="url(#completedFill)" />
            <Area type="monotone" dataKey="created" name="Created" stroke="#aeb5c7" strokeWidth={2} strokeDasharray="4 4" fill="transparent" />
          </AreaChart>
        </ResponsiveContainer></div>
      </article>
      <article className="panel milestone-panel">
        <div className="panel-heading"><div><h2>Upcoming milestones</h2><p>Key dates on the horizon</p></div><button className="icon-button subtle-button" aria-label="Milestone options"><MoreHorizontal size={18} /></button></div>
        <div className="milestone-list">
          <div className="milestone-item"><div className="milestone-date"><strong>04</strong><span>NOV</span></div><div className="milestone-copy"><strong>Gameplay polish</strong><span>Code Crusader</span><div className="milestone-tag tag-indigo">In progress</div></div><span className="milestone-line" /></div>
          <div className="milestone-item"><div className="milestone-date"><strong>10</strong><span>NOV</span></div><div className="milestone-copy"><strong>Internal demo review</strong><span>Studio Operations</span><div className="milestone-tag tag-blue">Upcoming</div></div><span className="milestone-line" /></div>
          <div className="milestone-item"><div className="milestone-date"><strong>14</strong><span>NOV</span></div><div className="milestone-copy"><strong>Polish & QA</strong><span>Code Crusader</span><div className="milestone-tag tag-violet">Planned</div></div></div>
        </div>
        <button className="text-link" onClick={() => setActive('Milestones')}>View all milestones <ArrowRight size={15} /></button>
      </article>
    </section>
    <section className="bottom-grid">
      <article className="panel projects-panel">
        <div className="panel-heading"><div><h2>Projects overview</h2><p>Keep track of your studio’s work</p></div><button className="text-link" onClick={() => setActive('Projects')}>All projects <ArrowRight size={15} /></button></div>
        <div className="projects-grid">{projects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
      </article>
      <article className="panel tasks-panel">
        <div className="panel-heading"><div><h2>Priority tasks</h2><p>What needs attention next</p></div><button className="icon-button subtle-button" aria-label="Task options"><MoreHorizontal size={18} /></button></div>
        <div className="task-list">{tasks.slice(0, 4).map(task => <TaskRow task={task} key={task.id} />)}</div>
        <button className="text-link task-view" onClick={() => setActive('Production Board')}>Open production board <ArrowRight size={15} /></button>
      </article>
    </section>
    <section className="panel team-panel">
      <div className="panel-heading"><div><h2>Studio team</h2><p>Your collaborators across the production pipeline</p></div><button className="text-link" onClick={() => setActive('Team')}>View team <ArrowRight size={15} /></button></div>
      <div className="team-list">{team.map(member => <div className="team-member" key={member.initials}><Avatar initials={member.initials} color={member.color} /><div className="member-copy"><strong>{member.name}</strong><span>{member.role}</span></div><span className={`member-status ${member.status === 'Available' ? 'available' : ''}`}><i />{member.status}</span></div>)}</div>
    </section>
    <footer className="page-footer"><span>© 2026 Cornbase · Boiled Corn Studio</span><span><span className="demo-dot" /> Demo workspace · Sample data</span></footer>
  </div>
}

function SimplePage({ active }) {
  const content = {
    Projects: ['Projects', 'All studio projects in one place.', 'Your projects will appear here. The dashboard currently uses a consistent set of sample projects.'],
    'Production Board': ['Production Board', 'Plan, track, and ship work together.', 'Kanban workflow is the next implementation step. Sample tasks are ready in src/data/demoData.js.'],
    Team: ['Studio team', 'Meet the people behind the work.', 'Team member profiles and workload views will be added here.'],
    Milestones: ['Milestones', 'Keep key production dates visible.', 'Track upcoming reviews, builds, and release checkpoints.'],
    Reports: ['Studio reports', 'Understand progress at a glance.', 'Reports and workload insights will be added here.'],
  }
  const [title, subtitle, description] = content[active] || content.Projects
  return <div className="page-content simple-page"><div className="eyebrow"><span className="eyebrow-dot" /> BOILED CORN STUDIO</div><h1>{title}</h1><p>{subtitle}</p><div className="panel simple-placeholder"><div className="simple-icon"><Zap size={25} /></div><h2>{title} workspace</h2><p>{description}</p><span className="demo-pill">Prototype · Demo data</span></div></div>
}

export default function App() {
  const [active, setActive] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="app-shell">
    <Sidebar active={active} setActive={setActive} open={menuOpen} setOpen={setMenuOpen} />
    <main className="main-area">
      <Header active={active} setOpen={setMenuOpen} />
      {active === 'Dashboard' ? <Dashboard setActive={setActive} /> : <SimplePage active={active} />}
    </main>
  </div>
}