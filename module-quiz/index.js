import { validateUser, validateEmail } from "./validation.js"
import { assignUserGrade, formatUserData } from "./transformation.js"
import { serializeUser } from "./serialization.js"

const processUserData = (userData) => {

  const validatedUserData = validateEmail(validateUser(userData));
  const gradedUserData = assignUserGrade(validatedUserData);
  const serializedUserData = serializeUser(formatUserData(gradedUserData));
  return serializedUserData;

}

// test
const testCase1 = {
  name: "강태진",
  email: "taejin@taejin.com",
  age: 25
};

const testCase2 = {
  name: "신진호",
  email: "jinho@jinho.com",
  age: 15
};

const testCase3 = {
  name: "이동혁",
  email: "hyuk@hyuk.com",
  age: 45
};

const result1 = processUserData(testCase1);
console.log(result1);
// 출력: "강태진,taejin@taejin.com,25,ADULT,2024-12-26"

const result2 = processUserData(testCase2);
console.log(result2);
// 출력: "신진호,jinho@jinho.com,15,JUNIOR,2024-12-26"

const result3 = processUserData(testCase3);
console.log(result3);
// 출력: "이동혁,hyuk@hyuk.com,45,SENIOR,2024-12-26"