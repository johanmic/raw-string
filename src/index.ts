import deburr from 'lodash.deburr'
export default  (str:string) => deburr(str).replace(/\W+/g, "").toLowerCase().trim()
