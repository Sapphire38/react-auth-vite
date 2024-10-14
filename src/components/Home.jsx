import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { Drawer } from "vaul";
import { createTask, getTasks } from "../api/task";
import { useForm } from "react-hook-form";

function Home() {
  useEffect(() => {
    getData();
  }, []);

  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const getData = async () => {
    const response = await getTasks();
    setTasks(response);
  };

  const [tasks, setTasks] = useState([]);

  const onSubmit = async (data) => {
    const response = await createTask(data.title);
    setOpen(false);
    getData();
  };  

  return (
    <div>
      <button onClick={() => setOpen(true)} className="bg-white p-2 rounded-md mt-1 ml-2">
        Crear ticket
      </button>

      <Drawer.Root direction="right"  open={open}>
      
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="right-0 top-0 bottom-0 fixed z-10 flex outline-none">
            <div className="bg-zinc-900 rounded-[16px] w-[310px] grow mt-2 mr-2 mb-2 p-5 flex flex-col">
              <div className="max-w-md ">
                <Drawer.Title className="font-medium mb-2 text-zinc-900">
                  Nuevo ticket
                </Drawer.Title>
                <Drawer.Description className=" mb-2 flex flex-col text-white gap-2 w-full">
                  <input
                    type="text"
                    className="bg-zinc-800 rounded-md p-2 "
                    placeholder="Titulo"
                    {...register("title")}
                  />

                  <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white"
                  >
                    Crear
                  </button>
                </Drawer.Description>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <div className="flex flex-row text-white gap-2 w-full flex-wrap p-2 h-[95%] overflow-y-scroll">
        {tasks.map((task) => (
          <div className="p-4 w-full bg-zinc-800 rounded-md" key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
