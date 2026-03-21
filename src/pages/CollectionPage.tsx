import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCollection, getCollectionProducts } from '@/data/products';
import { collectionStories } from '@/data/collectionStories';
import ProductCard from '@/components/ProductCard';
import PageTransition from '@/components/PageTransition';
import NotFound from './NotFound';

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const collection = id ? getCollection(id as any) : undefined;
  const prods = id ? getCollectionProducts(id as any) : [];
  const story = id ? collectionStories[id as keyof typeof collectionStories] : undefined;

  if (!collection) return <NotFound />;

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 lg:pt-28 pb-20">
        {/* Ambient color overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${collection.colors.accent}08 0%, transparent 60%)`,
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1
              className="font-display text-5xl lg:text-7xl tracking-wider mb-4"
              dangerouslySetInnerHTML={{ __html: collection.displayName }}
            />
            <p className="font-body text-sm text-muted-foreground tracking-wider uppercase mb-2">{collection.mood}</p>
            <p className="font-body text-muted-foreground max-w-md mx-auto">{collection.description}</p>
          </motion.div>

          {/* Collection Story */}
          {story && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <h2 className="font-display text-2xl lg:text-3xl italic text-center mb-6" style={{ color: collection.colors.accent }}>
                {story.title}
              </h2>
              <div
                className="border-l-2 pl-6 lg:pl-8 py-4 rounded-r-sm space-y-4"
                style={{
                  borderColor: collection.colors.accent,
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                {story.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className="font-display text-sm lg:text-base italic leading-relaxed text-foreground/80 whitespace-pre-line"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {prods.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CollectionPage;
