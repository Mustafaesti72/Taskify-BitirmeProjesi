import React, { useContext } from 'react';
import './styles/main.css';
import { Context } from './providers/global-context.provider';

import Header from './components/header/Header';
import SideNav from './components/side-nav/SideNav';
import Footer from './components/footer/index';
import ProjectsContextProvider from './providers/projects-context.provider';
import IssuesContextProvider from './providers/issues-context.provider';
import SprintsContextProvider from './providers/sprints-context.provider';
import TeamsContextProvider from './providers/teams-context.provider';
import ErrorBoundary from './components/error-boundary';
import RoutesHandler from './components/routesHandler';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const context = useContext(Context);
  const isLoggedIn = context?.isLoggedIn || false; // Default to false if context is undefined

  return (
    <Router>
      <div className="grid grid-cols-5 grid-rows-8 gap-0">
        <div className="col-span-5">
          <Header />
        </div>
        {isLoggedIn && (
          <div className="row-span-7 row-start-2">
            <SideNav />
          </div>
        )}
        <div className="col-span-4 row-span-6 row-start-2 mt-20">
          <ProjectsContextProvider>
            <IssuesContextProvider>
              <SprintsContextProvider>
                <TeamsContextProvider>
                  <ErrorBoundary>
                    <RoutesHandler />
                  </ErrorBoundary>
                </TeamsContextProvider>
              </SprintsContextProvider>
            </IssuesContextProvider>
          </ProjectsContextProvider>
        </div>
        <div className="col-span-4 col-start-2 row-start-8">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
