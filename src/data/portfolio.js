// ─── Portfolio Data ───────────────────────────────────────────
// Edit this file to update all portfolio content

export const personal = {
  name: 'Pavitra Kambar',
  role: 'Computer Science Student',
  email: 'pavitrakambar@email.com',
  github: 'https://github.com/Pavitra672',
  linkedin: 'https://www.linkedin.com/in/pavitra-kambar-5ab6412a6',
  resumeUrl: '/resume.pdf',
  // ─── PHOTO ───────────────────────────────────────────────────
  // Place your photo inside the /public folder as "photo.jpg"
  // Then this path will work automatically:
  photo: '/photo.jpg',
  about: "Hey, I'm Pavitra. Building reliable full-stack applications and AI-powered solutions is my passion. I work at the intersection of React, Node.js, and Machine Learning — solving real-world problems with clean, efficient code. Currently exploring AI-driven automation in healthcare and agriculture. Always up for a challenge and excited to create impactful solutions.",
}

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    icon: '🏥',
    iconBg: 'rgba(108,99,255,0.12)',
    title: 'MediVoxAI – AI Medical Receptionist',
    desc: 'Full-stack AI application that automates patient interaction and appointment management. Features voice-based interaction using speech-to-text and text-to-speech to simulate a real receptionist in healthcare environments.',
    tech: ['React', 'Node.js', 'Express', 'REST APIs', 'Speech AI', 'JSON'],
    github: 'https://github.com/Pavitra672',
    demo: '#',
  },
  {
    id: 2,
    icon: '🧠',
    iconBg: 'rgba(34,211,160,0.12)',
    title: 'DocuMind-AI – Offline Document Summarizer',
    desc: 'Offline document summarization app that integrates Ollama to run a local AI model — no internet needed, full data privacy. Supports multiple file formats with a clean, responsive UI.',
    tech: ['React', 'JSX', 'Tailwind CSS', 'Ollama', 'Local AI'],
    github: 'https://github.com/Pavitra672',
    demo: '#',
  },
  {
    id: 3,
    icon: '📔',
    iconBg: 'rgba(167,139,250,0.12)',
    title: 'Personal Diary App',
    desc: 'A full-stack journaling application with secure authentication, rich-text entries, and a calming UI. Built on the MERN stack with JWT-based sessions.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/Pavitra672',
    demo: '#',
  },
  {
    id: 4,
    icon: '🩸',
    iconBg: 'rgba(255,107,107,0.12)',
    title: 'Blood Donor System',
    desc: 'Web app for donor registration and blood group search. Users register their details locally and others can instantly find donors by blood group — deployed on Netlify.',
    tech: ['HTML5', 'Bootstrap 5', 'JavaScript', 'localStorage'],
    github: 'https://github.com/Pavitra672',
    demo: 'https://blood-donor-web-app.netlify.app/search',
  },
  {
    id: 5,
    icon: '🌿',
    iconBg: 'rgba(245,158,11,0.12)',
    title: 'AI Crop Disease Detection',
    desc: 'Deep learning model for early detection of crop diseases from leaf images. Helps farmers diagnose plant health using just a smartphone camera.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Flask', 'React'],
    github: 'https://github.com/Pavitra672',
    demo: '#',
  },
]

// ─── Skills ───────────────────────────────────────────────────
export const skillGroups = [
  {
    label: '⚡ Frontend',
    color: 'var(--accent)',
    skills: [
      { name: 'React.js',          pct: 88 },
      { name: 'JavaScript (ES6+)', pct: 80 },
      { name: 'HTML & CSS',        pct: 85 },
      { name: 'Tailwind CSS',      pct: 70 },
    ],
  },
  {
    label: '🔧 Backend',
    color: 'var(--green)',
    skills: [
      { name: 'Node.js & Express', pct: 78 },
      { name: 'MongoDB',           pct: 72 },
      { name: 'REST APIs',         pct: 68 },
      { name: 'SQL & DBMS',        pct: 65 },
    ],
  },
  {
    label: '🤖 AI & Data',
    color: 'var(--amber)',
    skills: [
      { name: 'Python',             pct: 82 },
      { name: 'TensorFlow / Keras', pct: 65 },
      { name: 'Computer Vision',    pct: 72 },
      { name: 'ML Fundamentals',    pct: 60 },
    ],
  },
  {
    label: '🛠️ Tools',
    color: 'var(--coral)',
    skills: [
      { name: 'Git & GitHub',    pct: 80 },
      { name: 'VS Code',         pct: 75 },
      { name: 'Docker (Basics)', pct: 60 },
      { name: 'Linux / CLI',     pct: 65 },
    ],
  },
]
