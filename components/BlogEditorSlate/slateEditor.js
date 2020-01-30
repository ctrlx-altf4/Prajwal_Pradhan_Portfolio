import { createEditor } from 'slate';
import {useMemo,useState} from 'react';
import { Slate, Editable, withReact } from 'slate-react';

export const SlateEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    // Add the initial value when setting up our state.
    const [value, setValue] = useState([
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ])
  
    return (
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable 
          onKeyDown={event => {
            if (event.key === '&') {
              // Prevent the ampersand character from being inserted.
              event.preventDefault()
              // Execute a command to insert text when the event occurs.
              // editor.exec({ type: 'insert_text', text: 'and' })
              editor.insertText('and');
              return true;
            }
          }}
        />
      </Slate>
    )
  }