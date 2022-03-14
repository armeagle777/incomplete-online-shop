async function fetchData() {
    const responseData = await fetch(`https://dummyjson.com/products`)
    const jsonData = await responseData.json()
   return jsonData
}

const getDataFromLocal = () => {
    const dataFromLocal = localStorage.getItem('amazonData')
    if (dataFromLocal) {
        return JSON.parse(dataFromLocal)
    }
}
export {fetchData,getDataFromLocal}