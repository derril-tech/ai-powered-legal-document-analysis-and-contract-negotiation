import { sampleDoc, sampleRecommendations } from "@/lib/mock";

export default function DashboardPage() {
	return (
		<main className="mx-auto max-w-5xl p-6 space-y-6">
			<section>
				<h1 className="text-2xl font-semibold">Dashboard</h1>
				<p className="text-gray-600">Recent document: {sampleDoc.title}</p>
			</section>
			<section className="space-y-3">
				<h2 className="text-lg font-medium">Latest Recommendations</h2>
				<ul className="space-y-2">
					{sampleRecommendations.map((r) => (
						<li key={r.id} className="rounded-md border bg-white p-3 shadow-sm">
							<div className="flex items-center justify-between">
								<span className="font-medium">Risk: {r.risk_score.total}</span>
								<span className="text-xs text-gray-500">{r.citations.length} citations</span>
							</div>
							<p className="mt-1 text-sm text-gray-700">{r.rationale}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
