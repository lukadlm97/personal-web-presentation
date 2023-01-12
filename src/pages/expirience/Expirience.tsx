import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SkillsAcordion from '../../components/skills/SkillsAcordion';
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import WorkExpirienceTimelineItem from '../../components/timelineItem/WorkExpirienceTimelineItem'
import LaptopIcon from '@mui/icons-material/Laptop';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import QuizIcon from '@mui/icons-material/Quiz';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LanIcon from '@mui/icons-material/Lan';
import GroupsIcon from '@mui/icons-material/Groups';
import TerminalIcon from '@mui/icons-material/Terminal';
import FoundationIcon from '@mui/icons-material/Foundation';
import StorageIcon from '@mui/icons-material/Storage';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InventoryIcon from '@mui/icons-material/Inventory';
import SmartToyIcon from '@mui/icons-material/SmartToy';


const useStyles = makeStyles({
    body: {
      width: "auto",
      color:"#8FE3CF",
      background: "#2B4865", 
      display: "flex",
      flexFlow: "column",
      height: "100vh"
    }
  });

export default function ExpirienceTimeline() {
const style=useStyles();

    return (
    <div style={{flexGrow: 1}}> 
      <h1>Expirience Page</h1>
      <Grid container spacing={3} style={{padding:'25px'}}>
        <Grid container item xs={12} sm={6} style={{background:"#002B5B",margin:'15px'}}>
          <div style={{flexGrow: 1}}>
            <h2>Working expirience</h2>
            <Box >
              <h3>Jobs</h3>
              <Timeline>
                  <WorkExpirienceTimelineItem fromTo='2020-present' companyName='Teletrader doo.' technologies='.NET, React' position='Software Developer' icon={<LaptopIcon/>} />
              </Timeline>
            </Box>
            <Box >
              <h3>Faculty</h3>
              <Timeline>
                  <WorkExpirienceTimelineItem fromTo='2019' companyName='Faculty of organizational science - Universty of Belgrade' technologies='' position='Undergradute teaching assistent' icon={<CoPresentIcon/>} />
                  <WorkExpirienceTimelineItem fromTo='2018' companyName='Faculty of organizational science - Universty of Belgrade' technologies='Exam preparation' position='Lecturer' icon={<Diversity3Icon/>} />
                  <WorkExpirienceTimelineItem fromTo='2018' companyName='Faculty of organizational science - Universty of Belgrade' technologies='' position='Student Mentor' icon={<QuizIcon/>} />
                </Timeline>
            </Box>
            <Box >
              <h3>FONIS (students organization on Faculty of organizational science - Universty of Belgrade)</h3>
              <Timeline>
                  <WorkExpirienceTimelineItem fromTo='2019' companyName='FONIS' technologies='High School Hackaton' position='Coordinator' icon={<LanIcon/>} />
                  <WorkExpirienceTimelineItem fromTo='2018' companyName='FONIS' technologies='FON Hackaton' position='PR Team Member' icon={<Diversity3Icon/>} />
                  <WorkExpirienceTimelineItem fromTo='2018' companyName='FONIS' technologies='' position='Team Member' icon={<GroupsIcon/>} />
              </Timeline>
            </Box>    
          </div>
        </Grid>

        <Grid container item xs={12} sm={5} style={{background:"#002B5B",margin:'15px'}}>
        <div style={{flexGrow: 1}}>
        <h2>Skills</h2>
              <Box >
                  <SkillsAcordion skillGrupation='Programming Languages' skillList={['C#','JavaScript','Typescript','Python']} icon={<TerminalIcon/>}/>
                  <SkillsAcordion skillGrupation='Frameworks' skillList={['.NET','ASP.NET','React','Material-UI','Blazor']} icon={<FoundationIcon/>}/>
                  <SkillsAcordion skillGrupation='Databases' skillList={['SQL','MS SQL','RethinkDB','Redis']} icon={<StorageIcon/>}/>
                  <SkillsAcordion skillGrupation='Methodologies' skillList={['UML','Swagger','OpenAPI','JWT','gRPC','Rest','GraphQL','Crawling','Microservices','Onion Architecture']} icon={<AccountTreeIcon/>}/>
                  <SkillsAcordion skillGrupation='Semi-structured data' skillList={['JSON','XML','Protobuffer','Flatbuffer']} icon={<InventoryIcon/>}/>
                  <SkillsAcordion skillGrupation='Tools' skillList={['Git','Visual Studio','Visual Studio Code','MobaXTerm','WinSCP','Total Commander','Jira','Confluence','Git Bash']} icon={<ConstructionIcon/>}/>
                  <SkillsAcordion skillGrupation='.NET Librires' skillList={['Automapper','MediatR','NLog','Serilog','SignalR','Entityframework','Dapper','NBomber','Radzen','ΛngleSharp','HtmlAgilityPack','ObjectPool','Excel-DNA','PdfSharp']} icon={<LibraryBooksIcon/>}/>
                  <SkillsAcordion skillGrupation='React Packages' skillList={['Router Dom','Yup','Redux','Axios','Loadsh']} icon={<InventoryIcon/>}/>
                  <SkillsAcordion skillGrupation='ML assets' skillList={['Jupyter','ARIMA','Backtesting','Time Series']} icon={<SmartToyIcon/>}/>
              </Box>
        </div>
      </Grid>
      </Grid>
    </div>

    );
  }