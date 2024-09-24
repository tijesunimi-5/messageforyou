const user = [
  {
    name: "Tijesunimi",
    nickname: "Teelight",
    email: "tijesunimiidowu16@gmail.com",
    secretCode: "0405",
    message:
      "You're a Genius, You're smart, I love you, You mean a whole lot to me. C'mon take your time blush all you can.",
  },
  {
    name: "Ayomide",
    nickname: "Bunny",
    email: "ayo@gmail.com",
    secretCode: "0401",
    message:
      "You're amazing, you're beautiful, you're sweet, you're pretty, you're special, you're who i want, you're just so good - for me. \n I love you a lot and I need you to know a million times.",
  },
  {
    name: "Ayomide ",
    nickname: "Bunny",
    email: "ayo@gmail.com",
    secretCode: "0401",
    message:
      "You're amazing, you're beautiful, you're sweet, you're pretty, you're special, you're who i want, you're just so good - for me. \n I love you a lot and I need you to know a million times.",
  },
  {
    name: "ayomideB",
    nickname: "Bestie",
    email: "",
    secretCode: "0402",
    message:
      "You're amazing and you get big head, Thank you for always being there and being you. Thank you for the advices and words. ",
  },
];

export const getMessageByName = (name) => {
  const foundUser = user.find((u) => u.name === name);
  return foundUser ? foundUser.message : "No message found for this user";
};

export function getUsername(name) {
  return user.find((user) => user.name === name);
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