import dayjs from 'dayjs';
import {
  Container,
  Item,
  List,
  TextPiece,
  StatsContainer,
  Title,
  Text,
} from './RightSideBar.styles';
import PropTypes from 'prop-types';

export const RightSideBar = ({
  dailyRateCal,
  consumedCal,
  date,
  restrictedProdList,
}) => {
  const formattedDate = dayjs(date).format('DD.MM.YYYY');
  const left = dailyRateCal - consumedCal;
  const normalPercentages = Math.round((consumedCal / dailyRateCal) * 100);

  return (
    <StatsContainer>
      <Container>
        <Title>
          Summary for <TextPiece>{formattedDate}</TextPiece>
        </Title>
        <List>
          <Item>
            <TextPiece>Left</TextPiece>
            <TextPiece>{left === 0 ? '000' : left} kcal</TextPiece>
          </Item>
          <Item>
            <TextPiece>Consumed</TextPiece>
            <TextPiece>
              {consumedCal === null ? '000' : consumedCal} kcal
            </TextPiece>
          </Item>
          <Item>
            <TextPiece>Daily rate</TextPiece>
            <TextPiece>
              {dailyRateCal === null ? '000' : dailyRateCal} kcal
            </TextPiece>
          </Item>
          <Item>
            <TextPiece>n% of normal</TextPiece>
            <TextPiece>
              {isNaN(normalPercentages) === true
                ? '000 kcal'
                : `${normalPercentages}%`}
            </TextPiece>
          </Item>
        </List>
      </Container>
      <Container>
        <Title>Food not recommended</Title>
        <List>
          {restrictedProdList?.length === 0 ? (
            <Text>Your diet will be displayed here</Text>
          ) : (
            restrictedProdList?.map(restrictedProduct => (
              <Item key={restrictedProdList.indexOf(restrictedProduct)}>
                {restrictedProduct}
              </Item>
            ))
          )}
        </List>
      </Container>
    </StatsContainer>
  );
};

RightSideBar.propTypes = {
  dailyRateCal: PropTypes.number,
  consumedCal: PropTypes.number,
  date: PropTypes.object,
  restrictedProdList: PropTypes.array,
};
