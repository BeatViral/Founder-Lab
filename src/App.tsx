import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Car,
  ChevronRight,
  CircleUserRound,
  Code2,
  ExternalLink,
  FlaskConical,
  Handshake,
  Github,
  Grid2X2,
  Info,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Mic2,
  Music2,
  Rocket,
  Scale,
  Search,
  Sparkles,
  Star,
  Store,
  Utensils,
  X,
  Zap,
} from "lucide-react";
import { founder, type Project, projects } from "./data/projects";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

const navItems = [
  { label: "Overview", href: "#overview", icon: Blocks },
  { label: "All Projects", href: "#projects", icon: BriefcaseBusiness },
  { label: "Status", href: "#stats", icon: Sparkles },
  { label: "About", href: "#about", icon: Info },
  { label: "Contact", href: "#contact", icon: Mail },
];

const statusClass: Record<string, string> = {
  Live: "status-live",
  Prototype: "status-prototype",
  "Paid MVP": "status-paid",
  "Pilot-ready": "status-pilot",
  Concept: "status-concept",
  Paused: "status-paused",
  "Partner Discovery": "status-partner",
  MVP: "status-mvp",
};

const activationIntents = [
  "I want to use this",
  "I want to pilot this",
  "I want to partner on this",
  "I want to sponsor the next build",
  "I want to license / white-label this",
  "I want to talk about it",
];

const iconMap = [
  { test: /ask|whatsapp|message|tom/i, icon: MessageCircle },
  { test: /not gpt|gpt|answer engine|evidence|ai/i, icon: Sparkles },
  { test: /31|music|artist|phatso|audio/i, icon: Music2 },
  { test: /truth|sachet|supplement/i, icon: FlaskConical },
  { test: /law|legal/i, icon: Scale },
  { test: /voice|call/i, icon: Mic2 },
  { test: /car|auto/i, icon: Car },
  { test: /founder|startup/i, icon: Rocket },
  { test: /coder|code/i, icon: Code2 },
  { test: /supper|food|kitchen/i, icon: Utensils },
  { test: /market|vendor|local/i, icon: Store },
];

function getProjectIcon(project: Project) {
  return iconMap.find(({ test }) => test.test(`${project.name} ${project.category}`))?.icon ?? Rocket;
}

function splitCategory(category: string) {
  return category.split("/").map((item) => item.trim()).filter(Boolean);
}

