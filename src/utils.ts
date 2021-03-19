export const logObjectValues = (objectToLog: object, logPrefix: string) => {
  Object.entries(objectToLog).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      logObjectValues(value, `${logPrefix}.${key}`);
    } else {
      console.log(`${logPrefix}.${key}: ${value}`)
    }
  })
};