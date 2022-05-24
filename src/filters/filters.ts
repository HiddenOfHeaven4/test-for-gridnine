export const generateKey = (key: number): string => {
  return `${key}_${new Date().getTime()}`;
};

export const sortFilterData = [
    {
      name: "По возрастанию цены",
      value: "increase",
    },
    {
      name: "По убыванию цены",
      value: "decrease",
    },
    {
      name: "По времени в пути",
      value: "duration",
    },
  ];
  
  export const filterData = [
    {
      name: "1 пересадка",
      value: "transfer",
    },
    {
      name: "Без пересадок",
      value: "notransfer",
    },
  ];
  
  export const airlinesFilterData = [
    {
      name: "Аэрофлот",
      value: "airline"
    },
  ];