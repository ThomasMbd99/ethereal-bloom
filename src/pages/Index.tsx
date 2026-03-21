import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collections, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Recycle, Gift, Sparkles } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import almaePromo from '@/assets/bottles/almae-promo.png';

const bestSellers = [products[0], products[3], products[6], products[9], products[12]];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

          {/* Large Æ background */}
          <motion.div
            className="absolute right-[-5vw] top-1/2 -translate-y-1/2 font-display text-[min(70vw,90vh)] font-light opacity-[0.025] select-none pointer-events-none leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.025 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            Æ
          </motion.div>

          <div className="relative z-10 text-center px-4">
            <motion.p
              className="font-body text-[10px] tracking-[0.5em] uppercase text-primary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Parfumerie Niche · France · 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl sm:text-8xl lg:text-9xl font-light tracking-wider italic"
            >
              TH<span className="ae-highlight animate-glow-pulse">Æ</span>M
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-[0.3em] mt-1"
            >
              <span className="ae-highlight animate-glow-pulse">Æ</span>TERNUM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-body text-sm text-muted-foreground tracking-[0.2em] uppercase mt-8"
            >
              L'Art de la Distinction Olfactive
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="font-body text-xs text-muted-foreground/60 max-w-md mx-auto mt-4 leading-relaxed"
            >
              Des fragrances pensées comme des signatures. Chaque flacon, une œuvre. Chaque note, une intention éternelle sur la peau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap mt-10"
            >
              <Link
                to="/collections"
                className="px-8 py-3 bg-primary text-primary-foreground font-body text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all duration-300 btn-ripple"
              >
                Découvrir les Gammes
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-3 border border-border text-foreground font-body text-xs uppercase tracking-[0.3em] hover:border-primary transition-all duration-300"
              >
                Trouver ma Fragrance
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40">Défiler</span>
              <div className="w-px h-8 relative overflow-hidden bg-primary/15">
                <div className="absolute top-[-100%] left-0 w-full h-full bg-primary animate-[sb_2.4s_ease-in-out_infinite]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-t border-b border-border bg-card/50">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: '15', label: 'Fragrances' },
              { value: '4', label: 'Gammes' },
              { value: '10ml', label: 'Format Niche' },
              { value: '100%', label: 'Artisanal' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 text-center border-r border-border last:border-r-0"
              >
                <p className="font-display text-3xl lg:text-4xl text-primary font-light">{stat.value}</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gammes preview */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">Nos Univers</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl lg:text-5xl text-center mb-16 italic font-light"
            >
              Quatre gammes.<br />
              <span className="text-muted-foreground">Une maison.</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {collections.map((col, i) => (
                <motion.div
                  key={col.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/collection/${col.id}`}
                    className="group block p-8 bg-card hover:bg-card/80 transition-all duration-300 border-b-2 border-transparent hover:border-b-2"
                    style={{ '--hover-color': col.colors.accent } as any}
                  >
                    <Sparkles className="w-5 h-5 mb-6 opacity-40 group-hover:opacity-80 transition-all duration-300 group-hover:-translate-y-1" style={{ color: col.colors.accent }} />
                    <h3 className="font-display text-2xl italic font-light mb-1"
                      dangerouslySetInnerHTML={{ __html: col.displayName }}
                    />
                    <p className="font-body text-[10px] tracking-[0.18em] uppercase text-muted-foreground mb-3">{col.mood}</p>
                    <p className="font-body text-xs text-muted-foreground/50 leading-relaxed">{col.description}</p>
                    <span
                      className="inline-block mt-4 font-body text-[10px] tracking-[0.18em] uppercase border-b pb-0.5 hover:opacity-60 transition-opacity"
                      style={{ color: col.colors.accent, borderColor: col.colors.accent }}
                    >
                      Explorer
                    </span>
                    <div className="h-0.5 mt-4 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: col.colors.accent }} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Best sellers */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">Sélection</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl lg:text-5xl text-center mb-16 italic font-light"
            >
              Les signatures<br />
              <span className="text-muted-foreground">de la maison.</span>
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {bestSellers.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={almaePromo}
                  alt="ALMÆ - THÆM ÆTERNUM"
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">Notre DA</span>
                <h2 className="font-display text-3xl lg:text-4xl italic font-light">
                  Le mystère comme signature.
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Chaque flacon THÆM ÆTERNUM est une œuvre en soi. Verre lourd, finitions dorées, étiquette crème avec le symbole Æ.
                  Notre identité est niche, mystérieuse, intime. Le parfum n'est pas un accessoire — c'est une empreinte.
                </p>
                <Link
                  to="/histoire"
                  className="inline-block font-body text-xs tracking-[0.2em] uppercase border-b border-primary pb-1 text-primary hover:opacity-60 transition-opacity"
                >
                  Notre Histoire →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Discovery Box */}
        <section className="py-20 lg:py-32 bg-card/50 border-t border-b border-border relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[min(55vw,60vh)] font-light text-primary opacity-[0.04] select-none leading-none pointer-events-none">
            Æ
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <Gift className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl lg:text-5xl mb-4 italic font-light">
                Coffret <span className="ae-highlight">Æ</span>TERNUM
              </h2>
              <p className="font-body text-muted-foreground mb-2">5 parfums au choix · 5 × 10ml</p>
              <p className="font-body text-xs text-muted-foreground/50 max-w-md mx-auto mb-4">
                Composez votre propre coffret parmi nos 15 créations. L'exploration olfactive ultime.
              </p>
              <p className="font-display text-3xl text-primary mt-4 mb-8">50€</p>
              <Link
                to="/coffret"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all duration-300 btn-ripple"
              >
                Composer mon coffret
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Quiz CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary block mb-4">Quiz Olfactif</span>
              <h2 className="font-display text-3xl lg:text-5xl italic font-light mb-4">
                Quelle est<br />
                <span className="text-primary">votre signature ?</span>
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                5 questions. Votre fragrance idéale révélée.
              </p>
              <Link
                to="/quiz"
                className="inline-block px-8 py-3 border border-border text-foreground font-body text-xs uppercase tracking-[0.3em] hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 btn-ripple"
              >
                Commencer le Quiz
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Eco / Recharge */}
        <section className="py-20 lg:py-32 bg-card/50 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <Recycle className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl lg:text-4xl mb-6 italic font-light">Rechargez votre flacon</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Chez TH<span className="ae-highlight text-sm">Æ</span>M <span className="ae-highlight text-sm">Æ</span>TERNUM, nous croyons que le luxe et la responsabilité vont de pair.
                Nos recharges de 50ml à 35€ vous permettent de réutiliser votre flacon signature, réduisant notre empreinte tout en préservant l'élégance.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
