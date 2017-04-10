export class ArrayUtil {

  public static filterArray(arr, filterData) {
    return arr.filter((data) => {
      return data.skuid.search(filterData) === 0;
    });
  }
}
