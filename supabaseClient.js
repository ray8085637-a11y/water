import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmlstgssbtrftukgxupo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbHN0Z3NzYnRyZnR1a2d4dXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1OTIwODksImV4cCI6MjA3MTE2ODA4OX0.-t-fZ4QuaaV_BNSpA_ncqy50-SVADOdqLwWVZaH81II'

export const supabase = createClient(supabaseUrl, supabaseKey)
