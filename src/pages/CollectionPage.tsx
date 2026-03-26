import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCollection, getCollectionProducts, type Collection } from '@/data/products';
import { collectionStories } from '@/data/collectionStories';
import { useTheme } from '@/context/ThemeContext';
import ProductCard from '@/components/ProductCard';
import PageTransition from '@/components/PageTransition';
import NotFound from './NotFound';

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const { setTheme } = useTheme();
  const collection = id ? getCollection(id as Collection) : undefined;
  const prods = id ? getCollectionProducts(id as Collection) : [];
  const story = id ? collectionStories[id as keyof typeof collectionStories] : undefined;

  useEffect(() => {
    if (id && collection) setTheme(id as Collection);
  }, [id]);

  if (!collection) return <NotFound />;

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 lg:pt-28 pb-20">
        <div className="fixed inset-0 pointer-events-none z-0"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${collection.colors.accent}12 0%, transparent 65%)`, transition: 'background 1s ease' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }}
              className="font-display text-5xl lg:text-7xl tracking-wider mb-4" dangerouslySetInnerHTML={{ __html: collection.displayName }} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="font-body text-sm text-muted-foreground tracking-wider uppercase mb-2">{collection.mood}</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="font-body text-muted-foreground max-w-md mx-auto">{collection.description}</motion.p>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px max-w-xs mx-auto mt-8 origin-left" style={{ backgroundColor: collection.colors.accent }} />
          </motion.div>
          {story && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-2xl lg:text-3xl italic text-center mb-6" style={{ color: collection.colors.accent }}>{story.title}</h2>
              <div className="border-l-2 pl-6 lg:pl-8 py-4 rounded-r-sm space-y-4" style={{ borderColor: collection.colors.accent, background: 'hsl(var(--card) / 0.5)' }}>
                {story.paragraphs.map((p, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }}
                    className="font-display text-sm lg:text-base italic leading-relaxed text-foreground/80 whitespace-pre-line">{p}</motion.p>
                ))}
              </div>
            </motion.div>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {prods.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CollectionPage;