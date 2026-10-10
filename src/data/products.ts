import { getOrderDestination } from "@/config/site";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  formattedPrice: string;
  shippingNote: string;
  image: string;
  secondaryImage?: string;
  editorialImage?: string;
  detailImage?: string;
  accent: {
    primary: string;
    secondary: string;
    glow: string;
    border: string;
    badgeBg: string;
  };
  personality: string;
  shortDescription: string;
  story: string;
  visualAtmosphere: {
    mood: string;
    palette: string[];
    bgGradient: string;
  };
  keyNotes?: {
    title: string;
    description: string;
  }[];
  orderUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "lateralus",
    slug: "lateralus",
    name: "LATERALUS",
    price: 2000,
    formattedPrice: "₹2,000",
    shippingNote: "+ shipping",
    image: "/images/products/lateralus-cutout.png",
    secondaryImage: "/images/products/lateralus-detail.jpg",
    editorialImage: "/images/products/lateralus-editorial.jpg",
    detailImage: "/images/products/lateralus-detail.jpg",
    personality: "psychedelic / surreal / colorful / experimental",
    accent: {
      primary: "#10b981", // vibrant emerald
      secondary: "#f59e0b", // sunburst yellow
      glow: "rgba(16, 185, 129, 0.22)",
      border: "rgba(16, 185, 129, 0.4)",
      badgeBg: "rgba(16, 185, 129, 0.12)",
    },
    shortDescription:
      "A hand-painted psychedelic interpretation of consciousness, perception, and transformation.",
    story:
      "A visual interpretation of transformation, consciousness and the unknown. Inspired by TOOL's iconic track 'Lateralus', the artwork tracks the descent and ascent of awareness—from the weeping third eye, along the cosmic serpentine stream, through surreal landscapes, to the red mushroom at the base. Question the linear. Embrace the spiral.",
    visualAtmosphere: {
      mood: "Psychedelic Transcendence",
      palette: ["#10b981", "#3b82f6", "#eab308", "#ef4444"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(16, 185, 129, 0.15), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "The Weeping Eye",
        description: "Symbolizes a shift in awareness, seeing beyond the surface.",
      },
      {
        title: "The Spiral Stream",
        description: "Represents the infinite patterns of existence and growth.",
      },
      {
        title: "The Mushrooms",
        description: "Represent altered states, awakening and the doors of perception.",
      },
    ],
    orderUrl: getOrderDestination("LATERALUS"),
  },
  {
    id: "alice-in-chains",
    slug: "alice-in-chains",
    name: "ALICE IN CHAINS",
    price: 1800,
    formattedPrice: "₹1,800",
    shippingNote: "+ shipping",
    image: "/images/products/alice-in-chains-cutout.png",
    secondaryImage: "/images/products/alice-in-chains-editorial.jpg",
    editorialImage: "/images/products/alice-in-chains-poster.jpg",
    personality: "dark / monochrome / gothic / skull imagery",
    accent: {
      primary: "#e2e8f0", // bone white
      secondary: "#94a3b8", // silver mist
      glow: "rgba(226, 232, 240, 0.18)",
      border: "rgba(226, 232, 240, 0.35)",
      badgeBg: "rgba(226, 232, 240, 0.1)",
    },
    shortDescription:
      "Stark monochrome grunge. Hand-painted skull imagery, cross-stitch bands, and celestial starbursts.",
    story:
      "Raw grunge energy and gothic imagery. Painted on dark textile, featuring hand-rendered skull motifs, cross-stitch bands, and distant starbursts. Beauty in darkness. Strength in chains.",
    visualAtmosphere: {
      mood: "Monochrome Gothic Grunge",
      palette: ["#ffffff", "#cbd5e1", "#64748b", "#0f172a"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(148, 163, 184, 0.12), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "Skull Motifs",
        description: "Expressive hand-painted skulls reflecting raw beauty in darkness.",
      },
      {
        title: "Cross-Stitch Bands",
        description: "Rhythmic patterns cutting across the tie.",
      },
      {
        title: "Rose & Chains",
        description: "Dark romantic balance between resilience and fragility.",
      },
    ],
    orderUrl: getOrderDestination("ALICE IN CHAINS"),
  },
  {
    id: "moonchild",
    slug: "moonchild",
    name: "MOONCHILD",
    price: 2200,
    formattedPrice: "₹2,200",
    shippingNote: "+ shipping",
    image: "/images/products/moonchild-cutout.png",
    secondaryImage: "/images/products/moonchild-primary.jpg",
    editorialImage: "/images/products/moonchild-poster.jpg",
    personality: "deep blue / cosmic / night / dreamlike",
    accent: {
      primary: "#60a5fa", // electric azure
      secondary: "#38bdf8", // celestial cyan
      glow: "rgba(96, 165, 250, 0.22)",
      border: "rgba(96, 165, 250, 0.35)",
      badgeBg: "rgba(96, 165, 250, 0.12)",
    },
    shortDescription:
      "A dreamlike, nocturnal artwork capturing the feeling of wandering through midnight thoughts.",
    story:
      "A dreamlike, nocturnal piece inspired by the feeling of wandering through midnight thoughts. Inspired by the timeless song 'Moonchild' by King Crimson, this tie captures the beauty of night, the freedom of imagination, and the soul of a dreamer. Born of moonlight and midnight thoughts.",
    visualAtmosphere: {
      mood: "Nocturnal Reverie",
      palette: ["#1e3a8a", "#3b82f6", "#93c5fd", "#e0f2fe"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.16), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "Midnight Soul",
        description: "Deep nocturnal blues and cloud swirls.",
      },
      {
        title: "Golden Crescent",
        description: "A piece of the night, worn by dreamers.",
      },
    ],
    orderUrl: getOrderDestination("MOONCHILD"),
  },
  {
    id: "devil-in-i",
    slug: "devil-in-i",
    name: "DEVIL IN I",
    price: 2200,
    formattedPrice: "₹2,200",
    shippingNote: "+ shipping",
    image: "/images/products/devil-in-i-cutout.png",
    secondaryImage: "/images/products/devil-in-i-primary.jpg",
    editorialImage: "/images/products/devil-in-i-poster.jpg",
    personality: "black / red / gothic / chaotic",
    accent: {
      primary: "#ef4444", // aggressive red
      secondary: "#b91c1c", // deep crimson
      glow: "rgba(239, 68, 68, 0.24)",
      border: "rgba(239, 68, 68, 0.4)",
      badgeBg: "rgba(239, 68, 68, 0.12)",
    },
    shortDescription:
      "Bold gothic brushwork in stark charcoal and blistering red. Visceral intensity captured on fabric.",
    story:
      "A fierce confrontation with inner emotion and chaotic sound. Featuring bold brushwork in dense black and blood red. 'Beneath the skin, beyond the breath, there's a devil that never rests.'",
    visualAtmosphere: {
      mood: "Visceral Gothic Chaos",
      palette: ["#dc2626", "#991b1b", "#450a0a", "#18181b"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(220, 38, 38, 0.18), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "The Bleeding Eye",
        description: "Visceral emotion and uncompromising artistic intensity.",
      },
      {
        title: "Spiked Motifs & Jaws",
        description: "Symbolizing catharsis, breaking containment, and raw energy.",
      },
    ],
    orderUrl: getOrderDestination("DEVIL IN I"),
  },
  {
    id: "crimson-litanies",
    slug: "crimson-litanies",
    name: "CRIMSON LITANIES",
    price: 2200,
    formattedPrice: "₹2,200",
    shippingNote: "+ shipping",
    image: "/images/products/crimson-litanies-cutout.png",
    editorialImage: "/images/products/crimson-litanies-primary.jpg",
    personality: "dark crimson / gothic / intricate",
    accent: {
      primary: "#f43f5e", // liturgical crimson rose
      secondary: "#be123c", // deep burgundy
      glow: "rgba(244, 63, 94, 0.22)",
      border: "rgba(244, 63, 94, 0.35)",
      badgeBg: "rgba(244, 63, 94, 0.12)",
    },
    shortDescription:
      "Intricate gothic patterning in deep wine and crimson, balancing poetry and solemn intensity.",
    story:
      "Intricate gothic patterning painted in deep wine and crimson. 'Wear the hymn only the dark sing.' Balanced between solemn stillness and dramatic visual poetry.",
    visualAtmosphere: {
      mood: "Gothic Intricacy",
      palette: ["#e11d48", "#9f1239", "#4c0519", "#09090b"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(244, 63, 94, 0.16), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "Intricate Calligraphy & Flow",
        description: "Fine white gothic ornamentation winding across rich crimson fabric.",
      },
    ],
    orderUrl: getOrderDestination("CRIMSON LITANIES"),
  },
  {
    id: "vermillion",
    slug: "vermillion",
    name: "VERMILLION",
    price: 2100,
    formattedPrice: "₹2,100",
    shippingNote: "+ shipping",
    image: "/images/products/vermillion-cutout.png",
    editorialImage: "/images/products/vermillion-primary.jpg",
    personality: "black / white / red / aggressive / graphic",
    accent: {
      primary: "#ff2a2a", // pure vermillion
      secondary: "#ffffff", // clean white
      glow: "rgba(255, 42, 42, 0.25)",
      border: "rgba(255, 42, 42, 0.4)",
      badgeBg: "rgba(255, 42, 42, 0.12)",
    },
    shortDescription:
      "High-contrast tension. Sharp strokes of vermillion red slicing through black and white.",
    story:
      "Graphic urgency captured in sharp contrast. Uncompromising strokes of vibrant vermillion cut through monochromatic charcoal and white, creating a piece that commands presence and exudes fearless artistic intent.",
    visualAtmosphere: {
      mood: "Graphic Urgency",
      palette: ["#ff2a2a", "#ffffff", "#71717a", "#09090b"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(255, 42, 42, 0.16), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "Graphic Tension",
        description: "Stark contrast and bold red lines creating unforgettable visual rhythm.",
      },
    ],
    orderUrl: getOrderDestination("VERMILLION"),
  },
  {
    id: "parabola",
    slug: "parabola",
    name: "PARABOLA",
    price: 2200,
    formattedPrice: "₹2,200",
    shippingNote: "+ shipping",
    image: "/images/products/parabola-cutout.png",
    secondaryImage: "/images/products/parabola-primary.jpg",
    editorialImage: "/images/products/parabola-poster.jpg",
    personality: "blue / green / cosmic / nature / transformation",
    accent: {
      primary: "#10b981", // sacred emerald
      secondary: "#06b6d4", // bioluminescent cyan
      glow: "rgba(16, 185, 129, 0.22)",
      border: "rgba(16, 185, 129, 0.35)",
      badgeBg: "rgba(16, 185, 129, 0.12)",
    },
    shortDescription:
      "A piece centered around transformation, nature, growth, and the cycle of change.",
    story:
      "A piece centered around transformation, nature, growth and the cycle of change. Inspired by TOOL's song 'Parabola' (2001). It speaks about transformation—the constant cycle of endings and beginnings, pain turning into wisdom, and letting go so you can truly see. 'The soul would have no rainbow, if the eyes had no tears.' Not just a tie. An ascension you wear.",
    visualAtmosphere: {
      mood: "Cosmic Metamorphosis",
      palette: ["#059669", "#0891b2", "#1e293b", "#022c22"],
      bgGradient: "radial-gradient(ellipse at 50% 30%, rgba(16, 185, 129, 0.16), rgba(7, 7, 9, 0.98) 70%)",
    },
    keyNotes: [
      {
        title: "The Moon & Swirling Sky",
        description: "A witness to transformation, beauty in constant motion.",
      },
      {
        title: "The Forest & Little Houses",
        description: "Growth after pain, healing, and finding meaning.",
      },
      {
        title: "The Fire & Flowers",
        description: "Purification and the rainbow after tears.",
      },
    ],
    orderUrl: getOrderDestination("PARABOLA"),
  },
];
