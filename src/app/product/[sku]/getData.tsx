export async function getData(sku: string) {
    console.log('Fetching data for SKU:', sku);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page-style/${sku}`);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
   
    const data = await res.json();
    
    return data;
}
