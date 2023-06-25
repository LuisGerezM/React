export const dateFormat = {
    parseToTimestamp: date => Date.parse(date),
    toLocaleString: date => new Date(date).toLocaleString()
  };