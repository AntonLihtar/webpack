import path from 'path'
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    //тут настраиваем лоадеры для сторонних файлов ts/css/png ...
    module: {

        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/ //исключаем файлы
            }
        ]
    },
    //в резолв мы указываем расширения тех файлов,
    // при импорте которых мы не будем указывать расширение
    //import Component from './components/Component'
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].[contenthash].js', //для кеширования файла
        // filename: 'bandle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true // чистим выходные файлы
    },
    plugins: [
        new HtmlWebpackPlugin({
            //настраиваем шаблон для выходного файла html, чтобы в него встраивались скрипты
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()
    ]
};

export default config;