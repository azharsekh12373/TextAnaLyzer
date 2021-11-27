
import { element } from 'prop-types';
import React, {useState } from 'react';

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
       
       let newText= text.toUpperCase();
       setText(newText)
       props.showAlert("Converted To UpperCase","success");
    }
    const handleLoClick = ()=>{
        
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success")
     }
     const handleClClick =()=>{
       let newText= ""
       setText(newText)
       props.showAlert("Cleared","success")
     }
     const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Has Copied","success")
     }

     const handleSpace=()=>{
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("Space Has Been Removed","success")
     }
     
      
    const handleOnChange = (e)=>{
        console.log('Change Hon Gaya');
        setText(e.target.value)
     }
     const [text, setText] = useState('');
     
    return (
       <>
            <div className="container" style={{color: props.mode ==='dark' ?'white':'black' }}>
                <h2 className="bg-warning p-1 mb-4 text-light">{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control border border-warning" id="myBox" style={{ backgroundColor: props.mode =='dark'? '#042743':'white',color:props.mode=='dark'?'white':'black' }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleUpClick} >Convert To Upper Case</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-1 " onClick={handleLoClick} >Convert To Lower Case</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-1 " onClick={handleClClick} >Clear</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-1 " onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleSpace} >Remove Space</button>
               
                
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark' ?'white':'black' }}>
                <h2 className="bg-warning  p-1 mt-5 text-light">Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} Character</p>
                <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
                <h2 className="bg-warning p-1 mt-4 text-light">Preview</h2>
                <p>{text.length>0? text:'Enter Something Above To Preview ' }</p>
            </div>
        </>
    )
}
