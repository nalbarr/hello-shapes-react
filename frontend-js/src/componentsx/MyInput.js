import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => (
  <input 
    ref={ref} 
    type="text" 
    value={props.value} 
    onChange={props.onChange || (() => {})}
  />
));

MyInput.displayName = "MyInput";

export default MyInput;
