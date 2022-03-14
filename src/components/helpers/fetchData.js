async function fetchData() {
    const responseData = await fetch(`https://dummyjson.com/products`)
    const jsonData = await responseData.json()
   return jsonData
}


export default fetchData