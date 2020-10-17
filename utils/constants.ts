import { Interface } from "readline";

interface TableColumns {
    title: string,
    dataIndex: string,
    key: string
}
export const columns: Array<TableColumns> = [
  {
    title: "Company",
    dataIndex: "company_name",
    key: "company_name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Applied On",
    dataIndex: "applied_on",
    key: "applied_on",
  },
  {
    title: "Stage",
    dataIndex: "stage",
    key: "stage",
  },
];
