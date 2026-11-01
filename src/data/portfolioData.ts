import xoShoePreview from '../assets/images/xo_shoecleaner_preview_1793539665412.jpg';
import quranPreview from '../assets/images/quran_app_preview_1793539679435.jpg';
import isoLabPreview from '../assets/images/iso_lab_preview_1793539693738.jpg';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'frontend' | 'uiux' | 'fullstack';
  categoryLabel: string;
  liveUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  role: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  designSpecs: {
    primaryColor: string;
    fontFamily: string;
    deliverables: string[];
  };
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degreeOrTrack: string;
  period: string;
  location: string;
  description: string;
  keyFocus: string[];
  badge?: string;
}

export interface JourneyStep {
  title: string;
  role: string;
  organization: string;
  period: string;
  type: 'science' | 'quality' | 'design' | 'code';
  summary: string;
  bullets: string[];
  iconName: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Mahmoud Mansour',
    title: 'UI/UX Designer & Frontend Developer',
    subtitle: 'Bridging Scientific Precision, ISO 17025 Standards & Intuitive Digital Craft',
    avatarUrl: './assets/aistudio/1793539566612_025f807c.jpg',
    email: 'mahmoud.bio55@gmail.com',
    phone: '+201001631979',
    formattedPhone: '+20 100 163 1979',
    whatsappUrl: 'https://wa.me/201001631979',
    githubUrl: 'https://github.com/mahmoud-mansour-99',
    location: 'Egypt · Available for Remote & On-site roles',
    availability: 'Open for Full-time Roles & High-Impact Freelance Projects',
    bio: 'A multidisciplinary digital creator with a unique foundation in analytical chemistry and ISO 17025 laboratory quality management. Trained through the Digital Egypt Pioneers Initiative (DEPI) in UI/UX Design and refined through Elzero Web School and Tarmeez Academy in frontend development. I approach software design and engineering with systematic rigor, zero-defect quality mindset, and relentless empathy for user experience.',
  },

  projects: [
    {
      id: 'xo-shoe-cleaner',
      title: 'XO Shoe Cleaner',
      tagline: 'Modern e-commerce landing experience for high-end sneaker restoration & care services',
      category: 'frontend',
      categoryLabel: 'E-Commerce & Service UI',
      liveUrl: 'https://mahmoud-mansour-99.github.io/XO-ShoeCleaner/',
      githubUrl: 'https://github.com/mahmoud-mansour-99/XO-ShoeCleaner',
      imageUrl: './assets/aistudio/Screenshot_2026-11-01-15-44-31-164_com.android.chrome-edit_34348e87.jpg',
      featured: true,
      role: 'UI/UX Design & Frontend Engineering',
      year: '2024',
      overview: 'XO Shoe Cleaner is an engaging, high-conversion commercial web experience tailored for footwear enthusiasts and sneaker care specialists. It combines bold streetwear aesthetics with crisp service tiers, before/after showcases, customer reviews, and a streamlined booking pathway.',
      challenge: 'Footwear restoration requires establishing immediate customer trust and clear differentiation between basic cleaning and intensive sneaker refurbishment without overwhelming the user with complex jargon.',
      solution: 'Crafted a high-contrast visual identity with clear service tier pricing, dynamic interactive cards, responsive product galleries, and a high-visibility booking call-to-action optimized for mobile browsers.',
      keyFeatures: [
        'Interactive service catalog with transparent package comparisons',
        'Responsive mobile-first layout with smooth micro-interactions',
        'Before & after restoration showcase cards',
        'Direct inquiry and customer booking integration',
        'Cross-browser tested performance and fast asset delivery'
      ],
      techStack: ['HTML5', 'Modern CSS3', 'JavaScript (ES6+)', 'Responsive Grid/Flexbox', 'GitHub Pages'],
      designSpecs: {
        primaryColor: '#0ea5e9',
        fontFamily: 'Modern Sans-Serif',
        deliverables: ['Responsive Web App', 'Interactive UI Prototypes', 'Brand Color Palette', 'Service Architecture']
      },
      highlights: [
        '100% Mobile responsive layout',
        'Sub-second page load performance',
        'High conversion call-to-actions'
      ]
    },
    {
      id: 'quran-web-app',
      title: 'Quran Web Application',
      tagline: 'Distraction-free, tranquil Islamic recitation and Surah reading platform',
      category: 'frontend',
      categoryLabel: 'Digital Experience & Web App',
      liveUrl: 'https://mahmoud-mansour-99.github.io/Quran/',
      githubUrl: 'https://github.com/mahmoud-mansour-99/Quran',
      imageUrl: './assets/aistudio/Screenshot_2026-11-01-15-42-52-541_com.android.chrome-edit_720a1a09.jpg',
      featured: true,
      role: 'UI/UX Architecture & Frontend Development',
      year: '2024',
      overview: 'A digital sanctum engineered for seamless Quran reading, listening, and study. Built with respectful attention to Arabic typographic hierarchy, Uthmani calligraphy clarity, instant Surah filtering, and intuitive audio playback.',
      challenge: 'Rendering Arabic diacritical marks (Tashkeel) and large textual content across varied screen resolutions without font clipping, visual lag, or reading fatigue.',
      solution: 'Engineered an accessible typography system with optimized line-heights, high-contrast reading themes, lightweight state management for audio tracking, and instant search across 114 Surahs.',
      keyFeatures: [
        'Complete index of 114 Surahs with Arabic and transliterated metadata',
        'Embedded audio streaming with synchronized recitation controls',
        'Clean, serene aesthetic minimizing cognitive clutter',
        'Instant client-side search and quick jump navigation',
        'Adaptive reading mode tailored for both desktop monitors and handheld devices'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Web Audio Integration', 'Arabic Font Optimization', 'GitHub Pages'],
      designSpecs: {
        primaryColor: '#10b981',
        fontFamily: 'Amiri / Traditional Arabic & Modern Sans',
        deliverables: ['Typographic System', 'Audio Player Component', 'Search & Filter Index', 'Reading Ergonomics']
      },
      highlights: [
        'High-legibility typography with zero text clipping',
        'Fast audio player integration',
        'Instant zero-latency Surah filter'
      ]
    },
    {
      id: 'lab-quality-audit',
      title: 'ISO 17025 Lab Quality & Calibration Portal',
      tagline: 'Enterprise UI/UX concept bridging analytical chemistry workflows with strict compliance standards',
      category: 'uiux',
      categoryLabel: 'Enterprise UX & Scientific Tool',
      liveUrl: '#',
      imageUrl: isoLabPreview,
      featured: true,
      role: 'Lead Product Designer & Domain Architect',
      year: '2024',
      overview: 'A domain-specific UX case study born from Mahmoud\'s direct experience as an ISO 17025 Lab Quality Manager. Designed to replace error-prone paper logs with a verifiable digital chain of custody for chemical testing laboratories.',
      challenge: 'Accredited testing labs face grueling ISO 17025 compliance audits where missing calibration records or deviation logs can result in license suspension. Typical legacy software is clunky, slow, and prone to user input errors.',
      solution: 'Engineered a role-based dashboard prioritizing sample traceability, automated calibration reminder alerts, measurement uncertainty tracking, and instant 1-click audit-ready PDF report generation.',
      keyFeatures: [
        'Sample chain-of-custody tracking with barcode/ID lookup',
        'Equipment calibration status with automated compliance warning rings',
        'Chemical reagent batch logging and expiry monitors',
        'Audit trail timeline recording operator, timestamp, and method validation',
        'Accessible, high-contrast scientific data tables with rapid inline sorting'
      ],
      techStack: ['Figma Prototyping', 'Design Systems', 'React UI Patterns', 'Tailwind CSS', 'ISO 17025 Framework'],
      designSpecs: {
        primaryColor: '#f59e0b',
        fontFamily: 'Space Grotesk & JetBrains Mono',
        deliverables: ['Information Architecture', 'Figma High-Fidelity Prototype', 'Design System Tokens', 'Audit Flow Wireframes']
      },
      highlights: [
        'Synthesizes real-world ISO 17025 audit requirements',
        'Error-proofing (Poka-Yoke) form validation',
        'Optimized for rapid laboratory tablet & desktop entry'
      ]
    }
  ] as Project[],

  education: [
    {
      institution: 'DEPI — Digital Egypt Pioneers Initiative',
      degreeOrTrack: 'UI/UX Design Track',
      period: 'Professional Certification',
      location: 'Egypt (Ministry of Communications and Information Technology)',
      description: 'Rigorous intensive training covering user research, empathy mapping, interactive wireframing, heuristic evaluation, design systems, usability testing, and cross-functional design-to-development handoff in Figma.',
      keyFocus: ['Design Thinking', 'User Personas & Journey Maps', 'Figma Prototyping', 'Design Systems & Tokens', 'Usability Testing'],
      badge: 'Certified UI/UX'
    },
    {
      institution: 'Elzero Web School & Tarmeez Academy',
      degreeOrTrack: 'Frontend Web Development Track',
      period: 'Advanced Training',
      location: 'Online',
      description: 'Comprehensive mastery of modern frontend development: semantic HTML5, modern CSS3 layout paradigms (Flexbox, CSS Grid), vanilla JavaScript (ES6+), DOM architecture, asynchronous programming, APIs, and React fundamentals.',
      keyFocus: ['HTML5 & Modern CSS3', 'JavaScript ES6+ Deep Dive', 'DOM Manipulation & Events', 'Responsive Web Design', 'Version Control / Git'],
      badge: 'Frontend Mastery'
    },
    {
      institution: 'Faculty of Science',
      degreeOrTrack: 'Bachelor of Science in Chemistry',
      period: 'Academic Degree',
      location: 'Egypt',
      description: 'Foundational scientific training instilling rigorous analytical reasoning, scientific method, statistical error analysis, precise quantitative measurement, and laboratory experimentation protocols.',
      keyFocus: ['Analytical Chemistry', 'Scientific Methodology', 'Statistical Data Analysis', 'Experimental Rigor'],
      badge: 'Scientific Foundation'
    },
    {
      institution: 'ISO 17025 Professional Qualification',
      degreeOrTrack: 'Testing & Calibration Laboratories Quality Manager',
      period: 'Accreditation Standard',
      location: 'Accredited Quality Bodies',
      description: 'Specialized mastery in General Requirements for the Competence of Testing and Calibration Laboratories. Overseeing quality management systems, measurement traceability, method validation, uncertainty calculations, and audit compliance.',
      keyFocus: ['ISO/IEC 17025:2017 Requirements', 'Quality Management Systems (QMS)', 'Audit Preparedness & Traceability', 'Risk & Uncertainty Management'],
      badge: 'Quality Standard'
    }
  ] as EducationItem[],

  journeySteps: [
    {
      title: 'Faculty of Science',
      role: 'Chemistry Graduate',
      organization: 'Faculty of Science',
      period: 'Academic Foundation',
      type: 'science',
      summary: 'Developed analytical rigor, hypothesis-driven thinking, and an obsession with empirical precision.',
      bullets: [
        'Mastered quantitative and qualitative chemical analysis with strict protocol adherence',
        'Trained in experimental controls, error margins, and systematic problem solving',
        'Built the mental model: "Every system must be verified against measurable criteria"'
      ],
      iconName: 'FlaskConical'
    },
    {
      title: 'Chemist & Lab Quality Manager',
      role: 'ISO 17025 Quality Manager',
      organization: 'Testing & Calibration Laboratory',
      period: 'Quality & Operations',
      type: 'quality',
      summary: 'Led quality management systems, international accreditation audits, and zero-defect compliance.',
      bullets: [
        'Spearheaded ISO/IEC 17025 quality management systems and laboratory accreditations',
        'Eliminated human error through standardized workflows, checklists, and rigorous validation',
        'Applied Poka-Yoke (fail-safe mechanisms) to complex multi-step laboratory procedures'
      ],
      iconName: 'ShieldCheck'
    },
    {
      title: 'DEPI UI/UX Professional Track',
      role: 'UI/UX Designer',
      organization: 'Digital Egypt Pioneers Initiative (MCIT)',
      period: 'Design Specialization',
      type: 'design',
      summary: 'Connected scientific analytical thinking with user psychology, empathy, and interface aesthetics.',
      bullets: [
        'Conducted end-to-end user research, problem framing, and iterative prototyping in Figma',
        'Engineered scalable design systems with disciplined tokens, typographic scales, and color science',
        'Performed heuristic evaluations to identify friction points and optimize usability metrics'
      ],
      iconName: 'Palette'
    },
    {
      title: 'Frontend Engineering with Elzero & Tarmeez',
      role: 'Frontend Developer',
      organization: 'Elzero Web School & Tarmeez Academy',
      period: 'Code & Architecture',
      type: 'code',
      summary: 'Brought designs to life with clean, modular, and responsive codebases.',
      bullets: [
        'Developed production-ready web interfaces with semantic HTML, CSS Grid, and JavaScript ES6+',
        'Integrated asynchronous APIs, local state storage, and audio media players',
        'Committed to accessible, responsive, and performance-tuned frontend applications'
      ],
      iconName: 'Code2'
    }
  ] as JourneyStep[],

  skills: {
    design: [
      { name: 'UI / Visual Design', level: 'Advanced' },
      { name: 'UX & Information Architecture', level: 'Advanced' },
      { name: 'Wireframing & Prototyping', level: 'Advanced' },
      { name: 'Figma & Design Systems', level: 'Advanced' },
      { name: 'User Research & Personas', level: 'Proficient' },
      { name: 'Heuristic Usability Evaluation', level: 'Advanced' },
      { name: 'Typography & Color Theory', level: 'Advanced' },
      { name: 'Micro-interactions & Motion', level: 'Proficient' }
    ],
    frontend: [
      { name: 'Semantic HTML5', level: 'Advanced' },
      { name: 'Modern CSS3 & Flexbox/Grid', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'React & Component Architecture', level: 'Proficient' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'Responsive Web Design', level: 'Advanced' },
      { name: 'Git & GitHub Workflows', level: 'Proficient' },
      { name: 'Web Audio & Media APIs', level: 'Proficient' }
    ],
    scientificQuality: [
      { name: 'ISO/IEC 17025 Compliance', level: 'Expert' },
      { name: 'Systematic Quality Assurance (QA)', level: 'Expert' },
      { name: 'Error-Proofing (Poka-Yoke)', level: 'Expert' },
      { name: 'Standard Operating Procedures (SOPs)', level: 'Expert' },
      { name: 'Audit Preparedness & Traceability', level: 'Expert' },
      { name: 'Accessibility (WCAG AA Compliance)', level: 'Advanced' }
    ]
  },

  values: [
    {
      title: 'Laboratory Precision',
      desc: 'No arbitrary pixels or guesswork. Every spacing token, typographic ratio, and UI state is grounded in deliberate system math.',
      icon: 'Binary'
    },
    {
      title: 'Human-Centered Empathy',
      desc: 'Interfaces should feel calm, effortless, and respectful of the user’s mental bandwidth—whether reading sacred text or booking a service.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Zero-Defect Quality (ISO Mindset)',
      desc: 'Trained to audit critical systems where errors are not tolerated. I treat edge cases, broken links, and layout shifts as quality hazards.',
      icon: 'CheckCircle2'
    },
    {
      title: 'Clean, Semantic Code',
      desc: 'Design and code are two sides of the same coin. I bridge the gap by writing maintainable, accessible, and responsive frontend code.',
      icon: 'Layers'
    }
  ]
};
