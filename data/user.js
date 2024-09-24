const user = [
  {
    name: "Tijesunimi",
    nickname: "Teelight",
    email: "tijesunimiidowu16@gmail.com",
    "secret-code": "0405",
    message:
      "You're a Genius, You're smart, I love you, You mean a whole lot to me. C'mon take your time blush all you can",
  },
];


export function getUsername() {
  return user.find((user) => user.name);
}
export function getNickname() {
  return user.find((user) => user.nickname);
}
export function getUserEmail() {
  return user.find((user) => user.email);
}
export function getUserSecretcode() {
  return user.find((user) => user["secret-code"]);
}
export function getMessage() {
  return user.find((user) => user.message)
}