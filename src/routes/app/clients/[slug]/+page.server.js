import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let slug = params.slug;
    console.log('slug', slug);

	let { data } = await supabase.from("clients").select(`
		*,
		client_status (id, name)
	`)
	.eq('id', slug);
	return data.length > 0 ? data[0] : {};

	// if (params.slug === 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }
	// error(404, 'Not found');
}