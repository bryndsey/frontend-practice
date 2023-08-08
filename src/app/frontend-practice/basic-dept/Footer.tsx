export function Footer() {
  return (
    <footer className="bg-stone-800 text-neutral-100">
      <div className="grid grid-cols-1 gap-3 p-10 xl:grid-cols-2">
        <h3>B/L®</h3>
        <p>
          {"I collaborate with ambitious brands and people. Let's build. "}
          <a href="#">foo@bar.baz</a>
        </p>

        <div>
          <h4>STAY IN THE KNOW</h4>
          <input></input>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
          <div>
            {"SOCIAL"}
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            {"INITIATIVES"}
            <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
            </ul>
          </div>
          <div>
            {"OFFICES"}
            <ul>
              <li>Spring Hill - TN</li>
              <li>{"It's just the one"}</li>
              <li>{"Seriously, that's all I have"}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-between justify-items-center bg-neutral-900 p-5 text-xs text-neutral-600 xl:grid-cols-3 xl:place-content-between">
        <a href="https://www.basicagency.com/">{"DESIGNED BY BASIC/DEPT"}</a>
        <span>{"IMPLEMENTED BY BRYAN LINDSEY, 2023"}</span>
        <a href="https://www.frontendpractice.com/projects/basic">
          {"FRONTEND PRACTICE"}
        </a>
      </div>
    </footer>
  );
}
