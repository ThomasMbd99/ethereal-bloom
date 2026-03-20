import { motion } from 'framer-motion';

const sections = [
  {
    title: 'La Quête de l\'Éternel',
    text: 'TH\u00C6M \u00C6TERNUM est née d\'une obsession : capturer l\'insaisissable. Chaque parfum est une porte vers un souvenir qui n\'existe pas encore, une émotion suspendue entre le passé et l\'infini.',
  },
  {
    title: 'Le Symbole \u00C6',
    text: 'Le \u00C6 est notre signature. Union du A et du E, il représente la fusion des contraires : la tradition et l\'audace, la douceur et l\'intensité, l\'éphémère et l\'éternel. Chaque création porte cette dualité.',
  },
  {
    title: 'L\'Artisanat du Parfum',
    text: 'Nos compositions sont élaborées avec les plus belles matières premières naturelles. Chaque pyramide olfactive est une architecture invisible, pensée pour évoluer sur votre peau et raconter votre histoire.',
  },
  {
    title: 'Un Luxe Responsable',
    text: 'Le véritable luxe, c\'est celui qui respecte. Nos flacons sont conçus pour être rechargés. Nos recharges de 50ml réduisent notre empreinte écologique sans compromettre l\'expérience. Le beau, durablement.',
  },
];

const OurStory = () => (
  <div className="min-h-screen pt-24 lg:pt-28 pb-20">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="font-display text-4xl lg:text-6xl">
          Notre <span className="text-primary">Histoire</span>
        </h1>
      </motion.div>

      <div className="space-y-24">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl lg:text-3xl mb-6 text-primary">{section.title}</h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">{section.text}</p>
            {i < sections.length - 1 && (
              <div className="mt-16 mx-auto w-12 h-px bg-primary/30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default OurStory;
