import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import{ useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";

export const Archive=()=>{
  const {archive}=useNotes();

  return(
    <Fragment>
      <Navbar/>
      <main className="flex gap-3">
        <Sidebar/>
          <div>
            <div className="flex flex-wrap gap-6 w-screen mt-7">  
              {
                archive?.length>0 && archive.map(({id,title,text,ispinned})=>{
                  return <NotesCard key={id} id={id} title={title} text={text} isPinned={ispinned}/>
                })
              }
            </div> 
          </div>
      </main>
    </Fragment>       
  )
}