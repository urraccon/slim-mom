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
  left,
  consumed,
  dailyRate,
  normalPercentages,
  date,
  restrictedFoods,
}) => {
  return (
    <StatsContainer>
      <Container>
        <Title>
          Summary for <TextPiece>{date}</TextPiece>
        </Title>
        <List>
          <Item>
            <TextPiece>Left</TextPiece>
            <TextPiece>{left === 0 ? '000' : left} kcal</TextPiece>
          </Item>
          <Item>
            <TextPiece>Consumed</TextPiece>
            <TextPiece>{consumed === 0 ? '000' : consumed} kcal</TextPiece>
          </Item>
          <Item>
            <TextPiece>Daily rate</TextPiece>
            <TextPiece>{dailyRate === 0 ? '000' : dailyRate} kcal</TextPiece>
          </Item>
          <Item>
            <TextPiece>n% of normal</TextPiece>
            <TextPiece>
              {normalPercentages === 0 ? '000 kcal' : `${normalPercentages}%`}
            </TextPiece>
          </Item>
        </List>
      </Container>
      <Container>
        <Title>Food not recommended</Title>
        <List>
          {restrictedFoods.length === 0 ? (
            <Text>Your diet will be displayed here</Text>
          ) : (
            restrictedFoods?.map(restrictedFood => (
              <Item key={restrictedFoods.indexOf(restrictedFood)}>
                {restrictedFood}
              </Item>
            ))
          )}
        </List>
      </Container>
    </StatsContainer>
  );
};

RightSideBar.propTypes = {
  left: PropTypes.number,
  consumed: PropTypes.number,
  dailyRate: PropTypes.number,
  normalPercentages: PropTypes.number,
  date: PropTypes.string,
  restrictedFoods: PropTypes.array,
};
