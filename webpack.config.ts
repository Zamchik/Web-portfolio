import path from 'path';
import webpack from 'webpack';
<<<<<<< HEAD
import MiniCssExtractPlugin from "mini-css-extract-plugin";
=======
>>>>>>> 1f0c8f2ae9fa2a6e6202280c22532a4c3ece5949
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariables {
    mode: Mode;
    port: number;
}

export default (env: EnvVariables) => {
<<<<<<< HEAD

    const isDev = env.mode === 'development'
    const isProd = env.mode === 'production'

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
=======
    
    const isDev = env.mode === 'development'

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
>>>>>>> 1f0c8f2ae9fa2a6e6202280c22532a4c3ece5949
        output: {
            path: path.resolve(__dirname, "build"),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
<<<<<<< HEAD
            isProd && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
=======
>>>>>>> 1f0c8f2ae9fa2a6e6202280c22532a4c3ece5949
        ],
        module: {
            rules: [
                {
<<<<<<< HEAD
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
=======
>>>>>>> 1f0c8f2ae9fa2a6e6202280c22532a4c3ece5949
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
<<<<<<< HEAD
        devtool: isDev && 'inline-source-map',
=======
        devtool: isDev ? 'inline-source-map' : false,
>>>>>>> 1f0c8f2ae9fa2a6e6202280c22532a4c3ece5949
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true,
        } : undefined
    }
    return config;
};