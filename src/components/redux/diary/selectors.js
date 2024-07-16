export const selectDiaryStatus = state => state.diary.status;
export const selectDiaryError = state => state.diary.error;
export const selectDailyRateCal = state => state.diary.dailyRateCal;
export const selectProductList = state => state.diary.productList.list;
export const selectDiaryProdList = state => state.diary.productList.diaryList;
export const selectRestrictedProdList = state =>
  state.diary.productList.restrictedList;
