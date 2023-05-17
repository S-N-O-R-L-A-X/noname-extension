import { Card, Timeline } from "antd";

import log from "./update.json";
import "./UpdateLog.css";

export default function UpdateLog() {
  return (
    <>
      <Timeline
        mode="left"
        items={
          log.update.map((val) => {
            return {
              label: val.time,
              children: <Card size="small" className="timeline-card" title={val.version}><p>{val.content}</p></Card>
            }
          })
        }
      />
    </>
  );
}