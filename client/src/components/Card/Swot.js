import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><strong>Strengths</strong>  (Positive internal factors)</Typography>
          <Typography className={classes.secondaryHeading}>What benefits do you have which others do not have?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Creativity, 
          Versatility, 
          Flexibility, 
          Focused, 
          Taking Initiative, 
          Honesty, 
          Dedication, 
          Integrity, 
          Continuous Learning, 
          Self-control, 
          etc..

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><strong>Weaknesses</strong>  (Negative internal factors)</Typography>
          <Typography className={classes.secondaryHeading}>What negative habits are holding you back?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Self-criticism, 
          Insecure, 
          Extremely Introverted, 
          Extremely Extroverted, 
          Creative Writing, 
          Too detail oriented, 
          Financial Literacy, 
          A Particular Software, 
          Too sensitive, 
          Presentation Skills, 
          etc..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}> <strong>Opportunities</strong>  (Positive external factors) </Typography>
          <Typography className={classes.secondaryHeading}> Can you take advantage of external factors that contribute to your success?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Good position at work
          Commitment to further study
          Support from work for further training
          Supportive family
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}> <strong>Threats</strong> (Negative external factors)</Typography>
          <Typography className={classes.secondaryHeading}> Consider putting in place contingency plans for dealing with them if they occur.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Competition, 
          Financial Condition, 
          Regulations, 
          Quality of Life, 
          Approvals, 
          Weather, 
          Disasters, 
          Enviroment, 
          etc..
          </Typography>
        </AccordionDetails>         
      </Accordion>
    </div>
  );
}
