import webpack from 'webpack';

export const buildLoaders = (): webpack.RuleSetRule[] => {

    //если не используем тайскрипт - нужен babel-loader
    //а так он в тайскрипе по умолчанию
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/ //исключаем файлы
    }

    return [
        typescriptLoader
    ]
}