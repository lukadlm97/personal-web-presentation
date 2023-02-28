import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

interface Content{
    fromTo:string,
    companyName:string,
    position:string,
    technologies:string,
    icon:JSX.Element
}

export default function WorkExperienceTimelineItem(props:Content){

    return (
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            
    fontFamily='Montserrat, serif'
            style={{ color: '#8FE3CF',flex:0.3 }}
        >
            {props.fromTo}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            {props.icon}
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} fontFamily='Montserrat, serif'>
            <Typography variant="h6" component="span" fontFamily='Montserrat, serif'>
            {props.position}
            </Typography>
            <Typography fontFamily='Montserrat, serif'>
            {props.companyName}
            </Typography>
            <Typography fontFamily='Montserrat, serif'>
            {props.technologies}
            </Typography>
        </TimelineContent>
        </TimelineItem>
    )
}
