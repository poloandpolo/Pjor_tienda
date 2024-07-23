import React, { useEffect, useRef } from 'react';
import './styles/Random_text.css'; // Importa el CSS global si no lo has hecho ya

const RandomText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const textContent = text;
      textElement.innerHTML = ''; // Vacía el contenido original

      const fragment = document.createDocumentFragment();

      textContent.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        // Asigna una de las dos clases de forma aleatoria
        span.classList.add(Math.random() < 0.5 ? 'font-1' : 'font-2');
        // Agrega un espacio para caracteres de control como espacio
        span.style.display = char === ' ' ? 'inline-block' : 'inline';
        fragment.appendChild(span);
      });

      textElement.appendChild(fragment);
    }
  }, [text]);

  return <p ref={textRef}></p>;
};

export default RandomText;
