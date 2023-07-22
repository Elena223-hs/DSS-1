import React from 'react';
import Navbar from './components/Navbar';
import ListSection from './components/ListSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import Recipe from './interfaces';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ListSection />
          </div>
          <div className="col-md-6">
            <DetailsSection selectedRecipe={null} onSave={function (recipe: Recipe): void {
              throw new Error('Function not implemented.');
            } } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
