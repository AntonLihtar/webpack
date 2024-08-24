import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (path: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            //настраиваем шаблон для выходного файла html, чтобы в него встраивались скрипты
            template: path
        }),
        new webpack.ProgressPlugin(),

        //нужен чтобы достать css код из js
        new MiniCssExtractPlugin({
            //имя для итогового файла css
            filename: 'css/[name].[contenthash:8].css',
            //чанки нужны чтобы асинхронно подгружать css файлы по мере необходимости
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}