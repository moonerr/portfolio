import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { TestSketch } from "./sketch";

import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

// export const P5Canva = () => {
//   return <ReactP5Wrapper sketch={TestSketch} />;
// };

interface ComponentProps {
  //Your component props
}

let x = 50;
const y = 50;

export const YourComponent: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(220);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};
