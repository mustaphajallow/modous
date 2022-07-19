

import React, { useState } from 'react';
import './framework.scss';   
import {UserIcon, PhonIcon, NetIcon, GlobeIcon, ReadingIcon, LanguageIcon, SettingsIcon,EyeIcon ,MoviesIcon,TechIcon  } from './icons';
import LineChats from './muChart';

import {UserData} from './Data'

function Framework() {

  const [userData , setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets:[{lable:'user Gain',
    data: UserData.map((data) => data.userGrain)
  }]
  })
  return (
    <div className="grid-container">
        <section className="header-cotainer">
            <div className="profile-info">

                  <img src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='img-profile' alt="" />
            <div className="content">
               <div className="STACK">
                    <p>
                      “Work for Growth, Code for Love”</p>
                </div>
                <div className="refrence">
                    <div className="inline">
                        <h6 className='blue'>Reference</h6>
                        <p>Available</p>
                    </div>
                    <p>Upon Request</p>
                </div>

            
            </div> 
            </div>
         
            <div className="contact">
                 <div className="info">
                    
                   <div className="icons">
                   <UserIcon />
                   </div> 
                   <h5>PORTOFOLIO</h5>
               </div>
               <div className="info">
                    
                    <div className="icons">
                    <p>1)</p>
                    </div> 
                    <p>wakatime.com/@sulsira</p>
                </div>
                <div className="info">
                    
                    <div className="icons">
                    <p>2)</p>
                    </div> 
                    <p>github.com/jallowmamadou</p>
                </div>
                <div className="info">
                    
                    <div className="icons">
                    <p>3)</p>
                    </div> 
                    <p>bitbucket.org/sulsira</p>
                </div>
                <div className="info">
                    
                    <div className="icons">
                    <p>4)</p>
                    </div> 
                    <p>hub.docker.com/u/sulsira</p>
                </div>
               
            </div>
        </section>
         <section className="professional">
             
             <section className="light-background">

              <div className="experience">
                <div className="icons-hed">
                <GlobeIcon/>
               </div> 
               <h4>FRAMEWORKS</h4>
            </div>
             <div className="developer">
                
             <Stacks userData={userData}/>
             </div>
             
             </section>
             
             <section className="dack-background">
               <Eduction/>
               <Skills/> 
              
             </section>
  
            
       
            
            
         
         </section>

       
    </div>
  );
}




