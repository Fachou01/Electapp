import './Container.css';

const Container = ({ outletPage, children }) => {
	if (outletPage) return (
		<div className="containerOutletWrapper pt-5">
			{children}
		</div>
	)
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{children}
		</div>
	)
}
export default Container;