import React, { useEffect } from 'react';
import './styles/Confirmation_modal.css'; // Importa el archivo CSS correspondiente
import verificacion_image from '/verificacion-verde.png';

export const Confirmation_modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 800); // Cierra el modal automáticamente después de 2.3 segundos
            
            return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta o se cierra el modal antes
        }
    }, [isOpen, onClose]);

    return (
        <div className={`modal-confirmation-overlay ${isOpen ? 'open' : ''}`}>
            <div className="modal-confirmation-content">
                <img src={verificacion_image} alt="Verificación exitosa" />
                <p>Añadido al carrito</p>
            </div>
        </div>
    );
};
