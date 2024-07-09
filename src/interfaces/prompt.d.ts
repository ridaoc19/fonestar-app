declare namespace GPrompt {
	interface DeserializedResponse {
		es: string;
		en: string;
		fr: string;
		pt: string;
	}
	interface PromptApiResponse {
		version: string;
		_links: Links;
		autorization: Autorization;
		login: Login;
		_items: Item[];
		TotalItems: number;
		status: string;
		'status-details': string;
	}

	interface Item {
		MODEL: string;
		IAMODEL: string;
		PROMPTID: string;
		PROMPT: string;
		RESPONSE: string;
		FEEDBACK: null | string;
		UPDATEDAT: string;
	}

	interface Login {
		status: string;
		user: string;
		client: string;
	}

	interface Autorization {
		client: string;
		scope: string;
		enabled: boolean;
		resources: Resources;
		rate_limit: Ratelimit;
	}

	interface Ratelimit {
		enabled: boolean;
	}

	interface Resources {
		public: string[];
		private: string[];
	}

	interface Links {
		self: Self;
	}

	interface Self {
		method: string;
		href: string;
	}
}
