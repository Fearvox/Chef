import { Activity, Code2, Cpu, Disc3 } from "lucide-react";
import fs from "fs";
import path from "path";

async function getPerceptionData() {
	try {
		const dataPath = path.join(
			process.cwd(),
			"../../.learning/perception/AUDIO_PATTERNS.json",
		);
		const file = fs.readFileSync(dataPath, "utf8");
		const data = JSON.parse(file);
		// Grab the latest entry
		const latestTrack = Object.keys(data)[0];
		return { track: latestTrack, stats: data[latestTrack] };
	} catch (e) {
		return null;
	}
}

export default async function OperatorDash() {
	const telemetry = await getPerceptionData();

	return (
		<main className="flex-1 flex flex-col p-4 md:p-8 overflow-x-hidden">
			{/* Header Area */}
			<header className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 items-start">
				<div className="md:col-span-8">
					<h1 className="font-display text-[var(--text-macro)] font-black tracking-tight-macro leading-[0.85] m-0">
						CHEF <span className="text-[var(--color-aviation)]">SYS</span>
					</h1>
					<p className="font-mono text-xs tracking-micro text-[var(--color-steel)] mt-4">
						OPERATOR-GRADE DSP & MUSIC MONOREPO // SYSTEM RUNTIME v1.3.11
					</p>
				</div>

				<div className="md:col-span-4 border-structural p-4 flex flex-col justify-between">
					<div className="flex justify-between items-center mb-8">
						<span className="text-xs tracking-micro text-[var(--color-steel)]">
							[ STATUS ]
						</span>
						<div className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-none bg-[var(--color-ink)] animate-pulse"></span>
							<span className="text-xs font-bold">ONLINE</span>
						</div>
					</div>
					<div>
						<div className="text-xs text-[var(--color-steel)] mb-1">UPTIME</div>
						<div className="text-xl font-mono">00:00:00:00</div>
					</div>
				</div>
			</header>

			{/* Main Grid Area */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[var(--color-ink)] border-structural">
				{/* Module 1 */}
				<section className="bg-[var(--color-cream)] p-6 min-h-[300px] flex flex-col justify-between">
					<div className="flex items-center justify-between border-structural-b pb-4 mb-4">
						<h2 className="text-sm font-bold tracking-micro flex items-center gap-2">
							<Disc3 size={16} /> STRUDEL_LOCAL
						</h2>
						<span className="text-[var(--color-steel)] text-xs">
							PORT: 3000
						</span>
					</div>
					<div className="flex-1">
						<p className="text-xs text-[var(--color-steel)] leading-relaxed">
							Algorithmic pattern weaver active. No current sequence loaded.
							Waiting for user input via REPL.
						</p>
					</div>
					<button className="w-full border-structural py-2 text-xs hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors mt-4 cursor-pointer">
						INITIALIZE REPL
					</button>
				</section>

				{/* Module 2 */}
				<section className="bg-[var(--color-cream)] p-6 min-h-[300px] flex flex-col justify-between">
					<div className="flex items-center justify-between border-structural-b pb-4 mb-4">
						<h2 className="text-sm font-bold tracking-micro flex items-center gap-2">
							<Cpu size={16} /> DSP_ENGINE
						</h2>
						<span className="text-[var(--color-steel)] text-xs">NATIVE</span>
					</div>
					<div className="flex-1">
						<div className="space-y-2 font-mono text-xs">
							<div className="flex justify-between border-b border-dashed border-[var(--color-whisper)] pb-1">
								<span className="text-[var(--color-steel)]">TARGET:</span>
								<span>aarch64-apple-darwin</span>
							</div>
							<div className="flex justify-between border-b border-dashed border-[var(--color-whisper)] pb-1">
								<span className="text-[var(--color-steel)]">BUILD:</span>
								<span className="text-[var(--color-aviation)]">OFFLINE</span>
							</div>
							<div className="flex justify-between border-b border-dashed border-[var(--color-whisper)] pb-1">
								<span className="text-[var(--color-steel)]">VST/CLAP:</span>
								<span>0 PLUGINS</span>
							</div>
						</div>
					</div>
					<button className="w-full border-structural py-2 text-xs bg-[var(--color-aviation)] text-[var(--color-cream)] hover:bg-[var(--color-ink)] transition-colors mt-4 cursor-pointer">
						TRIGGER RUST BUILD
					</button>
				</section>

				{/* Module 3 */}
				<section className="bg-[var(--color-cream)] p-6 min-h-[300px] flex flex-col justify-between">
					<div className="flex items-center justify-between border-structural-b pb-4 mb-4">
						<h2 className="text-sm font-bold tracking-micro flex items-center gap-2">
							<Activity size={16} /> COGNITIVE_CACHE
						</h2>
						<span className="text-[var(--color-steel)] text-xs">.LEARNING</span>
					</div>
					<div className="flex-1">
						{telemetry ? (
							<div className="space-y-4 font-mono text-xs">
								<div className="border-structural p-2 bg-[var(--color-ink)] text-[var(--color-cream)] break-all">
									<span className="text-[var(--color-steel)] mr-2">LAST_INGEST:</span>
									{telemetry.track}
								</div>
								<div className="grid grid-cols-2 gap-2">
									<div className="border-structural p-2">
										<div className="text-[var(--color-steel)] mb-1">BPM</div>
										<div className="text-lg">{telemetry.stats.bpm}</div>
									</div>
									<div className="border-structural p-2">
										<div className="text-[var(--color-steel)] mb-1">KEY</div>
										<div className="text-lg">{telemetry.stats.key}</div>
									</div>
									<div className="border-structural p-2">
										<div className="text-[var(--color-steel)] mb-1">DENSITY</div>
										<div className="text-sm">{telemetry.stats.rhythm_density} Hz</div>
									</div>
									<div className="border-structural p-2">
										<div className="text-[var(--color-steel)] mb-1">STYLE</div>
										<div className="text-[10px] leading-tight text-[var(--color-aviation)]">{telemetry.stats.inferred_style}</div>
									</div>
								</div>
							</div>
						) : (
							<div className="text-xs text-[var(--color-steel)] mt-4">
								Awaiting memory synthesis from CONDUCTOR agent.
							</div>
						)}
					</div>
				</section>
			</div>

			<footer className="mt-8 border-structural-t pt-4 flex justify-between items-center text-xs font-mono text-[var(--color-steel)]">
				<div>© 2026 ZONIC DESIGN STUDIO</div>
				<div className="flex gap-4">
					<span>{`///`}</span>
					<span>SYSTEM READY</span>
				</div>
			</footer>
		</main>
	);
}
