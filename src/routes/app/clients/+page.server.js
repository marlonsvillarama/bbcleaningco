import { supabase } from "$lib/supabaseClient";

export async function load() {
    let { data } = await supabase.from("clients").select(`
        *,
        client_status (id, name)
    `)
    .order('id');
    data = data.map(d => {
        console.log('d client_status', d.client_status);
        return {
            ...d,
            name: `${d.first_name} ${d.last_name}`,
            address: `${d.address_1}${d.address_2 ? `\n${d.address_2}` : ''}${d.barangay ? `\nBarangay ${d.barangay}` : ''}\n${d.city}${d.province ? `, ${d.province}` : ''}`,
            status: d.client_status.name,
            active: d.active === true ? 'Yes' : 'No'
        };
    });
    console.log('load data', data);
    return {
        columns: [
            { id: 'id', label: 'ID', width: 20 },
            { id: 'name', label: 'Name', width: 48 },
            { id: 'address', label: 'Address', width: 48 },
            { id: 'email', label: 'Email', width: 32 },
            { id: 'phone', label: 'Phone', width: 28 },
            { id: 'status', label: 'Status', width: 24 },
            { id: 'active', label: 'Active', width: 20 },
            { id: 'actions', label: '' },
        ],
        rows: data ?? [],
    };
}