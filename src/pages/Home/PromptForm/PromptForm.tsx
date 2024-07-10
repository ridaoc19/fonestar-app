import React, { useEffect, useState } from 'react';
import Button from '../../../components/common/button/Button';
import { ButtonType } from '../../../components/common/button/button.type';
import Input from '../../../components/common/input/Input';
import useModal from '../../../hooks/useModal/useModal';
import { SelectedPrompt } from '../Home';

interface PromptFormProps {
	// prompt: GPrompt.Item | null;
	selectedPrompt: SelectedPrompt | null;
	handleCloseForm: () => void;
}

interface InitialState {
	es: string;
	en: string;
	fr: string;
	pt: string;
}
const initialState: InitialState = { es: '', en: '', fr: '', pt: '' };

const PromptForm: React.FC<PromptFormProps> = ({ selectedPrompt, handleCloseForm }) => {
	const { Modal, isOpen, closeModal, openModal } = useModal();
	const [stateForm, setStateForm] = useState<InitialState>(initialState);

	useEffect(() => {
		console.log(selectedPrompt, 'dentro');
		if (selectedPrompt && !isOpen) {
			const { es, en, fr, pt }: GPrompt.DeserializedResponse = JSON.parse(
				selectedPrompt.prompt.RESPONSE,
			);
			setStateForm({ es, en, fr, pt });
			openModal();
		}
		if (!selectedPrompt && isOpen) closeModal();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedPrompt]);

	return (
		<>
			<Modal title={selectedPrompt?.prompt.IAMODEL ?? ''}>
				<p>{selectedPrompt?.language}</p>
				<div className='input'>
					{Object.keys(initialState)
						.filter(item => item !== 'es')
						.map(name => {
							return (
								<Input
									key={name}
									name={name}
									placeholder={name.toLocaleUpperCase()}
									result={() => ''}
								/>
							);
						})}
				</div>
				<div className='button'>
					<Button id='save' text='Guardar' type={ButtonType.Dark} handleClick={() => ''} />
					<Button
						id='cancel'
						text='Cancelar'
						type={ButtonType.Information}
						handleClick={() => ''}
					/>
				</div>
			</Modal>
		</>
	);
};

export default PromptForm;
