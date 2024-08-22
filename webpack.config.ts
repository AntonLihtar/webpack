import path from 'path'
import webpack from 'webpack';
import { buildWebpackConfig } from './config/buildWebpack/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/buildWebpack/types/config';



export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths: paths,
        isDev,
        port: PORT
    })

    return config;
}