import axios from "axios";

const updateOptions = () => {
  const user = JSON.parse(window.localStorage.user);

  if (!!user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    };
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (url: string) {
  //   const { data } = await axios.get(url, updateOptions());
  const { data } = await axios.get(url);
  return data;
}
