import React, { useState } from "react";

export default function TextForm(props) {
    const handleupClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleupClick2 = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handlecopy = () => {
        navigator.clipboard.writeText(Text);
        props.showAlert("Copied to Clipboard", "success");
    }
    const handlespace = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }
    const handleclear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const [Text, setText] = useState("");

    return (
        <>
            <div style={ {color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={Text}
                        onChange={handleonchange}
                        style={{backgroundColor: props.mode==='dark'?'#042743':'white',
                    color: props.mode==='dark'?'white':'black'}}
                    ></textarea>
                </div>
                <button
                    disabled={Text.length===0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleupClick}
                >
                    Convert to Uppercase
                </button>

                <button
                    disabled={Text.length===0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleupClick2}
                >
                    Convert to lowercase
                </button>
           
                <button
                    disabled={Text.length===0}
                    className="btn btn-primary mx-1 my-1"
                    id="myBox"
                    onClick={handlecopy}
                >
                    Copy to Clipboard
                </button>

                <button
                    disabled={Text.length===0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handlespace}
                >
                    Remove Extra Space
                </button>

                <button
                    disabled={Text.length===0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleclear}
                >
                    Clear Text
                </button>
            </div>
            <div className="container my-2 " style={ {color: props.mode==='dark'?'white':'black'}}>
                <h5>Your Text Summary</h5>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.length} Characters</p>
                <p>{ 0.008 * Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Nothin To Preview"}</p>
            </div>
        </>
    );
}
