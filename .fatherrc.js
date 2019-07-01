export default {
  entry: 'src/index.tsx',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    themeConfig: { mode: 'light' },
    base: '/'
  },
  cssModules: {
    generateScopedName: 'td_[name]__[local]__[hash:base64:5]'
  },
  extractCSS: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }]
  ],
}