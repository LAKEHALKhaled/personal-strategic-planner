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
          <Typography className={classes.heading}>Weak Goal Example</Typography>
          <Typography className={classes.secondaryHeading}>No SMART Applied</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I’m going to get a better job
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>SMART Goal Example</Typography>
          <Typography className={classes.secondaryHeading}>
             SMART was Applied
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I will land my dream job working for a software company like Google or Facebook.
          To achieve this, I will apply to 10 jobs per week for 3 months — submitting a total of 120 job applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <Typography className={classes.heading}>Specific</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I’m going to become a working as a software developer for a software company like Google or Facebook.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Measurable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I will apply to a minimum of 120 job applications within 3 months.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Achieveable</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I’ve studied for 3 months in a full time BootCamp and learned a lot of languages.
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Relevant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I want to collaborate with interesting people, contribute to something innovative,
           and join a company with room for me to grow.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Time-Based</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I will apply to 120 suitable job applications
           within 3 months by submitting 10 application per week.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
