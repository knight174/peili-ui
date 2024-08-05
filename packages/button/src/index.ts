import Button from './button.vue';
import './button.scss';
import 'virtual:uno.css';

export { Button as PlButton };
export type ButtonInstance = InstanceType<typeof Button>;
export * from './props';
