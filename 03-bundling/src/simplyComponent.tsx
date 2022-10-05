import logo from './img/webpack.jpeg';
import React from "react";

export const HelloWorld: React.FC = () => {
 

  return (
    <div>
      <span className="hello-text">
        Hello World!
      </span>
    </div>
  );
};

export const Img: React.FC = ()=>{
    const img = document.createElement('img');
    img.src = logo;

    document.getElementById('imgCont').appendChild(img);

}