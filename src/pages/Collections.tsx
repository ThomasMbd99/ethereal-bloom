import { useParams, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collections, type Collection } from '@/data/products';
import CollectionTransition from '@/components/CollectionTransition';
import PageTransition from '@/components/PageTransition';

const Collections = () => {
  const navigate = useNavigate();
  const [transitionTarget, setTransitionTarget] = useState<Collection | null>(null);

  const handleCollectionClick = useCallback((colId: Collection) => {
    setTransitionTarget(colId);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    if (transitionTarget) {
      navigate(`/collection/${transitionTarget}`);
      setTransitionTarget(null);
    }
  }, [transitionTarget, navigate]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 lg:pt-28 pb-20">
        <CollectionTransition targetCollection={transitionTarget} onComplete={handleTransitionComplete} />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl lg:text-6xl">
              Nos <span className="text-primary">Gammes</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-4 tracking-wider">15 parfums · 4 univers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {collections.map((col, i) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <button
                  onClick={() => handleCollectionClick(col.id)}
                  className="group block w-full text-left aspect-video rounded-lg overflow-hidden relative"
                  style={{
                    background: `linear-gradient(145deg, ${col.colors.accent}18, ${col.colors.accent}05, hsl(0 0% 7%))`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                    style={{ boxShadow: `inset 0 0 80px ${col.colors.accent}20, 0 0 40px ${col.colors.accent}10` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center group-hover:scale-[1.02] transition-transform duration-500">
                    <h2 className="font-display text-4xl lg:text-5xl tracking-wider mb-3"
                      dangerouslySetInnerHTML={{ __html: col.displayName }}
                    />
                    <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-2">{col.mood}</p>
                    <p className="font-body text-sm text-muted-foreground/70 max-w-xs">{col.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 group-hover:h-1 transition-all duration-500"
                    style={{ backgroundColor: col.colors.accent }}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Formats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl lg:text-4xl text-center mb-12">
              Nos <span className="text-primary">Formats</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-8 text-center bg-card/50 hover:border-primary/30 transition-colors duration-300">
                <p className="font-display text-4xl text-primary mb-2">10ml</p>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">Flacon Voyage</p>
                <p className="font-display text-2xl mb-3">10€</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Le format idéal pour découvrir nos créations. Un flacon élégant à glisser partout.
                </p>
              </div>
              <div className="border border-primary/30 rounded-lg p-8 text-center bg-card/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                <p className="font-display text-4xl text-primary mb-2">50ml</p>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">Flacon Signature</p>
                <p className="font-display text-2xl mb-3">45€</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Votre compagnon quotidien. Verre lourd, finitions dorées, conçu pour durer.
                </p>
              </div>
              <div className="border border-border rounded-lg p-8 text-center bg-card/50 hover:border-primary/30 transition-colors duration-300">
                <p className="font-display text-4xl text-primary mb-2">50ml</p>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">Recharge Éco</p>
                <p className="font-display text-2xl mb-3">35€</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Rechargez votre flacon signature. Même qualité, empreinte réduite. ♻️
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Collections;
