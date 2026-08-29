import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Instagram,
  Phone,
  MessageCircle,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  SITE,
  whatsappLink,
  IMAGES,
  CATEGORIES,
  GALLERY,
  SERVICES,
  PROCESS,
  INSTAGRAM_SLOTS,
} from "./siteConfig";

/* ============================================================================
   REDUCED-MOTION CONTEXT
============================================================================ */
const MotionPrefContext = createContext(false);
const useReducedMotion = () => useContext(MotionPrefContext);

/* ============================================================================
   DECORATIVE SVG MOTIFS
============================================================================ */
const PaisleyIcon = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" aria-hidden="true">
    <path
      d="M50 12c-16 0-27 12-27 27 0 12 8 19 8 28 0 8-6 11-14 9 6 10 20 12 29 5 8 12 26 12 34-2 12 3 22-6 22-18 0-9-6-13-6-22 0-14-13-27-27-27 12 4 20 15 20 27 0 7 4 11 10 10-4 9-16 11-23 4-6 9-20 9-27-2-8 5-18 2-21-7 9 1 15-5 15-13 0-11-9-19-20-19z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="42" cy="46" r="3" fill="currentColor" />
  </svg>
);

const VineDivider = ({ flip = false }) => {
  const reduced = useReducedMotion();
  return (
    <div className="w-full flex justify-center py-2" aria-hidden="true">
      <svg
        width="220"
        height="34"
        viewBox="0 0 220 34"
        style={{ transform: flip ? "scaleX(-1)" : "none" }}
      >
        <motion.path
          d="M2 17c20-20 40 14 60-2s40-16 60 2 40 14 60-2 30 2 36-2"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <motion.circle
          cx="4"
          cy="17"
          r="2.2"
          fill="#C6A15B"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
        />
      </svg>
    </div>
  );
};

/* Hero hand illustration — layered SVG paisleys used as the mouse-reactive
   3D composition instead of a stock photo. If IMAGES.heroArtPhoto is set,
   a real photo is used instead. */
