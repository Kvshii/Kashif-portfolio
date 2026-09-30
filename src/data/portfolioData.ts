import { Project, SkillCategory, ProcessStep, ExploreTopic, TechItem, JourneyMilestone } from '../types/portfolio';

// Local project showcase assets
import fumanceImg from '../assets/images/fumance_agency_showcase_1790620581553.jpg';
import aiBuilderImg from '../assets/images/ai_builder_platform_1790620595737.jpg';
import lunaLupaImg from '../assets/images/luna_lupa_game_1790620608817.jpg';
import racingGameImg from '../assets/images/browser_racing_showcase_1790620621679.jpg';
import ecommerceImg from '../assets/images/ecommerce_store_showcase_1790620632433.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'fumance',
    number: '01',
    title: 'FUMANCE',
    tagline: 'Influencer Marketing & Sponsorship Agency',
    category: 'Agency & Marketing',
    summary: 'A specialized digital agency bridge connecting YouTube creators with relevant brand sponsors, optimizing outreach pipelines, deal negotiation, and campaign tracking.',
    heroImage: fumanceImg,
    tags: ['Influencer Marketing', 'Creator Outreach', 'Sponsorship Management', 'Campaign Workflows', 'Brand Communication'],
    keyHighlights: [
      'Engineered structured outreach pipelines for YouTube creators',
      'Coordinated brand sponsorship briefs, deliverables, and timeline tracking',
      'Designed agency brand presence and client communication touchpoints'
    ],
    liveDemoType: 'campaign-calc',
    caseStudy: {
      overview: 'Fumance is a dedicated influencer marketing and sponsorship agency initiative aimed at bridging the gap between digital content creators (principally on YouTube) and commercial brands seeking targeted audience integration.',
      theIdea: 'Most creators struggle with cold brand outreach, media kit pricing, and contracting, while brands find vetting small-to-midsize creators time-consuming. Fumance was conceived to streamline creator-brand partnerships into structured, win-win sponsorship opportunities.',
      myRole: 'I drove creator discovery, cold outreach frameworks, sponsorship coordination, client communications, and built out the digital agency workflow system including client intake and proposal presentation.',
      technologies: ['YouTube Analytics', 'CRM Workflows', 'Meta Ads Integration', 'Web Presence (HTML/CSS)', 'Canva / Photoshop Pitch Decks'],
      build: 'Developed a systematic vetting framework analyzing creator engagement rate, audience demographics, and past sponsorship performance. Established standardized media kit templates, email sequences, and transparent campaign tracking spreadsheets.',
      challenges: 'Low initial reply rates from cold brand outreach, disparate creator pricing standards, and navigating contract clauses regarding delivery timelines and revision cycles.',
      solutions: 'Customized pitch angles per brand niche rather than blast templates, established data-backed pricing models using CPM benchmarks, and created clear milestone agreements for sponsored video drafts.',
      result: 'Successfully established an active outreach pipeline connecting multiple tech and gaming YouTube creators with recurring sponsorship proposals and standardized media kits.',
      nextSteps: 'Developing automated creator match dashboards, integrating automated CPM calculators, and formalizing performance affiliate deal structures alongside flat-rate sponsorships.',
      metricsOrOutcomes: [
        { label: 'Outreach Pipeline', value: '150+ Vetted Creators' },
        { label: 'Primary Platform', value: 'YouTube Integration' },
        { label: 'Core Niche', value: 'Tech, Gaming & Lifestyle' }
      ]
    }
  },
  {
    id: 'ai-builder',
    number: '02',
    title: 'AI BUILDER',
    tagline: 'AI Development & Code Intelligence Platform Concept',
    category: 'AI & Systems',
    summary: 'An experimental developer studio concept featuring an integrated AI code generator, real-time bug detector, and intelligent project analyzer designed to accelerate modern development loops.',
    heroImage: aiBuilderImg,
    tags: ['AI-Assisted Dev', 'Code Intelligence', 'Project Analysis', 'Monaco Editor Concept', 'Developer Tools'],
    keyHighlights: [
      'Multi-engine prompt orchestrator for automated code generation',
      'Context-aware syntax & logic bug analyzer with quick-fix suggestions',
      'Streamlined UI designed for code drafting and inspection'
    ],
    liveDemoType: 'ai-debugger',
    caseStudy: {
      overview: 'AI Builder is a conceptual developer productivity studio that explores how modern generative AI models and structured prompt architectures can assist programmers through rapid prototyping, error diagnosis, and code refactoring.',
      theIdea: 'Rather than using disjointed chat windows for programming questions, developers need a contextual environment where the code canvas, linting errors, and targeted AI fixes are co-located in one responsive workspace.',
      myRole: 'Architected the platform concept, designed the UI layout, crafted specialized system prompts for code generation and debugging, and tested code evaluation flows across JavaScript and Python snippets.',
      technologies: ['Next.js / React', 'TypeScript', 'Prompt Engineering', 'Monaco Editor Architecture', 'Tailwind CSS', 'AST Analysis Concepts'],
      build: 'Designed a dual-pane workspace: left pane for editable code and file tree structure; right pane with dedicated tabs for AI Code Generation, Bug Inspector, and Terminal Output. Structured prompt templates to enforce syntax validity and markdown code fences.',
      challenges: 'Handling hallucinated non-existent library methods from AI models, managing prompt context sizes, and preventing user confusion when debugging complex logic bugs.',
      solutions: 'Implemented multi-stage prompt templates requiring the AI to first articulate the root cause before emitting replacement code blocks, and restricted code outputs to specific function scopes.',
      result: 'Built a compelling functional prototype demonstrating rapid bug identification and prompt-driven component generation for web interfaces.',
      nextSteps: 'Integrating real local LLM endpoints (Ollama) alongside cloud providers, adding automated test suite generation, and building GitHub pull request review assistance.',
      metricsOrOutcomes: [
        { label: 'Architecture', value: 'Dual-Pane Studio' },
        { label: 'Supported Syntax', value: 'TS, JS, Python, HTML' },
        { label: 'Prompt Engine', value: 'Multi-Stage Analysis' }
      ]
    }
  },
  {
    id: 'luna-lupa',
    number: '03',
    title: 'LUNA LUPA — WILD IMPACT',
    tagline: 'Interactive 2D Physics Browser Game',
    category: 'Interactive & Gaming',
    summary: 'A fast-paced celestial browser platformer where players guide Luna Lupa across floating gravitational platforms with dynamic particle physics and responsive jump mechanics.',
    heroImage: lunaLupaImg,
    tags: ['Browser Game Dev', 'Next.js', 'Physics & Collision', 'Canvas 2D', 'AI-Assisted Game Dev'],
    keyHighlights: [
      'Custom 60 FPS requestAnimationFrame game loop with gravity & friction physics',
      'Precise bounding-box and platform collision resolution algorithms',
      'Dynamic particle bursts and atmospheric celestial visual design'
    ],
    liveDemoType: 'luna-physics',
    caseStudy: {
      overview: 'Luna Lupa is an original browser platform game built to push the boundaries of client-side web gaming using standard HTML5 Canvas and Next.js, featuring physics-driven traversal and atmospheric space mechanics.',
      theIdea: 'To learn fundamental computer science and game development concepts — state machines, delta-time game loops, velocity vectors, and collision math — through a tangible, enjoyable browser experience.',
      myRole: 'Created the game design, coded the physics engine (gravity, jumping curves, horizontal velocity decay), implemented platform collision detection, and designed the visual asset palette.',
      technologies: ['Next.js', 'HTML5 Canvas API', 'TypeScript', 'Vector Mathematics', 'Web Audio API', 'AI-Assisted Logic Optimization'],
      build: 'Engineered a modular game architecture separating player input listeners, physics updates (kinematics: x += vx, y += vy, vy += gravity), platform rendering, and score tracking into clean, reusable update cycles.',
      challenges: 'Tunnelling issues where the player fell through thin platforms at high velocity, inconsistent frame rates across varying monitor refresh rates (60Hz vs 144Hz), and responsive mobile touch controls.',
      solutions: 'Implemented swept axis collision checks rather than static point checks, transitioned velocity calculations to delta-time multipliers (dt), and added on-screen virtual jump touch targets for mobile players.',
      result: 'Created a silky smooth, highly responsive browser game with rewarding game feel, tight jumping controls, and zero external game engine bloat.',
      nextSteps: 'Adding procedural platform generation, custom power-up items, leaderboards, and sound effects synthesized with Web Audio.',
      metricsOrOutcomes: [
        { label: 'Render Target', value: 'Solid 60 FPS' },
        { label: 'Physics Model', value: 'Custom Delta-Time' },
        { label: 'Engine', value: 'Pure Canvas API' }
      ]
    }
  },
  {
    id: 'racing-game',
    number: '04',
    title: 'BROWSER RACER',
    tagline: 'Arcade Browser Racing Experience',
    category: 'Interactive & Gaming',
    summary: 'A retro-futuristic arcade racing experience built for the browser featuring vehicle acceleration curves, drift friction, track obstacle collision, and a dynamic speedometer HUD.',
    heroImage: racingGameImg,
    tags: ['Game Mechanics', 'Vehicle Physics', 'Canvas Simulation', 'State Management', 'Interactive Web'],
    keyHighlights: [
      'Realistic arcade vehicle kinematics: acceleration, top speed, steering angular inertia, and braking',
      'Track boundaries and collision detection with environmental barriers',
      'Neon twilight aesthetic with dynamic speed blur and audio cues'
    ],
    liveDemoType: 'racing-canvas',
    caseStudy: {
      overview: 'Browser Racer is an arcade racing simulation experiment that explores pseudo-3D and top-down vehicle handling physics directly within a lightweight browser window without bulky 3D engine downloads.',
      theIdea: 'Explore how responsive vehicle controls (drift resistance, turning radius dependent on current speed, and tire grip) can be achieved through pure mathematics in JavaScript.',
      myRole: 'Developed the vehicle control model, designed the race track loop, implemented lap timing and checkpoint progression, and designed the retro arcade visual UI.',
      technologies: ['TypeScript', 'HTML5 Canvas', 'Math & Trigonometry', 'CSS Grid HUD', 'Keyboard & Touch Event Handlers'],
      build: 'Constructed an angle-based vehicle model: steering modifies car angle θ, acceleration vector applies along [cos θ, sin θ], while lateral sliding velocity is dampened by a surface friction coefficient.',
      challenges: 'Simulating the sensation of speed on a 2D canvas without complex 3D meshes, and ensuring controls feel arcade-crisp rather than sluggish or uncontrollably erratic.',
      solutions: 'Created dynamic background track parallax lines that scale their oscillation frequency with current vehicle speed, and fine-tuned angular drag so drifting feels predictable.',
      result: 'Delivered an engaging, lightweight browser arcade game that loads in milliseconds and gives players an immediate hit of arcade driving excitement.',
      nextSteps: 'Implementing ghost car time-trials, multiple vehicle classes with varying weight/acceleration stats, and custom track editor.',
      metricsOrOutcomes: [
        { label: 'Physics Loop', value: 'Kinematic Angular Model' },
        { label: 'Load Time', value: '< 400ms Zero Bloat' },
        { label: 'Input Latency', value: '< 16ms' }
      ]
    }
  },
  {
    id: 'ecommerce-web',
    number: '05',
    title: 'E-COMMERCE & CLIENT WEB',
    tagline: 'Modern Storefronts & Conversion-Optimized Web',
    category: 'E-Commerce & Web',
    summary: 'Custom storefront customization, WordPress & Shopify architecture, Elementor builds, product research workflows, and technical performance tuning for commercial digital storefronts.',
    heroImage: ecommerceImg,
    tags: ['Shopify', 'WordPress', 'Elementor', 'Store Optimization', 'Product Research', 'Technical Troubleshooting'],
    keyHighlights: [
      'Engineered high-converting landing pages and Shopify store layouts',
      'Configured payment gateways, checkout flows, and product research matrices',
      'Executed responsive performance tuning and CSS customization'
    ],
    liveDemoType: 'store-preview',
    caseStudy: {
      overview: 'A collection of commercial e-commerce deployments and client web projects across Shopify and WordPress/Elementor, focusing on frictionless buying journeys, mobile responsiveness, and crisp visual branding.',
      theIdea: 'Many digital brands lose conversions due to clunky themes, slow load speeds, and poorly structured product pages. The mission was to combine clean typography, high-trust badges, and fast checkout experiences.',
      myRole: 'Handled full store setups: theme customization, custom CSS styling, product catalog structuring, plugin conflict troubleshooting, and checkout optimization.',
      technologies: ['Shopify Liquid / Admin', 'WordPress', 'Elementor Pro', 'Custom CSS / HTML', 'Meta Pixel Integration', 'Google Analytics'],
      build: 'Built tailored hero sections, mobile-first navigation drawers, sticky add-to-cart bars, and curated product review carousels. Conducted thorough cross-browser QA on Chrome, Safari, and mobile viewports.',
      challenges: 'Addressing bloated third-party Shopify apps that degraded mobile PageSpeed scores, and resolving CSS specificity conflicts within complex WordPress themes.',
      solutions: 'Pruned redundant tracking apps in favor of native code snippets, wrote lightweight custom CSS overrides, and compressed all asset pipelines to sub-100KB WebP formats.',
      result: 'Delivered fast, professional digital storefronts with seamless mobile checkout experiences and positive client feedback on conversion clarity.',
      nextSteps: 'Experimenting with headless Shopify setups using Next.js Commerce and Hydrogen for ultra-fast, customized digital storefront experiences.',
      metricsOrOutcomes: [
        { label: 'Platforms', value: 'Shopify & WordPress' },
        { label: 'Mobile Optimization', value: '100% Responsive' },
        { label: 'Conversion Focus', value: 'Streamlined Checkout' }
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'dev',
    title: 'DEVELOPMENT',
    subtitle: 'Core frontend & scripting toolkit',
    iconName: 'Code',
    skills: [
      {
        name: 'HTML & CSS',
        description: 'Semantic markup, modern layout models (Flexbox, Grid), responsive breakpoints, and CSS variables.',
        tools: ['HTML5', 'CSS3', 'Modern Layouts'],
        practicalApplication: 'Building rock-solid, accessible layout foundations that scale flawlessly from mobile screens to 4K displays.'
      },
      {
        name: 'Next.js & React',
        description: 'Component architecture, state management hooks, routing, and modern frontend development patterns.',
        tools: ['Next.js', 'React', 'TypeScript', 'JSX'],
        practicalApplication: 'Creating dynamic web apps, interactive tools, and portfolio experiences with modular component trees.'
      },
      {
        name: 'WordPress & Shopify',
        description: 'Store setup, theme customization, Elementor page building, and checkout optimization.',
        tools: ['Shopify Liquid', 'WordPress', 'Elementor'],
        practicalApplication: 'Delivering commercial websites, client stores, and landing pages tailored for clear customer conversion.'
      },
      {
        name: 'Python & Pandas',
        description: 'Core programming logic, data structures, data analysis, and DataFrame manipulation.',
        tools: ['Python 3', 'Pandas', 'Jupyter Notebooks'],
        practicalApplication: 'Analyzing campaign performance data, cleaning datasets, and automating repetitive data workflows.'
      },
      {
        name: 'GitHub & Version Control',
        description: 'Git branching, commit hygiene, repository management, and collaboration workflows.',
        tools: ['Git', 'GitHub', 'GitHub Desktop'],
        practicalApplication: 'Maintaining clean version history across personal software experiments and collaborative codebases.'
      },
      {
        name: 'Responsive Web Design',
        description: 'Mobile-first layout philosophy, fluid typography, touch targets, and layout math.',
        tools: ['Tailwind CSS', 'Media Queries', 'Viewport Units'],
        practicalApplication: 'Ensuring seamless UX across 360px phones, tablets, laptops, and ultra-wide desktop monitors.'
      }
    ]
  },
  {
    id: 'ai-tech',
    title: 'AI & TECHNOLOGY',
    subtitle: 'Practical AI tools & workflow acceleration',
    iconName: 'Cpu',
    skills: [
      {
        name: 'AI Tools & Ecosystem',
        description: 'Leveraging state-of-the-art LLMs, coding copilots, and vision models for accelerated production.',
        tools: ['Claude', 'Gemini', 'ChatGPT', 'Cursor', 'v0'],
        practicalApplication: 'Accelerating research, generating boilerplate, and exploring new libraries in record time.'
      },
      {
        name: 'Prompt Engineering',
        description: 'Crafting structured, constraint-based prompt architectures, few-shot examples, and system instructions.',
        tools: ['System Prompts', 'Multi-Turn Formatting', 'Role Definition'],
        practicalApplication: 'Extracting reliable, deterministic outputs for code generation, bug fixing, and creative concepts.'
      },
      {
        name: 'AI-Assisted Development',
        description: 'Pairing with AI coding assistants for real-time problem solving, refactoring, and logic validation.',
        tools: ['Copilot', 'Cursor IDE', 'Diff Inspection'],
        practicalApplication: 'Rapidly translating ideas into working prototypes while maintaining personal code comprehension.'
      },
      {
        name: 'AI Application Concepts',
        description: 'Designing intuitive software flows that wrap AI capabilities into practical, user-friendly tools.',
        tools: ['UI Prototyping', 'Model Routing', 'Context Framing'],
        practicalApplication: 'Architecting concept applications like AI Builder that solve developer friction points.'
      },
      {
        name: 'Debugging & Project Analysis',
        description: 'Breaking down stack traces, console errors, and logic discrepancies systematically.',
        tools: ['Chrome DevTools', 'Terminal Logs', 'Error Traces'],
        practicalApplication: 'Root-cause analysis for edge-case bugs, layout collisions, and script execution failures.'
      }
    ]
  },
  {
    id: 'digital-business',
    title: 'DIGITAL BUSINESS',
    subtitle: 'Marketing, sponsorships & growth',
    iconName: 'TrendingUp',
    skills: [
      {
        name: 'Influencer Marketing',
        description: 'Identifying high-affinity content creators, assessing real engagement, and negotiating sponsorship packages.',
        tools: ['Creator Discovery', 'Audience Analytics', 'CPM Modeling'],
        practicalApplication: 'Connecting commercial brands with YouTube influencers for authentic, conversion-focused integrations.'
      },
      {
        name: 'Creator Outreach',
        description: 'Drafting high-converting personalized cold outreach emails, value propositions, and creator media kits.',
        tools: ['Email Sequences', 'Media Kits', 'Follow-up Cadence'],
        practicalApplication: 'Building warm relationships with YouTube creators and talent managers for Fumance campaigns.'
      },
      {
        name: 'Sponsorship Management',
        description: 'End-to-end deal management: brief distribution, content draft review, deliverable schedules, and reporting.',
        tools: ['Campaign Trackers', 'Deliverable Checklists', 'SOPs'],
        practicalApplication: 'Ensuring sponsored integrations launch on time and fulfill both creator and brand requirements.'
      },
      {
        name: 'Meta Ads & Social Media',
        description: 'Campaign setup, audience targeting, creative testing, and social media account management.',
        tools: ['Ads Manager', 'Targeting Segments', 'Ad Copywriting'],
        practicalApplication: 'Running targeted promotional campaigns and cultivating active digital communities.'
      },
      {
        name: 'Product Research',
        description: 'Analyzing e-commerce market demand, supplier margins, competitive landscape, and product-market fit.',
        tools: ['Market Analysis', 'Competitor Auditing', 'Trend Spotting'],
        practicalApplication: 'Selecting viable products for store launches and evaluating digital product viability.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    subtitle: 'Foundations, Linux & system security',
    iconName: 'ShieldCheck',
    skills: [
      {
        name: 'Cybersecurity Fundamentals',
        description: 'Core security models including the CIA Triad (Confidentiality, Integrity, Availability), authentication vs authorization.',
        tools: ['CIA Triad', 'Security Principles', 'Access Control'],
        practicalApplication: 'Applying security-minded thinking when designing web applications, user permissions, and data storage.'
      },
      {
        name: 'Threats, Vulnerabilities & Risk',
        description: 'Understanding attack vectors: phishing, social engineering, malware types, brute force, and mitigation strategies.',
        tools: ['Threat Modeling', 'Risk Assessment', 'Vulnerability Scans'],
        practicalApplication: 'Evaluating system weaknesses and understanding how attacker workflows exploit common configuration mistakes.'
      },
      {
        name: 'Linux / SSH & PuTTY',
        description: 'Navigating Linux directory hierarchies, permission bits (chmod/chown), SSH key management, and remote terminal sessions.',
        tools: ['Bash Terminal', 'SSH', 'PuTTY', 'File Permissions'],
        practicalApplication: 'Managing remote servers, configuring secure shell connections, and operating headless environments via CLI.'
      },
      {
        name: 'OverTheWire Bandit',
        description: 'Solving practical hands-on Linux security wargames (file inspection, grep pipelines, base64 decoding, network ports).',
        tools: ['OverTheWire', 'CLI Tooling (find, grep, nc, openssl)'],
        practicalApplication: 'Strengthening real terminal problem-solving skills through hands-on CTF challenge solving.'
      },
      {
        name: 'Disaster Recovery & Business Continuity',
        description: 'Backup strategies, recovery time objectives (RTO/RPO), redundancy planning, and incident response basics.',
        tools: ['Backup Plans', 'Incident Response Basics'],
        practicalApplication: 'Designing resilient digital setups that anticipate hardware failures or service interruptions.'
      }
    ]
  },
  {
    id: 'creative',
    title: 'CREATIVE & DESIGN',
    subtitle: 'Visual identity & digital assets',
    iconName: 'Palette',
    skills: [
      {
        name: 'Canva',
        description: 'Rapid visual design for pitch decks, sponsor one-pagers, YouTube thumbnails, and social media collateral.',
        tools: ['Canva Pro', 'Pitch Decks', 'Brand Kits'],
        practicalApplication: 'Producing client-ready media kits, agency proposals, and sharp promotional graphics quickly.'
      },
      {
        name: 'Photoshop',
        description: 'Image retouching, layered graphic compositions, asset cutouts, and custom visual mockups.',
        tools: ['Adobe Photoshop', 'Layer Masks', 'Color Correction'],
        practicalApplication: 'Crafting tailored visual assets, project mockups, and polishing photo assets for web projects.'
      },
      {
        name: 'Social Media Creatives',
        description: 'Designing high-impact digital banners, carousels, and promotional assets tuned for platform engagement.',
        tools: ['Asset Resizing', 'Typography Framing', 'Contrast Balancing'],
        practicalApplication: 'Maintaining visual consistency across marketing channels and promotional touchpoints.'
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    shortDesc: 'Understand the problem',
    detail: 'Before writing a line of code or drafting an outreach pitch, I investigate the core objective. Who is this for? What friction are we removing? What does success look like?',
    deliverables: ['Objective breakdown', 'User context', 'Requirements list'],
    kashifApproach: 'I look at existing solutions, analyze what feels clunky or missing, and define clear boundaries so the project stays focused on real value.'
  },
  {
    number: '02',
    title: 'PLAN',
    shortDesc: 'Break the idea into systems',
    detail: 'Every project is composed of interacting systems — whether it is the state management in a browser game, the outreach funnel for an agency, or the component tree of a web app.',
    deliverables: ['System architecture', 'Tool selection', 'Milestone breakdown'],
    kashifApproach: 'I sketch the workflow on paper or digital notes, mapping out data flow, interface states, and technical prerequisites.'
  },
  {
    number: '03',
    title: 'BUILD',
    shortDesc: 'Turn the idea into something usable',
    detail: 'This is where experimentation meets execution. I assemble working prototypes fast, testing assumptions in the browser or terminal immediately.',
    deliverables: ['Functional prototype', 'Core logic implementation', 'Interface design'],
    kashifApproach: 'I build modularly: get the fundamental mechanic working first (e.g. game jump physics, or form submission), then build outward.'
  },
  {
    number: '04',
    title: 'TEST',
    shortDesc: 'Find bugs and problems',
    detail: 'Nothing works perfectly on the first pass. I stress-test edge cases, inspect console errors, verify mobile viewports, and audit user flows for friction.',
    deliverables: ['Bug reports', 'Cross-browser testing', 'Performance audit'],
    kashifApproach: 'I use Chrome DevTools, terminal logs, and real mobile devices. In games, I test boundary collision extremes; in outreach, I test email readability.'
  },
  {
    number: '05',
    title: 'IMPROVE',
    shortDesc: 'Iterate',
    detail: 'Refinement separates good work from great work. I clean up code structure, polish micro-interactions, adjust spacing, and optimize performance.',
    deliverables: ['Code refactoring', 'Interaction polish', 'Speed optimization'],
    kashifApproach: 'I cut unnecessary complexity, refine typography hierarchy, and enhance responsiveness based on actual usage observations.'
  },
  {
    number: '06',
    title: 'SHIP',
    shortDesc: 'Deploy and refine',
    detail: 'Getting the project live into the real world. Setting up hosting, configuring domains, verifying security, and gathering real feedback.',
    deliverables: ['Live deployment', 'Documentation', 'Post-launch review'],
    kashifApproach: 'Deploying cleanly, maintaining version control on GitHub, and treating every shipped build as a foundation for the next iteration.'
  }
];

export const EXPLORING_TOPICS: ExploreTopic[] = [
  {
    title: 'CYBERSECURITY',
    domain: 'Security Fundamentals & Linux Hardening',
    status: 'Actively Practicing',
    description: 'Working through OverTheWire Bandit challenges, understanding the CIA triad in modern web setups, analyzing common network threats, and mastering SSH remote administration.',
    keyConcepts: ['OverTheWire Bandit Labs', 'CIA Triad Application', 'Linux File Permissions (chmod/chown)', 'SSH Key Authentication', 'Threat & Risk Modeling'],
    currentMilestone: 'Advancing through Bandit wargame levels and setting up secure headless Linux environments via PuTTY.'
  },
  {
    title: 'PYTHON',
    domain: 'Scripting & Automation',
    status: 'In Progress',
    description: 'Deepening core programming logic, writing automated utility scripts for file management, API scraping, and data processing routines.',
    keyConcepts: ['Object-Oriented Basics', 'File I/O & JSON parsing', 'Automation Scripts', 'Error & Exception Handling'],
    currentMilestone: 'Building custom scripts to automate creator analytics extraction and data organization.'
  },
  {
    title: 'AI DEVELOPMENT',
    domain: 'Prompt Architectures & AI Systems',
    status: 'Actively Practicing',
    description: 'Experimenting with multi-stage prompt engineering, AI code review workflows, and exploring local LLM tooling to build smart developer utilities.',
    keyConcepts: ['Multi-Stage Prompt Chains', 'Code Diagnostic Formatting', 'Local Model Pipelines (Ollama)', 'Context Window Optimization'],
    currentMilestone: 'Prototyping automated code snippet validation tools with structured JSON output enforcement.'
  },
  {
    title: 'DATA ANALYSIS',
    domain: 'Pandas & Visualization',
    status: 'In Progress',
    description: 'Using Pandas DataFrames to filter, aggregate, and visualize real metrics from e-commerce stores and YouTube creator channels.',
    keyConcepts: ['Pandas DataFrames', 'Data Cleaning & Transformation', 'Descriptive Statistics', 'Campaign Performance Metrics'],
    currentMilestone: 'Analyzing correlation between creator video categories and sponsorship conversion metrics.'
  },
  {
    title: 'CLOUD & INFRASTRUCTURE',
    domain: 'Remote Servers & Deployment',
    status: 'Hands-on Labs',
    description: 'Understanding cloud hosting architectures, VPS server management, DNS record propagation, and basic SSL/TLS configuration.',
    keyConcepts: ['Linux CLI Administration', 'Remote PuTTY / SSH Sessions', 'DNS Management (A, CNAME, TXT)', 'Basic Server Hardening'],
    currentMilestone: 'Configuring custom server environments and managing production domain mappings.'
  },
  {
    title: 'ADVANCED WEB DEVELOPMENT',
    domain: 'Performance & Interactive Experiences',
    status: 'Actively Practicing',
    description: 'Pushing React and Next.js forward with fluid animations, GPU-accelerated motion, HTML5 Canvas game loops, and responsive design math.',
    keyConcepts: ['Delta-Time Game Loops', 'Canvas 2D Rendering', 'Framer Motion Transitions', 'Tailwind Spatial Systems'],
    currentMilestone: 'Refining custom physics simulations and micro-interactions in browser environments.'
  }
];

export const TECH_ITEMS: TechItem[] = [
  { name: 'Next.js', category: 'Development', usage: 'Modern web applications, SSR/SSG workflows, and game shell development', level: 'Practical' },
  { name: 'TypeScript', category: 'Development', usage: 'Type-safe interfaces, robust logic structures, and frontend components', level: 'Practical' },
  { name: 'HTML5 & CSS3', category: 'Development', usage: 'Semantic page structure, modern grid & flexbox layouts, fluid typography', level: 'Solid' },
  { name: 'Python', category: 'Data & Python', usage: 'Scripting, backend logic experiments, automation, and algorithmic problem-solving', level: 'Active Learning' },
  { name: 'Pandas', category: 'Data & Python', usage: 'DataFrame manipulation, data cleaning, and marketing metrics aggregation', level: 'Active Learning' },
  { name: 'Shopify', category: 'E-Commerce', usage: 'Storefront building, Liquid theme custom CSS, checkout flow optimization', level: 'Practical' },
  { name: 'WordPress', category: 'E-Commerce', usage: 'Elementor Pro layouts, client websites, plugin architecture, performance fixes', level: 'Practical' },
  { name: 'GitHub', category: 'Development', usage: 'Version control, repository management, branch workflows, and code hosting', level: 'Practical' },
  { name: 'Jupyter', category: 'Data & Python', usage: 'Interactive notebook experimentation for Python data analysis and visualization', level: 'Practicing' },
  { name: 'Linux', category: 'Systems & Security', usage: 'Command-line file management, process monitoring, permissions, and bash commands', level: 'Active Learning' },
  { name: 'PuTTY / SSH', category: 'Systems & Security', usage: 'Secure remote server connectivity, terminal sessions, and key-based login', level: 'Hands-on' },
  { name: 'Canva', category: 'Design & Media', usage: 'Sponsor pitch decks, YouTube media kits, digital marketing collateral, banners', level: 'Proficient' },
  { name: 'Photoshop', category: 'Design & Media', usage: 'Image manipulation, asset cutouts, custom graphics, and UI mockup elements', level: 'Practical' },
  { name: 'AI Tools', category: 'AI Tools', usage: 'Prompt engineering, AI-assisted development, code refactoring, project ideation', level: 'Daily Practice' }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    stage: '01',
    domain: 'WEB',
    narrative: 'Discovered curiosity for the digital realm by tinkering with HTML, CSS, and basic website layouts. Learning how lines of code translate directly into visual interfaces on a screen.',
    skillsGained: ['HTML5', 'CSS3', 'Layout Basics', 'Responsive Principles'],
    keyRealization: 'Building something tangible that lives on the internet provides immediate, addictive feedback.'
  },
  {
    stage: '02',
    domain: 'E-COMMERCE',
    narrative: 'Applied web skills to commercial use cases: launching and customizing Shopify and WordPress stores. Learned that design directly dictates whether a visitor trusts a storefront enough to buy.',
    skillsGained: ['Shopify Customization', 'WordPress / Elementor', 'Store UX', 'Checkout Optimization'],
    keyRealization: 'A pretty website is useless if the user gets confused during the checkout step.'
  },
  {
    stage: '03',
    domain: 'DIGITAL MARKETING',
    narrative: 'Realized that having a store is only half the battle — people need to discover it. Began exploring Meta Ads, social media strategy, and conversion optimization to drive actual targeted traffic.',
    skillsGained: ['Meta Ads Manager', 'Targeting Fundamentals', 'Ad Creative Strategy', 'Product Research'],
    keyRealization: 'Traffic without alignment produces zero results; matching the message to the audience is everything.'
  },
  {
    stage: '04',
    domain: 'INFLUENCER MARKETING',
    narrative: 'Founded Fumance to focus on creator sponsorships on YouTube. Coordinated outreach between brands and video creators, learning negotiation, campaign scheduling, and media kit pricing.',
    skillsGained: ['Creator Outreach', 'Sponsorship Management', 'CPM Benchmarks', 'Contract Workflows'],
    keyRealization: 'Authentic creator advocacy converts higher than generic banner ads because creators have built genuine trust.'
  },
  {
    stage: '05',
    domain: 'AI & ACCELERATION',
    narrative: 'Embraced modern AI tools and structured prompt engineering to supercharge development cycles. Explored how AI can inspect code, identify bugs, and scaffold new technical projects.',
    skillsGained: ['Prompt Engineering', 'AI-Assisted Coding', 'Workflow Optimization', 'Tool Evaluation'],
    keyRealization: 'AI does not replace foundational thinking; it acts as a massive leverage multiplier for those who know what to build.'
  },
  {
    stage: '06',
    domain: 'DEVELOPMENT & GAMING',
    narrative: 'Dived deeper into JavaScript, TypeScript, Next.js, and browser game development (Luna Lupa & Browser Racer). Learned math, physics loops, vector velocity, and state management.',
    skillsGained: ['TypeScript', 'Next.js', 'Canvas 2D Physics', 'Game Loop Architecture'],
    keyRealization: 'Game mechanics force you to understand real-time performance and edge-case collision logic better than standard UI forms.'
  },
  {
    stage: '07',
    domain: 'CYBERSECURITY',
    narrative: 'Currently exploring systems security, Linux administration via SSH/PuTTY, the CIA triad, and hands-on OverTheWire Bandit challenges. Building an understanding of how systems are secured and attacked.',
    skillsGained: ['Linux CLI', 'SSH Hardening', 'CIA Triad', 'OverTheWire Bandit', 'Threat Analysis'],
    keyRealization: 'True technology mastery requires understanding not just how to build applications, but how the underlying infrastructure protects them.'
  }
];
