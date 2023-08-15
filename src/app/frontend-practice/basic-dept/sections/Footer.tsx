function EmailInput() {
  return (
    <form>
      <div className="border-b-backdrop flex flex-row border-b">
        <input
          className="placeholder:text-backdrop flex-1 border-none bg-transparent px-0 py-4 text-sm placeholder:text-sm focus:ring-0"
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
    <footer className="bg-content text-backdrop">
      <div className="grid grid-cols-1 gap-3 p-10 text-sm md:p-16 xl:mr-8 xl:grid-cols-2 xl:gap-x-12 xl:gap-y-16 xl:px-20 xl:py-28 xl:text-base">
        <h3 className="text-lg font-extrabold xl:text-2xl">B/L®</h3>
        <p className="max-w-[80%] text-xl xl:text-3xl">
          {"I collaborate with ambitious brands and people. Let's build. "}
          <a href="#" className="underline">
            biz@bryanlindsey.dev
          </a>
        </p>

        <div className="mt-12 xl:max-w-[85%]">
          <h4>● STAY IN THE KNOW</h4>
          <EmailInput />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 xl:grid-cols-3">
          <div>
            <h4>{"● SOCIAL"}</h4>
            <ul className="mt-6">
              <li>
                <a
                  href="https://github.com/bryndsey"
                  className="hover:underline"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bryan-c-lindsey/"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://codesandbox.io/u/bryanlindsey"
                  className="hover:underline"
                >
                  CodeSandbox
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{"● INITIATIVES"}</h4>
            <ul className="mt-6">
              <li>
                <a href="#" className="hover:underline">
                  Coding
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Parenting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gaming
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Relaxing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{"● OFFICES"}</h4>
            <ul className="mt-6">
              <li>
                <a href="#" className="hover:underline">
                  Spring Hill - TN
                </a>
              </li>
              <li>{"It's just the one"}</li>
              <li>{"Yep, that's it"}</li>
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
