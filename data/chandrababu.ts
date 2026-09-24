export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  location: string;
  image?: string;
};

export type Memory = {
  id: string;
  number: string;
  title: string;
  body: string;
  attribution: string;
  dateLabel: string;
  location: string;
  image?: string;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  location: string;
  year: string;
  size: "portrait" | "landscape" | "small" | "wide";
};

export type Place = {
  slug: string;
  title: string;
  href: string;
  kicker: string;
  shortDescription: string;
  relationship: string;
  image: string;
  imageAlt: string;
};

export type FamilyMember = {
  name: string;
  relation: string;
  note: string;
};

export type BrotherMember = {
  name: string;
  relation: "Brother" | "Elder Brother" | "Younger Brother";
  note?: string;
  location?: string;
};

export type AddressInfo = {
  houseName: string;
  street: string;
  postOffice: string;
  location: string;
  panchayatOrTown: string;
  taluk: string;
  district: string;
  state: string;
  pincode: string;
  fullAddress: string;
  mapNote: string;
};

export const chandrababu = {
  name: "Chandrababu K",
  givenName: "Chandrababu K",
  inLovingMemory: "In loving memory",
  subtitle: "A life remembered with love.",
  tagline:
    "Miss You each and every day from Dec 10 2024, My Dear Father You always live inside my Heart miss you from bottom of my heart.",
  introductionHeading: "A life held close in memory.",
  introduction:
    "Chandrababu was born in 1964 in Kunnathukal, Karakonam, to Kuttapan Panicker and Sarojini. He was the couple’s middle son. He had two brothers, Mohanan, who has since passed away, and Krishnankutty.",
  biography: `<h2>Chandrababu K</h2>

<p><strong>Chandrababu K</strong> was born in <strong>1964</strong> and passed away on <strong>December 10, 2024</strong>. He was born to <strong>Kuttapan Panicker and Sarojini</strong> and was the middle son of the family, with two brothers, the late <strong>Mohanan</strong> and <strong>Krishnankutty</strong>.</p>

<p>He grew up in <strong>Elanchira and Kunnathukal</strong>, where he spent his early years surrounded by family and the community that shaped his life.</p>

<p>His educational journey began at <strong>Karakonam High School</strong>, followed by his studies at <strong>Melpalai School</strong>. He went on to complete his undergraduate studies at <strong>Dhanuvachapuram College</strong> and later earned his <strong>Master's degree in Political Science from the University of Kerala, Kariavattom</strong>.</p>

<p>Chandrababu was married to <strong>Priya A</strong>, and together they built their family and shared many years of life. He was a loving father to <strong>Amritha CP</strong> and <strong>Aravind CP</strong>.</p>

<p>His daughter, <strong>Amritha CP</strong>, is married to <strong>Pranoy</strong>. Through Amritha and Pranoy, he was blessed with his grandson, <strong>Hridaan</strong>, who brought another special bond and joy to his life.</p>

<p>His life was deeply connected to his <strong>family, his roots, and the places he called home</strong>. The memories he created with those closest to him remain an important part of his family's story and continue to keep his presence alive in their hearts.</p>

<br>

<p><strong>His story continues through the memories, values, and love he left behind in his family.</strong></p>
`,
  footerLine: "Remembered. Always.",
  createdBy: "Created with love by his family.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000"),
  locale: "en-IN",
  language: "en",
  publisherName: "The family of Chandrababu",
  heroImage: "/images/chandrababu-portrait-main.webp",
  portraitImage: "/images/chandrababu-portrait-main.webp",
  locations: ["Karakonam", "Kunnathukal", "Kerala"] as const,
  region: "Thiruvananthapuram",
  keywords: [
    "Chandrababu",
    "Chandrababu Karakonam",
    "Chandrababu  ",
    "Chandrababu Kerala",
    "Karakonam Chandrababu",
    "Kunnathukal Chandrababu",
    "Chandrababu memories",
    "Chandrababu photographs",
  ],
  houseName: "Roadarikil Kadayara PuthenVeedu  Pullentheri  Karakonam Po (e.g., Kunnathukal House)",
  address: {
    houseName: "Roadarikil Kadayara PuthenVeedu  Pullentheri  Karakonam Po",
    street: "Add Street / Landmark Name",
    postOffice: "Karakonam P.O",
    location: "Kunnathukal / Karakonam",
    panchayatOrTown: "Kunnathukal Panchayath",
    taluk: "Neyyattinkara Taluk",
    district: "Thiruvananthapuram",
    state: "Kerala",
    pincode: "695504",
    fullAddress:
      "Roadarikil Kadayara PuthenVeedu, Kunnathukal, Karakonam P.O, Thiruvananthapuram, Kerala - 695504",
    mapNote: "Karakonam · Kunnathukal · Thiruvananthapuram District, Kerala",
  } satisfies AddressInfo,
  seo: {
    homeTitle: "Chandrababu — A life remembered",
    homeDescription:
      "A family archive of photographs, memories and places connected to Chandrababu of Karakonam and Kunnathukal, Kerala.",
    aboutTitle: "About Chandrababu",
    aboutDescription:
      "A family portrait of Chandrababu — biography, photographs, memories and the places that remain part of his story in Kerala.",
    memoriesTitle: "Memories of Chandrababu",
    memoriesDescription:
      "Family memories of Chandrababu, held in Karakonam, Kunnathukal and Kerala.",
    photographsTitle: "Photographs of Chandrababu",
    photographsDescription:
      "A photographic archive remembering Chandrababu — family photographs from Karakonam, Kunnathukal and Kerala.",
    placesTitle: "Places that remain — Chandrababu",
    placesDescription:
      "Karakonam, Kunnathukal and Kerala — places connected to Chandrababu's life and memory.",
    karakonamTitle: "Chandrababu & Karakonam",
    karakonamDescription:
      "Memories, photographs and family stories connecting Chandrababu and Karakonam, Kerala.",
    KunnathukalTitle: "Chandrababu & Kunnathukal",
    KunnathukalDescription:
      "Memories, photographs and family stories connecting Chandrababu and Kunnathukal, Kerala.",
  },
  timeline: [
    {
      year: "Early Life",
      title: "Roots in Karakonam & Kunnathukal",
      description:
        "Add details about Chandrababu's early years, family home, and upbringing in Kunnathukal, Kerala.",
      location: "Karakonam & Kunnathukal",
      image: "/images/image copy.png",
    },
    {
      year: "Family Years",
      title: "Building a Family",
      description:
        "Memories of marriage, home life, and raising his family with love and devotion.",
      location: "Karakonam",
      image: "/images/chandrababu-wife.webp",
    },
    {
      year: "Generations",
      title: "Father & Children",
      description:
        "Cherished moments with his children, guiding them with warmth, strength, and quiet wisdom.",
      location: "Kunnathukal",
      image: "/images/chandrababu-son.webp",
    },
    {
      year: "Legacy",
      title: "Forever Remembered",
      description:
        "His values, smile, and memories remain preserved forever in the hearts of his family.",
      location: "Kerala",
      image: "/images/chandrababu-portrait-main.webp",
    },
  ] satisfies TimelineEntry[],
  memories: [
    {
      id: "memory-01",
      number: "Memory 01",
      title: "A Father's Warmth & Strength",
      body: "Add family memory here. Share a story of a day spent together at home, his advice, or a quiet moment that captures his spirit. Replace this text with the family's own words.",
      attribution: "Family Memory",
      dateLabel: "Family Archive",
      location: "Karakonam",
      image: "/images/chandrababu-son.webp",
    },
    {
      id: "memory-02",
      number: "Memory 02",
      title: "Life at Home with Family",
      body: "Add family memory here. A recollection of family gatherings, festive occasions, and times spent with brothers, wife, and loved ones.",
      attribution: "Family Memory",
      dateLabel: "Family Archive",
      location: "Kunnathukal",
      image: "/images/chandrababu-wife.webp",
    },
    {
      id: "memory-03",
      number: "Memory 03",
      title: "Parents & Ancestral Heritage",
      body: "Add family memory here. Stories of the elders, family roots, and traditions passed down through generations in Karakonam.",
      attribution: "Family Memory",
      dateLabel: "Ancestral Heritage",
      location: "Karakonam · Kerala",
      image: "/images/chandrababu-parents.webp",
    },
  ] satisfies Memory[],
  gallery: [
    {
      id: "portrait-main",
      src: "/images/chandrababu-portrait-main.webp",
      alt: "Portrait of Chandrababu in checked shirt",
      caption: "Chandrababu — Portrait",
      location: "Karakonam",
      year: "Family Archive",
      size: "portrait",
    },
    {
      id: "with-son",
      src: "/images/chandrababu-son.webp",
      alt: "Chandrababu with his son",
      caption: "Chandrababu with his son",
      location: "Karakonam",
      year: "Family Archive",
      size: "landscape",
    },
    {
      id: "with-wife",
      src: "/images/chandrababu-wife.webp",
      alt: "Chandrababu with his wife",
      caption: "Chandrababu with his wife",
      location: "Karakonam",
      year: "Family Archive",
      size: "small",
    },
    {
      id: "portrait-blue",
      src: "/images/chandrababu-portrait-blue.webp",
      alt: "Studio portrait of Chandrababu",
      caption: "Portrait of Chandrababu",
      location: "Kunnathukal",
      year: "Family Archive",
      size: "portrait",
    },
    {
      id: "with-son-younger",
      src: "/images/chandrababu-son-younger.webp",
      alt: "Chandrababu with his son (younger years)",
      caption: "Father and son",
      location: "Karakonam",
      year: "Family Archive",
      size: "small",
    },
    {
      id: "parents-elders",
      src: "/images/chandrababu-parents.webp",
      alt: "Chandrababu's parents / family elders",
      caption: "Family elders & parents",
      location: "Karakonam · Kerala",
      year: "Ancestral Archive",
      size: "landscape",
    },
    {
      id: "portrait-vintage",
      src: "/images/chandrababu-portrait-vintage.webp",
      alt: "Vintage portrait of Chandrababu",
      caption: "Chandrababu — Early years portrait",
      location: "Kunnathukal",
      year: "Early Archive",
      size: "small",
    },
    {
      id: "family-collage",
      src: "/images/chandrababu-collage.webp",
      alt: "Archival portrait collection of Chandrababu",
      caption: "Life portrait collection",
      location: "Karakonam · Kunnathukal",
      year: "Archival Collection",
      size: "wide",
    },
  ] satisfies GalleryItem[],
  familyNote:
    "Introduce the family members who hold Chandrababu's memory close — his wife, sons, brothers, and relatives in Karakonam & Kunnathukal.",
  brothers: [
    {
      name: "Add Brother's Name",
      relation: "Elder Brother",
      note: "Add a note about Chandrababu's brother (e.g., life memories, bond, and shared family home).",
      location: "Karakonam",
    },
    {
      name: "Add Brother's Name",
      relation: "Brother",
      note: "Add a note about Chandrababu's brother.",
      location: "Kunnathukal",
    },
  ] satisfies BrotherMember[],
  family: [
    {
      name: "Priya A Nair",
      relation: "Wife",
      note: "Add a short note about her life and memories with Chandrababu.",
    },
    {
      name: "Add Son's Name",
      relation: "Son",
      note: "Add a short note about Chandrababu's son and their cherished moments.",
    },
    {
      name: "Add Family Member's Name",
      relation: "Family Member",
      note: "Add a note about family relations and memories.",
    },
  ] satisfies FamilyMember[],
  places: [
    {
      slug: "karakonam",
      title: "Karakonam",
      href: "/chandrababu-karakonam",
      kicker: "Thiruvananthapuram · Kerala",
      shortDescription:
        "The ancestral home and village where Chandrababu lived, surrounded by family, greenery, and lifelong friends.",
      relationship:
        "Karakonam is the primary place connected to Chandrababu's family life, house, and cherished memories.",
      image: "/images/chandrababu-karakonam.webp",
      imageAlt: "Photograph connected to Karakonam, Kerala",
    },
    {
      slug: "Kunnathukal",
      title: "Kunnathukal",
      href: "/chandrababu-Kunnathukal",
      kicker: "Panchayath · Kerala",
      shortDescription:
        "The panchayath and local region that formed the quiet backdrop of Chandrababu's daily life and family heritage.",
      relationship:
        "Kunnathukal represents the land, community, and heritage where Chandrababu's family roots run deep.",
      image: "/images/chandrababu-Kunnathukal.webp",
      imageAlt: "Photograph connected to Kunnathukal, Kerala",
    },
    {
      slug: "kerala",
      title: "Kerala",
      href: "/places",
      kicker: "Home State",
      shortDescription:
        "The quiet beauty, warmth, and enduring spirit of Kerala that Chandrababu carried with dignity.",
      relationship:
        "Kerala is home — where Chandrababu built his life and left a lasting imprint on everyone around him.",
      image: "/images/chandrababu-kerala.webp",
      imageAlt: "Photograph connected to Kerala home",
    },
  ] satisfies Place[],
  placePages: {
    karakonam: {
      title: "Chandrababu & Karakonam",
      subtitle:
        "Memories connected to a place that remains part of his story.",
      introduction:
        "Karakonam is central to Chandrababu's story. Here lies the family home, childhood memories, and the quiet rhythm of daily life shared with brothers, wife, children, and neighbours.",
      locationNote:
        "Located in Thiruvananthapuram district, Karakonam remains the heart of the family's presence in Kerala.",
      familyStories:
        "Add family stories here. Replace this placeholder with specific recollections of Chandrababu in Karakonam.",
    },
    Kunnathukal: {
      title: "Chandrababu & Kunnathukal",
      subtitle:
        "Memories connected to a place that remains part of his story.",
      introduction:
        "Kunnathukal Panchayath encompasses the lands and family ties that Chandrababu held dear throughout his life.",
      locationNote:
        "Kunnathukal forms an essential part of the family address and historical roots in southern Kerala.",
      familyStories:
        "Add family stories here. Replace this placeholder with recollections connected to Kunnathukal.",
    },
  },
} as const;

export type ChandrababuContent = typeof chandrababu;

