import AccessAlarmIconGoogle from "@mui/icons-material/AccessAlarm";
import Button from "./Button";

import "./styles.css";

const IconAlarm = ({ hovered, ...props }) => {
  return (
    <AccessAlarmIconGoogle {...props} color={hovered ? "success" : "error"} />
  );
};

export default function App() {
  const onClick = () => {
    console.log("Got click");
  };

  return (
    <div className="App">
      <Button onClick={onClick} Icon={IconAlarm}>
        Click Me
      </Button>
    </div>
  );
}
