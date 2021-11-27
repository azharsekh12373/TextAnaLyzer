
// import About from './About'
import NavBar from './NavBar'
import TextForm from './TextForm'
import React, { useState } from 'react'
import Alert from './Alert'

function App(){
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode =()=> {
        if(mode ==='light'){
            setMode('dark');
            document.body.style.backgroundColor= '#042743'
            showAlert("Dark mode has been enabled","success")
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white'
            showAlert("Light mode has been enabled","success")
        }
    }
    return (
        < > 
        
           
        
            <NavBar title= "Textanalyzer" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
             <div className="container my-4">
             <TextForm heading="Try Textanalyzer- Word Counter|Character Counter|Remove Extra Spaces" showAlert={showAlert} mode={mode} />
            
            </div> 
        </>
    )
}

export default App
