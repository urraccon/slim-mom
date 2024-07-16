import PropTypes from 'prop-types';
import { List, Text } from './DiartyProductList.styles';
import { DiaryProductListItem } from './components/diary-product-list-item/DiaryProductListItem';

export const DiaryProductList = ({ diaryProdList }) => {
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
  ];

  return (
    <List>
      {diaryProdListMockup.length === 0 ? (
        <Text>Your diary will be displayed here</Text>
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
  );
};

DiaryProductList.propTypes = {
  diaryProdList: PropTypes.array,
};
