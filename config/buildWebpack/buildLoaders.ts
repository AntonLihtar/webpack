import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const scssLoader = {
        test: /\.(sc|sa|c)ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // 'style-loader',
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader",
            {
                //работает с версиями до 7
                loader: 'css-loader',
                options: {
                    modules: {
                        //для модульных файлов применяет кодировку названия селекторов,
                        //а обычный css обрабатывается обычно
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        //генерация названий для селекторов
                        localIdentName: options.isDev
                            ? '[path][name]_[local]-[hash:base64:2]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
    //если не используем тайскрипт - нужен babel-loader
    //а так он в тайскрипе по умолчанию
    const
        typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/ //исключаем файлы
        }

    return [
        typescriptLoader,
        scssLoader
    ]
}