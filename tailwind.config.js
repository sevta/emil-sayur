/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      heading: ['Pacifico, cursive'],
      body: ['Archivo, sans-serif'],
      lato: ['Lato, sans-serif'],
      baloo: ['Baloo Bhai 2, cursive'],
      lora: ['Lora, serif']
    },
    container: {
      center: true,
      padding: '1.3rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: []
}
