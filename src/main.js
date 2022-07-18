

import React from 'react';
import './main.scss';   
import {UserIcon, PhonIcon, NetIcon, GlobeIcon, EducationIcon, LanguageIcon, SettingsIcon} from './icons';
import Framework from './framework';
function Main() {
  return (
    <div className="grid-container">
        <section className="header-cotainer">
            <div className="profile-info">

                  <img src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='img-profile' alt="" />
            <div className="content">
                <h3 className='name'>MAMADOU JALLOW</h3>
                <div className="STACK">
                    <p>FULL-STACK DEVELOPER</p>
                </div>
                <p className="note">
                My best quality lies in the perception of problems and
               coming up with logical and small solutions to such problems.
                 I am very good at making up ideas and building ideas from
                 nothing to something. However, I am open to learning new
                         ways of doing things and also, I am a quick learner
                </p>
            </div> 
            </div>
         
            <div className="contact">
                 <div className="info">
                    
                   <div className="icons">
                   <UserIcon/>
                   </div> 
                   <h5>CONTACT</h5>
               </div>
               <div className="info">
                    
                    <div className="icons">
                    <NetIcon/>
                    </div> 
                    <p>sulsairalumo@gmail.com</p>
                </div>
                <div className="info">
                    
                    <div className="icons">
                    <PhonIcon/>
                    </div> 
                    <p>+49 15238848165</p>
                </div>
                <div className="info">
                    
                    <div className="icons">
                    <GlobeIcon/>
                    </div> 
                    <p>Linus-Funke-Weg 14.80995 Munich,Germany</p>
                </div>
               
            </div>
        </section>
         <section className="professional">
             
             <section className="light-background">

              <div className="experience">
                <div className="icons-hed">
                <GlobeIcon/>
               </div> 
               <h4>PROFESSIONAL EXPERIENCE</h4>
            </div>
             <div className="developer">
                
             <Stacks/>
             </div>
             </section>
             <section className="dack-background">
               <Eduction/>
               <Skills/>
             </section>


       
             

         </section>

         <section className="frame">
           <Framework/>
         </section>
    </div>
  );
}




