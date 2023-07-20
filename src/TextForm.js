import React , {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick =()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClClick =()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }
        const handleOnChange =(event)=>{
          //  console.log("on change");
            setText(event.target.value);
        }

    const [text, setText] = useState ('');
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>
<div   className="mb-3">

  <textarea   className="form-control" value = {text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button    classNameName="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
  <button    classNameName="btn btn-info mx-2 " onClick={handleLoClick}> Convert to LowerCase</button>
  <button    classNameName="btn btn-info mx-2 " onClick={handleClClick}> Clear Text</button>

  
    </div>
    <div className="className">
       <h3> Your Text Summary </h3>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{0.08 * text.split("").length} Minutes Read</p> 
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}




