import PlOverlay from './overlay.vue';
import './overlay.scss';
import 'virtual:uno.css';

export { PlOverlay };
export type OverlayInstance = InstanceType<typeof PlOverlay>;
export * from './props';
