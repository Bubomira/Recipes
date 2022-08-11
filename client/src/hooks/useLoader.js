import { useState } from 'react'

export default function useLoader(){
  let [loader, setLoader] = useState(true)
    const setNewLoader = () => {
        setLoader(oldState => !oldState)
    }

    return[
        loader,
        setNewLoader
    ]
}