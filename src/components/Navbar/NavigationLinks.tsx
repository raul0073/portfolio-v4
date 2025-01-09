import Link from "next/link";

function NavigationLinks() {
	return (
		<nav className="hidden md:flex ">
			<ul className="flex gap-4 items-center">
				<li>
					<Link className="abadiFont" href="/">
						Home
					</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationLinks;
