const { useState } = React;

export const ColorPicker = () => {
const [color, setColor] = useState("#ffffff");

return (
  <div id="color-picker-container" style={{backgroundColor: color}}>
  <label for="color-input">Choose a color using the color input below</label>
  <p></p>
  <input type="color" id="color-input" value={color} onChange={(e) => setColor(e.target.value)} />
  </div>
);

};
