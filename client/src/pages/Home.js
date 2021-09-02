
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
  return (

    <Container maxWidth="lg" className="pt-20">
        <div className="pt-20 pb-20">
        <img className= "center" src="https://pbs.twimg.com/media/Ddel7RRV0AAsllR.jpg" alt=""></img>
        </div> 
        <div className="col-12 col-md-10 mb-3 p-5 text-center center card mt-5 pt-5">
         <h1 className="col-12 col-md-10 text-dark center p-3">
          <span ref={textRef}></span> <br></br>
        
        </h1>
        <p className=" p-5">You are most likely to succeed in life if you use your talents to their fullest extent. Similarly,
           you'll suffer fewer problems if you know what your weaknesses are, 
           and if you manage these weaknesses so that they don't matter in the work you do.</p>
           <hr></hr>
           <h6> So how you go about identifying these strengths and weaknesses,
           and analyzing the opportunities and threats that flow from them?
            SWOT Analysis is a useful technique that helps you do this.</h6>
        </div>
        <div className="col-12 col-md-10 mb-3 p-5 text-center center card mt-5 pt-5">
        <Swot/>
        </div>
        
        <div className="pt-20 pb-20">
        <img className= "center" src="https://www.toolshero.com/wp-content/uploads/2018/03/smart-goals-toolshero.jpg" alt=""></img>
        </div> 
        <div className="col-12 col-md-10 mb-3 p-5 text-center center card mt-5 pt-5">
         <h1 className="col-12 col-md-10 text-dark center p-3 mb-3">
         <span ref={textRef2}></span><br></br>
        
        </h1>
        <p>Many people spend their lives drifting from one job to another, or rushing around trying to get more done 
          while actually accomplishing very little. </p>
           <hr></hr>
           <h6> Setting SMART goals means you can clarify your ideas, focus your efforts, 
          use your time and resources productively, and increase your chances of achieving what you want in life.</h6>
        </div>
        <div className="col-12 col-md-10 mb-3 p-5 text-center center card mt-5 pt-5">
        <Smart/>
        </div>

        <div className="pt-20 pb-20">
        <img className= "center" src="https://images.unsplash.com/photo-1510024161681-8a1f66ed1a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""></img>
        </div> 
        <div className="col-12 col-md-10 mb-3 p-5 text-center center card mt-5 pt-5">
         <h1 className="col-12 col-md-10 text-dark center p-3">
          <span ref={textRef3}></span> <br></br>
        
        </h1>
        <p className=" p-5">You can develop a wheel of life with 8 to 12 categories depending on the focus areas of your life. 
          Aside from a difference in the number of categories you can choose, the names assigned to each of them may vary across resources.
         The general categories found in a wheel of life are:</p>
           <hr></hr>
           <h6> Personal growth, Career, Finances, Fun and leisure, Significant other, Environment, Health, Family and friends</h6>
        </div>
        <div className="col-12 col-md-10 mb-3 p-5 text-center center card mt-5 pt-5">
        <Wheel/>
        </div>
        <div>
          <img className= "center" src="https://t4.ftcdn.net/jpg/03/69/62/29/360_F_369622918_WEQJWheiQBVCJ40PK0Bv3ZsP3AhMvC5H.jpg" alt=""></img>
        </div>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3">
          
        
        
        
            <div className="pt-20">
           <img src="https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80" alt="" className= "center" />
           </div>
        
        </div>
     
       
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="m-5">
              <div className="text-center m-5 p-5">
                <h4>Anonymous</h4>
                <h1 className="mb-0" style={{fontSize: 4+'rem'}}>Areas <span style={{color: 'red'}}>&</span> Goals</h1>
              </div>
              <div className="text-center m-5 pb-20">
                <AreaList
                  areas={areas}
                />
               </div>
                
              
            </div>
          )}
        </div>
      </div>
      
    </Container>
  );
};

export default Home;
