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
        var Text = document.getElementById("myBox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
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
                    className="btn btn-primary mx-2"
                    onClick={handleupClick}
                >
                    Convert to Uppercase
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleupClick2}
                >
                    Convert to lowercase
                </button>
           
                <button
                    className="btn btn-primary mx-1"
                    id="myBox"
                    onClick={handlecopy}
                >
                    Copy to Clipboard
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handlespace}
                >
                    Remove Extra Space
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleclear}
                >
                    Clear Text
                </button>
            </div>
            <div className="container my-2 " style={ {color: props.mode==='dark'?'white':'black'}}>
                <h5>Your Text Summary</h5>
                <p>{Text.split(" ").filter(Boolean).length} Wrods and {Text.length} Characters</p>
                <p>{ 0.008 * Text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Enter something in the textbox above to preview is here "}</p>
            </div>
        </>
    );
}
