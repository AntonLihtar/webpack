import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions) => {
    return {
        port: options.port,
        //автоматически будет открывать браузер с приложением
        open : true,
        //проксирует запросы через индекс пайдж, через корневую страницу, для спа
        historyApiFallback: true,
    }


}