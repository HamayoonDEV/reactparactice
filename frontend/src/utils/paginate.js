import lodash from "lodash";

export const paginate = (item, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;

  return lodash(item).slice(startIndex).take(pageSize).value();
};
