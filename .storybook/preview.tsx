import React from 'react';
import { StoreContext } from '../src/hooks/useContext/index';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../src/styles/app/app.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/index/index.scss';

const preview: Preview = {
	decorators: [
		Story => (
			<StoreContext>
				<Story />
			</StoreContext>
		),
	],
	parameters: {
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
