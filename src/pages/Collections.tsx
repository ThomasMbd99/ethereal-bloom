import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collections } from '@/data/products';

const Collections = () => (
  <div className="min-h-screen pt-24 lg:pt-28 pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-display text-4xl lg:text-6xl">
          Nos <span className="text-primary">Créations</span>
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
            <Link
              to={`/collection/${col.id}`}
              className="group block aspect-video rounded-lg overflow-hidden relative"
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
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Collections;
