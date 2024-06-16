import {useState} from "react";

export const WorkoutForm = ({...workout})=>
  {const [title,setTitle] = useState("title in WorkoutForm");


    return(<>
           <div className= "workout-details">
             <p>zzzzzzz {title}  xxxxxxxx</p>   
             <h4>{workout["title"]}</h4>   
             <p><strong>Load (kg): </strong>  {workout["load"]}</p>
             <p><strong>Reps: </strong>  {workout["reps"]}</p>  
             <p>{workout["createdAt"]}</p>


           </div>    
       </>)   // end return
           
  }  // end const WorkoutForm = ()=>


export default WorkoutForm;  


  