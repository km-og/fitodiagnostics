const baseUrl = "https://api.fitodiagnostika.ru/send-form";
// const baseUrl = "http://localhost:3001/send-form";

const sendData = (
  company,
  userName,
  tel,
  email,
  sample,
  comment,
  selectedPathogen
) => {
  return fetch(`${baseUrl}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company,
      userName,
      tel,
      email,
      sample,
      comment,
      selectedPathogen,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      return Promise.reject(new Error("Что-то пошло не так..."));
    }
  });
};

export { baseUrl, sendData };
