import { Container, Date } from './DiaryDateCalendar.styles';
import PropTypes from 'prop-types';
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
  color: '#9B9FAA',
  width: '20px',
  height: '20px',
};

export const DiaryDateCalendar = ({ date, updateDate }) => {
  const mobile = useMediaQuery({ maxWidth: 544 });
  const largeScreen = useMediaQuery({ minWidth: 545 });

  const datePickStyle = {
    width: mobile ? '288px' : '320px',
    maxWidth: mobile ? '320px' : 'unset',

    '& .MuiButtonBase-root.Mui-selected': {
      backgroundColor: '#FC842D',
    },

    '& .MuiButtonBase-root.Mui-selected:hover': {
      backgroundColor: '#f77211',
    },

    '& .MuiButtonBase-root:hover': {
      backgroundColor: '#fbeee5',
    },
  };

  const btnStyle = {
    color: '#9B9FAA',
    padding: 0,
    minWidth: 'unset',
    paddingBottom: largeScreen && '4px',
    position: 'relative',
  };

  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);
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
      updateDate(newDate);
    }
  }

  return (
    <Container>
      <Date>{formattedDate}</Date>
      <Button onClick={handleClick} sx={btnStyle}>
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
          <Paper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={date}
                onChange={handleChange}
                sx={datePickStyle}
              />
            </LocalizationProvider>
          </Paper>
        </ClickAwayListener>
      </Popover>
    </Container>
  );
};

DiaryDateCalendar.propTypes = {
  date: PropTypes.object,
  updateDate: PropTypes.func,
};
