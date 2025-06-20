import React from 'react';
import Header from '../components/Header';
import BrowseSection from '../components/BrowseSection';
import DisplayMountsSection from '../components/DisplayMountsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <BrowseSection />
      <DisplayMountsSection />
    </div>
  );
};

export default Index;
