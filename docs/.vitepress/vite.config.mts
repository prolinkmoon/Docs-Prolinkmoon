import vue from '@vitejs/plugin-vue'

export default {
    base: '/101/',
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // ...
          },
          transformAssetUrls: {
            // ...
          },
        },
      }),
    ],
    
  }