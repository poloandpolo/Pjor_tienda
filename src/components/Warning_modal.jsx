import React, { useEffect } from 'react';
import './styles/Warning_modal.css'; // Importa el archivo CSS correspondiente

export const Warning_modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 2300); // 3000 milisegundos = 3 segundos
            
            return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta o se cierra el modal antes de los 3 segundos
        }
    }, [isOpen, onClose]);

    return (
        <div className={`modal-warning-overlay ${isOpen ? 'open' : ''}`}>
            <div className="modal-warning-content">
                <p>Selecciona talla y color</p>
            </div>
        </div>
    );
};
