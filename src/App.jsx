import { useState } from "react";

const URL =
  "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316";

function App() {
  const inputLabelClassName =
    "block mb-2 text-xs font-bold tracking-wide text-stone-300 uppercase";
  const inputClassName =
    "w-full rounded text-stone-700 border-none bg-slate-300 focus:outline-none p-2";

  const [inputLabelWrongClassName, setInputLabelWrongClassName] =
    useState(inputLabelClassName);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const onClicked = (e) => {
    e.preventDefault();
    if (value.email === "" || value.password === "") {
      setInputLabelWrongClassName(() => inputLabelClassName + " text-red-500");
      console.log("write all blank!");
    } else console.log(value, "complete!");
  };

  const inputChange = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setValue((pre) => ({
        email: `${e.target.value}`,
        password: `${pre.password}`,
      }));
      setInputLabelWrongClassName(() => inputLabelClassName);
    } else if (e.target.name === "password") {
      setValue((pre) => ({
        email: `${pre.email}`,
        password: `${e.target.value}`,
      }));
      setInputLabelWrongClassName(() => inputLabelClassName);
    } else console("error");
  };

  return (
    <>
      <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
        <img
          src={URL}
          alt="main-img"
          className="object-contain mb-8 w-44 h-44 rounded-xl"
        />
        <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
          reactview
        </h1>
        <p className="text-stone-500">A beautiful mountain</p>
      </header>
      <div className="px-5 w-full">
        <form>
          <div className="input-form">
            <p className={inputLabelWrongClassName}>email</p>
            <input
              type="text"
              name="email"
              className={inputClassName}
              onChange={(e) => inputChange(e)}
            />
            <p className={inputLabelWrongClassName}>password</p>
            <input
              type="password"
              name="password"
              className={inputClassName}
              onChange={(e) => inputChange(e)}
            />
          </div>
          <div className="flex h-16 items-center gap-5">
            <p onClick={() => console.log("created")}>Create a new account?</p>
            <button
              className="px-4 py-2 font-semibold uppercase leading rounded text-stone-900 bg-amber-400 hover:bg-amber-500 h-10"
              onClick={onClicked}
            >
              sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
