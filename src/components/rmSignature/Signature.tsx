import { Suspense } from "react";

function Signature() {
	return (
		<Suspense fallback={<span>Loading</span>}>
			<div className="logo axureFont mix-blend-difference" aria-label="Raz Massami">
				<span className="dark:text-appGray text-appGray/40 text-4xl md:text-6xl">r</span>
				<span className="dark:text-appYellow text-appBlue text-4xl md:text-6xl">m</span>
			</div>
		</Suspense>
	);
}

export default Signature;
