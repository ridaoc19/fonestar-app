import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '!style-loader!css-loader!sass-loader!../src/styles/app/app.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/index/index.scss';

const preview: Preview = {
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
