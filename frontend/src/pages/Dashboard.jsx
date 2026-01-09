import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ConfirmModal from "../components/ConfirmModal";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmData, setConfirmData] = useState({});

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const updateTask = async (id) => {
    if (!editingTitle.trim()) return;
    await API.put(`/tasks/${id}`, { title: editingTitle });
    setEditingId(null);
    setEditingTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10">
        <div className="max-w-4xl mx-auto bg-slate-200 p-8 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] space-y-8">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Task Manager
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Manage your tasks efficiently • {tasks.length} total
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <input
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-5 py-3
              focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="What do you need to do today?"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <button
              onClick={addTask}
              className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600
              text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              + Add
            </button>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />

          <div className="space-y-4">
            {tasks.length === 0 && (
              <div className="text-center text-slate-600 py-10">
                <p className="text-lg font-medium">No tasks yet</p>
                <p className="text-sm">Start by adding your first task above</p>
              </div>
            )}

            {tasks.map(task => (
              <div
                key={task._id}
                className={`flex justify-between items-center p-5 rounded-xl border transition
                ${editingId === task._id
                  ? "bg-amber-100 border-amber-300"
                  : "bg-slate-100 border-slate-300 shadow-sm hover:shadow-lg hover:-translate-y-[1px]"
                }`}
              >
                {editingId === task._id ? (
                  <input
                    className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 mr-4
                    focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={editingTitle}
                    onChange={e => setEditingTitle(e.target.value)}
                  />
                ) : (
                  <span className="text-slate-800 font-medium">
                    {task.title}
                  </span>
                )}

                <div className="flex gap-2">
                  {editingId === task._id ? (
                    <>
                      <button
                        onClick={() => {
                          setConfirmData({
                            title: "Save changes?",
                            message: "Do you want to save the updated task?",
                            type: "default",
                            onConfirm: () => updateTask(task._id)
                          });
                          setConfirmOpen(true);
                        }}
                        className="px-4 py-2 text-sm rounded-lg bg-green-600 hover:bg-green-700 text-white"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => {
                          setEditingId(null);
                          setEditingTitle("");
                        }}
                        className="px-4 py-2 text-sm rounded-lg bg-slate-500 hover:bg-slate-600 text-white"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingId(task._id);
                          setEditingTitle(task.title);
                        }}
                        className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setConfirmData({
                            title: "Delete task?",
                            message: "This action cannot be undone.",
                            type: "danger",
                            onConfirm: () => deleteTask(task._id)
                          });
                          setConfirmOpen(true);
                        }}
                        className="px-4 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <ConfirmModal
        open={confirmOpen}
        title={confirmData.title}
        message={confirmData.message}
        confirmText={confirmData.type === "danger" ? "Delete" : "Save"}
        type={confirmData.type}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          confirmData.onConfirm();
          setConfirmOpen(false);
        }}
      />
    </>
  );
}
