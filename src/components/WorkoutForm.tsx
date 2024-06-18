import {useState} from "react";
import axios from "axios";
import api from '../../server/app';

export const WorkoutForm = ({...workout})=>
  {//const {dispatch} = useWorkoutsContext();
   const [title,setTitle] = useState('');
   const [reps,setReps] = useState('');
   const [load,setLoad] = useState('');  
   const [error,setError] = useState(null);  
   const [emptyFields,setEmptyFields] = useState([] as any);

   const handleSubmit = async (e:any)=>                     
    {e.preventDefault();    
     
     const workout = {title,load,reps};  
     //const response1 = await fetch("/api/workout");
              
     //const response = await fetch("http://localhost:5173/api/workout",{
    // const response = await fetch("/api/workout",{     
    //   method:"POST",                                                                
    //   body: JSON.stringify(workout),                       
    //       headers: {"Content-Type": "application/json"
    //                }                            }              
    //                             );    
    //
    
    
     // const response = await fetch("/rrr/postMongo",{     
     //   method:"POST",                                                                
     //   body: JSON.stringify(workout),                       
     //   headers: {"Content-Type": "application/json"
     //            }                                }                            
     //                             );  
    

    console.log("WorkoutForm  pre axios.post, workout = ", workout);  
    await axios.post('/rrr/postMongo',workout)
     .then((response) => 
       {if (response.status != 200)
         {  console.log("post failed ");
         }  else 
         {   console.log("post succeeded");
         }  //  end  if (response.status != 200)   
       }                    
          );                                                                                                         
                                                                         
                                                                                   
     console.log("affffter response");                                    
     //const json = await response.json();      
     //console.log("const json = ",json);

     //if (!response.ok) {setError(json.error);  
     //                   console.log(" CreateWorkoutForm  json = ",json);
     //                   setEmptyFields(json.emptyFields);
     //                   console.log("CreateWorkoutForm json.emptyFields = ",json.emptyFields); 
     //                   console.log("CreateWorkoutForm  emptyFields = ",emptyFields); 
     //                   console.log("CreateWorkoutForm error in adding entry, CreateWorkoutForm ",error);              
     //                  }else
     //                  {setEmptyFields([]);setError(null);setTitle(""); setLoad(""); setReps("");   
     //                  // // dispatch({type:"CREATE_WORKOUT",payload: json});             
     //                   console.log("in WorkoutForm, new entry added. json =",json);
     //                  }         
    }        
       




    return(<>



                                            
<form className="create" onSubmit={handleSubmit}>      
  <h3>add a new entry</h3> 

  <label> Exercise title</label>   
  <input
  type="text"
  onChange = {(e)=>setTitle(e.target.value)}
  value ={title}
  className={emptyFields.includes("title") ? "error" : " "}
  />  

 <label> Load in kg: </label>   
  <input
  type="number"
  onChange = {(e)=>setLoad(e.target.value)}
  value ={load}
  className={emptyFields.includes("load") ? "error" : " "}
  />  

 <label> Reps </label>   
  <input
  type="number"
  onChange = {(e)=>setReps(e.target.value)}
  value ={reps}
  className={emptyFields.includes("reps") ? "error" : " "}
  />  
  <button type='submit' className='btn' onClick={handleSubmit}>submit form</button>
  {error && <div className="error">{error}</div> }  
</form>   


          
       </>)   // end return
           
  }  // end const WorkoutForm = ()=>


export default WorkoutForm;  


  