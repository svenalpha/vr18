
import {createContext, useReducer} from "react";

//export const WorkoutsContext = createContext(null);
//export type WorkoutsContextType ={workouts: void  dispatch: 0}; 
type WorkoutsContextType ={workouts: string, dispatch:(workouts:any) => {null:any} }; 
export const WorkoutsContext = createContext<WorkoutsContextType>({} as WorkoutsContextType);


//export const WorkoutsContext = React.createContext<IworkoutsContext || undefined>(undefined);

export const workoutsReducer = (state:any,action:any)=>
{ console.log("WorkoutContext, state = ",state);
  console.log("WorkoutContext, action = ",action);
  switch (action.type)
  {case "SET_WORKOUTS":
     return{workouts:action.payload}
   case "CREATE_WORKOUT":
     return {workouts:[action.payload, ...state.workouts]}      
   case "DELETE_WORKOUT":
     return {workouts: state.workouts.filter((w:any)=>w._id !== action.payload._id)}                        
   case "UPDATE_WORKOUT": return {workouts: [...state.workouts]}  
     default: return state;       
  } 
}
{/*////const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body}); */}       
export const WorkoutsContextProvider = ({ ...children })=>
{console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider pre useReducer(workoutsReducer,{workouts: null })");
  console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider pre useReducer(workoutsReducer,{workouts: null })");
  const [state, dispatch] = useReducer(workoutsReducer,{workouts: null });
//dispatch({type: 'SET_WORKOUTS',payload: [{}, {}]});
console.log("in context/WorkoutsContext.jsx WorkoutsContextProvider post useReducer(workoutsReducer,{workouts: null })");  
console.log("state (tsx) = ",state);
console.log("dispatch (tsx)= ",dispatch);
return(
  <WorkoutsContext.Provider value = {{...state,dispatch}}>  
     { Object.values(children) }
  </WorkoutsContext.Provider>  
      )    
}


export default { WorkoutsContextProvider, workoutsReducer };

