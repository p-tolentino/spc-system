import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserHome = () => {
  return (
    <div className="flex flex-col gap-2 p-8 pt-0">
      <div>welcome (name)</div>
      <div>
        <Link
          href={`/user/dashboard`}
          className="text-sm hover:underline transition-all"
        >
          Proceed to Dashboard →
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
