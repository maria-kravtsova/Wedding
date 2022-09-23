import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shelby & Maria</h1>
        <h2>August 12, 2023</h2>
        <h3>Windrift Hall</h3>
        <p>256 Smith Rd, Coxsackie, NY 12192</p>
      </header>

      <section name="information">
        <div className="img1">
          <img src="img1.jpeg" alt="Engagement" height={700} />
        </div>
        <div className="p1">
          <p>
            The ceremony is planned to be outdoors with no cover (except in the
            event of rain).
          </p>
          <p>Receptions will be in a pavilion.</p>
          <p>
            Dress code will be formal. Please help us create our vision by
            wearing soft neutral colors (some examples below, if you have questions please reach out). We don't recommend stiletto heels due to grass and gravel.
          </p>
          <img src="./colors.png" height={200} alt="navy, gray, blue, blush" className="colors-img" />
          <p>
            While there is space for you at Windrift Hall, you are also welcomed
            to book your own place. Nearby place suggestions are:
            <ul>
              <li>
                <a
                  href="https://www.airbnb.com/rooms/18770113"
                  target="_blank"
                  rel="noreferrer"
                >
                  Victorian Pied-à-Terre
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.thewoodhouselodge.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Woodhouse Lodge
                </a>{" "}
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section name="rsvp"></section>
    </div>
  );
}

export default App;
