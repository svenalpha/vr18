
//  import { useNavigate } from "react-router-dom";
// import express, { Router } from 'express';
//import  Express from "express";
// import express, { Router } from 'express'; 
import WorkoutModelDb from "../models/workoutDbModel.js";


export const getEnv =  (req:any,res:any)=>{  
    /* console.log("inside workoutController.js  getEnv");  */ 
    /*const navigate = useNavigate;                      
    return(navigate("/Error404"))       
*/    res.json({mssg: "inside Env in workoutController.js"});     
                                  }                            

//  GET all entries

// export const getAllWorkoutEntries = async  (req,res)=>{  
    export const getAllWorkoutEntries = async  (req:any, res:any)=>{     
    console.log("inside workoutController.js getAllWorkoutEntries ");  
    console.log("inside workoutController.js getAllWorkoutEntries  req.body = ",req.body);           
    const workouts = await WorkoutModelDb.find({}).sort({createdAt: -1});  // ie find all, sorted in descending order       
                                    // ....find({reps:20}).... finds all entries where reps=20
    return res.status(200).json(workouts);            }                  
    //return res.json({mssg: "GET all entries"}); 
    //return;

    export const getSecondExport =  (req:any, res:any)=>{
        res.send("-- fetched--  workoutController via app.ts /rrr/getSecondExport in server/app.ts")
                                                        }  



//  GET single entry

// Create (ie POST) new entry
export const createWorkoutEntry = async (req:any,res:any)=>
  { console.log("inside controllers/workoutController.js    createWorkoutEntry");
   //console.log("inside controllers/workoutController.js  createWorkoutEntry req.body = ",req.body);
    //console.log("inside controllers/workoutController.js  createWorkoutEntry req = ",req);
   
    //console.log("req.body  = ",req.body);
    //console.log("req.params = ",req.params);
    //console.log("req.path = ",req.path);
    //console.log("req.headers.origin = ",req.headers.origin);
    //console.log("req  = ",req);

    
    const {title, reps, load} = req.body;   
    // console.log("in createWorkoutEntry   title , reps, load = ",title, reps , load);
    

    let emptyFields = []; 
    if (!title) {emptyFields.push("title");}
    if (!load) {emptyFields.push("load");}
    if (!reps) {emptyFields.push("reps");}    
    if (emptyFields.length > 0) 
       {return res.status(400).json({error: "please complete all fields",emptyFields})
       }    
    try{const wo = await WorkoutModelDb.create({title,reps,load});
        return res.status(200).json(wo);
       }catch (error:any)
       {return res.status(400).json({error: error.message});
       } 
    //res.json({mssg: "POST new entry"});
  }     //   end   export const createWorkoutEntry = async (req:any,res:any)=>                                      


  
// DELETE entry

// UPDATE entry
//export const updateWorkoutEntry = async (req,res)=>{
//  console.log("ssssshhhhhkjkkk");      
//  const {id} = req.params;   
//  console.log("req.params = ",req.params);                                   
//zz  if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
//zz    return res.status(404).json({error: "not a valid id"});                 
//zz                                                                            
//zz  const workout = await WorkoutModelDb.findOneAndUpdate({_id : id},{...req.body});         
//zz  if (!workout) {return res.status(400).json({error: "no such entry"});}           
//zz    return res.status(200).json(workout);      
//zz                                                   }   // end   export const updateWorkoutEntry      
//zz                                
                               
export default { getAllWorkoutEntries , getSecondExport, createWorkoutEntry }; 
//export default getEnv;                                           
//module.exports = getAllWorkoutEntries;                                                      
                                             
//                                       
                                      