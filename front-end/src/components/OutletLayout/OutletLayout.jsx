import Container from '../Container/Container';
import './OutletLayout.css';

const OutletLayout = ({ pageName, children }) => {
  return (
    <>
      <h2 className="py-6 shadow bg-white outletLayout">{pageName}</h2>
      <Container outletPage={true}>
        {children}
      </Container>
    </>
  )
}
export default OutletLayout;