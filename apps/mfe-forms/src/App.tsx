import { useState } from "react";
import { Select, DataTable, Column, TableAction, Modal } from "mfeUi";
import {
  DynamicForm
} from "mfeUi";
import './styles/globals.css'
import { userFields } from "./components/FieldConfigs/userForm.config";
import { useForm } from "react-hook-form";
interface Users {
  name: string;
  id: string;
  email: string;
  status: string;
}
export default function Forms() {
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const {
    control,
    register,
    setValue,
    handleSubmit
  } = useForm({
    defaultValues: {
      firstName: "",
      role: ""
    }
  });


  const userData = [
    {
      name: "Jibin",
      id: "1",
      email: "jibin@gmail.com",
      status: "active"
    },
    {
      name: "John",
      id: "2",
      email: "john@gmail.com",
      status: "active"
    },

  ]
  const columns: Column<Users>[] = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    {
      key: "status",
      header: "Status",
      render: (row: Users) => (
        <span className="text-success">{row.status}</span>
      )
    }
  ];


  const actions: TableAction<Users>[] = [
    {
      label: "Edit",
      variant: "primary",
      onClick: row => {
        console.log("edit", row)
        setIsEditModal(true)
      }
    },
    {
      label: "Delete",
      variant: "danger",
      onClick: row => {
        console.log("delete", row)
      }
    }
  ]

const onSubmit = (data:any) => {
    console.log("USER FORM DATA:", data);
  };

  return <div>
    <DataTable
      columns={columns}
      data={userData}
      actions={actions}
    />
    <Modal
      open={isEditModal}
      onClose={() => setIsEditModal(false)}
      title={"Edit User"}
      width="xl"
    >
      {/* <Select
        label="Role"
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" }
        ]}
      /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <DynamicForm
          fields={userFields}
          control={control}
          register={register}
          setValue={setValue}
        />

        <div className="flex justify-end mt-5">
          <button className="bg-primary text-white px-5 py-1.5 rounded-md" type="submit">Save User</button>
        </div>
      </form>
    </Modal>
  </div>
}
