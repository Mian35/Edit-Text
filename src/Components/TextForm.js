import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("") //Default text value
    const Upclick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to UpperCase", "success")
    }
    const Loclick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to LowerCase", "success")
    }
    //To clear the text
    const Clearclick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = ""
        setText(newText)
        props.showAlert("text has been cleared", "success")
    }
    const Copyclick = () => {
        // console.log("Uppercase was clicked" + text)
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied", "success")
    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed", "success")
    }
    const handleonchage = (event) => {
        //console.log("on change")
        setText(event.target.value)
    }
    return (
        <>
            <div className="mb-3 my-3" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>

                <textarea className="form-control" value={text} onChange={handleonchage} style={{ backgroundColor: props.Mode === 'white' ? 'dark' : 'grey', color: props.Mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={Upclick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={Loclick}>Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={Clearclick}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={Copyclick}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces </button>
            </div>
            <div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>

        </>
    )
}
