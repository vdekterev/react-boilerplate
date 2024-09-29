import logo from '/img/logo.svg';
import './Header.css';
export default function Header() {
	return (
		<header>
			<a href="/">
				<img src={logo} alt="logo" />
			</a>
		</header>
	);
}