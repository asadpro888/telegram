let color = document.querySelector("#input1");
const transparency = document.getElementById('input2');
const radiusInput = document.getElementById('input3');
const shadowInput = document.getElementById('input4');
const blurInput = document.getElementById('input5');
let main = document.querySelector('body');
const childElement = document.querySelector('.child');

color.addEventListener('input', (e)=>{
    childElement.style.backgroundColor = e.target.value;
});

if (transparency && childElement) {
  transparency.addEventListener('input', (event) => {
    const value = parseFloat(event.target.value);
    if (value > 0) { 
      childElement.style.backgroundColor = `tranparent(${value} rgba( 255, 0, 0, 0.3 ))`;
      console.log('you moving input')
    } 
  });
}

if (radiusInput && childElement) {
  radiusInput.addEventListener('change', (event) => {
    const value = parseFloat(event.target.value);
    if (value >= 0) {
      childElement.style.borderRadius = `${value}%`;
    }
  });
} 

if (shadowInput && childElement) {
    shadowInput.addEventListener('change', (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 0) { 
        childElement.style.boxShadow = ` inset 0 0 ${value}px rgba(2, 2, 10, 0.5)`;
      }
    });
  }

  if (blurInput && childElement) {
    blurInput.addEventListener('change', (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 0) { 
        childElement.style.filter = `blur(${value}px)`;
      }
    });
}