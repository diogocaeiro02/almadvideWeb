import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Bath,
  BedDouble,
  ChevronRight,
  CookingPot,
  ExternalLink,
  Instagram,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Snowflake,
  Sparkles,
  Sun,
  UtensilsCrossed,
  Waves,
  X,
} from 'lucide-react';

const houseGallery = [
  { src: '/assets/outside-3.png', alt: 'Exterior da Alma d\'Vide com piscina' },
  { src: '/assets/living-room-2.png', alt: 'Sala da Alma d\'Vide' },
  { src: '/assets/room-1.png', alt: 'Quarto da Alma d\'Vide' },
  { src: '/assets/outside-2.png', alt: 'Zona exterior da Alma d\'Vide' },
];

const experiences = [
  {
    kicker: 'Bem-estar',
    title: 'Termas da Sulfúrea',
    text: 'Um dos recantos mais singulares de Cabeço de Vide — perfeito para abrandar e aproveitar a envolvente termal.',
    image: '/assets/termas.png',
    map: 'https://www.google.com/maps/search/?api=1&query=Termas+da+Sulfurea+Cabeco+de+Vide',
  },
  {
    kicker: 'Património local',
    title: 'Cabeço de Vide',
    text: 'Passeie pelo centro histórico, entre a fortaleza, a Torre do Relógio, o Pelourinho e ruas de traço alentejano.',
    image: '/assets/cabeco-de-vide.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Centro+Historico+Cabeco+de+Vide',
  },
  {
    kicker: 'Experiência equestre',
    title: 'Coudelaria de Alter',
    text: 'Uma experiência ligada ao cavalo Lusitano e a uma das tradições mais marcantes desta região do Alentejo.',
    image: '/assets/coudelaria.png',
    map: 'https://www.google.com/maps/search/?api=1&query=Coudelaria+de+Alter',
  },
  {
    kicker: 'Cultura',
    title: 'Portalegre',
    text: 'Descubra o centro histórico, a arquitetura da cidade e o Museu da Tapeçaria de Portalegre – Guy Fino.',
    image: '/assets/portalegre.png',
    map: 'https://www.google.com/maps/search/?api=1&query=Portalegre+Portugal',
  },
  {
    kicker: 'Aldeia medieval',
    title: 'Marvão',
    text: 'Uma escapadinha entre muralhas, pedra e paisagem aberta sobre a Serra de São Mamede.',
    image: '/assets/marvao.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Marvao+Portugal',
  },
  {
    kicker: 'Passeio',
    title: 'Castelo de Vide',
    text: 'Ruas estreitas, fontes, castelo e património histórico num dos passeios mais bonitos do Alto Alentejo.',
    image: '/assets/castelo-de-vide.jpg',
    map: 'https://www.google.com/maps/search/?api=1&query=Castelo+de+Vide+Portugal',
  },
];

const restaurants = [
  {
    name: "Vinha d'Alho",
    location: 'Cabeço de Vide',
    style: 'Cozinha portuguesa · ambiente intimista',
    map: 'https://www.google.com/maps/search/?api=1&query=Vinha+d%27Alho+Cabeco+de+Vide',
  },
  {
    name: 'Adega do Zé',
    location: 'Cabeço de Vide',
    style: 'Comida tradicional · descontraído',
    map: 'https://www.google.com/maps/search/?api=1&query=Adega+do+Ze+Cabeco+de+Vide',
  },
  {
    name: 'Taberna da Vila',
    location: 'Cabeço de Vide',
    style: 'Sabores locais · taberna contemporânea',
    map: 'https://www.google.com/maps/search/?api=1&query=Taberna+da+Vila+Cabeco+de+Vide',
  },
  {
    name: 'Solar do Forcado',
    location: 'Portalegre',
    style: 'Cozinha regional · ocasião especial',
    map: 'https://www.google.com/maps/search/?api=1&query=Solar+do+Forcado+Portalegre',
  },
  {
    name: 'Sal e Alho, etc',
    location: 'Portalegre',
    style: 'Cozinha portuguesa · contemporâneo',
    map: 'https://www.google.com/maps/search/?api=1&query=Sal+e+Alho+Portalegre',
  },
  {
    name: 'Tombalobos',
    location: 'Portalegre',
    style: 'Gastronomia alentejana · experiência gastronómica',
    map: 'https://www.google.com/maps/search/?api=1&query=Tombalobos+Portalegre',
  },
];

