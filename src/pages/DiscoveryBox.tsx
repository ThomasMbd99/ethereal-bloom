import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, getCollection } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Check, X, Gift } from 'lucide-react';

const DiscoveryBox = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const togglePerfume = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : prev.length < 5 ? [...prev, id] : prev
    );
  };

  const handleAdd = () => {
    addItem({
      productId: 'coffret-aeternum',
      format: '10ml',
      price: 50,
      name: 'Coffret ÆTERNUM',
      isDiscoveryBox: true,
      selectedPerfumes: selected,
    });
    setAdded(true);
    setTimeout(() => { setAdded(false); setSelected([]); }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
          <h1 className="font-display text-4xl lg:text-6xl">
            Coffret <span className="ae-highlight">Æ</span>TERNUM
          </h1>
          <p className="font-body text-muted-foreground mt-4">Choisissez 5 parfums parmi nos 15 créations · 5 × 10ml</p>
          <p className="font-display text-3xl text-primary mt-4">50€</p>
        </motion.div>

        {/* Selection counter */}
        <div className="sticky top-16 lg:top-20 z-20 bg-background/90 backdrop-blur-md py-4 border-b border-border mb-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => {
                const perfume = selected[i] ? products.find(p => p.id === selected[i]) : null;
                const col = perfume ? getCollection(perfume.collection) : null;
                return (
                  <div
                    key={i}
                    className="w-14 h-14 rounded border border-border flex items-center justify-center text-center transition-all duration-300"
                    style={col ? {
                      borderColor: col.colors.accent,
                      background: `${col.colors.accent}15`,
                    } : {}}
                  >
                    {perfume ? (
                      <span className="font-display text-[10px] leading-tight">{perfume.name}</span>
                    ) : (
                      <span className="text-muted-foreground text-lg">+</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <span className="font-body text-sm text-muted-foreground">{selected.length}/5</span>
              <button
                onClick={handleAdd}
                disabled={selected.length !== 5 || added}
                className={`px-6 py-3 font-body text-xs uppercase tracking-[0.2em] rounded transition-all duration-300 btn-ripple ${
                  selected.length === 5 && !added
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : added
                    ? 'bg-green-800 text-green-100'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                {added ? <span className="inline-flex items-center gap-1"><Check className="w-4 h-4" /> Ajouté</span> : 'Ajouter au panier'}
              </button>
            </div>
          </div>
        </div>

        {/* Products grid by collection */}
        {(['sacrae', 'vitaea', 'umbrae', 'florae'] as const).map(colId => {
          const col = getCollection(colId)!;
          const colProducts = products.filter(p => p.collection === colId);
          return (
            <div key={colId} className="mb-12">
              <h2
                className="font-display text-2xl tracking-wider mb-6"
                dangerouslySetInnerHTML={{ __html: col.displayName }}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {colProducts.map((p, i) => {
                  const isSelected = selected.includes(p.id);
                  const canSelect = selected.length < 5 || isSelected;
                  return (
                    <motion.button
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => canSelect && togglePerfume(p.id)}
                      className={`relative p-4 rounded border text-left transition-all duration-300 ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : canSelect
                          ? 'border-border hover:border-primary/50'
                          : 'border-border opacity-40 cursor-not-allowed'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                      <span className="font-display text-lg block">{p.name}</span>
                      <span className="font-body text-xs text-muted-foreground mt-1 block line-clamp-2">{p.tagline}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoveryBox;