function Stacks ({userData})  {
    return (
        <>
        
          <div className="frame-grid">
             <div className="PHP-sj">
                <h5 className="title">PHP & Javascript</h5>

                <div className="frame-level">
                    <div className="indecate lar"></div>
                    <p>Larvavel</p>
                </div>
                <div className="frame-level">
                    <div className="indecate cod"></div>
                    <p>CodeIgniter</p>
                </div>
                <div className="frame-level">
                    <div className="indecate jq"></div>
                    <p>jQuery</p>
                </div>
                <div className="frame-level">
                    <div className="indecate vue"></div>
                    <p>Vue</p>
                </div>
             </div>
             <div className="HTML-css">
             <h5 className="title">HTML & CSS</h5>
             <div className="frame-level">
                    <div className="indecate lar">    <p>Larvavel</p></div>
                
                </div>
                <div className="frame-level">
                    <div className="indecate cod"> <p>CodeIgniter</p></div>
                   
                </div>
                <div className="frame-level">
                    <div className="indecate jq"><p>jQuery</p></div>
                    
                </div>
             
             
             </div>
             <div className="graphs">
             <h5 className="title">Graph</h5>
               <div className="frame-level">
                    <div className="indecate lar">   </div>
                 <p>Chartjs</p>
                </div>
                <div className="frame-level">
                    <div className="indecate cod"> </div>
                   <p>GoogleChar</p>
                </div>
                <div className="frame-level">
                    <div className="indecate jq"></div>
                    <p>Morris</p>
                </div>
             </div>
             <div className="orders">
             <h5 className="title">other</h5>
             <div className="eng same">
                    <p className='node'>NodeJs</p>
                     <div className="rating"></div>
                     <p className='persen'>90%</p>
                  </div>

                  <div className="ger same">
                    <p className='node'>Angular4</p>
                     <div className="rating"></div>
                     <p className='persen'>100%</p>
                  </div>
                  <div className="fula same">
                    <p className='node'>AdonisJs</p>
                     <div className="rating"></div>
                     <p className='persen'>40%</p>
                  </div>
                  <div className="mandin same">
                    <p className='node'>Ionic</p>
                     <div className="rating"></div>
                     <p className='persen'>100%</p>
                  </div>
                
             </div>
             
          </div>
          <div className="graphs-tools">

              <div className="experience">
                <div className="icons-hed">
                <GlobeIcon/>
               </div> 
               <h4>APPLICATIONS & TOOLS</h4>
            </div>
            
            <LineChats chartData={userData} />
          </div>
          
          

          <section className="hobbies-grid">

             <div className="hobbies">
             <div className="graphs">


              <div className="experience">
              <div className="icons-hed">
               <GlobeIcon/>
               </div> 
            <h4>HOBBIES</h4>
             </div>
            
            
            <div className="hub-grid">
              <div className="cont">
                 <div className="icon">
                 <TechIcon />
              </div>
              <p className="text">Trending Technology </p>

              </div>
              <div className="cont">
                 <div className="icon">
                 <MoviesIcon />
              </div>
              <p className="text">Watching Comedy</p>

              </div>
              <div className="cont">
                 <div className="icon">
                 <MoviesIcon/>
              </div>
              <p className="text">Doctor Who</p>

              </div>
              <div className="cont">
                 <div className="icon">
                 <ReadingIcon/>
              </div>
              <p className="text">Reading about Time Travel </p>

              </div>
             
                                   
            </div>
            
            
            
            
            
            
            
            
            
             </div>
              
             </div>
             <div className="prosonality">

             <div className="graphs">

              <div className="experience">
               <div className="icons-hed">
                  <GlobeIcon/>
                  </div> 
                 <h4>PRESONALITY</h4>
               </div>
            </div>
              <div className="blue-circle">

                <p className="vig ant">Vigilant</p>
                 <p className="vig pass">Compassionate</p>
               <p className="vig able">Adaptable</p>
                 <p className="vig cat">Dedicated</p> 
              </div>
             </div>

          </section>
          
        
        
        </>
    
    );
  }
  
  
  function Eduction() {
    return (
      <div className="">
           <div className="contact">
               
               <div className="school-at">
               <div className="info">
                    
                    <div className="icons">
                    <EyeIcon/>
                    </div> 
                    <h5>OBSERVABILITY</h5>
                </div>
                  <div className="observability">
                    
                   <p>DateDog</p>
                   <p className='exctens'>RollBack</p> 
                   <p>Sentry</p>
                   <p>Logstash</p>
                   <p>Kibana</p>
                  
                   
                </div>  
               </div>

               <div className="language">

                <div className="info">
                    <div className="icons">
                    <LanguageIcon/>
                    </div> 
                    <h5>OWN PROJECTS</h5>
                </div>
                 
                  <div className="own-project">
                    <p className='proj-name'>Sellox</p>
                    
                     <p className="info">A platform to help small business goonline easily.</p>
                     <p className="utg">sellox.io</p>
             
                  </div>
                  <div className="own-project">
                    <p className='proj-name'>Famvil</p>
                    
                     <p className="info">A close family network for members to
                                      keep and share important moments.</p>
                     <p className="utg">famvil.com</p>
             
                  </div>
                  <div className="own-project">
                    <p className='proj-name'>Laravel Feature Generator</p>
                    
                     <p className="info">Helping quick-start a feature by
                         scaffolding controllers, routes, model...</p>
                     <p className="utg">bitbucket.org/sulsira/laravel-feature-generator</p>
             
                  </div>
                  <div className="own-project">
                    <p className='proj-name'>Residence Management System</p>
                    
                     <p className="info">Simplified single residence platform
                       for both residents and managers.</p>
                     <p className="utg">www.residency.my</p>
             
                  </div>

               
               </div>

               
               <div className="language">

                <div className="info">
                    <div className="icons">
                    <LanguageIcon/>
                    </div> 
                    <h5>CERTIFICATES  </h5>
                </div>
                 
                  <div className="own-project">
                    <p className='proj-name'>Sellox</p>
                    
                     <p className="info">A platform to help small business goonline easily.</p>
                     <p className="utg">sellox.io</p>
             
                  </div>

                 <div className="ict">

                  <div className=" advance">
                     <p className='proj-name'>Advance ICT Training</p>
                    
                      <p className="info">American International University</p>
                      <p className="utg">2016</p>
             
                  </div>
                  <div className=" advance">
                     <p className='proj-name'>SPSS & Stata</p>
                    
                      <p className="info">Gambia Bureau of Statistics</p>
                      <p className="utg">2016</p>
             
                  </div>
                  <div className=" advance">
                     <p className='proj-name'>Basics Statistics</p>
                    
                      <p className="info">
                      Gambia Bureau of Statistics
                      </p>
                      <p className="utg">2016</p>
             
                  </div>
                  <div className=" advance">
                     <p className='proj-name'>Web Content Management & Development</p>
                    
                      <p className="info">Gambia Telecommunications & Mult   imedia Institute | </p>
                      <p className="utg">2016</p>
             
                  </div>
                  <div className=" advance">
                     <p className='proj-name'>S&T Data Collection</p>
                    
                      <p className="info">Gambia Ministry of Higher Education </p>
                      <p className="utg">2016</p>
             
                  </div>

                 </div>
                
                 

               
               </div>

               
            
               
               
               
            </div>
      </div>     
    );
  }

  function Skills() {
    return (
      <div className="skills">
           <div className="contact">
               
             
             
              
              
               
            </div>
      </div>     
    );
  }

  

  

  export default  Framework