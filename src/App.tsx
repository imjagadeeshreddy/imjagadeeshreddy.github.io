import { FeatureCard } from "./components/FeatureCard";
import { SectionHeading } from "./components/SectionHeading";
import { ServiceCard } from "./components/ServiceCard";
import { SolutionCard } from "./components/SolutionCard";

const expertise = [
  {
    title: "AI Agents",
    description:
      "Composable agent workflows for customer service, operations, and knowledge work.",
  },
  {
    title: "Enterprise AI Solutions",
    description:
      "Scalable AI platforms designed for high availability, security, and governance.",
  },
  {
    title: "LLM Applications",
    description:
      "Conversational interfaces, summarization, search and decision support systems.",
  },
  {
    title: "Process Automation",
    description:
      "Intelligent automation that reduces manual work and accelerates outcomes.",
  },
  {
    title: "Backend Architecture",
    description:
      "Robust backend systems that support AI pipelines, APIs, and event-driven workflows.",
  },
  {
    title: "Cloud & Distributed Systems",
    description: "Cloud-native design for resilient, data-driven AI platforms.",
  },
];

const solutions = [
  {
    title: "AI Inventory Assistant",
    problem:
      "Manual inventory tracking creates stock gaps, delays, and lost revenue.",
    approach:
      "A predictive assistant that combines demand signals, supplier data, and AI forecasting.",
    tech: "LLMs, event-driven pipelines, cloud data lakes, analytics.",
    impact:
      "Reduced stockouts by 35% and accelerated replenishment decision cycles.",
  },
  {
    title: "AI Meeting Intelligence Platform",
    problem:
      "Teams lose insight from critical meetings and struggle to act on decisions.",
    approach:
      "Automated capture, summarization, and task extraction from conversations.",
    tech: "Speech recognition, NLP agents, workflow orchestration.",
    impact: "Improved follow-through on action items and raised meeting ROI.",
  },
  {
    title: "AI Knowledge Assistant",
    problem:
      "Knowledge is fragmented across documents, tickets, and legacy systems.",
    approach:
      "Unified semantic search with context-aware recommendations and explainability.",
    tech: "Vector search, LLM retrieval augmentation, secure connectors.",
    impact:
      "Faster onboarding and sharper decision support for knowledge teams.",
  },
  {
    title: "AI Document Processing System",
    problem:
      "Critical documents are expensive to ingest and difficult to route accurately.",
    approach:
      "Automated classification, extraction, and intelligent workflow routing.",
    tech: "Document AI, schema extraction, event-driven automation.",
    impact:
      "Cut processing time by 60% while improving operational reliability.",
  },
  {
    title: "AI Operations Copilot",
    problem:
      "Operations teams need faster incident context and remediation guidance.",
    approach:
      "AI-driven incident summaries, runbook suggestions, and system insights.",
    tech: "Metrics pipelines, observability data, conversational agents.",
    impact:
      "Accelerated incident response and reduced mean time to resolution.",
  },
  {
    title: "AI Workflow Automation Platform",
    problem: "Manual handoffs create delays in high-value business processes.",
    approach:
      "End-to-end automation with AI decision points and human-in-the-loop controls.",
    tech: "Workflow engine, process automation, data orchestration.",
    impact: "Scaled repeatable workflows with predictable business outcomes.",
  },
];

const services = [
  {
    title: "AI Strategy",
    description:
      "Align AI investments with business goals, value levers, and stakeholder outcomes.",
  },
  {
    title: "AI Architecture",
    description:
      "Define secure, scalable architectures for enterprise AI and responsible deployment.",
  },
  {
    title: "AI Agent Development",
    description:
      "Build intelligent agents that automate workflows, assist teams, and improve decisions.",
  },
  {
    title: "Process Automation",
    description:
      "Modernize operations with AI-driven automation and orchestration.",
  },
  {
    title: "Enterprise AI Integration",
    description:
      "Connect AI systems to legacy platforms, data pipelines, and cloud infrastructure.",
  },
];

