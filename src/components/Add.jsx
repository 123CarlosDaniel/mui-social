import { Avatar, Button, ButtonGroup, Fab, formLabelClasses, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React,{useState} from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box, styled } from "@mui/system";

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} backgroundColor="background.default" color="text.primary" padding={3} borderRadius={5}>
          <Typography variant="h6" color={"gray"} textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar 
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ height: 30, width: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mb={3} mt={2}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
          </Stack>
          <ButtonGroup 
            fullWidth
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button>Post</Button>
            <Button 
              sx={{width:"100px"}}
            ><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
