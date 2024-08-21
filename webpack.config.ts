import path from 'path'
import webpack from 'webpack';
import { buildWebpackConfig } from './config/buildWebpack/buildWebpackConfig';
import { BuildPaths } from './config/buildWebpack/types/config';

const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: paths,
    isDev
})

export default config;