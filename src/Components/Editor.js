import React, { useState } from 'react'
import ReactMarkdown from "react-markdown"

const Editor = () => {

  const editorMarkdown = `
  <!-- Wsd  sdass jdabsjkbdas
  # Welcome to my React Markdown Previe
  ## GitHub
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  <p style="color: red">Play</p>
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
   
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `
  const [markdownText, setMarkdownText] = useState(editorMarkdown)

  
  return (
    <div className="container p-10 mx-auto">
        <h2 class="text-4xl font-semibold mb-3">Markdown Editor</h2>
        <div className="flex flex-col justify-between md:flex-row">
            <div className="text-white bg-blue-950 rounded-sm md:w-2/5">
                <h1 className="text-xl text-center  bg-blue-900">Editor</h1>
                <textarea id="editor" className="text-white bg-blue-950 w-full h-screen overflow-auto p-3" 
                value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
            </div>
            <div className="text-black bg-white mt-10 h-screen rounded-sm overflow-auto md:w-2/4 md:mt-0">
                <h1 className="text-xl text-white text-center  bg-blue-900">Previewer</h1>
                <div id="preview" className="text-justify p-10 whitespace-pre-line h-screen">
                    <ReactMarkdown>{markdownText}</ReactMarkdown>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Editor
