import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({
  presetPeiliuiOptions: {
    include: ['theme', 'overlay'],
  },
});
