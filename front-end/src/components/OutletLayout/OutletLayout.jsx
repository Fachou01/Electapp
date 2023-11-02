import Container from '../Container/Container';
import './OutletLayout.css';

const OutletLayout = ({ pageName, children }) => {
  return (
    <section className="bg-light-300 h-full">
      <h2 className="py-6 shadow bg-light-100 text-black outletLayout">{pageName}</h2>
      <Container outletPage={true}>
        {children}
      </Container>
    </section>
  )
}
export default OutletLayout;