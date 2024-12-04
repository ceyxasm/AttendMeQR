import sha256 from 'sha256';
export const firebaseConstants = {
  collection: 'CurrentLiveAttendance',
  docId: 'HLdby2XBljtPkBUSyvBY',
  field: 'otp',
  extraFields: ['classId'],
};
export const getHash = (input) => {
  const hash = sha256(input);
  return hash;
};

export const generateString = (input) => {
  const currentDate = new Date();
  const randomChars = () =>
    Math.random().toString(36).substr(2, 5).toUpperCase();

  const formatNumber = (num) => num.toString().padStart(2, '0');
  const formatDate = (date) =>
    `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(
      date.getDate(),
    )}`;
  const formatTime = (date) =>
    `${formatNumber(date.getHours())}:${formatNumber(
      date.getMinutes(),
    )}:${formatNumber(date.getSeconds())}`;

  const classID = input; // Replace this with the actual class ID.

  const startTime = formatTime(currentDate);
  const endTime = formatTime(new Date(currentDate.getTime() + 1000 * 4)); // Add 10 s, for example.
  const string = `${randomChars()}${formatDate(
    currentDate,
  )}${classID}${startTime}--${endTime}${randomChars()}`;
  // convert each char to hex
  let hexString = '';

  for (let i = 0; i < string.length; i++) {
    hexString += string.charCodeAt(i).toString(16);
  }
  return hexString;
};
