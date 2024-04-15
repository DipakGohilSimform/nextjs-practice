import { FC } from "react";

interface RollNoProps {
  params: {
    id: string;
  };
}

const RollNo: FC<RollNoProps> = ({ params }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      Roll No : {params.id}
    </div>
  );
};

export default RollNo;
