import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getProduct, getCollection, formats, getCollectionProducts, type FormatId } from '@/data/products';
import { getBottleImage } from '@/data/bottleImages';
import OlfactoryPyramid from '@/components/OlfactoryPyramid';
import ProductStory from '@/components/ProductStory';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { Recycle, Check, Minus, Plus } from 'lucide-react';
import NotFound from './NotFound';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : undefined;
  const collection = product ? getCollection(product.collection) : undefined;
  const [selectedFormat, setSelectedFormat] = useState<FormatId>('50ml');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product || !collection) return <NotFound />;

  const currentFormat = formats.find(f => f.id === selectedFormat)!;
  const relatedProducts = getCollectionProducts(product.collection).filter(p => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        format: selectedFormat,
        price: currentFormat.price,
        name: product.name,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-20">
      <div className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${collection.colors.accent}06 0%, transparent 50%)` }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 font-body text-xs text-muted-foreground">
          <Link to="/collections" className="hover:text-primary transition-colors">Nos Créations</Link>
          {' / '}
          <Link to={`/collection/${collection.id}`} className="hover:text-primary transition-colors">{collection.name}</Link>
          {' / '}
          <span className="text-foreground">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] rounded-lg flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 12%))` }}
          >
            <div className="text-center">
              <span className="font-display text-4xl lg:text-6xl text-primary tracking-wider">{product.name}</span>
              <p className="font-body text-xs text-muted-foreground mt-4 tracking-wider uppercase">{collection.name}</p>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: collection.colors.accent }}>
                {collection.name}
              </p>
              <h1 className="font-display text-4xl lg:text-5xl tracking-wider">{product.name}</h1>
              <p className="font-body text-muted-foreground mt-3">{product.tagline}</p>
              {product.inspiration && (
                <p className="font-body text-xs text-muted-foreground mt-2 italic">Inspiré de {product.inspiration}</p>
              )}
            </div>

            {/* Format selector */}
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">Format</p>
              <div className="flex flex-wrap gap-3">
                {formats.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFormat(f.id)}
                    className={`px-4 py-3 border rounded font-body text-sm transition-all duration-300 ${
                      selectedFormat === f.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    <span className="block">{f.label}</span>
                    <span className="block text-xs mt-0.5">{f.price}€</span>
                    {'eco' in f && (f as any).eco && (
                      <span className="inline-flex items-center gap-1 text-[10px] mt-1 text-primary">
                        <Recycle className="w-3 h-3" /> Éco-responsable
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">Quantité</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded flex items-center justify-center hover:border-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-body text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded flex items-center justify-center hover:border-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Price + Add to cart */}
            <div className="flex items-center gap-6">
              <span className="font-display text-3xl text-primary">{currentFormat.price * quantity}€</span>
              <button
                onClick={handleAdd}
                disabled={added}
                className={`flex-1 py-4 font-body text-xs uppercase tracking-[0.3em] rounded transition-all duration-300 btn-ripple ${
                  added
                    ? 'bg-green-800 text-green-100'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {added ? (
                  <span className="inline-flex items-center gap-2"><Check className="w-4 h-4" /> Ajouté</span>
                ) : (
                  'Ajouter au panier'
                )}
              </button>
            </div>

            {/* Pyramid */}
            <OlfactoryPyramid notes={product.notes} accentColor={collection.colors.accent} />

            {/* Product Story */}
            <ProductStory productId={product.id} accentColor={collection.colors.accent} />
          </motion.div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 lg:mt-32">
            <h2 className="font-display text-2xl text-center mb-10">Vous aimerez aussi</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
