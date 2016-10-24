import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h1>MessengerApp</h1>
    </header>
    <main>
      {content}
    </main>
  </div>
)
