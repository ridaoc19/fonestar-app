import React, { useContext, useState } from 'react';
import Button from '../../../components/common/button/Button';
import { ButtonType } from '../../../components/common/button/button.type';
import Input from '../../../components/common/input/Input';
import { CreateContext } from '../../../hooks/useContext';
import { TypeReducer } from '../../../hooks/useContext/reducer';
import { SelectedPrompt } from '../Home';
import Svg from '../../../components/common/icons/Svg';
import { SvgType } from '../../../components/common/icons/svgType';
import _color from '../../../styles/index/global/_color';

interface PromptFormProps {
	selectedPrompt: SelectedPrompt | null;
	handleCloseForm: () => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ selectedPrompt, handleCloseForm }) => {
	const { updateFeedback, dispatch } = useContext(CreateContext);
	const [stateForm, setStateForm] = useState<string>('');

	return (
		<>
			{selectedPrompt && (
				<div className='modal-overlay' onClick={handleCloseForm}>
					<div className='modal-container' onClick={e => e.stopPropagation()}>
						<div className='modal-header'>
							<h2>{selectedPrompt?.prompt.IAMODEL ?? ''}</h2>
							<button className='modal-close' onClick={handleCloseForm}>
								<Svg type={SvgType.Close} color={_color['--base-main']} />
							</button>
						</div>

						<div className='modal-content'>
							<p>{selectedPrompt?.language}</p>
							<div className='input'>
								<Input
									name='feedback'
									placeholder='Feedback'
									initialValue={selectedPrompt?.prompt.FEEDBACK ?? ''}
									result={({ value }) => {
										setStateForm(value as string);
									}}
								/>
							</div>
							<div className='button'>
								<Button
									id='cancel'
									text='Cancelar'
									type={ButtonType.Information}
									handleClick={() => {
										handleCloseForm();
									}}
								/>
								<Button
									id='save'
									text='Guardar'
									type={ButtonType.Dark}
									handleClick={() => {
										if (selectedPrompt && stateForm) {
											updateFeedback({
												promptId: selectedPrompt.prompt.PROMPTID,
												feedback: JSON.stringify({ ...selectedPrompt.prompt, FEEDBACK: stateForm }),
											});
										}
										dispatch({
											type: TypeReducer.ERROR,
											payload: 'El campo Feedback debe esta totalmente diligenciado y sin errores',
										});
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PromptForm;