const articles = [
  {
    title: "Designing AI systems for executive alignment",
    category: "AI Architecture",
  },
  {
    title: "Building reliable agent workflows for business operations",
    category: "Agent Systems",
  },
  {
    title: "How enterprise AI powers decision intelligence",
    category: "Enterprise AI",
  },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            Jagadeesh Reddy
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#solutions">AI Solutions</a>
            <a href="#architecture">Case Studies</a>
            <a href="#projects">Projects</a>
            <a href="#writing">Writing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">AI Solutions Architect</span>
              <h1>Building AI systems that solve real business problems.</h1>
              <p className="hero-text">
                I design and build AI-powered systems that automate workflows,
                improve decision making, and solve complex business problems.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View Projects
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-panel glass-card">
              <p className="panel-label">Enterprise AI x Business Outcomes</p>
              <div className="stats-grid">
                <div>
                  <strong>AI systems</strong>
                  <span>designed for scale</span>
                </div>
                <div>
                  <strong>Workflow automation</strong>
                  <span>with measurable impact</span>
                </div>
                <div>
                  <strong>Trusted by leaders</strong>
                  <span>for strategic AI initiatives</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <SectionHeading
              eyebrow="Expertise"
              title="AI capabilities for modern enterprise challenges"
              description="A practical blend of AI, systems, and engineering designed to move businesses forward."
            />
            <div className="card-grid">
              {expertise.map((item) => (
                <FeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Featured AI Solutions"
              title="Concepts built for measurable outcomes"
              description="Future-ready solution blueprints for AI-enabled workflows, knowledge systems, and operations copilots."
            />
            <div className="solution-grid">
              {solutions.map((item) => (
                <SolutionCard key={item.title} solution={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="container">
            <SectionHeading
              eyebrow="Architecture Showcase"
              title="AI systems designed for resilience, trust, and scale"
              description="Case studies and architecture concepts showing how AI platforms connect data, processes, and users."
            />
            <div className="architecture-grid">
              <article className="glass-card architecture-card">
                <h3>End-to-end AI service architecture</h3>
                <p>
                  A modular design combining event-driven data pipelines, vector
                  search, and conversational interfaces to enable rapid
                  experimentation and governance.
                </p>
                <ul>
                  <li>Secure API gateway and orchestration layer</li>
                  <li>Data mesh for analytics and model insights</li>
                  <li>Explainable outputs with business-context metadata</li>
                </ul>
              </article>
              <article className="glass-card architecture-card">
                <h3>Operational AI for product and service teams</h3>
                <p>
                  System design that aligns incident response, workflow
                  automation, and agent-based guidance with business metrics and
                  user intent.
                </p>
                <ul>
                  <li>AI-powered decision loops</li>
                  <li>Human-in-the-loop validation points</li>
                  <li>Automated compliance checkpoints</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="writing">
          <div className="container">
            <SectionHeading
              eyebrow="Writing"
              title="Insights on AI architecture, agents, and enterprise value"
              description="Thoughtful, business-oriented writing that bridges engineering with strategy."
            />
            <div className="writing-grid">
              {articles.map((article) => (
                <a key={article.title} className="writing-card" href="#contact">
                  <span className="writing-category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>
                    Practical ideas for AI leaders, product teams, and
                    engineering stakeholders.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="about">
          <div className="container about-grid">
            <div>
              <SectionHeading
                eyebrow="About"
                title="I partner with teams to move AI initiatives from concept to operational success."
                description="My focus is on translating business goals into AI systems that deliver reliable outcomes and create competitive advantage."
              />
              <p>
                I work with enterprise leaders, startup founders and engineering
                teams to solve complex problems with AI-first architecture,
                automation, and product-led execution. The goal is not just an
                AI prototype, but a dependable solution that drives meaningful
                business impact.
              </p>
              <p>
                My background in distributed systems, cloud platforms,
                Kafka-based pipelines and AI applications helps me design the
                infrastructure and data foundation that intelligent systems
                depend on.
              </p>
            </div>
            <div className="glass-card about-panel">
              <p className="panel-label">Consulting focus</p>
              <ul>
                <li>Strategic AI roadmaps</li>
                <li>Architecture reviews & modernization</li>
                <li>AI agent and automation design</li>
                <li>Enterprise integration and pilot delivery</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="consulting">
          <div className="container">
            <SectionHeading
              eyebrow="AI Consulting Services"
              title="Guidance and delivery for high-stakes AI initiatives"
              description="Partner with a consultant who understands enterprise constraints, architecture trade-offs, and business value."
            />
            <div className="card-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            <div className="cta-panel glass-card">
              <h3>Ready to define your next AI initiative?</h3>
              <p>
                Start with a strategic consultation focused on value, risk, and
                implementation clarity.
              </p>
              <a className="button button-primary" href="#contact">
                Schedule a call
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Work with me to build AI solutions that move your business forward."
              />
              <p>
                Let's talk about AI initiatives, architecture, or how to deploy
                smarter systems across your organization.
              </p>
              <div className="contact-meta">
                <a href="mailto:hello@jagadeeshreddy.com">
                  hello@jagadeeshreddy.com
                </a>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/jagadeesh-reddy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/imjagadeeshreddy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="mailto:hello@jagadeeshreddy.com"
              method="post"
              encType="text/plain"
            >
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                required
              />
              <label className="sr-only" htmlFor="company">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company or team"
              />
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="What would you like to build?"
                required
              />
              <button className="button button-primary" type="submit">
                Send inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Jagadeesh Reddy — AI Solutions
            Architect.
          </p>
          <nav aria-label="Footer navigation" className="footer-links">
            <a href="#solutions">AI Solutions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
