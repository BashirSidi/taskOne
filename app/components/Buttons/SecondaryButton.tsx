import { Button } from '@mui/material';
import { styled } from '@mui/system';

const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E5E5E5',
  border: `1px solid grey`,
  borderRadius: '5px',
  borderColor: '#E0D9FD',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#E5E5E5',
  },
  width: '100%',
  padding: '10px',
}));

export default SecondaryButton;
