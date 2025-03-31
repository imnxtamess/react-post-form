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
    console.log("Form inviato!");
    createData();
    setIsSent(true);
    setInterval(() => {
      setIsSent(false);
    }, 2500);
  }

  function createData() {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            <div className={!isSent ? "d-none" : "btn btn-success mx-3 mt-3"}>
              Form inviato con successo!
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
