import path from 'path';
import { fileURLToPath } from 'url';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

// Needed to simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.tsx', // Update this if your entry point is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@pancakeswap/sdk': path.resolve(__dirname, 'packages/swap-sdk/src/index.ts'),
      '@pancakeswap/wagmi/connectors/binanceWallet': path.resolve(__dirname, 'packages/wagmi/connectors/binanceWallet/index.ts'),
      '@pancakeswap/wagmi/connectors/miniProgram': path.resolve(__dirname, 'packages/wagmi/connectors/miniProgram/index.ts'),
      '@pancakeswap/wagmi/chains': path.resolve(__dirname, 'packages/wagmi/chains/index.ts'),
      '@pancakeswap/wagmi': path.resolve(__dirname, 'packages/wagmi/src/index.ts'),
      '@pancakeswap/hooks': path.resolve(__dirname, 'packages/hooks/src/index.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handles TypeScript and JSX
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css\.ts$/, // Handles Vanilla Extract style files
        use: [
          {
            loader: '@vanilla-extract/webpack-plugin/loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VanillaExtractPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
  },
};
