import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
  const [content, setContent] = useState('')

  function handleStartTextArea() {
    setShouldShowOnBoarding(false);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    if (event.target.value === '') {
      setShouldShowOnBoarding(true);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();

    onNoteCreated(content)

    setContent('')
    setShouldShowOnBoarding(true)

    toast.success('Nota criada com sucesso!')
  }

  return (

    <Dialog.Root>
      <Dialog.DialogTrigger className='flex flex-col rounded-md bg-slate-700 p-5 gap-6 overflow-hidden text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
        <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
        <p className='text-sm leading-6 text-slate-400'>
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.DialogTrigger>
      <Dialog.DialogPortal>
        <Dialog.DialogOverlay className='inset-0 fixed bg-black/50' />
        <Dialog.DialogContent className='fixed left-1/2 max-w-[640px] w-full -translate-x-1/2 -translate-y-1/2 top-1/2 bg-slate-700 rounded-md flex flex-col outline-none h-[60vh] overflow-hidden'>

          <Dialog.Close className='absolute top-0 right-0 bg-slate-700 p-1.5 text-slate-400 hover:text-slate-100'>
            <X className='size-5' />
          </Dialog.Close>
          <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-sm font-medium text-slate-300'>
                Adicionar Nota

              </span>
              {shouldShowOnBoarding ? (
                <p className='text-sm leading-6 text-slate-400'>
                  Comece <button className='font-medium text-lime-400 hover:underline'>gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartTextArea} className='font-medium text-lime-400 hover:underline'>apenas texto</button>
                </p>
              ) : (<textarea value={content} onChange={handleContentChange} autoFocus className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'>

              </textarea>)}
            </div>
            <button className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none hover:bg-lime-500'>
              Salvar Nota
            </button>
          </form>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  )
}