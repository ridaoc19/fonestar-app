import { useContext, useState } from 'react';
import Button from '../../../components/common/button/Button';
import { ButtonType } from '../../../components/common/button/button.type';
import { CreateContext } from '../../../hooks/useContext';

interface PromptTableProps {
	handleEdit: (prompt: GPrompt.Item) => void;
}

const PromptTable = ({ handleEdit }: PromptTableProps) => {
	const { selector } = useContext(CreateContext);
	const [openPromptId, setOpenPromptId] = useState<string | null>(null);

	const handleToggle = (promptId: string) => {
		setOpenPromptId(openPromptId === promptId ? null : promptId);
	};

	return (
		<div className='prompt-table'>
			<div className='table'>
				<div className='header'>Prompt</div>
				<div className='header hide-mobile'>EN</div>
				<div className='header hide-mobile'>FR</div>
				<div className='header hide-mobile'>PT</div>
				<div className='header hide-mobile'>EDITAR</div>
				{selector.prompts.map((prompt, index) => {
					const response: GPrompt.DeserializedResponse = JSON.parse(prompt.RESPONSE);
					const isOpen = openPromptId === prompt.PROMPTID;
					return (
						<div key={prompt.PROMPTID} className={`row ${index % 2 === 0 ? 'even' : 'odd'}`}>
							<div className='cell prompt' onClick={() => handleToggle(prompt.PROMPTID)}>
								{prompt.PROMPT}
							</div>
							<div className={`cell hide-mobile ${isOpen ? 'open' : ''}`}>
								<span className='mobile-title'>EN:</span> {response.en}
							</div>
							<div className={`cell hide-mobile ${isOpen ? 'open' : ''}`}>
								<span className='mobile-title'>FR:</span> {response.fr}
							</div>
							<div className={`cell hide-mobile ${isOpen ? 'open' : ''}`}>
								<span className='mobile-title'>PT:</span> {response.pt}
							</div>
							<div className={`cell hide-mobile ${isOpen ? 'open' : ''}`}>
								<div className='edit-btn'>
									<Button
										id='edit-table'
										text='Editar'
										type={ButtonType.Dark}
										handleClick={() => handleEdit(prompt)}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PromptTable;
