import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

interface Content{
    fromTo:string,
    schoolName:string,
    schoolType:string,
    level:string|null,
    domain:string|null
}


export default function EducationTimelineItem(props:Content){

    return (
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            style={{ color: '#8FE3CF',flex:0.3 }}
        >
            {props.fromTo}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            <SchoolIcon style={{ color: '#256D85' }}/>
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
            {props.schoolType}
            </Typography>
            <Typography>
            {props.schoolName}
            </Typography>
           {props.domain &&
            <Typography>
            {props.domain}
            </Typography>
           }
            {props.level &&
            <Typography>
            {props.level}
            </Typography>
           }
        </TimelineContent>
        </TimelineItem>
    )
}
