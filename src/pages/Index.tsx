import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collections, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Recycle, Gift } from 'lucide-react';

const bestSellers = [products[0], products[3], products[6], products[9], products[12]];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-light tracking-wider"
          >
            TH<span className="ae-highlight animate-glow-pulse">Æ</span>M
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-[0.3em] mt-2"
          >
            <span className="ae-highlight animate-glow-pulse">Æ</span>TERNUM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-body text-sm sm:text-base text-muted-foreground tracking-[0.2em] uppercase mt-8"
          >
            L'essence de l'éternel
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link
              to="/collections"
              className="inline-block mt-10 px-8 py-3 border border-primary text-primary font-body text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all duration-500 btn-ripple"
            >
              Découvrir les créations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl lg:text-4xl text-center mb-16"
          >
            Nos <span className="text-primary">Incontournables</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Box */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Gift className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-5xl mb-4">
              Coffret <span className="ae-highlight">Æ</span>TERNUM
            </h2>
            <p className="font-body text-muted-foreground mb-2">5 parfums au choix · 5 × 10ml</p>
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

      {/* Collections preview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl lg:text-4xl text-center mb-16"
          >
            Les <span className="text-primary">Gammes</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="group block aspect-[3/4] rounded overflow-hidden relative"
                  style={{
                    background: `linear-gradient(135deg, ${col.colors.accent}15, ${col.colors.accent}05)`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ boxShadow: `inset 0 0 60px ${col.colors.accent}22` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-display text-3xl lg:text-4xl tracking-wider group-hover:scale-105 transition-transform duration-500"
                      dangerouslySetInnerHTML={{ __html: col.displayName }}
                    />
                    <p className="font-body text-xs text-muted-foreground mt-3 tracking-wider uppercase">{col.mood}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                    style={{ backgroundColor: col.colors.accent }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco / Recharge */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Recycle className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-4xl mb-6">Rechargez votre flacon</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Chez TH<span className="ae-highlight text-sm">Æ</span>M <span className="ae-highlight text-sm">Æ</span>TERNUM, nous croyons que le luxe et la responsabilité vont de pair.
              Nos recharges de 50ml à 35€ vous permettent de réutiliser votre flacon signature, réduisant notre empreinte tout en préservant l'élégance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
