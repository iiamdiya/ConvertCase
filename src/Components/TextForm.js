import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase.", "success")
    }
    const handleLoClick = () =>{
        console.log("Uppercase was clicked", "success")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase.", "success")
    }
    const handleclearClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = ""
        setText(newText)
        props.showAlert("Text has been cleared.", "success")
    }
    const reverseString = () => {
        let newText = text.split("").reverse().join("")
        setText(newText)
        props.showAlert("Text has been reversed.", "success")
    };

    const handleCopyClipboard = () => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        // props.showAlert("Text has been copied to clipboard.")
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Unwanted spaces has been removed.")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change")
        setText(event.target.value)
    }
    
const [text, setText] = useState("")
    return (
        <>
        <div className='container' >
            <h1 className={`text-${props.mode==='light'?'dark':'light'} `}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#363535':'white'} }  id="myBox"rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Cancel</button>
            <button className="btn btn-primary mx-2 my-2" onClick={reverseString}>Reverse Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClipboard}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpace}>Space Remove</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the textbox to preview it here."}</p>
        </div>
        </>
  )

}
