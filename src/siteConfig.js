/**
 * ============================================================================
 * SITE CONFIG — the ONE file to edit with real artist details.
 * ============================================================================
 * Nothing here has been invented. Every placeholder below is clearly marked
 * and must be replaced with real information before launch. Do not guess —
 * leave a field as-is until you have the real value.
 * ============================================================================
 */

export const SITE = {
  firstName: "Pooja",
  brandLine: "MEHANDI ART",
  tagline: "Turning Moments Into Mehndi Stories",

  // Confirmed real info
  instagramHandle: "@pooja__mehandi__art_",
  instagramUrl: "https://www.instagram.com/pooja__mehandi__art_/",

  // --- PLACEHOLDERS — replace before launch ---------------------------------
  // WhatsApp number in international format, digits only, no + or spaces,
  // e.g. "919876543210". Used to build the wa.me link below.
  whatsappNumber: "YOUR_WHATSAPP_NUMBER",
  phoneNumber: "YOUR_PHONE_NUMBER",
  location: "YOUR_LOCATION",
  experienceYears: "YOUR_EXPERIENCE_YEARS",
  happyClients: "YOUR_CLIENT_COUNT",
  designsCreated: "YOUR_DESIGNS_COUNT",
  // ---------------------------------------------------------------------------
};

// Builds the WhatsApp deep link from the number above. Leave as-is — just
// replace SITE.whatsappNumber and this updates automatically.
export const whatsappLink = `https://wa.me/${SITE.whatsappNumber}`;

/**
 * IMAGES — drop real photos into /public/images/... and reference the path
 * here (e.g. "/images/portrait/pooja.jpg"). Leave a value as `null` to keep
 * the current placeholder artwork for that slot. Paths are relative to the
 * site root and automatically respect the GitHub Pages base path.
 */
export const IMAGES = {
  heroArtPhoto: null, // optional real hero photo instead of the illustration
  portrait: null, // public/images/portrait/
  storyDetail: null, // public/images/gallery/ — used in the "Your Story" section
  gallery: {
    // 1: "/images/gallery/bridal-1.jpg",
  },
  instagram: {
    // 0: "/images/instagram/post-1.jpg",
  },
};

export const CATEGORIES = [
  "All",
  "Bridal Mehndi",
  "Arabic Mehndi",
  "Minimal Mehndi",
  "Engagement",
  "Festive",
];

// Remove or edit categories/items below to match what's actually in the
// artist's portfolio — these are placeholders until real photos are added.
export const GALLERY = [
  { id: 1, cat: "Bridal Mehndi", label: "Bridal — full hand", tall: true },
  { id: 2, cat: "Arabic Mehndi", label: "Arabic — forearm trail", tall: false },
  { id: 3, cat: "Minimal Mehndi", label: "Minimal — fingertip motif", tall: false },
  { id: 4, cat: "Bridal Mehndi", label: "Bridal — back of hand", tall: true },
  { id: 5, cat: "Engagement", label: "Engagement — dainty band", tall: false },
  { id: 6, cat: "Festive", label: "Festive — festival design", tall: true },
  { id: 7, cat: "Arabic Mehndi", label: "Arabic — floral vine", tall: false },
  { id: 8, cat: "Bridal Mehndi", label: "Bridal — dulhan close-up", tall: false },
  { id: 9, cat: "Minimal Mehndi", label: "Minimal — wrist detail", tall: true },
];

// Standard mehndi-artist service categories — edit to match services the
// artist actually offers.
export const SERVICES = [
  {
    title: "Bridal Mehndi",
    desc: "Intricate designs crafted around your story, personality and wedding style.",
  },
  {
    title: "Wedding Guest Mehndi",
    desc: "Elegant, quicker designs for guests joining the celebration.",
  },
  {
    title: "Engagement Mehndi",
    desc: "Delicate, refined patterns for the moment a story becomes official.",
  },
  {
    title: "Festive Mehndi",
    desc: "Warm, celebratory motifs for festivals and family gatherings.",
  },
  {
    title: "Custom Designs",
    desc: "Names, initials and personal symbols woven into traditional motifs.",
  },
];

export const PROCESS = [
  { n: "01", title: "Consultation", desc: "We talk through your event, style and vision." },
  { n: "02", title: "Design Selection", desc: "Choose motifs and density that suit the occasion." },
  { n: "03", title: "Mehndi Application", desc: "Careful, unhurried application, start to finish." },
  { n: "04", title: "Your Special Moment", desc: "The design deepens in colour over the day ahead." },
];

export const INSTAGRAM_SLOTS = [
  "Bridal photo",
  "Close-up mehndi",
  "Behind the scenes",
  "Reel thumbnail",
  "Full-hand design",
  "Client moment",
];
