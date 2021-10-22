import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import background from "~/assets/background.png";
import { ENDPOINT_PATH, ENDPOINTS_PATH, HOME_PATH } from "~/routes";
import { Endpoint } from "~/views/Endpoint";
import { Endpoints } from "~/views/Endpoints";
import { Home } from "~/views/Home";
import styles from "./BasePage.module.scss";

export function BasePage(): JSX.Element {
  return (
    <div className={styles.root}>
      <header className={styles.header}>Tipando el mundo con Typescript</header>
      <nav className={styles.sidebar}>
        <img className={styles.image} src={background} alt="background" />
        <ul className={styles.sidebarLinkList}>
          <li>
            <NavLink
              className={styles.link}
              to={HOME_PATH}
              exact
              activeClassName={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ENDPOINTS_PATH}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Endpoints
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className={styles.mainContainer}>
        {/* match always exists because of Switch, so use non-null-assertion */}
        {/* eslint-disable @typescript-eslint/no-non-null-assertion */}
        <Switch>
          <Route exact path={HOME_PATH}>
            <Home />
          </Route>
          <Route exact path={ENDPOINTS_PATH}>
            <Endpoints />
          </Route>
          <Route path={ENDPOINT_PATH}>
            {({ match }) => <Endpoint id={match!.params.endpointId} />}
          </Route>
        </Switch>
      </main>
    </div>
  );
}
