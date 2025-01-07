import { Link, NavLink } from "react-router";
export default function Header() {
	// const menuItems: string[] = ["Players", "Combines", "Comparisons"];
	const menuItems = [
		{
			title: "About",
			link: "about",
		},
		{
			title: "Players",
			link: "players",
		},
		{
			title: "Combines",
			link: "combines",
		},
		{
			title: "Comparisons",
			link: "comparisons",
		},
	];
	const menu = menuItems.map((item) => (
		<NavLink
			to={item.link}
			key={item.link}
			className="hover:text-slate-400 hover:underline cursor-pointer">
			{item.title}
		</NavLink>
	));
	return (
		<header className="flex justify-around items-center bg-slate-800 text-white h-12 text-xl border-b-2">
			<Link to="/">NFL Combine Tracker</Link>
			<nav>
				<ul className="flex gap-6">{menu}</ul>
			</nav>
		</header>
	);
}
