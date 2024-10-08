import { BuildOptions } from './types/config';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { html, output, entry } = options.paths;
    const { mode, isDev } = options;
    return {
        mode,
        entry: entry,
        plugins: buildPlugins(html),
        //тут настраиваем лоадеры для сторонних файлов ts/css/png ...
        module: {
            rules: buildLoaders(options)
        },
        //в резолв мы указываем расширения тех файлов,
        // при импорте которых мы не будем указывать расширение
        //import Component from './components/Component'
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js', //для кеширования файла
            // filename: 'bandle.js',
            path: output,
            clean: true // чистим выходные файлы
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}