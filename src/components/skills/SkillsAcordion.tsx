import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Content{
    skillGrupation:string,
    skillList:string[],
    icon:JSX.Element
}

export default function SkillsAcordion(props:Content){

    return(
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#8FE3CF",
            textAlign:'right'
          }}
        >
            <Typography  sx={{ fontSize: 16 }} style={{marginRight:'20px'}}>{props.icon}</Typography>
            <Typography  sx={{ fontSize: 16 }}>{props.skillGrupation}</Typography>
        </AccordionSummary>
        <AccordionDetails   sx={{
            backgroundColor: "#256D85"
          }}>
          <Typography>
          {props.skillList.map((item)=>(
                      <Typography sx={{fontSize:13,fontWeight: 'bold',color:'#8FE3CF'}}>
                        {item}
                    </Typography>
                ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}