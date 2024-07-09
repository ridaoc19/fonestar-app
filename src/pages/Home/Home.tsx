import { useContext, useEffect, useState } from 'react';
import { CreateContext } from '../../hooks/useContext';
import { TypeReducer } from '../../hooks/useContext/reducer';
import PromptTable from './PromptTable/PromptTable';

export default function Home() {
	const { getPrompts, dispatch, selector } = useContext(CreateContext);
	const [selectedPrompt, setSelectedPrompt] = useState<GPrompt.Item | null>(null);

	const handleEdit = (prompt: GPrompt.Item) => {
		console.log(prompt);
		setSelectedPrompt(prompt);
	};

	const handleCloseForm = () => {
		setSelectedPrompt(null);
	};

	useEffect(() => {
		if (selector.status === 'success') {
			handleCloseForm();
			dispatch({ type: TypeReducer.STATUS, payload: 'idle' });
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selector]);

	useEffect(() => {
		getPrompts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='home'>
			<div className='home__prompt-tablet'>
				<PromptTable handleEdit={handleEdit} />
			</div>
			<div className='home__prompt-form'>
			</div>
		</div>
	);
}
