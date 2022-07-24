import P5 from "p5";

export const TestSketch = (p5: P5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(200, 200);
    canvas.parent("app");
    p5.background("green");
  };

  p5.draw = () => {
    p5.background(255, 130, 20);
    p5.ellipse(100, 100, 100);
    p5.ellipse(300, 100, 100);
  };
};

new P5(TestSketch);
