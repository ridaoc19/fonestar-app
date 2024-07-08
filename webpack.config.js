const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/i,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './',
						},
					},
					'css-loader',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							webpackImporter: true,
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: ['file-loader?name=assets/[name].[ext]', 'image-webpack-loader'],
			},
			{
				test: /\.(woff)$/i,
				use: ['file-loader?name=assets/[name].[ext]'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new Dotenv(),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		client: {
			progress: true,
		},
		static: path.resolve(__dirname, './dist'),
		historyApiFallback: true,
		open: true,
		watchFiles: ['src/**/*.tsx', 'src/**/*.ts', 'public/**/*'],
	},
};
