interface User {
	version: string;
	_links: Links;
	autorization: Autorization;
	schema_input: Schemainput;
	_items: string[];
	TotalItems: number;
	status: string;
	'status-details': string;
	'api-token': string;
	'expiration-date': string;
}

interface Schemainput {
	status: string;
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
