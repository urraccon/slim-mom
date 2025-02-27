import { RightSideBar } from 'components/common/components/right-side-bar/RightSideBar';
import { DiaryDateCalendar } from './components/diary-date-calendar/DiaryDataCalendar';
import {
  Block,
  Box,
  Container,
  Content,
  Gradient,
  Background,
  Layout,
  Leaf,
  Section,
  Wrapper,
  OuterBackground,
} from './DiaryPage.styles';
import { DiaryAddProductForm } from './components/diary-add-product-form/DiaryAddProductForm';
import { DiaryProductList } from './components/diary-product-list/DiaryProductList';
import { useMediaQuery } from 'react-responsive';

export const DiaryPage = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Section>
        <Layout>
          <Container>
            <Content>
              <Wrapper>
                <Block>
                  {mobile && (
                    <>
                      <Box>
                        <DiaryDateCalendar />
                        <DiaryProductList />
                      </Box>
                      <DiaryAddProductForm />
                    </>
                  )}
                  {(tablet || desktop) && (
                    <>
                      <Box>
                        <DiaryDateCalendar />
                        <DiaryAddProductForm />
                      </Box>
                      <DiaryProductList />
                    </>
                  )}
                  {desktop && <Gradient />}
                </Block>
              </Wrapper>
            </Content>
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
