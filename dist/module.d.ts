import { Module } from '@nuxt/types';
import { ComposableOptions, ReturnedValue } from '@vueuse/sound/dist/esm/src/types';

declare type Sound = {
    src: string;
    options: ComposableOptions;
};
interface ModuleOptions {
    [K: string]: Sound;
}
declare const CONFIG_KEY = "sound";
declare const nuxtModule: Module<ModuleOptions>;
declare module '@nuxt/types' {
    interface NuxtConfig {
        [CONFIG_KEY]?: ModuleOptions;
    }
    interface Configuration {
        [CONFIG_KEY]?: ModuleOptions;
    }
    interface Context {
        $sounds: {
            [K: string]: ReturnedValue;
        };
    }
}

export default nuxtModule;
export { ModuleOptions, Sound };
