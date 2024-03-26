export const findJsonDecode = (content, id = 'PROPDUCT_JSON_CODE') => {
  const jsonText = $(content).find(`#${ id }`).text();
  return JSON.parse(jsonText);
}