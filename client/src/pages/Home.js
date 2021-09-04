
import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import AreaList from '../components/AreaList';
import AreaForm from '../components/AreaForm';
 import Smart from '../components/Card/Smart'
import Swot from '../components/Card/Swot'
import Wheel from '../components/Card/Wheel'
import { QUERY_AREAS } from '../utils/queries';
import Container from '@material-ui/core/Container';
import { useEffect, useRef } from 'react';
import { init } from 'ityped'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: '0 auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = () => {
  const { loading, data } = useQuery(QUERY_AREAS);
  const areas = data?.areas || [];

  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useEffect(() => {
      init(textRef.current, {
          showCursor:false,
          backDelay:2000,
          backSpeed:100,
          strings: ["Personal SWOT Analysis"],

      })
      init(textRef2.current, {
        showCursor:false,
        backDelay:2000,
        backSpeed:100,
        strings: ["SMART criteria"],

    })
    init(textRef3.current, {
      showCursor:false,
      backDelay:2000,
      backSpeed:100,
      strings: ["Balance Wheel of life"],

  })
  }, []);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>; 
  return (
    <Card className={classes.root}>
    <CardContent>
      <div className="mt-5 pt-5 pb-5">
        <img className="center mt-2" src="https://pbs.twimg.com/media/Ddel7RRV0AAsllR.jpg" alt=""></img>
        </div> 
        <div className="mb-3 text-center mt-5">
         <h1 className="text-dark center p-3">
          <span className="red"  ref={textRef}></span> 

        </h1>
        <p className="p-5">You are most likely to succeed in life if you use your talents to their fullest extent. Similarly,
           you'll suffer fewer problems if you know what your weaknesses are, 
           and if you manage these weaknesses so that they don't matter in the work you do.</p>
           
           <h6 className=" mb-5"> So how you go about identifying these strengths and weaknesses,
           and analyzing the opportunities and threats that flow from them?
            SWOT Analysis is a useful technique that helps you do this.</h6>
        </div>
        <Swot/>
        <div className="pt-20 pb-5">
        <img className= "center" src="https://www.toolshero.com/wp-content/uploads/2018/03/smart-goals-toolshero.jpg" alt=""></img>
        </div> 
        <div className="mb-3 p-5 text-center center  mt-5 pt-5">
         <h1 className="text-dark center p-3 mb-3">
         <span className="red" ref={textRef2}></span>
        
        </h1>
        <p>Many people spend their lives drifting from one job to another, or rushing around trying to get more done 
          while actually accomplishing very little. </p>
           
           <h6> Setting SMART goals means you can clarify your ideas, focus your efforts, 
          use your time and resources productively, and increase your chances of achieving what you want in life.</h6>
        </div>
       
        <Smart/>
        <div className="pt-20 pb-5">
        <img className= "center" src="https://images.unsplash.com/photo-1510024161681-8a1f66ed1a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""></img>
        </div> 
        <div className="mb-3 p-5 text-center center  mt-5 pt-5">
         <h1 className="text-dark center p-3">
          <span className="red" ref={textRef3}></span> 
        
        </h1>
        <p className=" p-5">You can develop a wheel of life with 8 to 12 categories depending on the focus areas of your life. 
          Aside from a difference in the number of categories you can choose, the names assigned to each of them may vary across resources.
         The general categories found in a wheel of life are:</p>
           
           <h6> Personal growth, Career, Finances, Fun and leisure, Significant other, Environment, Health, Family and friends</h6>
        </div>
        
        <Wheel/>
        
      <div className="flex-row justify-center">
        <div className="mb-3 p-3">
          
        
        
        
            <div className="pt-20 pb-5">
           <img src="https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80" alt="" className= "center" />
           </div>
        
        </div>
     
       
        <div className="mb-3">
          {Auth.loggedIn() ? (
            <div className="m-5">
            <div className="text-center m-5 p-5">
              <h4><a href="/profile" className="red">Profile</a> to set your</h4>
              <h1 className="mb-0" style={{fontSize: 4+'rem'}}>Areas <span style={{color: '#1976d2'}}>&</span> Goals</h1>
            </div>
            </div>
            ) : (
            <div className="m-5">
              <div className="text-center m-5 p-5">
                <h4><a href="/login" className="red">Login</a> to set your </h4>
                <h1 className="mb-0" style={{fontSize: 4+'rem'}}>Areas <span style={{color: '#1976d2'}}>&</span> Goals</h1>
              </div>
              {/* <div className="text-center m-5 pb-5">
                <AreaList
                areas={areas}
                />
              </div> */}
                
              
            </div>
          )}
        </div>
      </div>
      
          </CardContent>
    </Card>
  );
};

export default Home;
