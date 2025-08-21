import type { DocumentMeta, Recommendation } from "./types";

export const sampleDoc: DocumentMeta = {
	id: "doc_001",
	title: "Sample NDA",
	type: "NDA"
};

export const sampleRecommendations: Recommendation[] = [
	{
		id: "rec_1",
		risk_score: { total: 62, jurisdiction: 10, regulatory: 12, data: 20, liability: 20 },
		rationale: "Liability cap missing; propose 12 months of fees cap with carve-outs.",
		citations: [
			{ id: "c1", source: "Playbook v1", location: "§2.1", excerpt: "Cap at 12 months of fees." }
		]
	}
];
