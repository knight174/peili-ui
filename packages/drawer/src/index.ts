import PlDrawer from './drawer.vue';
import './drawer.scss';
import 'virtual:uno.css';

export { PlDrawer };
export type DrawerInstance = InstanceType<typeof PlDrawer>;
export * from './props';
