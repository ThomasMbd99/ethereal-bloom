export type Collection = 'sacrae' | 'vitae' | 'umbrae' | 'nerolae' | 'aera';

export interface Note {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  collection: Collection;
  tagline: string;
  inspiration?: string;
  notes: Note;
}

export interface CollectionInfo {
  id: Collection;
  name: string;
  displayName: string;
  category: string;
  description: string;
  mood: string;
  colors: {
    accent: string;
    bg: string;
    text: string;
  };
}

export const collections: CollectionInfo[] = [
  {
    id: 'sacrae',
    name: 'SACRÆ',
    displayName: 'SACR<span class="ae-highlight">Æ</span>',
    category: 'Gourmande & Sucrée',
    description: 'La gourmandise y prend une forme plus profonde, plus dense, presque envoûtante.',
    mood: 'Douce, chaleureuse, enveloppante',
    colors: { accent: '#C4956A', bg: '#F5F0E1', text: '#3D2B1F' },
  },
  {
    id: 'vitae',
    name: 'VITÆ',
    displayName: 'VIT<span class="ae-highlight">Æ</span>',
    category: 'Fruitée & Fraîche',
    description: 'Le fruit y pulse comme une lumière vive, libre et insaisissable.',
    mood: 'Vivante, énergique, solaire',
    colors: { accent: '#FF6B2B', bg: '#FFF5EE', text: '#3A1500' },
  },
  {
    id: 'umbrae',
    name: 'UMBRÆ',
    displayName: 'UMBR<span class="ae-highlight">Æ</span>',
    category: 'Boisée & Ambrée',
    description: "L'ombre y rencontre la chaleur dans une profondeur calme et souveraine.",
    mood: 'Mystérieuse, envoûtante, profonde',
    colors: { accent: '#8B6914', bg: '#1A1210', text: '#D4B896' },
  },
  {
    id: 'nerolae',
    name: 'NEROLÆ',
    displayName: 'NEROL<span class="ae-highlight">Æ</span>',
    category: 'Florale & Orientale',
    description: "La fleur y laisse un voile tendre, lumineux et délicatement troublant.",
    mood: 'Élégante, romantique, envoûtante',
    colors: { accent: '#F0A0B8', bg: '#FFF5F8', text: '#4A2030' },
  },
  {
    id: 'aera',
    name: 'ÆRA',
    displayName: '<span class="ae-highlight">Æ</span>RA',
    category: 'Propre & Minimaliste',
    description: "La pureté y devient un luxe silencieux, aérien et souverain.",
    mood: 'Pure, aérienne, lumineuse',
    colors: { accent: '#A8D4F0', bg: '#F5FAFF', text: '#1A2A3A' },
  },
];

