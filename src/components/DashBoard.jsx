import { useState } from "react";
import AddEmployee from "./AddEmployee";
import { Button } from "@chakra-ui/react";
import DashboardTable from "./DashboardTable"
const DashBoard = () => {
  const [active, setActive] = useState(false);
  const BaseURL = `https://prickly-fly-neckerchief.cyclic.app`;
  const handleSubmit = async () => {};
  return (
    <>
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active?"Show DashBoard":"Add Employee"}
      </Button>
      {active ? <AddEmployee /> : <DashboardTable/>}
    </>
  );
};

export default DashBoard;
