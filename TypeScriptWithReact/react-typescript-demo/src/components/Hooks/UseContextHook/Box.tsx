import { useContext } from "react"
import {ThemeContext} from '../UseContextHook/UseContex.tsx'

export const Box =()=>{

    const theme = useContext(ThemeContext);

    return <div style={{backgroundColor:theme.primary.main ,color:theme.primary.text}}>Theme context Box.</div>
}