function App() {
  const [query, setQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project>(featuredProjects[0] ?? projects[0]);
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const [activateProject, setActivateProject] = useState<Project | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const stats = useMemo(() => {
    const categoryCount = new Set(projects.flatMap((project) => splitCategory(project.category))).size;
    const publicPages = projects.filter((project) => Boolean(project.url)).length;
    const pilotReady = projects.filter((project) => project.status === "Pilot-ready").length;
    const mvp = projects.filter((project) => ["Paid MVP", "MVP"].includes(project.status)).length;

    return [
      { label: "Total Projects", value: projects.length, icon: Layers3, tone: "violet" },
      { label: "Public Pages", value: publicPages, icon: Rocket, tone: "green" },
      { label: "Pilot-ready", value: pilotReady, icon: Zap, tone: "amber" },
      { label: "Paid / MVP", value: mvp, icon: Sparkles, tone: "pink" },
      { label: "Categories", value: categoryCount, icon: Grid2X2, tone: "blue" },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const haystack = [
        project.name,
        project.tagline,
        project.description,
        project.category,
        project.status,
        project.needs,
      ]
        .join(" ")
        .toLowerCase();

      return !normalizedQuery || haystack.includes(normalizedQuery);
    });
  }, [query]);

  const openDetails = (project: Project) => {
    setActiveProject(project);
    setDetailProject(project);
  };

  const openActivation = (project: Project) => {
    setActiveProject(project);
    setActivateProject(project);
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <button className="mobile-menu-button" type="button" onClick={() => setMobileNavOpen(true)}>
        <Menu size={18} />
        <span>Menu</span>
      </button>

      <aside className={`sidebar ${mobileNavOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <div className="sidebar-top">
          <a className="brand-lockup" href="#overview" onClick={() => setMobileNavOpen(false)}>
            <span className="brand-mark">F</span>
            <span>Founder Lab</span>
          </a>
          <button className="sidebar-close" type="button" onClick={() => setMobileNavOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                className={index === 0 ? "nav-link active" : "nav-link"}
                href={item.href}
                key={item.label}
                onClick={() => setMobileNavOpen(false)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="sidebar-note">
          <span className="note-icon">
            <Rocket size={20} />
          </span>
          <strong>Building from real problems.</strong>
          <span>Ideas. Experiments. Products. Impact. One build at a time.</span>
        </div>

        <div className="sidebar-footer">
          <span>By {founder.name}</span>
          <div className="social-row" aria-label="Founder links">
            <a href={founder.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={`mailto:${founder.email}`} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">Beat Viral's Founder Lab page</p>
            <h1>Founder Lab</h1>
            <p className="hero-subtitle">
              A live portfolio of startup experiments, apps, prototypes, and products built from
              real-world problems.
            </p>
            <p className="hero-support">
              Some are live. Some are pilot-ready. Some are early experiments. Each one is a
              working attempt to turn an insight into a useful product.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <span>View Projects</span>
                <ChevronRight size={18} />
              </a>
              <a className="button button-ghost" href="#contact">
                <span>Contact</span>
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="hero-emblem" aria-hidden="true">
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />
            <div className="emblem-cube">
              <span>F</span>
            </div>
            <div className="emblem-platform" />
          </div>
        </section>

        <section className="stats-strip" id="stats" aria-label="Founder Lab stats">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div className="stat-item" key={stat.label}>
                <span className={`stat-icon ${stat.tone}`}>
                  <Icon size={24} />
                </span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            );
          })}
        </section>

        <section className="panel featured-panel" aria-labelledby="featured-title">
          <div className="section-heading">
            <div>
              <Star size={17} />
              <h2 id="featured-title">Featured Projects</h2>
            </div>
            <a className="mini-button" href="#projects">
              View all
              <ChevronRight size={15} />
            </a>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectFeatureCard
                key={project.slug}
                project={project}
                onActivate={openActivation}
                onOpenDetails={openDetails}
                onSelect={setActiveProject}
              />
            ))}
          </div>
        </section>

        <section className="project-tools" aria-label="Project search">
          <label className="search-box">
            <Search size={17} />
            <input
              data-testid="project-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects..."
            />
          </label>
        </section>

        <section className="project-grid" id="projects" aria-label="All Founder Lab projects">
          {filteredProjects.length ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onActivate={openActivation}
                onOpenDetails={openDetails}
                onSelect={setActiveProject}
              />
            ))
          ) : (
            <div className="empty-state">
              <Search size={24} />
              <h2>No matching projects</h2>
              <p>Try another filter or search term.</p>
            </div>
          )}
        </section>
      </main>

      <aside className="right-rail">
        <section className="rail-card activate-rail-card">
          <p className="rail-kicker">Activate a Project</p>
          <h2>Activate a Project</h2>
          <p>Pilot, partner, license, sponsor, or build around any Founder Lab project.</p>
          <a className="button button-primary full-width" href="#projects">
            <Handshake size={17} />
            <span>Browse Projects</span>
          </a>
        </section>

        <section className="rail-card founder-card" id="about">
          <div className="rail-logo">F</div>
          <p className="rail-kicker">Founder profile</p>
          <h2>{founder.name}</h2>
          <p className="founder-role">Builder. Problem Solver. Product Creator.</p>
          <p>
            I build fast from real problems. Each project starts with a simple question: does this
            solve something people actually feel? Then I turn it into a live page, MVP, or
            pilot-ready product.
          </p>
          <button className="button button-ghost full-width" type="button" onClick={() => setDetailProject(activeProject)}>
            <CircleUserRound size={17} />
            <span>About {founder.name.split(" ")[0]}</span>
          </button>
        </section>

        <section className="rail-card contact-card" id="contact">
          <h2>Want to pilot, partner, review, or build around one of these?</h2>
          <p>Let's build something useful together.</p>
          <div className="rail-actions">
            <a className="button button-primary full-width" href={`mailto:${founder.email}`}>
              <Mail size={17} />
              <span>Email Mahmood</span>
            </a>
            <a className="button button-ghost full-width" href={founder.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              <span>View GitHub</span>
            </a>
            {activeProject.url ? (
              <a
                className="button button-soft full-width"
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
              >
                <Rocket size={17} />
                <span>Open {activeProject.name}</span>
              </a>
            ) : (
              <button className="button button-soft full-width" type="button" disabled>
                <Rocket size={17} />
                <span>Project URL pending</span>
              </button>
            )}
          </div>
        </section>

        <section className="rail-card quote-card">
          <Sparkles size={28} />
          <p>Ideas are easy. Execution is everything. Real impact is the goal.</p>
          <span>{founder.name}</span>
        </section>
      </aside>

      {detailProject && (
        <ProjectModal project={detailProject} onClose={() => setDetailProject(null)} />
      )}

      {activateProject && (
        <ActivationModal project={activateProject} onClose={() => setActivateProject(null)} />
      )}
    </div>
  );
}

function ProjectFeatureCard({
  project,
  onActivate,
  onOpenDetails,
  onSelect,
}: {
  project: Project;
  onActivate: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
  onSelect: (project: Project) => void;
}) {
  const Icon = getProjectIcon(project);

  return (
    <article className={`feature-card accent-${project.accent}`} onMouseEnter={() => onSelect(project)}>
      <span className={`status-badge ${statusClass[project.status]}`}>{project.status}</span>
      <div className="feature-icon">
        <Icon size={48} />
      </div>
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
      <div className="tag-row">
        {splitCategory(project.category)
          .slice(0, 3)
          .map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
      </div>
      <div className="feature-actions">
        <button
          className="card-action-button"
          type="button"
          data-testid={`feature-details-${project.slug}`}
          onClick={() => onOpenDetails(project)}
        >
          Details
        </button>
        <button
          className="card-action-button primary"
          type="button"
          data-testid={`feature-activate-${project.slug}`}
          onClick={() => onActivate(project)}
        >
          Activate
        </button>
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  onActivate,
  onOpenDetails,
  onSelect,
}: {
  project: Project;
  onActivate: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
  onSelect: (project: Project) => void;
}) {
  const Icon = getProjectIcon(project);

  return (
    <article className="project-card" onMouseEnter={() => onSelect(project)} onFocus={() => onSelect(project)}>
      <div className={`project-icon accent-${project.accent}`}>
        <Icon size={25} />
      </div>
      <div className="project-copy">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          {project.url ? (
            <a
              className="icon-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name}`}
              onFocus={() => onSelect(project)}
            >
              <ExternalLink size={17} />
            </a>
          ) : (
            <span className="icon-link muted" aria-label="URL pending">
              <ExternalLink size={17} />
            </span>
          )}
        </div>
        <p>{project.tagline}</p>
        <div className="meta-row">
          <span className={`status-badge ${statusClass[project.status]}`}>{project.status}</span>
          {splitCategory(project.category)
            .slice(0, 3)
            .map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
          ))}
        </div>
      </div>
      <div className="project-card-actions">
        <button
          className="details-link"
          type="button"
          data-testid={`details-${project.slug}`}
          onClick={() => onOpenDetails(project)}
        >
          Details
          <ChevronRight size={14} />
        </button>
        <button
          className="activate-link"
          type="button"
          data-testid={`activate-${project.slug}`}
          onClick={() => onActivate(project)}
        >
          Activate Project
        </button>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = getProjectIcon(project);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.slug}-title`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close details">
          <X size={18} />
        </button>
        <div className={`modal-preview accent-${project.accent}`}>
          <Icon size={64} />
          <span>{project.name}</span>
        </div>
        <div className="modal-body">
          <span className={`status-badge ${statusClass[project.status]}`}>{project.status}</span>
          <h2 id={`${project.slug}-title`}>{project.name}</h2>
          <p className="modal-tagline">{project.tagline}</p>
          <p>{project.description}</p>
          <div className="detail-block">
            <span>Category</span>
            <strong>{project.category}</strong>
          </div>
          <div className="detail-block">
            <span>Next step</span>
            <strong>{project.needs ?? "Review the project and define the next useful milestone."}</strong>
          </div>
          <div className="modal-actions">
            {project.url ? (
              <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">
                <span>View Project</span>
                <ArrowUpRight size={17} />
              </a>
            ) : (
              <button className="button button-primary" type="button" disabled>
                <span>URL pending</span>
              </button>
            )}
            <a className="button button-ghost" href={`mailto:${founder.email}`}>
              <span>Email Mahmood</span>
              <Mail size={17} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function ActivationModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [intent, setIntent] = useState(activationIntents[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitInterest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Project: ${project.name}`,
      `Intent: ${intent}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / role: ${company || "Not provided"}`,
      "",
      "Message:",
      message || "Not provided",
    ].join("\n");

    const mailto = `mailto:${founder.email}?subject=${encodeURIComponent(
      `Founder Lab interest: ${project.name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="modal-card activation-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.slug}-activate-title`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close activation form">
          <X size={18} />
        </button>
        <div className={`modal-preview activation-preview accent-${project.accent}`}>
          <Handshake size={62} />
          <span>{project.name}</span>
        </div>
        <div className="modal-body activation-body">
          {submitted ? (
            <div className="success-state">
              <span className="success-icon">
                <Mail size={24} />
              </span>
              <h2>Interest ready to send</h2>
              <p>
                Your email app should open with the project, intent, and message prefilled for Mahmood.
              </p>
              <button className="button button-primary" type="button" onClick={onClose}>
                Done
              </button>
            </div>
          ) : (
            <form className="activation-form" onSubmit={submitInterest}>
              <div className="activation-heading">
                <span className={`status-badge ${statusClass[project.status]}`}>{project.status}</span>
                <h2 id={`${project.slug}-activate-title`}>Activate {project.name}</h2>
                <p>
                  Founder Lab projects can be piloted, partnered on, licensed, sponsored, or adapted.
                  Tell me what you&apos;re interested in.
                </p>
              </div>

              <fieldset className="intent-options">
                <legend>Interest</legend>
                {activationIntents.map((option) => (
                  <label className={intent === option ? "intent-option selected" : "intent-option"} key={option}>
                    <input
                      type="radio"
                      name="intent"
                      value={option}
                      checked={intent === option}
                      onChange={() => setIntent(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </fieldset>

              <div className="form-grid">
                <label className="field-label">
                  <span>Name</span>
                  <input value={name} onChange={(event) => setName(event.target.value)} required />
                </label>
                <label className="field-label">
                  <span>Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>
              </div>

              <label className="field-label">
                <span>Company / role optional</span>
                <input value={company} onChange={(event) => setCompany(event.target.value)} />
              </label>

              <label className="field-label">
                <span>Message</span>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={4} />
              </label>

              <button className="button button-primary full-width" type="submit">
                <Mail size={17} />
                <span>Send Interest</span>
              </button>
            </form>
          )}
        </div>
      </article>
    </div>
  );
}

export default App;
