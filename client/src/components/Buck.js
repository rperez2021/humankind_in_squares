import React, {useState, useEffect} from 'react';

const Buck = () => {
  const [color, setColor] = useState('black');
  const [shape, setType] = useState('square');
  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === 'black') {
        setColor('red');
        setType('circle');
        console.log(shape);
      } else {
        setColor('black');
        setType('square');
        console.log(shape);
      }
    };

    document.addEventListener('click', changeColorOnClick);

    return () => {
      document.removeEventListener('click', changeColorOnClick);
    };
  }, [color, shape]);

  return (
    <div>
      <div
        id='myDiv'
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: '20%',
          top: '50%',
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default Buck;
