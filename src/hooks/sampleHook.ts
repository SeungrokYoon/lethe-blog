import { useState } from "react"

const sampleHook = ()=>{
  const [value, setValue] = useState()
  return {value, setValue}
}

export default sampleHook