import { useContext, useState } from 'react';
import Svg from '../../../components/common/icons/Svg';
import { SvgType } from '../../../components/common/icons/svgType';
import { CreateContext } from '../../../hooks/useContext';
import _color from '../../../styles/index/global/_color';
import { SelectedPrompt } from '../Home';

interface PromptTableProps {
	handleEdit: (data: SelectedPrompt) => void;
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
				{selector.prompts.map((prompt, index) => {
					const response: GPrompt.DeserializedResponse = JSON.parse(prompt.RESPONSE);
					const isOpen = openPromptId === prompt.PROMPTID;
					return (
						<div key={prompt.PROMPTID} className={`row ${index % 2 === 0 ? 'even' : 'odd'}`}>
							<div
								className='cell prompt'
								onClick={() => handleEdit({ prompt, language: response.es })}
							>
								{prompt.PROMPT}
								<div
									className='edit-btn hide-desktop'
									onClick={e => {
										e.stopPropagation();
										handleToggle(prompt.PROMPTID);
									}}
								>
									<Svg
										type={isOpen ? SvgType.ArrowTop : SvgType.ArrowBottom}
										color={_color['--base-main']}
										height={16}
										width={16}
									/>
								</div>
							</div>

							<div
								className={`cell hide-mobile ${isOpen ? 'open' : ''}`}
								onClick={() => handleEdit({ prompt, language: response.en })}
							>
								<span className='mobile-title'>EN:</span> {response.en}
							</div>

							<div
								className={`cell hide-mobile ${isOpen ? 'open' : ''}`}
								onClick={() => handleEdit({ prompt, language: response.fr })}
							>
								<span className='mobile-title'>FR:</span> {response.fr}
							</div>

							<div
								className={`cell hide-mobile ${isOpen ? 'open' : ''}`}
								onClick={() => handleEdit({ prompt, language: response.pt })}
							>
								<span className='mobile-title'>PT:</span> {response.pt}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PromptTable;
