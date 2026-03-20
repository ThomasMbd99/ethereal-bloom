import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product, getCollection } from '@/data/products';

interface Props {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: Props) => {
  const collection = getCollection(product.collection);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/produit/${product.id}`}
        className="group block"
      >
        <div
          className="aspect-[3/4] rounded overflow-hidden relative mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.03]"
          style={{
            background: `linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 12%))`,
            boxShadow: '0 0 0 0 transparent',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
            style={{ boxShadow: `0 0 30px ${collection?.colors.accent}33, 0 0 60px ${collection?.colors.accent}11` }}
          />
          <div className="text-center relative z-10">
            <span className="font-display text-2xl lg:text-3xl tracking-wider text-primary">
              {product.name}
            </span>
          </div>
          <div
            className="absolute bottom-3 left-3 px-2 py-1 rounded text-[10px] font-body uppercase tracking-wider"
            style={{ backgroundColor: collection?.colors.accent + '22', color: collection?.colors.accent }}
          >
            {collection?.name}
          </div>
        </div>
        <h3 className="font-display text-lg tracking-wide group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-1">{product.tagline}</p>
        <p className="font-body text-sm text-primary mt-2">À partir de 10€</p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
