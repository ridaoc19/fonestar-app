import { useState, useCallback } from 'react';

interface UseModal {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	Modal: React.FC<ModalProps>;
}

interface ModalProps {
	title: string;
	children: React.ReactNode;
}

const useModal = (): UseModal => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const Modal: React.FC<ModalProps> = ({ title, children }) => {
		if (!isOpen) return null;

		return (
			<div className='modal-overlay' onClick={closeModal}>
				<div className='modal-container' onClick={e => e.stopPropagation()}>
					<div className='modal-header'>
						<h2>{title}</h2>
						<button className='modal-close' onClick={closeModal}>
							×
						</button>
					</div>
					<div className='modal-content'>{children}</div>
				</div>
			</div>
		);
	};

	return {
		isOpen,
		openModal,
		closeModal,
		Modal,
	};
};

export default useModal;
