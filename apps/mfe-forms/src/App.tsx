import { useState } from "react";
import { Select, DataTable, Column, TableAction, Modal } from "mfeUi";
import './styles/globals.css'
interface Users {
  name: string;
  id: string;
  email: string;
  status: string;
}
export default function Forms() {
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  
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
      width="sm"
      variant="center"
    >
      <Select
        label="Role"
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" }
        ]}
      />
    </Modal>
  </div>
}
