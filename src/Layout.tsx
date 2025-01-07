import { Outlet } from "react-router";
import Header from "./components/Header";
export default function Layout() {
	return (
		<>
			<Header />
			<main className="bg-slate-800 h-screen">
				<Outlet />
			</main>
		</>
	);
}
