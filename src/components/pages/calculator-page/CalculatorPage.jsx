import { RightSideBar } from 'components/common/components/right-side-bar/RightSideBar';
import {
  Background,
  Container,
  Layout,
  Leaf,
  OuterBackground,
  Section,
} from './CalculatorPage.styles';
import { CalculatorCaloriesForm } from './components/CalculatorCaloriesForm';
import { useMediaQuery } from 'react-responsive';

export const CalculatorPage = () => {
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Section>
        <Layout>
          <Container>
            <CalculatorCaloriesForm />
            <RightSideBar />
          </Container>
        </Layout>
      </Section>
      {desktop && (
        <>
          <Leaf />
          <Background />
          <OuterBackground />
        </>
      )}
    </>
  );
};
