from youtube:https://www.youtube.com/watch?v=H5JXz1RzRTY   11:16 "Unlock Lightning-fast SEO-friendly 
Apps with Vite SSR and React"
from github:gihanrangana/vite-express-ssr-ts  //  Unlock Lightning-fast SEO-friendly Apps with Vite SSR and React
saved in c:\web\00_archives/vite-express-ssr-ts-main

the github example is more built out than the youtube example. It has 3 pages (react-router), helmet). 

stack: "Y@https://vr13.onrender.com/assets/index-6mBp7LUM.js:75:13400\nXw@https://vr13.onrender.com/assets/index-6mBp7LUM.js:77:1042\nE@https://vr13.onrender.com/assets/index-6mBp7LUM.js:77:4233\n"



vr13 is built out vite-express-ssr-ts-main using react, succesful fetch from backend, fetching entries 
from mongo but not C-UD of crud. Successfully uploaded to render.
vr13 is to be left as is.
vr18 to be vr13 built out to include crud, including (react) useContext to update local totals 
to be in synch with remote mongo db.




had this message in render log when deploying: 
" Poetry (1.7.1) is installed now. Great!
To get started you need Poetry's bin directory (/opt/render/project/poetry/bin) in your `PATH`
environment variable.
Add `export PATH="/opt/render/project/poetry/bin:$PATH"` to your shell configuration file.
Alternatively, you can call Poetry explicitly with `/opt/render/project/poetry/bin/poetry`.
You can test that everything is set up by executing:
`poetry --version` "

settings in render
// the following, static website did not work 
Branch:     main
Root Directory:   blank(ie nothing entered)
Build Command:   npm install
Publish Directory:   ./dist/app/client



vr13 successful deployment with successful api facility
in render as "web service"     
  branch =  main   
  root directory = blank     
  Build Command =   npm install; npm run build       
  Start Command  =  npm run serve       





to do:
separate file for data to be imported. (ie /folks).
see youtube see 6:00 of  poXp9uP8TfM  19:50   "How to deploy frontend and backend on 
Render in the same folder?"                  


using array in xxx.map  do <div key={dat["id"]}>  <h6>{dat['title']}  {dat['reps']} {dat['load']}</h6> </div>  
workoutControllers changed to .ts from .js and changed (req,res) to (req:any,res:any)




         <div>
            {
            users.map(user => (
                                    <div key={user.id}> 
                                       <h4>{user.username}</h4>
                                       <h4>{user.city}</h4>
                                     </div>  
                              )         
                      )                 

              }
         </div> 


//      {workouts && workouts.map((workout) =>(<p key = {workout["_id"]}> {workout["title"]} </p>  
//                                            )
//                               )   
//      }


              {



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// index.css from here  /////////////////////////////////////////////////////////////////////////////////////////////   
/* google font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

/* layout */
:root {
  --primary: #1aac83;
   --error: #e7195a;
}
body {
  background: #f1f1f1;
  margin: 0;
  font-family: "Poppins";
}
header {
  background: #fff;
}
header .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header a {
  color: #333;
  text-decoration: none;
}
.pages{
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
}

/* homepage */
.home {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 100px;
}
.workout-details {
  background: #fff;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
}
.workout-details h4 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: var(--primary);
}
.workout-details p {
  margin: 0;
  font-size: 0.9em;
  color: #555;
}
.workout-details span {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background: #f1f1f1;
  padding: 6px;
  border-radius: 50%;
  color: #333;
}

/* new workout form */
label, input {
  display: block;
}
input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
form button {
  background: var(--primary);
  border: 0;
  color: #fff;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 4px;
  cursor: pointer;
}
div.error {
  padding: 10px;
  background: #ffefef;
  border: 1px solid var(--error);
  color: var(--error);
  border-radius: 4px;
  margin: 20px 0;
}
input.error {
  border: 1px solid var(--error);
}


////////////////////// end index.css from here  //////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





