import webpack from 'webpack';

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
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