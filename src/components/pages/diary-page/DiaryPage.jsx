import { RightSideBar } from 'components/common/components/right-side-bar/RightSideBar';
import { DiaryDateCalendar } from './components/diary-date-calendar/DiaryDataCalendar';
import { Container, DiaryContainer, Section } from './DiaryPage.styles';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DiaryAddProductForm } from './components/diary-add-product-form/DiaryAddProductForm';
import { useSelector } from 'react-redux';
import {
  selectDailyRateCal,
  selectRestrictedProdList,
} from 'components/redux/diary/selectors';

export const DiaryPage = () => {
  const now = dayjs();
  const [date, setDate] = useState(now);
  const restrictedProdList = useSelector(selectRestrictedProdList);
  const dailyRateCal = useSelector(selectDailyRateCal);

  return (
    <Section>
      <Container>
        <DiaryContainer>
          <DiaryDateCalendar
            date={date}
            updateDate={newDate => setDate(newDate)}
          />
          <DiaryAddProductForm />
        </DiaryContainer>
        <RightSideBar
          dailyRateCal={dailyRateCal}
          consumedCal={null}
          date={date}
          restrictedProdList={restrictedProdList}
        />
      </Container>
    </Section>
  );
};
