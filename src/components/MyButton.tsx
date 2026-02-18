import React from "react";
import Button from "@mui/material/Button";

interface MyButtonProps {
  label: string;
  onClick?: () => void;
}

const MyButton = ({ label, onClick }: MyButtonProps) => {
  return (
    <>
      <Button variant="text" onClick={onClick}>
        {label}
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};

export default MyButton;
