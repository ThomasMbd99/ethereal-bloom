import type { Collection } from './products';

export const collectionStories: Record<Collection, { title: string; paragraphs: string[] }> = {
  sacrae: {
    title: 'La tentation incarnée',
    paragraphs: [
      'SACRÆ est née d\'un désir qu\'on n\'explique pas.\nUne chaleur lente, presque interdite, qui s\'installe sans prévenir.',
      'Ici, le sucre n\'est pas innocent.\nIl est dense, profond, presque brûlant.',
      'Vanille noire. Caramel ambré. Fève tonka.\nDes matières qui enveloppent, qui retiennent, qui marquent.',
      'SACRÆ ne cherche pas à plaire.\nElle cherche à faire rester.',
    ],
  },
  vitaea: {
    title: 'L\'élan vital',
    paragraphs: [
      'VITÆA est mouvement.\nUne énergie brute, libre, presque incontrôlable.',
      'Les fruits éclatent avant même d\'être touchés.\nFramboise, mangue, cassis, passion.',
      'Tout est vif, juteux, immédiat.\nPuis vient le calme, lent, presque sensuel.',
      'VITÆA attire sans prévenir.\nEt disparaît avant d\'être comprise.',
    ],
  },
  umbrae: {
    title: 'La profondeur silencieuse',
    paragraphs: [
      'UMBRÆ ne se révèle pas.\nElle s\'impose.',
      'Une matière sombre, dense, presque minérale.\nOud, encens, ambre, musc.',
      'Ce n\'est pas une lumière.\nC\'est une présence.',
      'UMBRÆ ne parle pas fort.\nMais elle reste longtemps.',
    ],
  },
  florae: {
    title: 'L\'instant d\'une fleur',
    paragraphs: [
      'FLORÆ n\'est pas une fleur.\nC\'est l\'instant où elle existe.',
      'Un souffle fragile, entre apparition et disparition.\nRose, hibiscus, fleur blanche, pétales ouverts.',
      'Rien n\'est figé.\nTout est en mouvement, en vibration.',
      'FLORÆ ne tient pas dans le temps.\nElle se vit.',
    ],
  },
};