const HeroArt = () => {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 14 });
  const sy = useSpring(my, { stiffness: 40, damping: 14 });
  const rotateY = useTransform(sx, [-1, 1], [-8, 8]);
  const rotateX = useTransform(sy, [-1, 1], [8, -8]);
  const layer1X = useTransform(sx, [-1, 1], [-14, 14]);
  const layer1Y = useTransform(sy, [-1, 1], [-10, 10]);
  const layer2X = useTransform(sx, [-1, 1], [10, -10]);
  const layer2Y = useTransform(sy, [-1, 1], [8, -8]);

  const onMove = (e) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  if (IMAGES.heroArtPhoto) {
    return (
      <div className="hero-photo-frame">
        <img src={IMAGES.heroArtPhoto} alt={`${SITE.firstName} — mehndi artist`} loading="eager" />
      </div>
    );
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1200 }}
      className="relative w-full h-full flex items-center justify-center"
      role="img"
      aria-label="Decorative animated mehndi hand illustration"
    >
      <motion.div
        style={reduced ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(198,161,91,0.25) 0%, rgba(198,161,91,0) 70%)",
          }}
        />
        <motion.div
          style={reduced ? {} : { x: layer2X, y: layer2Y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <PaisleyIcon
            className="w-72 h-72 md:w-96 md:h-96"
            style={{ color: "#DFCFA9", opacity: 0.55, transform: "rotate(18deg)" }}
          />
        </motion.div>
        <motion.svg
          width="300"
          height="380"
          viewBox="0 0 300 380"
          className="relative drop-shadow-xl"
          style={{ transform: "translateZ(40px)" }}
          aria-hidden="true"
        >
          <path
            d="M150 40c-7 0-13 6-13 14v70c-9-14-19-30-27-40-6-7-17-6-21 2-3 6-2 12 2 18l38 55c-30-6-48 4-53 20-3 10 2 20 12 24l70 28c14 6 29 9 44 9h10c34 0 62-27 62-61v-90c0-9-7-16-16-16s-16 7-16 16v-30c0-9-7-16-16-16s-16 7-16 16v-12c0-9-7-16-16-16s-16 7-16 16v-42c0-8-6-14-14-14z"
            fill="#F7F1E6"
            stroke="#233326"
            strokeWidth="2"
          />
          <g stroke="#C6A15B" strokeWidth="1.1" fill="none" opacity="0.9">
            <path d="M150 60c10 20 6 45-8 60" />
            <path d="M120 100c14 6 22 20 20 36" />
            <circle cx="150" cy="150" r="10" />
            <path d="M150 160v40" />
            <path d="M120 190c20-6 40-6 60 0" />
            <circle cx="150" cy="220" r="16" />
            <path d="M134 220h32M150 204v32" />
            <path d="M100 240c30-10 70-10 100 0" />
          </g>
        </motion.svg>
        <motion.div
          style={reduced ? {} : { x: layer1X, y: layer1Y, transform: "translateZ(70px)" }}
          className="absolute -right-6 -top-4"
        >
          <PaisleyIcon className="w-16 h-16" style={{ color: "#C6A15B" }} />
        </motion.div>
        <motion.div
          style={reduced ? {} : { x: layer1Y, y: layer1X, transform: "translateZ(60px)" }}
          className="absolute -left-8 bottom-10"
        >
          <PaisleyIcon className="w-12 h-12" style={{ color: "#233326", opacity: 0.6 }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ============================================================================
   MAGNETIC BUTTON
============================================================================ */
const MagneticButton = ({ children, className = "", onClick, href, variant = "solid", type }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = variant === "solid" ? "btn-solid" : "btn-outline";
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      type={href ? undefined : type || "button"}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${className}`}
    >
      {children}
    </Tag>
  );
};

/* ============================================================================
   NAV
============================================================================ */
const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "booking", label: "Booking" },
];

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`site-header ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container-custom flex items-center justify-between py-4">
        <button onClick={() => go("hero")} className="brand-mark" aria-label={`${SITE.firstName} ${SITE.brandLine} — back to top`}>
          <span className="brand-name">{SITE.firstName}</span>
          <span className="brand-sub">{SITE.brandLine}</span>
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="nav-link">
              {l.label}
            </button>
          ))}
          <MagneticButton onClick={() => go("booking")} className="btn-compact">
            Book Your Date
          </MagneticButton>
        </nav>

        <button
          className="md:hidden nav-icon-btn"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={26} color="#F7F1E6" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-10">
              {NAV_LINKS.map((l) => (
                <button key={l.id} onClick={() => go(l.id)} className="mobile-menu-link">
                  {l.label}
                </button>
              ))}
              <MagneticButton onClick={() => go("booking")} className="mt-4">
                Book Your Date
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ============================================================================
   HERO
============================================================================ */
const Hero = () => {
  const reduced = useReducedMotion();
  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container-custom hero-grid">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hero-copy"
        >
          <span className="eyebrow">
            <Sparkles size={14} aria-hidden="true" /> The Art Begins Here
          </span>
          <h1 className="hero-title">
            {SITE.firstName}
            <span className="hero-title-sub">{SITE.brandLine}</span>
          </h1>
          <p className="hero-tagline">{SITE.tagline}</p>
          <p className="hero-script" aria-hidden="true">
            handcrafted, henna by henna
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <MagneticButton onClick={() => scrollToId("gallery")}>Explore My Work</MagneticButton>
            <MagneticButton variant="outline" onClick={() => scrollToId("booking")}>
              Book an Appointment
            </MagneticButton>
          </div>
          <div className="hero-instagram">
            <Instagram size={16} aria-hidden="true" />
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="hero-art-wrap"
        >
          <HeroArt />
        </motion.div>
      </div>
      <motion.div
        className="scroll-cue"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-hidden="true"
      >
        <span />
      </motion.div>
    </section>
  );
};

/* ============================================================================
   ABOUT
============================================================================ */
const Stat = ({ value, label, delay }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="stat-block"
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
};

