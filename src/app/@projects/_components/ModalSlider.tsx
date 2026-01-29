import { createPortal } from 'react-dom';
const ModalSlider = ({ isOpen, onClose, children }: {
    isOpen: boolean, 
    onClose: () => void, 
    children: React.ReactNode
}) => {
    if (!isOpen) return null;

    return createPortal(
        <div 
            className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-10"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
            
            <button 
                onClick={onClose}
                className="fixed w-12 h-12 top-6 right-6 grid place-content-center cursor-pointer z-110 bg-white/10 hover:bg-green-500/20 hover:text-green-500 text-white rounded-full transition-all border border-white/20 backdrop-blur-md"
            >
                <span className="text-xl font-bold leading-none p-3">✕</span>
            </button>

            <div 
                className="relative z-105 w-full h-full flex items-center justify-center  pointer-events-none"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="w-full h-full flex items-center justify-center pointer-events-auto">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModalSlider;