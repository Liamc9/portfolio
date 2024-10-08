import { Outlet, useLocation } from "react-router-dom";
      import TopNavBar2 from "../components/navigation/TopNavBar2";
      import { useEffect } from "react";
      import SideNav from "../components/navigation/SideNav";
import { TabProvider } from "../components/TabContext";
import { DataProvider } from '../components/DataContext';

      export default function Root() {
        const location = useLocation();

        // Scroll to top whenever the location.pathname changes
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location.pathname]);

        // Function to determine if the BottomNavBar should be hidden
        const shouldHideBottomNavBar = () => {
          // List the paths where BottomNavBar should be hidden
          const pathsToHide = ["/login", "/signup"];
          return pathsToHide.includes(location.pathname);
        };

        const shouldHideTopNav = () => {
          // List the paths where TopNavBar should be hidden
          const pathsToHide = ["/updatecarddetails"];
          return pathsToHide.includes(location.pathname);
        };
        const shouldHideSideNav = () => {
          // List the paths where SideNavBar should be hidden
          const pathsToHide = ["/updatecarddetails"];
          return pathsToHide.includes(location.pathname);
        };

        return (
          <>
          <DataProvider>
              <TabProvider>
            <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-white">
              <div className="hidden md:block">
                {!shouldHideTopNav() && <TopNavBar2 />}
              </div>
              <div className="hidden md:block">
                {!shouldHideSideNav() && <SideNav />}
              </div>
              <Outlet />
            </div>
          </TabProvider>
          </DataProvider>
          </>
        );
      }