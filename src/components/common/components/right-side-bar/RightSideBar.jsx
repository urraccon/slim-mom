import dayjs from 'dayjs';
import {
  Container,
  Item,
  List,
  Title,
  Message,
  Box,
  TextWrapper,
  Content,
  Block,
  Wrapper,
} from './RightSideBar.styles';
import { useSelector } from 'react-redux';
import {
  selectDailyRateCal,
  selectRestrictedProdList,
} from 'components/redux/diary/selectors';

export const RightSideBar = () => {
  const restrictedProdList = useSelector(selectRestrictedProdList);
  const dailyRateCal = useSelector(selectDailyRateCal);

  const date = dayjs();
  const formattedDate = dayjs(date).format('DD.MM.YYYY');
  const consumedCal = 0;
  const leftCal = dailyRateCal - consumedCal;
  const calIntakePercentage = Math.round((consumedCal / dailyRateCal) * 100);

  return (
    <Container>
      <Content>
        <Wrapper>
          <Block>
            <Title>Summary for {formattedDate}</Title>
            <List>
              <Item>
                <Box>
                  <TextWrapper>Left</TextWrapper>
                  <TextWrapper>
                    {leftCal === 0 ? '000' : leftCal} kcal
                  </TextWrapper>
                </Box>
              </Item>
              <Item>
                <Box>
                  <TextWrapper>Consumed</TextWrapper>
                  <TextWrapper>
                    {consumedCal === null ? '000' : consumedCal} kcal
                  </TextWrapper>
                </Box>
              </Item>
              <Item>
                <Box>
                  <TextWrapper>Daily rate</TextWrapper>
                  <TextWrapper>
                    {dailyRateCal === null ? '000' : dailyRateCal} kcal
                  </TextWrapper>
                </Box>
              </Item>
              <Item>
                <Box>
                  <TextWrapper>n% of normal</TextWrapper>
                  <TextWrapper>
                    {isNaN(calIntakePercentage) === true
                      ? '000 kcal'
                      : `${calIntakePercentage}%`}
                  </TextWrapper>
                </Box>
              </Item>
            </List>
          </Block>
          <Block>
            <Title>Food not recommended</Title>
            <List>
              {restrictedProdList?.length === 0 ? (
                <Message>Your diet will be displayed here</Message>
              ) : (
                restrictedProdList?.map(restrictedProduct => (
                  <Item key={restrictedProdList.indexOf(restrictedProduct)}>
                    <TextWrapper>{restrictedProduct}</TextWrapper>
                  </Item>
                ))
              )}
            </List>
          </Block>
        </Wrapper>
      </Content>
    </Container>
  );
};
