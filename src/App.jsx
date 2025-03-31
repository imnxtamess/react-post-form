import { useState } from "react";

const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  function handleInputChange(e) {
    const name = e.target.name;
    const value = name === "public" ? e.target.checked : e.target.value;
    console.log(name, value);

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
    console.log(formData);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.author || !formData.title || !formData.body) {
      setError(true);
      console.error("All fields are required!");
      return;
    }
    console.log("Form inviato!");
    createData();
  }

  function createData() {
    setError(false);
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success", data);
        setFormData({
          author: "",
          title: "",
          body: "",
          public: false,
        });
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(`Failed to submit the form: ${error.message}`);
      });
  }
  return (
    <>
      <div className="container mt-5" data-bs-theme="dark">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              name="author"
              id="author"
              aria-describedby="authorHelpId"
              placeholder="George R. R. Martin"
              onChange={(e) => handleInputChange(e)}
              value={formData.author}
            />
            <small id="authorHelpId" className="form-text text-muted">
              Write the author's name above
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="titleHelpId"
              placeholder="Game of Thrones"
              onChange={(e) => handleInputChange(e)}
              value={formData.title}
            />
            <small id="titleHelpId" className="form-text text-muted">
              Write the title above
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              name="body"
              id="body"
              aria-describedby="bodyHelpId"
              placeholder="Lorem ipsum dolor adapare iterimo dorime iterimo adapare dorime"
              onChange={(e) => handleInputChange(e)}
              value={formData.body}
            />
            <small id="bodyHelpId" className="form-text text-muted">
              Write the post's body above
            </small>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="public"
              name="public"
              onChange={(e) => handleInputChange(e)}
            />
            <label className="form-check-label" htmlFor="public">
              Pubblico
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-light mt-3">
              Submit
            </button>
            <div
              className={
                !isSent ? "d-none" : "btn btn-success mx-3 mt-3 transition"
              }
            >
              Form inviato con successo!
            </div>
            <div
              className={
                !error ? "d-none" : "btn btn-danger mx-3 mt-3 transition"
              }
            >
              {error}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
