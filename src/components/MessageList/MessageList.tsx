import React, { useContext, useEffect } from 'react';
import { CreateContext } from '../../hooks/useContext';
import { TypeReducer } from '../../hooks/useContext/reducer';
import Svg from '../common/icons/Svg';
import { SvgType } from '../common/icons/svgType';

const MessageList: React.FC = () => {
	const {
		dispatch,
		selector: { error },
	} = useContext(CreateContext);

	const closeMessage = () => {
		dispatch({ type: TypeReducer.CLOSE_ERROR });
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (error) {
				closeMessage();
			}
		}, 10000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	return (
		<div className={`message-list ${error ? 'isOpen' : 'isHidden'}`}>
			<div className={`message-list__card error`}>
				<button
					type='button'
					aria-label='button close'
					className='message-list__card--button'
					onClick={() => closeMessage()}
				>
					<Svg type={SvgType.Close} width={16} height={16} />
				</button>
				<div>
					<div>{error}</div>
				</div>
			</div>
		</div>
	);
};

export default MessageList;
