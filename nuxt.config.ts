// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      supabaseUrl:process.env.SUPABASE_URL,
      supabaseAnonKey:process.env.SUPABASE_ANON_KEY,
    }
  },
  devtools: { enabled: true }
})
