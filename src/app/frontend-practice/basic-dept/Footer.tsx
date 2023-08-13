function EmailInput() {
  return (
    <form>
      <div className="flex flex-row border-b">
        <input
          className="flex-1 border-none bg-transparent px-0 py-4 text-sm placeholder:text-sm placeholder:text-neutral-100 focus:ring-0"
          type="email"
          name="email"
          placeholder="Email address"
        ></input>
        <button type="submit" className="text-2xl">
          {"->"}
        </button>
      </div>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-stone-800 text-neutral-100">
      <div className="grid grid-cols-1 gap-3 p-10 text-sm xl:mr-8 xl:grid-cols-2 xl:gap-x-12 xl:gap-y-16 xl:px-20 xl:py-28 xl:text-base">
        <h3 className="text-lg font-extrabold xl:text-2xl">B/L®</h3>
        <p className="max-w-[80%] text-xl xl:text-3xl">
          {"We collaborate with ambitious brands and people. Let's build. "}
          <a href="#">foo@bar.baz</a>
        </p>

        <div className="mt-12">
          <h4>● STAY IN THE KNOW</h4>
          <EmailInput />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 xl:grid-cols-3">
          <div>
            <h4>{"● SOCIAL"}</h4>
            <ul className="mt-6">
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            <h4>{"● INITIATIVES"}</h4>
            <ul className="mt-6">
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
            </ul>
          </div>
          <div>
            <h4>{"● OFFICES"}</h4>
            <ul className="mt-6">
              <li>Spring Hill - TN</li>
              <li>{"It's just the one"}</li>
              <li>{"Seriously, that's it"}</li>
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