const About = () => {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="section-pad about-section" aria-label="About the artist">
      <div className="container-custom about-grid">
        <motion.div
          initial={reduced ? {} : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="about-portrait"
        >
          <div className="portrait-frame">
            <PlaceholderArt label="Portrait of the artist" tone="dark" src={IMAGES.portrait} />
          </div>
          <PaisleyIcon className="about-paisley" />
        </motion.div>

        <motion.div
          initial={reduced ? {} : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="eyebrow">About the Artist</span>
          <h2 className="section-title">Every design has a story.</h2>
          <p className="about-copy">
            Every bride has a moment worth remembering. I create mehndi designs that
            blend traditional artistry with modern elegance — carefully crafted for
            weddings, celebrations and unforgettable moments.
          </p>
          <div className="about-meta">
            <span>
              <MapPin size={15} aria-hidden="true" /> {SITE.location}
            </span>
            <span>
              <Instagram size={15} aria-hidden="true" /> {SITE.instagramHandle}
            </span>
          </div>
          <div className="stat-row">
            <Stat value={SITE.experienceYears} label="Years Experience" delay={0} />
            <Stat value={SITE.happyClients} label="Happy Brides" delay={0.1} />
            <Stat value={SITE.designsCreated} label="Designs Created" delay={0.2} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================================
   PLACEHOLDER ART — themed stand-in for real photography, easy to swap out.
   Pass a `src` to render a real <img> instead (drop files into
   /public/images/ and reference the path from src/siteConfig.js).
============================================================================ */
const PlaceholderArt = ({ label, tone = "light", small = false, src }) => {
  if (src) {
    return (
      <div className={`placeholder-art has-image ${small ? "small" : ""}`}>
        <img src={src} alt={label} loading="lazy" decoding="async" />
      </div>
    );
  }
  return (
    <div className={`placeholder-art ${tone} ${small ? "small" : ""}`} role="img" aria-label={label}>
      <PaisleyIcon className="placeholder-icon" />
      <span className="placeholder-label">{label}</span>
    </div>
  );
};

/* ============================================================================
   GALLERY
============================================================================ */
const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const reduced = useReducedMotion();

  const filtered = active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active);

  const openAt = (idx) => setLightbox(idx);
  const close = () => setLightbox(null);
  const step = (dir) => {
    setLightbox((current) => {
      if (current === null || filtered.length === 0) return current;
      return (current + dir + filtered.length) % filtered.length;
    });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, filtered.length]);

  // Keep the lightbox index valid if the filter changes while it's open.
  useEffect(() => {
    if (lightbox !== null && lightbox >= filtered.length) {
      setLightbox(filtered.length ? 0 : null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered.length]);

  const touchX = useRef(null);

  return (
    <section id="gallery" className="section-pad gallery-section" aria-label="Mehndi gallery">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="eyebrow">Mehndi Gallery</span>
          <h2 className="section-title">A Portfolio of Moments</h2>
        </div>

        <div className="filter-row" role="group" aria-label="Filter gallery by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`filter-pill ${active === c ? "active" : ""}`}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="masonry">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.button
                key={item.id}
                layout
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => openAt(idx)}
                className={`masonry-item ${item.tall ? "tall" : ""}`}
                aria-label={`Open image: ${item.label}`}
              >
                <PlaceholderArt
                  label={item.label}
                  tone={idx % 2 ? "dark" : "light"}
                  src={IMAGES.gallery[item.id]}
                />
                <div className="masonry-overlay">
                  <span className="masonry-cat">{item.cat}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (dx > 50) step(-1);
              if (dx < -50) step(1);
              touchX.current = null;
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button className="lightbox-close" onClick={close} aria-label="Close">
              <X size={26} />
            </button>
            <button
              className="lightbox-nav left"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>
            <motion.div
              key={filtered[lightbox].id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <PlaceholderArt label={filtered[lightbox].label} tone="dark" src={IMAGES.gallery[filtered[lightbox].id]} />
              <p className="lightbox-caption">
                {filtered[lightbox].cat} — {filtered[lightbox].label}
              </p>
            </motion.div>
            <button
              className="lightbox-nav right"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* ============================================================================
   DESIGN YOUR MOMENT — interactive 3D-ish section
============================================================================ */
const DesignYourMoment = () => {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 16 });
  const sy = useSpring(my, { stiffness: 50, damping: 16 });
  const rotateY = useTransform(sx, [-1, 1], [-16, 16]);
  const rotateX = useTransform(sy, [-1, 1], [12, -12]);
  const glowX = useTransform(sx, [-1, 1], ["20%", "80%"]);
  const glowY = useTransform(sy, [-1, 1], ["20%", "80%"]);

  const handleMove = (clientX, clientY) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((clientX - r.left) / r.width) * 2 - 1);
    my.set(((clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section className="section-pad moment-section" aria-label="Interactive mehndi design showcase">
      <div className="container-custom text-center mb-10">
        <span className="eyebrow light">Design Your Moment</span>
        <h2 className="section-title light">Move. Watch it come alive.</h2>
        <p className="moment-copy">
          Every mehndi story takes shape slowly — trace your cursor across the canvas
          below to see it unfold.
        </p>
      </div>

      <div
        ref={ref}
        className="moment-canvas"
        style={{ perspective: 1000 }}
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
        role="img"
        aria-label="Animated decorative mehndi pattern that responds to cursor movement"
      >
        <motion.div className="moment-glow" style={reduced ? {} : { left: glowX, top: glowY }} />
        <motion.div
          style={reduced ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="moment-inner"
        >
          <PaisleyIcon className="moment-paisley main" style={{ transform: "translateZ(50px)" }} />
          <PaisleyIcon className="moment-paisley a" />
          <PaisleyIcon className="moment-paisley b" />
          <PaisleyIcon className="moment-paisley c" />
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================================
   SERVICES
============================================================================ */
const ServiceCard = ({ s, i }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 16 });
  const sry = useSpring(ry, { stiffness: 150, damping: 16 });

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 14);
    rx.set(py * -14);
  };

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.06 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      className="service-card"
    >
      <PaisleyIcon className="service-icon" />
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <span className="service-cta">
        Enquire <ArrowUpRight size={14} aria-hidden="true" />
      </span>
    </motion.div>
  );
};

const Services = () => (
  <section id="services" className="section-pad" aria-label="Services offered">
    <div className="container-custom">
      <div className="text-center mb-12">
        <span className="eyebrow">Services</span>
        <h2 className="section-title">Designed Around Your Occasion</h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <ServiceCard s={s} i={i} key={s.title} />
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
   STORY SECTION
============================================================================ */
const StorySection = () => {
  const reduced = useReducedMotion();
  const words = "Not Just Mehndi. A Memory You Can Wear.".split(" ");
  return (
    <section className="section-pad story-section" aria-label="Personalised design philosophy">
      <div className="container-custom story-inner">
        <PlaceholderArt label="Close-up bridal detail" tone="dark" src={IMAGES.storyDetail} />
        <div className="story-text">
          <h2 className="story-headline">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={reduced ? {} : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="story-word"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </h2>
          <p className="about-copy">
            Every design can be shaped around your couple story, wedding theme, personal
            symbols, names and initials — woven between traditional motifs and modern
            patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   PROCESS
============================================================================ */
const Process = () => {
  const reduced = useReducedMotion();
  return (
    <section id="process" className="section-pad process-section" aria-label="Booking process">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="eyebrow">Process</span>
          <h2 className="section-title">From First Message to Mehndi Day</h2>
        </div>
        <div className="process-row">
          <svg className="process-line" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
            <motion.line
              x1="0"
              y1="2"
              x2="100"
              y2="2"
              stroke="#C6A15B"
              strokeWidth="0.6"
              initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
          </svg>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="process-step"
            >
              <span className="process-num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   TESTIMONIALS — placeholder slots only; no fabricated quotes.
============================================================================ */
const Testimonials = () => {
  const reduced = useReducedMotion();
  return (
    <section className="section-pad testimonial-section" aria-label="Client testimonials">
      <div className="container-custom text-center">
        <span className="eyebrow light">Client Words</span>
        <h2 className="section-title light">What Brides Are Saying</h2>
        <div className="testimonial-row">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: n * 0.08 }}
              className="testimonial-card empty"
            >
              <PaisleyIcon className="testimonial-icon" />
              <p>Add a client review here</p>
              <span>Name · Event type</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   INSTAGRAM
============================================================================ */
const InstagramSection = () => (
  <section className="section-pad" aria-label="Instagram">
    <div className="container-custom">
      <div className="text-center mb-10">
        <span className="eyebrow">Social Proof</span>
        <h2 className="section-title">More Mehndi Stories</h2>
        <p className="about-copy" style={{ maxWidth: 480, margin: "0.5rem auto 0" }}>
          Follow along on Instagram for the latest bridal designs and behind-the-scenes
          moments.
        </p>
      </div>
      <div className="instagram-grid">
        {INSTAGRAM_SLOTS.map((label, i) => (
          <a key={i} href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="instagram-cell">
            <PlaceholderArt label={label} tone={i % 2 ? "dark" : "light"} small src={IMAGES.instagram[i]} />
            <span className="instagram-hover">
              <Instagram size={20} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <MagneticButton href={SITE.instagramUrl}>See More Designs on Instagram</MagneticButton>
      </div>
    </div>
  </section>
);

/* ============================================================================
   BOOKING
============================================================================ */
const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: SERVICES[0]?.title || "",
    location: "",
    people: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="booking" className="section-pad booking-section" aria-label="Booking and contact">
      <div className="container-custom booking-grid">
        <div>
          <span className="eyebrow">Booking</span>
          <h2 className="section-title">Let&apos;s Create Something Beautiful.</h2>
          <p className="about-copy">
            Share a few details about your event and {SITE.firstName} will get back to you
            to check availability.
          </p>
          <div className="booking-contacts">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-pill whatsapp">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp: {SITE.whatsappNumber}
            </a>
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="contact-pill">
              <Instagram size={18} aria-hidden="true" /> {SITE.instagramHandle}
            </a>
            <a href={`tel:${SITE.phoneNumber}`} className="contact-pill">
              <Phone size={18} aria-hidden="true" /> {SITE.phoneNumber}
            </a>
          </div>
        </div>

        <div className="booking-form-wrap">
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="booking-success">
              <PaisleyIcon className="w-10 h-10" style={{ color: "#C6A15B" }} />
              <h3>Request received</h3>
              <p>
                This form is a front-end demo — connect it to a form service, email
                endpoint, or the WhatsApp link above to make it fully live.
              </p>
            </motion.div>
          ) : (
            <form className="booking-form" onSubmit={submit}>
              <div className="form-row">
                <label>
                  Name
                  <input required value={form.name} onChange={update("name")} placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input required value={form.phone} onChange={update("phone")} placeholder="Your phone" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Event Date
                  <input type="date" value={form.date} onChange={update("date")} />
                </label>
                <label>
                  Event Type
                  <select value={form.eventType} onChange={update("eventType")}>
                    {SERVICES.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  Location
                  <input value={form.location} onChange={update("location")} placeholder="City / venue" />
                </label>
                <label>
                  Number of People
                  <input type="number" min="1" value={form.people} onChange={update("people")} placeholder="e.g. 1" />
                </label>
              </div>
              <label>
                Message
                <textarea
                  rows="3"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a little about your event..."
                />
              </label>
              <MagneticButton type="submit" className="w-full justify-center">
                Check Availability
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   FOOTER
============================================================================ */
const Footer = () => (
  <footer className="footer">
    <div className="container-custom footer-inner">
      <div className="brand-mark">
        <span className="brand-name">{SITE.firstName}</span>
        <span className="brand-sub">{SITE.brandLine}</span>
      </div>
      <p className="footer-tag">Mehndi &bull; Stories &bull; Celebrations</p>
      <div className="footer-links">
        <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <MessageCircle size={18} />
        </a>
        <a href={`tel:${SITE.phoneNumber}`} aria-label="Phone">
          <Phone size={18} />
        </a>
        <span className="footer-location">
          <MapPin size={15} aria-hidden="true" /> {SITE.location}
        </span>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} {SITE.firstName} {SITE.brandLine}. All rights reserved.
      </p>
    </div>
  </footer>
);

/* ============================================================================
   STICKY MOBILE CTA
============================================================================ */
const MobileCTA = () => (
  <div className="mobile-cta">
    <a href={whatsappLink} target="_blank" rel="noreferrer" className="mobile-cta-btn whatsapp">
      <MessageCircle size={18} aria-hidden="true" /> WhatsApp
    </a>
    <button className="mobile-cta-btn" onClick={() => scrollToId("booking")}>
      Book Now
    </button>
  </div>
);

/* ============================================================================
   ROOT APP
============================================================================ */
export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <MotionPrefContext.Provider value={reducedMotion}>
      <div id="pooja-mehandi-root">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Gallery />
          <DesignYourMoment />
          <Services />
          <StorySection />
          <Process />
          <Testimonials />
          <InstagramSection />
          <Booking />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </MotionPrefContext.Provider>
  );
}
