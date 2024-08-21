import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

export const buildPlugins = (path: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            //настраиваем шаблон для выходного файла html, чтобы в него встраивались скрипты
            template: path
        }),
        new webpack.ProgressPlugin()
    ]
}