import React, { useState } from "react";

export default function TextForm(props) {
  const toUpperclick = () => {
    //  console.log("upper case " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    //warning is just for prac
    props.setMsg("converted to upper case","warning");
  };

  // const handleonchange =()=>{
  //     console.log("handling on change");
  //     setText(event.target.value);
  // }

  const toLowerclick = () => {
    //  console.log("upper case " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const toclear =() =>{
    let newtext = '';
    setText(newtext);

  }

  // const [myfont,setmyfont] =useState({
  //   fontFa
  // })
  const toChangeFont= () =>{
    // let newtext = document.getElementById("Change").style.fontStyle="italic";
     let newtext = text.fontStyle="italic";
    console.log(newtext);
    setText(newtext);
  }
  const [text, setText] = useState("");
  //   text = "new text"; //wrong way to change the state

  //correct way
  //  setText("new Set text");

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            onChange={(e) => setText(e.target.value)}
            value={text} 
            placeholder="Enter Text "
            id="myBox"
            rows="10"
            style={{backgroundColor: props.mode==='dark'?'grey':'#ffffcc' ,color: props.mode==='dark'?'#ffff':'black'}}
          ></textarea>

          <button
            type="button"
            onClick={toUpperclick}
            className="btn btn-primary my-3"
          >
            Convert to Upper case
          </button>
          {/* to lower case  */}
          <button
            type="button"
            onClick={toLowerclick}
            className="btn btn-primary my-3 mx-2"
          >
            Convert to Lower case
          </button>
          <button
            type="button"
            onClick={toclear}
            className="btn btn-primary my-3 mx-1"
          >
            Clear Text
          </button>

          {/* change font  */}
          <button
            type="button"
            id="Change"
            onClick={toChangeFont}
            className="btn btn-primary my-3 mx-1"
          >
            Change Font
          </button>
          {/* change font  */}


        </div>
      </div>
      <div className="container my-4">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading2}</h1>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>Number of words = <b> {text.split(" ").length}</b></p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>Number of characters = <b> {text.length}</b></p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}><b> {0.008 * text.split(" ").length}</b> Minutes Read </p>
        <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}><b> {text.length>0?text.toLocaleLowerCase():'Enter the text'}</b></p>
      </div>
    </>
  );
}
