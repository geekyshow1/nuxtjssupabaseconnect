import { createClient } from '@supabase/supabase-js'
export default () => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseAnonKey = config.public.supabaseAnonKey
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  return supabase
}