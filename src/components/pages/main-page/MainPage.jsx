import { useSelector } from 'react-redux';
import { DailyCaloriesForm } from './components/deaily-calories-form/DailyCaloriesForm';
import { Section } from './MainPage.styles';
import {
  selectDailyRateCal,
  selectRestrictedProdList,
} from 'components/redux/diary/selectors';

export const MainPage = () => {
  const restrictedProdList = useSelector(selectRestrictedProdList);
  const dailyRateCal = useSelector(selectDailyRateCal);

  return (
    <Section>
      <DailyCaloriesForm
        restrictedProdList={restrictedProdList}
        dailyRateCal={dailyRateCal}
      />
    </Section>
  );
};
