import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCollection, getCollectionProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import NotFound from './NotFound';

const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const collection = id ? getCollection(id as any) : undefined;
  const prods = id ? getCollectionProducts(id as any) : [];

  if (!collection) return <NotFound />;

  return (
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
          className="text-center mb-16"
        >
          <h1
            className="font-display text-5xl lg:text-7xl tracking-wider mb-4"
            dangerouslySetInnerHTML={{ __html: collection.displayName }}
          />
          <p className="font-body text-sm text-muted-foreground tracking-wider uppercase mb-2">{collection.mood}</p>
          <p className="font-body text-muted-foreground max-w-md mx-auto">{collection.description}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {prods.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
