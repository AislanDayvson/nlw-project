import logo from './assets/logo-nlw.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCards } from './components/note-cards';

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full mt-6">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          type="text"
          placeholder='Busque em suas notas...' />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        
        <NewNoteCard/>
        <NoteCards/>
        <NoteCards/>
        <NoteCards/>
      </div>
    </div>
  )
}


