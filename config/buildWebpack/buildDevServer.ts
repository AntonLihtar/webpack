import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions) => {
    return {
        port: options.port,
        //автоматически будет открывать браузер с приложением
        open : true,
    }


}