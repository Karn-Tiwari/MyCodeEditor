
//npm i ract-codemirror2 --legacy-peer-deps
// Ye version ka jo dependecy hai internally wo install kar deta hai
import {useState} from 'react';


import {Box, styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import '../App.css';

import {Controlled as ControlledEditor} from 'react-codemirror2';
// Ye jo kuch bhi xml js and css import hua hai ye iseliye ki jab hum editor me html css js likhenge to ye detect kar paye
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Heading = styled(Box)`
background:#1d1e22;
display:flex;
padding:9px
`;

const Header = styled(Box)`
display:flex;
justify-content:space-between;
background:#060606;
color:#AAAEBC;
font-weight:700;
`;

const Container = styled(Box)`
display-grow:1;
flex-basis:0;
display:flex;
flex-direction:column;
padding:0px 8px 8px;
`;


const Editor =({heading,icon,color,value,onChange})=>{

    const [open,setOpen] = useState(true);


    const handleChange = (editor,data,value)=>{
        onChange(value);
    }

     
    return (
        <Container style={open?null:{flexGrow:0}}>
            <Header>
                <Heading>
                    <Box component= "span"
                    style={{
                    background:color,
                    height:20,
                    width:20,
                    display:'flex',
                    placeContent:'center',
                    borderRadius:5,
                    marginRight:5,
                    PaddingBottom:2,
                    color:'#000'
                    }}>
                        {icon}</Box>
                        {heading}
                </Heading>
                <CloseFullscreenIcon
                fontSize='small'
                style={{alignself:'center'}}
                onClick ={()=>setOpen(prevState => !prevState)}
                    />

            </Header>
            <ControlledEditor
            className='controlled-editor'
            value = {value}
            onBeforeChange={(editor,data,value)=>{onChange(value)}
            }
            options={{
                mode:'xml',
                theme:'material',
                lineNumbers:true,
            }}
            />
        </Container>
    )
}
export default Editor;



// Controlled component is a component that has its own state and renders based on that state.
// aur jinko react control karta hai

// and 
// Uncontrolled component is a component that doesn't have its own state and renders based on the state of its parent component.
// Jinko react control nhi karta hai
