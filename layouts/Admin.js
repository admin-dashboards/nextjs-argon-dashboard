import React, { createContext } from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import { useSession } from "next-auth/react";
export const THEME_CONTEXT = createContext();

function Admin(props) {
  // used for checking current route
  const [theme, setTheme] = React.useState(null);
  const session = useSession();
  const router = useRouter();
  let mainContentRef = React.createRef();
  React.useEffect(() => {
    if (!theme) {
      setTheme(localStorage.getItem("theme") ?? "LIGHT");
    }
  }, []);
  React.useEffect(() => {
    if (!session?.data && session.status !== "loading") {
      router.push("/auth/login");
    }
  }, [session]);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <>
      <THEME_CONTEXT.Provider value={{ theme, setTheme }}>
        {session?.data?.user && session.status !== "loading" && (
          <>
            <Sidebar
              {...props}
              routes={routes}
              logo={{
                innerLink: "/admin/index",
                imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
                imgAlt: "...",
              }}
            />
            <div className="main-content" ref={mainContentRef}>
              <AdminNavbar {...props} brandText={getBrandText()} />
              {props.children}
              <Container className={theme === "DARK" && `bg-dark`} fluid>
                <AdminFooter />
              </Container>
            </div>
          </>
        )}
      </THEME_CONTEXT.Provider>
    </>
  );
}

export default Admin;
