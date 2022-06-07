export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.message;
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.message[0];
};

export const registerUserService = async ({
  username,
  name,
  last_name,
  bio,
  email,
  password,
}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/newUser`, {
    method: "POST",
    body: JSON.stringify({
      username,
      name,
      last_name,
      bio,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editUserService = async (
  { username, name, last_name, bio, email },
  token
) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/changeHack`, {
    method: "PUT",
    body: JSON.stringify({
      username,
      name,
      last_name,
      bio,
      email,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const changePassService = async ({ password }, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/changePassword`,
    {
      method: "PUT",
      body: JSON.stringify({
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
