import { Connector } from "mqtt-react-hooks";
import { FC } from "react";
import { MyWrapper } from "types";

export const MqttWrapper: FC<MyWrapper> = ({ children }) => {
  return (
    <Connector
      options={{
        hostname: process.env.BROKER_URI,
        protocol: "wss",
        username: process.env.BROKER_USERNAME,
        password: process.env.BROKER_PASSWORD,
        reconnectPeriod: 1000,
      }}>
      {children}
    </Connector>
  );
};