const navItems = [
  ['A estadia', '#estadia'],
  ['Galeria', '#galeria'],
  ['Descobrir', '#descobrir'],
  ['Onde comer', '#comer'],
  ['Contacto', '#contacto'],
];

function ImageWithFallback({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <span>Alma d'Vide</span>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Alma d'Vide — início">
        <span className="brand-mark">A</span>
        <span className="brand-copy">
          <strong>ALMA D'VIDE</strong>
          <small>Cabeço de Vide · Alentejo</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <a className="nav-book desktop-book" href="mailto:info@almadvide.pt?subject=Pedido%20de%20disponibilidade%20-%20Alma%20d%27Vide">
        Reservar <ArrowRight size={15} />
      </a>

      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Abrir menu">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-card" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 260 }}>
              <button className="menu-close" onClick={() => setOpen(false)} aria-label="Fechar menu"><X /></button>
              <div className="mobile-brand">ALMA D'VIDE</div>
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
              ))}
              <a className="button button-dark" href="mailto:info@almadvide.pt?subject=Pedido%20de%20disponibilidade%20-%20Alma%20d%27Vide">Consultar disponibilidade</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Navbar />

      <section id="home" className="hero">
        <div className="hero-media" aria-hidden="true">
          <ImageWithFallback src="/assets/outside-3.png" alt="Piscina e exterior da Alma d'Vide" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <span className="hero-kicker">CABEÇO DE VIDE · ALTO ALENTEJO</span>
            <h1>O luxo de<br />viver devagar.</h1>
            <p>Um refúgio com duas casas e piscina, desenhado para dias sem pressa entre o silêncio, a luz e os sabores do Alentejo.</p>
            <div className="hero-actions">
              <a className="button button-light" href="mailto:info@almadvide.pt?subject=Pedido%20de%20disponibilidade%20-%20Alma%20d%27Vide">Consultar disponibilidade</a>
              <a className="text-link light-link" href="#descobrir">Descobrir a região <ArrowRight size={17} /></a>
            </div>
          </motion.div>
        </div>
        <a href="#estadia" className="scroll-cue" aria-label="Ver mais"><ArrowDown size={18} /></a>
      </section>

      <section id="estadia" className="intro section-pad">
        <div className="intro-grid container">
          <div>
            <span className="eyebrow">ALMA D'VIDE</span>
            <h2>Duas casas.<br />Um só ritmo.</h2>
          </div>
          <div className="intro-copy">
            <p className="lead">Um lugar para desligar do ruído e voltar ao essencial: conforto, privacidade, água, sol e tempo.</p>
            <p>As casas combinam a serenidade da arquitetura alentejana com uma linguagem leve e contemporânea. Cada estadia foi pensada para funcionar tanto num fim de semana a dois como em dias tranquilos com família ou amigos.</p>
          </div>
        </div>

        <div className="amenities container">
          <div><Waves /><span><strong>Piscina</strong><small>Zona exterior privada</small></span></div>
          <div><BedDouble /><span><strong>2 quartos</strong><small>Inclui uma suite</small></span></div>
          <div><CookingPot /><span><strong>Cozinha</strong><small>Equipada para a estadia</small></span></div>
          <div><Snowflake /><span><strong>Climatização</strong><small>AC nas divisões</small></span></div>
        </div>
      </section>

      <section id="galeria" className="gallery-section section-pad-bottom">
        <div className="container">
          <SectionTitle eyebrow="A CASA" title="Luz, água e tons da terra." text="Uma estética inspirada nos tons suaves da casa: branco quente, areia, terracota e verde-azulado." />
          <div className="gallery-grid">
            {houseGallery.map((item, index) => (
              <motion.figure key={item.src} className={`gallery-item g${index + 1}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .06 }}>
                <ImageWithFallback {...item} />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="descobrir" className="discover section-pad">
        <div className="container">
          <div className="discover-head">
            <SectionTitle eyebrow="GUIA LOCAL" title="Perto de tudo o que merece tempo." text="Uma seleção para transformar a estadia em dias de termas, património, natureza e cultura — sem perder a calma de Cabeço de Vide." />
            <div className="discover-icon"><Sun size={30} strokeWidth={1.4} /></div>
          </div>

          <div className="experience-grid">
            {experiences.map((item, index) => (
              <motion.article className="experience-card" key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .04 }}>
                <div className="experience-image"><ImageWithFallback src={item.image} alt={item.title} /></div>
                <div className="experience-body">
                  <span>{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={item.map} target="_blank" rel="noreferrer">Ver no mapa <ExternalLink size={14} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-background"><ImageWithFallback src="/assets/outside-2.png" alt="Exterior Alma d'Vide" /></div>
        <div className="quote-overlay" />
        <div className="quote-inner container">
          <Sparkles size={24} strokeWidth={1.2} />
          <blockquote>“Há lugares onde se chega.<br />E há lugares onde se fica.”</blockquote>
          <span>ALMA D'VIDE · ALENTEJO</span>
        </div>
      </section>

      <section id="comer" className="food section-pad">
        <div className="container food-grid">
          <div className="food-intro">
            <SectionTitle eyebrow="ONDE COMER" title="Sabores que ficam na memória." text="Algumas sugestões próximas para uma refeição descontraída ou um jantar especial. Consulte sempre os horários antes de sair." />
            <div className="food-art">
              <UtensilsCrossed size={34} strokeWidth={1.2} />
              <span>Seleção local</span>
            </div>
          </div>

          <div className="restaurant-list">
            {restaurants.map((restaurant, index) => (
              <a key={restaurant.name} href={restaurant.map} target="_blank" rel="noreferrer" className="restaurant-row">
                <span className="restaurant-index">0{index + 1}</span>
                <div>
                  <h3>{restaurant.name}</h3>
                  <p><MapPin size={13} /> {restaurant.location} <span>·</span> {restaurant.style}</p>
                </div>
                <ChevronRight size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="slow-section section-pad">
        <div className="container slow-grid">
          <div className="slow-image"><ImageWithFallback src="/assets/outside-3.png" alt="Alma d'Vide" /></div>
          <div className="slow-copy">
            <span className="eyebrow">O ALENTEJO À PORTA</span>
            <h2>O plano também pode ser não ter plano.</h2>
            <p>Começar o dia devagar. Ficar junto à piscina. Almoçar sem relógio. Sair ao fim da tarde para descobrir uma vila histórica. Voltar quando a luz ficar dourada.</p>
            <div className="mini-points">
              <span><Bath size={18} /> Termas e bem-estar</span>
              <span><Mountain size={18} /> Natureza e património</span>
              <span><UtensilsCrossed size={18} /> Gastronomia regional</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact section-pad">
        <div className="container contact-card">
          <div>
            <span className="eyebrow light-eyebrow">A SUA ESTADIA</span>
            <h2>Pronto para<br />abrandar?</h2>
          </div>
          <div className="contact-actions">
            <p>Fale connosco para consultar disponibilidade, esclarecer dúvidas ou preparar uma estadia em Cabeço de Vide.</p>
            <a className="button button-light" href="mailto:info@almadvide.pt?subject=Pedido%20de%20disponibilidade%20-%20Alma%20d%27Vide">info@almadvide.pt <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <strong>ALMA D'VIDE</strong>
            <span>Cabeço de Vide · Portalegre · Portugal</span>
          </div>
          <div className="footer-links">
            <a href="#estadia">A estadia</a>
            <a href="#descobrir">Descobrir</a>
            <a href="#comer">Onde comer</a>
          </div>
          <div className="footer-contact">
            <a href="mailto:info@almadvide.pt">info@almadvide.pt</a>
            <span>© {new Date().getFullYear()} Alma d'Vide</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
