import { CanvasForm, CanvasSpace } from "pts";
import React, { createRef, useEffect } from "react";
import {
  HandleAnimateFn,
  PtsCanvas,
  HandleStartFn,
  HandleActionFn,
} from "react-pts-canvas";

export const ExpTwo: React.FC<{}> = () => {
  const canvRef = createRef<HTMLCanvasElement>();
  let radius = 50;
  let spaceRef: CanvasSpace;
  let formRef: CanvasForm;
  let canvasSize = 100;
  let listenerAdded = false;

  const handleCanvasClick = (e: MouseEvent) => {
    console.log(`X: ${e.clientX} Y: ${e.clientY}`);
  };
  const handleStart: HandleStartFn = (_bound, space, form) => {
    spaceRef = space;
    formRef = form;
  };

  useEffect(() => {
    if (!listenerAdded && canvRef.current) {
      canvRef.current.addEventListener("click", handleCanvasClick);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      listenerAdded = true;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && canvRef.current) {
        canvRef.current.click();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnimate: HandleAnimateFn = (space, form) => {
    form.point(space.pointer, radius, "circle");
  };

  const handleAction: HandleActionFn = (_space, _form, type) => {
    if (type === "up") {
      radius += 20;
    }
  };
  return (
    <React.Fragment>
      <PtsCanvas
        background="#62e"
        onStart={handleStart}
        onAnimate={handleAnimate}
        onAction={handleAction}
        ref={canvRef}
      />

      <button
        onClick={() => {
          const ctx = canvRef.current?.getContext("2d");
          if (canvRef.current) {
            canvasSize -= 10;
            canvRef.current.setAttribute(
              "style",
              `
                width:${canvasSize}%;
                height:${canvasSize}%;
                margin: 0 auto;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                `
            );
          }
          if (ctx) {
            console.log("ctx", ctx);
          }

          console.log("canvas", canvRef.current);
        }}
      >
        Log / Shrink Canvas
      </button>
      <button
        onClick={() => {
          console.log("space", spaceRef);
        }}
      >
        Log Space
      </button>
      <button
        onClick={() => {
          console.log("form", formRef);
        }}
      >
        Log Form
      </button>
    </React.Fragment>
  );
};
