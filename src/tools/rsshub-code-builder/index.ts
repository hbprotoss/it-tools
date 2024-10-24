import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Rsshub code builder',
  path: '/rsshub-code-builder',
  description: '',
  keywords: ['rsshub', 'code', 'builder'],
  component: () => import('./rsshub-code-builder.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-10-24'),
});
