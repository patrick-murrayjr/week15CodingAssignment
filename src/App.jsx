import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
   return (
      <>
         <Navigation title={'Week 15 Project - REACT Blog Builder'} />
         <Content />
         <Footer />
      </>
   );
}

export default App;
