import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault(); //Prevent default behaviour of form

    const copyTask = [...task]; //copy task and make another array
    copyTask.push({ title, description }); //add new task to cpy array
    setTask(copyTask); //Update state

    setTitle(""); //After create note input type empty
    setDescription("");
  };

  const deleteNote = (index) => {
    //Delete note
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen p-5 md:p-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form */}
        <form
          className="w-full lg:w-1/2 flex flex-col p-5"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter note title"
            className="w-full border-2 border-white px-5 py-4 mb-5 rounded-lg text-lg font-bold outline-none focus:border-blue-500"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />

          <textarea
            placeholder="Enter note description"
            className="w-full border-2 border-white px-5 py-4 rounded-lg text-lg font-bold outline-none focus:border-blue-500"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></textarea>

          {/* Add Button */}
          <button className="w-full py-4 rounded-lg border border-white mt-6 text-xl font-bold bg-blue-900 hover:bg-blue-700 hover:scale-105 transition">
            Add Note
          </button>
        </form>

        {/* Notes */}
        <div className="w-full lg:w-1/2 p-5 lg:border-l-2">
          <h1 className="text-3xl font-bold">Recent Notes</h1>

          <div className="flex flex-wrap gap-5 mt-6">
            {task.map(function (e, index) {
              return (
                <div
                  key={index}
                  className="w-full sm:w-40 min-h-50 py-8 px-4 bg-cover bg-center rounded-xl bg-[url('https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png')] text-black"
                >
                  <h1 className="text-xl font-bold wrap-break-words">
                    {e.title}
                  </h1>

                  <p className="mt-2 wrap-break-words">{e.description}</p>

                  {/* Delete Button */}
                  <button
                    onClick={() => {
                      deleteNote(index);
                    }}
                    className="mt-5 px-4 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-800 hover:scale-105 transition"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
