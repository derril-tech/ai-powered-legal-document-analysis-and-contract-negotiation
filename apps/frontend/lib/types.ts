export interface Citation {
	id: string;
	source: string;
	location: string;
	excerpt: string;
}

export interface RiskScore {
	total: number; // 0-100
	jurisdiction?: number;
	regulatory?: number;
	data?: number;
	liability?: number;
}

export interface Clause {
	id: string;
	type: string; // e.g., indemnity, governing_law
	text: string;
	confidence?: number;
}

export interface Recommendation {
	id: string;
	doc_version_id?: string;
	risk_score: RiskScore;
	rationale: string;
	citations: Citation[];
	proposals?: unknown;
}

export interface DocumentMeta {
	id: string;
	title: string;
	type: string; // NDA, MSA, etc.
}
