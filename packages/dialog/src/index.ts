import PlDialog from './dialog.vue';
import './dialog.scss';
import 'virtual:uno.css';

export { PlDialog };
export type DialogInstance = InstanceType<typeof PlDialog>;
export * from './props';
