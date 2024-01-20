import Contact from "./Contact";
import Profile from "./Profile";
import Project from "./Project";
import Skills from "./Skills";

export default function Home() {
 return (
   <main className="pt-16">
    <div id="About" className="pt-8">
     <Profile/>
     </div>
     <div id="skills" className="pt-8">
       <Skills/>
     </div>
     <div id="projects" className="pt-8">
       <Project/>
     </div>
     <div id="contact" className="pt-8">
       <Contact/>
     </div>
   </main>
 );
}
