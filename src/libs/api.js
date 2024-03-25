const __request_json = async (url, data) => {
  
}

const __request_content = async (url) => {
  return await $.get(url)
}

const getProductByUrl = async (url) => {
  return await __request_content(url)
}

const getProductVariantByUrl = async (vid) => {

}

export { getProductByUrl, getProductVariantByUrl }