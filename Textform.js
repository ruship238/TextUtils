// eslint-disable-next-line
import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState(" ");
    
    const handleUpClick = (e) => {
        e.preventDefault();
        console.log("Uppercase button was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleClearClick = (e) => {
        e.preventDefault();
        let newtext = "";
        setText(newtext)
        props.showAlert("Your Text has been Cleared","success");
    }
    // eslint-disable-next-line no-unused-vars
    const handleLowClick = (e) => {
        e.preventDefault();
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success")
    
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
        
    }

    return (
        <>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <form>
                    <h1>{props.heading}</h1>
                <div className="form-group">
                        <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" value={text} onChange={handleOnChange}  rows="8"></textarea>
                </div>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}> Lower Case</button>
            </form>
        </div>
            <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
                <p>{text.split(" ").length-1} words {text.length} Character</p>
                <p>{0.8 * text.split(" ").length} Time to Read the Word</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text in Text area to priview It Here"}</p>
            </div>
        </>
    )

}