function Stacks ()  {
    return (
        <>
        
          <div className="dev">
         <div className="hd">
            <div className="dev-know">
                <h5>FULLSTACK DEVELOPER</h5>
                <div className="inline">

                 <p className="hotal">HOTALBIRD</p>
                  <p className="link">http://hotalbird.com</p>
           
                </div>
                </div>
            <div className="date">
                <p className="date-text ">Nov. 2019 -Present</p>
                <p className="contry">Germany</p>
            </div>
         </div>
         <div className="via-info">
            <p>-system analysis & Software Development</p>
            <p>-Integrating third party APIs (Booking.com, Soap apis)</p>
            <p>-Code quality</p>
            <p>-Wxtending and bulding features</p>
         </div>
        
      </div>

      <div className="dev">
         <div className="hd">
            <div className="dev-know">
                <h5>PROGRAMMER</h5>
                <div className="inline">

                 <p className="hotal">LEVELS GMBH & CO. KG </p>
                  <p className="link">| https://levels.one</p>
           
                </div>
                </div>
            <div className="date">
                <p className="date-text ">2017 - 2019</p>
                <p className="contry">Germany</p>
            </div>
         </div>
         <div className="via-info">
            <p>- System analysis & Software Development / Fullstack Development</p>
            <p>- Integrating third party APIs (Intuit, Dropbox, Twilio, Sipgate)</p>
            <p>- Optimizing and decoupling existing code base</p>
            <p>- Extending and building features and endpoints / IVR system and Vo </p>
         </div>
        
      </div>
      <div className="dev">
         <div className="hd">
            <div className="dev-know">
                <h5>SYSTEM ANALYST/ARCHTECT & CO-FOUNDER</h5>
                <div className="inline">

                 <p className="hotal">GOLUMA LTD.</p>
                  <p className="link"> http://goluma.com</p>
           
                </div>
                </div>
            <div className="date">
                <p className="date-text ">2011 - 2017</p>
                <p className="contry">Germany</p>
            </div>
         </div>
         <div className="via-info-system">
            <div className="system">
                <p>-Wxtending and bulding features</p>
              <p>-system analysis & Software Development</p>
              <p>-Integrating third party APIs (Booking.com, Soap apis)</p>
            </div>
            <div className="system">
              <p>-system analysis & Software Development</p>
              <p>-Code quality</p>
              <p>-Integrating third party APIs (Booking.com, Soap apis)</p>
            </div>

            
            
         </div>
        
      </div>
      <div className="dev">
         <div className="hd">
            <div className="dev-know">
                <h5>LECTURER</h5><p className="link">(ADVANCED WEB PROGRAMMING)</p>
                <div className="inline">

                 <p className="hotal">MANAGEMENT DEVELOPMENT INSTITUTE</p>
                  
           
                </div>
                </div>
            <div className="date">
                <p className="date-text ">Sep. 2016 - Jul. 2017</p>
                <p className="contry">Germany</p>
            </div>
         </div>
         <div className="via-info">
            <p>- OOP Programming / PHP / AJAX / HTML / JavaScript / Design Patterns</p>
           
         </div>
        
      </div>
      <div className="dev">
         <div className="hd">
            <div className="dev-know">
                <h5>SENIOR ICT OFFICER</h5>
                <div className="inline">

                 <p className="hotal control">MINISTRY OF HIGHER EDUCATION MANAGEMENT
INFORMATION SYSTEM</p>
                  <p className="link">| http://moherst.gov.gm</p>
           
                </div>
                </div>
            <div className="date">
                <p className="date-text ">2014 - 2017</p>
                <p className="contry">Germany</p>
            </div>
         </div>
         <div className="via-info-system">
            <div className="system">
               
              <p>- Software Development</p>
              <p>- Backend Programmer</p>
            </div>
            <div className="system">
            
              <p>- Server Management</p>
              <p>- Front-end Development</p>
            </div>

            
            
         </div>
        
      </div>
      <div className="dev">
         <div className="hd">
            <div className="dev-know">
                <h5>WEB DEVELOPER</h5>
                <div className="inline">

                 <p className="hotal">FOLONK LTD. </p>
                  <p className="link"> https://app.kubejara.com</p>
           
                </div>
                </div>
            <div className="date">
                <p className="date-text ">Sep. 2016 - Jul. 2017</p>
                <p className="contry">Germany</p>
            </div>
         </div>
         <div className="via-info-system">
            <div className="system">
               
              <p>- Backend developer</p>
             
            </div>
            <div className="system">
            
              <p>- Frontend developer</p>
             
            </div>

            
            
         </div>
        
      </div>
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
                    <EducationIcon/>
                    </div> 
                    <h5>EDUCATION</h5>
                </div>
                  <div className="country-date">
                    
                   <p>2014 - 2017</p>
                    <p>| Gambia</p>
                </div>   <p className="BS">BSc in information System</p>
                <p className="utg">University of the Gambia</p>
             
               </div>

               <div className="language">

                <div className="info">
                    <div className="icons">
                    <LanguageIcon/>
                    </div> 
                    <h5>LANGUAGES</h5>
                </div>
                 
                  <div className="eng">
                    <p>English</p>
                     <div className="rating"></div>
                  </div>

                  <div className="ger">
                    <p>German</p>
                     <div className="rating"></div>
                  </div>
                  <div className="fula">
                    <p>Fula</p>
                     <div className="rating"></div>
                  </div>
                  <div className="mandin">
                    <p>Mandinka</p>
                     <div className="rating"></div>
                  </div>
                  <div className="wol">
                    <p>Wollof</p>
                     <div className="rating"></div>
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
               
               <div className="school-at">
               <div className="info">
                    
                    <div className="icons">
                    <SettingsIcon/>
                    </div> 
                    <h5>SKILLS</h5>
                </div>
                  <div className="programing-language">
                    <div className="pro">
                      <p>PROGRAMING LANGUAGGE</p>
                    </div>
                    <div className="all-language">

                    <div className="html">
                        <p className='lang'>HTML</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="html">
                    <p className='lang'>CSS</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>
                         
                         

                       </div>
                    </div>
                    <div className="html">
                    <p className='lang'>PHP</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="html java">
                    <p className='lang'>Java</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="mys html">
                    <p className='lang'>MySQL</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="html">
                    <p className='lang'>JavaScript/TypesScrpt</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="py html">
                    <p className='lang'>Python</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="shell html">
                    <p className='lang'>Shell/Bash scrpting</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="exp html">
                    <p className='lang'>Expressjs</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="html">
                    <p className='lang'>Elesticsearch</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="redis html">
                    <p className='lang'>Redis</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    <div className="mic html">
                    <p className='lang'>Microservices</p>
                       <div className="dut-con">
                         <div className="one"></div>
                         <div className="two"></div>
                         <div className="tre"></div>
                         <div className="for"></div>
                         <div className="fiv"></div>
                         <div className="sis"></div>

                       </div>
                    </div>
                    </div>
                   
               
                   
                </div>  
               </div>
                 <div className="project-system ">

                

                    <div className="pro">
                      <p>Project SKILLS</p>
                    </div>
                 <div className="pros-s">

                 <div className="eng">
                   
                     <div className="rating">
                        
                     </div>
                  </div>

                  <div className="ger">
                   
                     <div className="rating">
                       
                     </div>
                  </div>
                  <div className="fula">
                    
                     <div className="rating">
                        
                     </div>
                  </div>
                  
                 </div>
           
               </div>

               <div className="project ">

                

                    <div className="pro">
                      <p>TECHNOLOGIES</p>
                    </div>
                 <div className="pros-s">

                 <div className="eng">
                    <p>Pouchdb</p>
                     <div className="rating"></div>
                  </div>

                  <div className="ger">
                    <p>Couchdb</p>
                     <div className="rating"></div>
                  </div>
                  <div className="fula">
                    <p>Gitlap</p>
                     <div className="rating"></div>
                  </div>
                  <div className="mandin">
                    <p>ira</p>
                     <div className="rating"></div>
                  </div>
                  <div className="wol">
                    <p>Bitbucket</p>
                     <div className="rating"></div>
                  </div>
                 </div>
           
               </div>
             
              
              
               
            </div>
      </div>     
    );
  }

  export default  Main