import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("instruments").select();
    console.log('load data', data);
    return {
        instruments: data ?? [],
    };
}