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
          <Typography className={classes.heading}>Determine your life's focus areas</Typography>
          <Typography className={classes.secondaryHeading}>Most important areas of your life: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You could use things like education, career, family, friends, pleasure, public service, financial freedom, physical fitness, positivity or artistic expression.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Create a wheel </Typography>
          <Typography className={classes.secondaryHeading}>
          Create a wheel using the categories you chose
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Once you have decided on your life's focus areas, you can create a diagram that can accommodate that many 
          categories and then label each spoke of your wheel of life.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <Typography className={classes.heading}>Evaluate each area</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In your life, you likely experience times when more attention has to be devoted to certain areas or roles than others. The concept behind the wheel of life is
           that you can find fulfillment and happiness if you can find the right balance between each dimension.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Connect the dots</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After you have gone through each category and marked your score on your wheel of life, connect each mark around the circle. By connecting the dots,
           you can see just how each area compares and decide whether your wheel looks and feels balanced.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Compare the results to your ideal levels</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Different areas of your life require different amounts of attention, specifically in various seasons. In other words,
           achieving a balanced life doesn't have to mean that you're giving an equal amount of focus to each category. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Take steps to address the areas you'd like to improve</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Assess any gaps that exist between your current and ideal life balance. There could be areas where you feel
           you're unable to devote your desired amount of attention because you're too focused on another dimension.
           Using this visual tool, you can identify the gaps and decide what you need to do to establish balance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}