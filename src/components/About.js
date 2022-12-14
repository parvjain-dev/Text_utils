import React,{useState} from 'react'

export default function About(props) {
   
  //   const[myStyle,setMyStyle] = useState({
  //       color: 'black', 
  //       backgroundColor: 'white'
  // }) 
//  const[MyBtn,setMyBtn] = useState("Enable Dark Mode")
//     let toggleStyle=()=>{
//        if(myStyle.color==='black'){
//         setMyStyle({
//             color:'white',
//             backgroundColor:'black'
//         })
//          setMyBtn("Disable Dark Mode");
//        }    
//        else{
//         setMyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setMyBtn("Enable Dark Mode");
//        }
//     }
  

  return (
    <div className='container' >
    <h1 style={{color: props.mode==='dark'?'#ffff':'black'}}>{props.abouthead}</h1>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      {/* <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
      <button className="accordion-button" type="button" style={{backgroundColor: props.mode==='dark'?'grey':'#ffff' ,color: props.mode==='dark'?'#ffff':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      {/* <div className="accordion-body" style={myStyle}> */}
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey':'#ffff' ,color: props.mode==='dark'?'#ffff':'black'}} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'grey':'#ffff' ,color: props.mode==='dark'?'#ffff':'black'}}>
    <h2 className="accordion-header" id="headingTwo">
      {/* <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> */}
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'?'grey':'#ffff' ,color: props.mode==='dark'?'#ffff':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Work on Your Text
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      {/* <div className="accordion-body" style={myStyle}> */}
      <div className="accordion-body" >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      {/* <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> */}
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'grey':'#ffff' ,color: props.mode==='dark'?'#ffff':'black'}} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Check you text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      {/* <div className="accordion-body" style={myStyle}> */}
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'grey':'#ffff' ,color: props.mode==='dark'?'#ffff':'black'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  {/* <button type="button" className="btn btn-secondary my-4" onClick={toggleStyle}>{MyBtn}</button> */}
</div>
    </div>
  )
}
