import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

export default function ThankFYouModal(props) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const updateLastName = (event) => {
    setLastName(event.target.value);
  };

  const addNewUser = () => {
    let newUser = { user_first_name: firstName, user_last_name: lastName, arr_orders: [] }
    fetchUser(newUser);
  };

  const fetchUser = async (user) => {
    await fetch('http://localhost:4500/user', { method: 'POST', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' } })
      .then(response => { console.log(response) })
      .catch(error => { console.log(error) });
      props.setShouldShowThankYouModal(false);
  };

  return (
    <Modal
      open
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        p: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          textAlign: "center",
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          תודה רבה!
        </Typography>
        <Typography id="server-modal-description" sx={{ pt: 2 }}>
          שמחים אתך בהשתתפותך בהגרלה הסינית!
        </Typography>
        <Typography>
          על מנת לשמור את נתוניך לצורך עריכת ההגרלות, נא הזן את הפרטים הבאים
        </Typography>
        <TextField label="שם פרטי" onChange={updateFirstName} />
        <TextField label="שם משפחה" onChange={updateLastName} />
        <Button onClick={addNewUser}>לאישור</Button>
      </Box>
    </Modal>
  );
}