export const products: Product[] = [
  // SACRAE
  {
    id: 'dulsae',
    name: 'DULS\u00C6',
    collection: 'sacrae',
    tagline: 'Barbe à papa, nuage sucré, douceur enfantine',
    notes: { top: ['Sucre', 'Fraise'], heart: ['Barbe à papa', 'Vanille'], base: ['Musc blanc', 'Caramel'] },
  },
  {
    id: 'nerae',
    name: 'NER\u00C6',
    collection: 'sacrae',
    tagline: 'Sucre noir, vanille orchidée envoûtante',
    inspiration: 'Sucre Noir – Arte Profumi',
    notes: { top: ['Orchidée'], heart: ['Sucre'], base: ['Vanille'] },
  },
  {
    id: 'lamae',
    name: 'LAM\u00C6',
    collection: 'sacrae',
    tagline: 'Fève tonka absolue, caramel toffee addictif',
    inspiration: 'Kryptonite Absolue – Khalil T',
    notes: { top: ['Caramel Toffee', 'Absolu de Fève de Tonka'], heart: ['Iris', 'Santal blanc'], base: ['Amande pralinée', 'Musc'] },
  },
  {
    id: 'varkaem',
    name: 'VARK\u00C6M',
    collection: 'sacrae',
    tagline: 'Vanille spiritueuse, boisée et ambrée',
    inspiration: 'Spiritueuse Double Vanille – Guerlain',
    notes: { top: ['Poivre rose', 'Bergamote', 'Encens'], heart: ['Rose de Bulgarie', 'Jasmin', 'Ylang-Ylang', 'Cèdre'], base: ['Vanille', 'Benjoin', 'Rhum'] },
  },
  {
    id: 'zaemyr',
    name: 'Z\u00C6MYR',
    collection: 'sacrae',
    tagline: "Tonka veloutée, amande et fleur d'oranger",
    inspiration: 'Velvet Tonka – BDK Parfums',
    notes: { top: ["Amande", "Fleur d'oranger"], heart: ['Rose absolue', 'Tabac des Balkans'], base: ['Fève de Tonka absolue', 'Vanille de Madagascar', "Bois d'Amyris", 'Bois ambrés'] },
  },
  {
    id: 'almae',
    name: 'ALM\u00C6',
    collection: 'sacrae',
    tagline: 'Lait crémeux, tubéreuse vanillée, mystère lacté',
    inspiration: 'Blanche Bête – Liquides Imaginaires',
    notes: { top: ['Lait', 'Ambrette'], heart: ['Tubéreuse', 'Jasmin', 'Encens'], base: ['Vanille', 'Musc', 'Fève de Tonka', 'Cacao'] },
  },
  // VITAEA
  {
    id: 'syrae',
    name: 'SYR\u00C6',
    collection: 'vitae',
    tagline: 'Cocktail fruité solaire, passion et pêche',
    inspiration: 'Kirke – Tiziana Terenzi',
    notes: { top: ['Fruit de la passion', 'Pêche', 'Framboise', 'Cassis', 'Poire', 'Sable chaud'], heart: ['Muguet'], base: ['Héliotrope', 'Bois de Santal', 'Vanille', 'Patchouli', 'Musc'] },
  },
  {
    id: 'mangaera',
    name: 'MANG\u00C6RA',
    collection: 'vitae',
    tagline: 'Mangue solaire, fruitée et addictive',
    notes: { top: ['Mangue', 'Fruits exotiques'], heart: ['Fleur de frangipanier', 'Noix de coco'], base: ['Musc blanc', 'Vanille'] },
  },
  {
    id: 'rubrae',
    name: 'RUBR\u00C6',
    collection: 'vitae',
    tagline: 'Explosion de fruits rouges, intense et gourmande',
    notes: { top: ['Fraise', 'Framboise', 'Cassis'], heart: ['Rose', 'Pivoine'], base: ['Vanille', 'Musc', 'Bois blanc'] },
  },
  // UMBRAE
  {
    id: 'aeonis',
    name: '\u00C6ONIS',
    collection: 'umbrae',
    tagline: 'Fraise vénéneuse, cuir sombre et cannelle',
    inspiration: 'Venom Incarnat – SHL 777',
    notes: { top: ['Fraise des bois', 'Fraise', 'Caramel', 'Mûre'], heart: ['Framboise', 'Cèdre de Virginie', 'Cannelle'], base: ['Cuir de Russie', 'Vanille noire', 'Patchouli', 'Fève de Tonka'] },
  },
  {
    id: 'aelia',
    name: '\u00C6LIA',
    collection: 'umbrae',
    tagline: 'Santal crémeux, poudré, élégance parisienne',
    inspiration: 'Santal de Paris – Place de la Rêverie',
    notes: { top: ['Lys', 'Amyris'], heart: ['Notes poudrées', 'Ambrette'], base: ['Santal', 'Vanille', 'Ambre', 'Ambroxan', 'Benjoin'] },
  },
  {
    id: 'maraeja',
    name: 'MAR\u00C6JA',
    collection: 'umbrae',
    tagline: 'Oud maracuja, fruit de la passion et oud profond',
    inspiration: 'Oud Maracuja – Maison Crivelli',
    notes: { top: ['Fruit de la passion', 'Safran', 'Rose de Turquie'], heart: ['Oud', 'Benjoin', "Patchouli d'Indonésie"], base: ['Cuir', 'Vanille', 'Labdanum', 'Akigalawood'] },
  },
  // FLORAE
  {
    id: 'lysae',
    name: 'LYS\u00C6',
    collection: 'nerolae',
    tagline: "Coucher de soleil floral, poire et fleur d'oranger",
    inspiration: 'Passion Riviera – Place de la Rêverie',
    notes: { top: ['Poire', "Fleur d'oranger", 'Héliotrope'], heart: ['Jasmin', 'Vanille', 'Rose'], base: ['Oud du Vietnam', 'Fève de Tonka', 'Muscs'] },
  },
  {
    id: 'hibiscae',
    name: 'HIBISC\u00C6',
    collection: 'nerolae',
    tagline: 'Hibiscus flamboyant, rose et cuir vanillé',
    inspiration: 'Hibiscus Mahajád – Maison Crivelli',
    notes: { top: ['Hibiscus', 'Rose Damascena', 'Cassis', 'Grenade'], heart: ['Menthe cristallisée', 'Cannelle'], base: ['Vanille absolue', 'Cuir', 'Ambrette', 'Ambre'] },
  },
  {
    id: 'celestae',
    name: 'CELEST\u00C6',
    collection: 'nerolae',
    tagline: 'Aube céleste, violette marine et vanille poudrée',
    inspiration: 'Celeste – Giardini di Toscana',
    notes: { top: ['Notes marines', 'Citron vert'], heart: ['Violette', 'Framboise', 'Notes florales exotiques'], base: ['Sucre vanillé', 'Ambroxan'] },
  },
];

export const formats = [
  { id: '10ml', label: '10ml', price: 10, description: 'Flacon voyage' },
  { id: '50ml', label: '50ml', price: 45, description: 'Flacon signature' },
  { id: 'recharge', label: 'Recharge 50ml', price: 35, description: 'Rechargez votre flacon', eco: true },
] as const;

export type FormatId = typeof formats[number]['id'];

export const getCollectionProducts = (collectionId: Collection) =>
  products.filter(p => p.collection === collectionId);

export const getCollection = (id: Collection) =>
  collections.find(c => c.id === id);

export const getProduct = (id: string) =>
  products.find(p => p.id === id);