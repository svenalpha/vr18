


import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react'; 
import axios from "axios";
//import  { WorkoutForm } from "../../components/WorkoutForm";
import  { WorkoutDetails } from "../../components/WorkoutDetails";
import  { WorkoutForm } from "../../components/WorkoutForm";



const Extra: React.FC<ExtraProps> = (props) => 
{//const [datax,setDatax] = useState(); 
 //const [users,setUsers] = useState([]);  
 //const [legend,setLegend] = useState();  
 //const [folksArray,setFolksArray] = useState([]); 
 //const [usersArray,setUsersArray] = useState([]);
 //const url = "/rrr/peopleapi";  

 const helmet = useHelmet();
 const [workouts,setWorkouts]=useState(null);
 
const [str1,setStr1] = useState("abcdefghijklmnop"); 

 
 // async function fetchWorkouts()  
 const fetchWorkouts = async () =>
  {//const response =   await axios.get('/rrr/getMongoWorkouts');
   //const json = await response.json();
   //if (response.ok)
   // {  setWorkouts(json);
   // }
    
   
   await axios.get('/rrr/getMongo').then((response) =>{    // "/api"    
    //console.log(" useEffect, response data = ",response.data)  
    if (response.status === 200)   // ie successful               
      {setWorkouts(response.data);           
       console.log(" 200  response to getMongo, workouts = ",workouts);  
       console.log("  200  response = ",response); 
      }                                       
                                                      }                
                  )  //  end   await axios.get
  }    //  end  const fetchWorkouts = async () => 
useEffect(() =>{fetchWorkouts();},[])


// async function  handleTestClick  (e:any)  
// { console.log("inside handleTestClick");
  //const workout = {title,load,reps};  
  //await axios.post('/rrr/postMongo',workout)
  //.then((response) => 
  //  {if (response.status != 200)
  //    {  console.log("post failed with response.status != 200 ");
  //    }  else 
  //    { console.log("post succeeded with response.status == 200. response.status = ",response.status);
  //      console.log("post succeeded with response.status == 200. response.data = ",response.data);
  //      console.log("post succeeded with response.status == 200. response = ",response);
  //    }  //  end  if (response.status != 200)   
  //  }                    
  //     );   /// end   .then
//}
    
useEffect(() => 
  {helmet.setTitle("Extra")
  },[helmet])

return (<>
  <h1>Extra</h1>
     


  <div className= "home">
    <div className= "workouts">                         
              { workouts && Object.values(workouts).map((workout:any) => (  
                                    
                
                
                                    <div key={workout["_id"]}>                         
                                       <h6>{workout['title']}  {workout['reps']}   hhhh uuuuu </h6>        
                                    </div>                                                            
                                                                         )                           
                                         )                    
              }
              { workouts && Object.values(workouts).map((workout:any) => (  
                      <WorkoutDetails key ={workout["_id"]}   {...workout} /> //workout = { workout } />  /// {...workout}
                                                                         )
                                                       )                  
              }

    </div>
  </div>
  <WorkoutForm />  
            
           <p>qwwwertyuiogggggghhjhhjjkkll</p>   

    </>)       // end return()
}     //   end   const Extra: React.FC<ExtraProps> = (props) => 

interface ExtraProps 
{ [key: string]: any
}

export default Extra;




