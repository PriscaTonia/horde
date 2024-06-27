import { ApplicationRoutes } from "@/utils/routes";
import { redirect } from "next/navigation";

export default function Dashboard() {
  redirect(ApplicationRoutes.OVERVIEW);
  return null;
}
