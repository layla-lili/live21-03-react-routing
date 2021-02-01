import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route,Switch } from "react-router";

const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");

  const homemadeRouter = () => {
<Switch>
   
    
    <Route path="/instructors/hamza">
         <InstructorProfile
                  instructors={instructors}
                  instructorSlug="hamza"
                  
                />
    </Route>
    
    <Route path="/instructors/laila">
           <InstructorProfile
                    instructors={instructors}
                    instructorSlug="laila"
                    
                  />
    </Route>
    
    <Route path="/instructors/hasan">
          <InstructorProfile
          instructors={instructors}
          instructorSlug="hasan"
          
    />
      </Route>
      
      <Route path="/404">
         <NotFound  />;
    </Route>
    <Route path="/">
         <Home instructors={instructors}  />;
    </Route>

    </Switch>


  }
  return <AppWrapper>{homemadeRouter()}</AppWrapper>;
}

export default App;
