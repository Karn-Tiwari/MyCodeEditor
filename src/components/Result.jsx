
import {useContext,useState,useEffect} from 'react'

import {Box,styled} from '@mui/material'

import {DataContext} from '../Context/DataProvider'

const Container = styled(Box)`
height:41vh;
`;

const Result = () => {
    const {src,setSrc} = useState('');

    const srcCode=`
    <html>
    <body>${html}</body>
    <script>${css}</script>
    <style>${js}</style>
    </html>
    `

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(srcCode)
        },1000)
        return ()=>clearTimeout(timeout)
    },[html,css,js])

    return(
        <Container>
            <iframe srcDoc={srcCode} 
            title="output"
             sandbox="allow-scripts"
             frameBorder="0"
             width="100%"
            height="100%"
            />
        </Container>
    )
}


export default Result