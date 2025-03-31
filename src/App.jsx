import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="container mt-5" data-bs-theme="dark">
        <form>
          <div class="mb-3">
            <label for="author" class="form-label">
              Author
            </label>
            <input
              type="text"
              class="form-control"
              name="author"
              id="author"
              aria-describedby="authorHelpId"
              placeholder="George R. R. Martin"
            />
            <small id="authorHelpId" class="form-text text-muted">
              Write the author's name above
            </small>
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              aria-describedby="titleHelpId"
              placeholder="Game of Thrones"
            />
            <small id="titleHelpId" class="form-text text-muted">
              Write the title above
            </small>
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">
              Body
            </label>
            <input
              type="text"
              class="form-control"
              name="body"
              id="body"
              aria-describedby="bodyHelpId"
              placeholder="Lorem ipsum dolor adapare iterimo dorime iterimo adapare dorime"
            />
            <small id="bodyHelpId" class="form-text text-muted">
              Write the post's body above
            </small>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="public"
              name="public"
            />
            <label class="form-check-label" for="public">
              Pubblico
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="private"
              name="private"
            />
            <label class="form-check-label" for="private">
              Privato
            </label>
          </div>
          <button type="submit" className="btn btn-light mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
