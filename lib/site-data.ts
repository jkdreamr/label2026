// ─── NOVUM site data ────────────────────────────────────────────────────────
// Edit this single file to rename the brand, update artists, projects, etc.
// Every component reads from here — no hard-coded strings elsewhere.

export interface Artist {
  name: string;
  role: string;
  focus: string;
  location: string;
  status: string;
  link: string;
  visualTone: string;
}

export interface Project {
  title: string;
  type: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  item: string;
}

export interface EventData {
  title: string;
  theme: string;
  status: string;
  location: string;
  schedule: ScheduleItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteData {
  brandName: string;
  shortTagline: string;
  longTagline: string;
  manifestoLines: string[];
  manifestoParagraph: string;
  navItems: NavItem[];
  artists: Artist[];
  projects: Project[];
  event: EventData;
  sponsorEmail: string;
  applyEmail: string;
  contactEmail: string;
  socialLinks: SocialLink[];
  whatWeDo: { index: string; title: string; description: string }[];
}

const siteData: SiteData = {
  brandName: "NOVUM",

  shortTagline: "Artists building the tools behind their art.",

  longTagline:
    "A label and creative lab for musicians, visual artists, performers, and technologists creating new forms of culture.",

  manifestoLines: [
    "The artist is no longer only a performer.",
    "The artist is the studio.",
    "The instrument builder.",
    "The system designer.",
    "The world maker.",
  ],

  manifestoParagraph:
    "NOVUM exists for artists who treat technology as part of the work itself. We are not here to automate creativity. We are here to expand what an artist can be.",

  navItems: [
    { label: "Manifesto", href: "#manifesto" },
    { label: "Artists", href: "#artists" },
    { label: "Projects", href: "#projects" },
    { label: "Sessions", href: "#sessions" },
    { label: "Join", href: "#join" },
  ],

  artists: [
    {
      name: "Joshua Koo",
      role: "Artist / Producer / Builder",
      focus: "AI-assisted systems for recording, release strategy, and world-building.",
      location: "Stanford / Seoul / San Francisco",
      status: "FOUNDING ARTIST",
      link: "#",
      visualTone:
        "voice memo, recording system, music interface, red signal, intimate studio",
    },
    {
      name: "Anna Matsumoto",
      role: "Creative Technologist / HCI Researcher",
      focus: "Interfaces for expression across sound, movement, touch, and visual media.",
      location: "Stanford / Berkeley / San Francisco",
      status: "FOUNDING ARTIST",
      link: "https://www.matsumotoanna.com/",
      visualTone:
        "multisensory interface, body movement, haptics, touch, embodied media",
    },
  ],

  projects: [
    {
      title: "Voice Memo to World",
      type: "MUSIC / TOOL / RELEASE",
      description:
        "A system for turning rough song fragments into sound, visuals, captions, and release direction.",
    },
    {
      title: "Reactive Stage",
      type: "PERFORMANCE / VISUALS",
      description:
        "Live visuals shaped by vocals, movement, and embodied input.",
    },
    {
      title: "Song World Builder",
      type: "INTERNAL TOOL",
      description:
        "A tool that turns one song into a full world of visuals, fan prompts, release strategy, and performance ideas.",
    },
  ],

  event: {
    title: "NOVUM SESSION 001",
    theme: "The Artist as Instrument Builder",
    status: "Coming soon",
    location: "Stanford / San Francisco",
    schedule: [
      { time: "19:00", item: "Doors" },
      { time: "19:30", item: "Performances" },
      { time: "20:15", item: "Tool demos" },
      { time: "21:00", item: "DJ / installation / social" },
    ],
  },

  sponsorEmail: "sponsors@novum.example",
  applyEmail: "apply@novum.example",
  contactEmail: "hello@novum.example",

  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
  ],

  whatWeDo: [
    {
      index: "01",
      title: "Artists",
      description:
        "A small collective of musicians, visual artists, performers, and creative technologists.",
    },
    {
      index: "02",
      title: "Tools",
      description:
        "Internal systems for sound, visuals, rollout, fan interaction, and live performance.",
    },
    {
      index: "03",
      title: "Sessions",
      description:
        "Live events between concert, demo night, gallery, and party.",
    },
    {
      index: "04",
      title: "Worlds",
      description:
        "Every release becomes more than a song. It becomes a visual, social, and technical system.",
    },
  ],
};

export default siteData;
