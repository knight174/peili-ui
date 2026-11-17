import PlInput from './input.vue';
import './input.scss';
import 'virtual:uno.css';

export { PlInput };
/** @deprecated 请使用 PlInput */
export { PlInput as Input };
export type InputInstance = InstanceType<typeof PlInput>;
export * from './props';
