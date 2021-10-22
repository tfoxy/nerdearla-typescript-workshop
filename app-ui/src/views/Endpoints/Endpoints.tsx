import { useCallback, useMemo } from "react";
import { generatePath, useHistory } from "react-router";
import { Endpoint } from "~/api";
import { useEndpoints } from "~/api/hooks";
import { Table, TableColumn } from "~/components/Table";
import { ENDPOINT_PATH } from "~/routes";
import styles from "./Endpoints.module.scss";

export const Endpoints = (): JSX.Element => {
  const { data: endpoints, isError } = useEndpoints();
  const history = useHistory();

  const handleEndpointClick = useCallback(
    (endpoint: Endpoint) => {
      history.push(generatePath(ENDPOINT_PATH, { endpointId: endpoint.id }));
    },
    [history]
  );

  const columns = useMemo(
    (): Array<TableColumn<Endpoint>> => [
      { label: "Method", name: "method" },
      { label: "Path", name: "path" },
      { label: "Enabled", name: "enabled" },
      { label: "Timeout", name: "timeout" },
    ],
    []
  );

  if (isError) {
    return <div>Unknown error ocurred</div>;
  }

  if (!endpoints) {
    return (
      <div className={styles.container}>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Table
        className={styles.endpointsTable}
        columns={columns}
        values={endpoints}
        onRowClicked={handleEndpointClick}
      />
    </div>
  );
};
