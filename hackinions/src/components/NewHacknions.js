import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendHacknionsService } from "../services";

export const NewHackinions = ({ addHackinions }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const hackinions = await sendHacknionsService({ data, token });

      addHackinions(hackinions);

      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Nuevo Hackinions</h1>
      <form className="new-hackinions" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="text">Hackinions</label>
          <input type="text" name="text" id="text" required />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            name="image"
            id="image"
            accept={"image/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Enviar Hackinions</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Postear Hackinions</p> : null}
      </form>
    </>
  );
};
