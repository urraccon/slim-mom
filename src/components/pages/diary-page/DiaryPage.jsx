import { RightSideBar } from 'components/common/components/right-side-bar/RightSideBar';
import { DiaryDateCalendar } from './components/diary-date-calendar/DiaryDataCalendar';
import { Container, DiaryContainer, Section } from './DiaryPage.styles';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DiaryAddProductForm } from './components/diary-add-product-form/DiaryAddProductForm';
import { useSelector } from 'react-redux';
import {
  selectDailyRateCal,
  selectDiaryProdList,
  selectRestrictedProdList,
} from 'components/redux/diary/selectors';
import { DiaryProductList } from './components/diary-product-list/DiaryProductList';
import { useMediaQuery } from 'react-responsive';

export const DiaryPage = () => {
  const mobile = useMediaQuery({ maxWidth: 544 });
  const largeScreen = useMediaQuery({ minWidth: 545 });

  const now = dayjs();
  const [date, setDate] = useState(now);
  const restrictedProdList = useSelector(selectRestrictedProdList);
  const dailyRateCal = useSelector(selectDailyRateCal);
  const diaryProdList = useSelector(selectDiaryProdList);

  return (
    <Section>
      <Container>
        <DiaryContainer>
          <DiaryDateCalendar
            date={date}
            updateDate={newDate => setDate(newDate)}
          />
          {mobile && <DiaryProductList diaryProdList={diaryProdList} />}
          <DiaryAddProductForm />
          {largeScreen && <DiaryProductList diaryProdList={diaryProdList} />}
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
