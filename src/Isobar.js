import React, { useRef,useEffect } from 'react';


function Isobar({highLabel, lowLabel, titleLabel, colorTable}) {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)


  let isoBarHieght;

  useEffect(()=>{

    const canvas = canvasRef.current;
    canvas.style.width = `40%`;
    canvas.style.height = `95%`;
    isoBarHieght = canvas.height;
    canvas.style.backgroundColor = "#03fc2c";
    canvas.style['z-index'] = 19;
    
    const context = canvas.getContext("2d");
    context.scale(1,1);
    context.lineCap = "round"
    context.stokeStyle = "black"

    contextRef.current = context;
    const x1 =   0;
    const y1 =   0;
    const x2 =   0;
    const y2 = canvas.height;
    let gradient = contextRef.current.createLinearGradient(x1, y1, x2, y2);

    colorTable.forEach((color)=>
      gradient.addColorStop(
          (1-(color[0]/100)), `rgb(${color[1]},${color[2]},${color[3]})`
      )
    )
  
    contextRef.current.fillStyle = gradient;
    contextRef.current.fillRect(0, 0, canvas.width, canvas.height);

    contextRef.current.save();
    contextRef.current.translate( contextRef.current.width - 1, 0 );
    contextRef.current.rotate( 3 * Math.PI / 2 );
    contextRef.current.textAlign = "right";

    contextRef.current.fillStyle = "white"
    contextRef.current.font =  "bold .75em Sans-Serif"
    contextRef.current.scale(1,16)
    contextRef.current.fillText(highLabel ,(-1*isoBarHieght)/40, 13)
    contextRef.current.fillText(titleLabel ,(-1*isoBarHieght)/3, 13)
    contextRef.current.fillText(lowLabel ,(-1*isoBarHieght)*(16/20), 13)

    contextRef.current.restore();

  },[])

  return (
    <canvas
    ref = {canvasRef}
    />
  );
}

export default Isobar;