import sacraeBotlle from '@/assets/bottles/sacrae-bottle.png';
import vitaeaBottle from '@/assets/bottles/vitaea-bottle.png';
import umbraeBottle from '@/assets/bottles/umbrae-bottle.png';
import floraeBottle from '@/assets/bottles/florae-bottle.png';
import type { Collection } from '@/data/products';

const bottleImages: Record<Collection, string> = {
  sacrae: sacraeBotlle,
  vitaea: vitaeaBottle,
  umbrae: umbraeBottle,
  florae: floraeBottle,
};

export const getBottleImage = (collection: Collection) => bottleImages[collection];
