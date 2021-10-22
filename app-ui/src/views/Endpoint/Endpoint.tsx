import axios from "axios";
import { useEndpoint } from "~/api/hooks";
import { Form } from "~/components/Form";
import styles from "./Endpoint.module.scss";

interface Props {
  id: string;
}

export const Endpoint = ({ id: endpointId }: Props): JSX.Element => {
  const { data: endpoint, error } = useEndpoint(endpointId);

  if (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return <div>Endpoint not found</div>;
    }
    return <div>Unknown error ocurred</div>;
  }

  if (!endpoint) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>Endpoint id: {endpointId}</span>
      <div className={styles.title}>
        <span className={styles.method}>{endpoint.method}</span>
        <span className={styles.path}>{endpoint.path}</span>
      </div>
      <p className={styles.description}>{endpoint.description}</p>
      <span className={styles.additionalInfo}>
        Enabled: {endpoint.enabled.toString()}
      </span>
      <span className={styles.additionalInfo}>Timeout: {endpoint.timeout}</span>
      {endpoint.formSchema && <Form formSchema={endpoint.formSchema} />}
    </div>
  );
};
