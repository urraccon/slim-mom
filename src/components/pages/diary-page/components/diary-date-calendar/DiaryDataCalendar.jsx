import { Container, Date } from './DiaryDateCalendar.styles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { useState } from 'react';
import { Button, ClickAwayListener, Paper, Popover } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});

const iconStyle = {
  fontSize: 20,
};

const dateCalStyle = {
  '& .MuiPickersDay-root, & .MuiPickersYear-yearButton': {
    transition: 'background-color 0.2s ease-in-out',
  },

  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected:hover, & .MuiPickersYear-root .MuiPickersYear-yearButton.Mui-selected:hover':
    {
      backgroundColor: '#e65a24',
    },

  '& .MuiPickersYear-root .MuiPickersYear-yearButton.Mui-selected, & .MuiButtonBase-root.MuiPickersDay-root.Mui-selected':
    {
      backgroundColor: '#fc842d',
    },

  '& .MuiPickersYear-yearButton:hover, & .MuiPickersDay-root:hover': {
    backgroundColor: 'rgba(252, 132, 45, 0.15)',
  },

  '& .MuiPickersDay-root:focus, & .MuiPickersYear-yearButton:focus': {
    backgroundColor: 'rgba(252, 132, 45, 0.3)',
  },
};

const btnStyle = largeScreens => ({
  color: '#9B9FAA',
  padding: 0,
  minWidth: 0,
  borderRadius: 0,
  transition: 'background-color 0.3s ease',
  height: 'fit-content',
  marginBottom: largeScreens ? '4px' : 0,

  '&:hover': {
    backgroundColor: '#f0f0f0',
  },

  '&:active': {
    backgroundColor: '#e0e0e0',
  },
});

const paperStyle = {
  overflow: 'auto',
};

const dateCalProps = {
  day: {
    disableRipple: true,
  },

  yearButton: {
    disableRipple: true,
  },
};

export const DiaryDateCalendar = () => {
  const largeScreens = useMediaQuery({ minWidth: 768 });

  const now = dayjs();

  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const [date, setDate] = useState(now);

  const formattedDate = dayjs(date).format('DD.MM.YYYY');

  function handleClick(evt) {
    setOpen(true);
    setTarget(evt.currentTarget);
  }

  function handleChange(newDate) {
    const oldDay = dayjs(date).format('D');
    const newDay = dayjs(newDate).format('D');

    if (oldDay !== newDay) {
      setOpen(false);
      setDate(newDate);
    }
  }

  return (
    <Container>
      <Date>{formattedDate}</Date>
      <Button onClick={handleClick} sx={btnStyle(largeScreens)} disableRipple>
        <DateRangeIcon sx={iconStyle} />
      </Button>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={target}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper sx={paperStyle}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={date}
                onChange={handleChange}
                sx={dateCalStyle}
                slotProps={dateCalProps}
              />
            </LocalizationProvider>
          </Paper>
        </ClickAwayListener>
      </Popover>
    </Container>
  );
};
