import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function EditForm({ editedTask, updateTask, closeEditMode }) {
  const [updatedTask, setUpdatedTask] = useState(editedTask.name);

  useEffect(() => {
    const escapeEditModal = (e) => {
      e.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", escapeEditModal);

    //whenever creating eventlisteners, we want to also remove them
    return () => {
      window.removeEventListener("keydown", escapeEditModal);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({
      ...editedTask,
      name: updatedTask,
      now: new Date().toISOString(),
    });
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode(); //closes modal if clicking on something other than the edit form
      }}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTask}
            onInput={(e) => setUpdatedTask(e.target.value)}
            required
            //autoFocus //allows user to immediately type into field
            maxLength={50}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edit to task to now read ${updatedTask}`}
          type="submit"
        >
          <CheckIcon />
        </button>
      </form>
    </div>
  );
}

export default EditForm;
