export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
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
    method: 'POST',
    body: JSON.stringify({
      username,
      name,
      last_name,
      bio,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
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
    method: 'PUT',
    body: JSON.stringify({
      username,
      name,
      last_name,
      bio,
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
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
      method: 'PUT',
      body: JSON.stringify({
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

/****  eliminar entrada */
export const deleteHackinionService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/hackentries/${id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};
//crea un nuevo comentario en la DB
export const sendHackinionService = async (data, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/hackEntries`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.lastId;
};
//consultar los comentarios de la BD
export const getAllHacknionsService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/hackentries`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};
// añadir un  voto a un comentario
export const sendVoteService = async (data, idEntry, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/hackentries/${idEntry}/votes`,
    {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
