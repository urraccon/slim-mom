import { Container, List, Message } from './DiartyProductList.styles';
import { DiaryProductListItem } from './components/DiaryProductListItem';
// import { useSelector } from 'react-redux';
// import { selectDiaryProdList } from 'components/redux/diary/selectors';

export const DiaryProductList = () => {
  // const diaryProdList = useSelector(selectDiaryProdList);
  const diaryProdListMockup = [
    {
      product: {
        name: 'Eggplant',
        calories: 320,
      },
      quantity: 100,
    },
    {
      product: {
        name: 'Poultry meat',
        calories: 480,
      },
      quantity: 100,
    },
    {
      product: {
        name: 'Bread',
        calories: 210,
      },
      quantity: 100,
    },
    {
      product: {
        name: 'Nut',
        calories: 205,
      },
      quantity: 100,
    },
    {
      product: {
        name: 'Pork meat',
        calories: 580,
      },
      quantity: 100,
    },
    {
      product: {
        name: 'Potato',
        calories: 380,
      },
      quantity: 100,
    },
  ];

  return (
    <>
      <Container>
        <List>
          {diaryProdListMockup.length === 0 ? (
            <Message>Your diary will be displayed here</Message>
          ) : (
            diaryProdListMockup.map(diaryProduct => {
              const name = diaryProduct.product.name;
              const calories = diaryProduct.product.calories;
              const quantity = diaryProduct.quantity;
              const key = diaryProdListMockup.indexOf(diaryProduct);

              return (
                <DiaryProductListItem
                  name={name}
                  calories={calories}
                  quantity={quantity}
                  key={key}
                />
              );
            })
          )}
        </List>
      </Container>
    </>
  );
};
