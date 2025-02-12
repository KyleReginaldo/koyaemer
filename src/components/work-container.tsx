interface WorkContainerProps {
  image: string;
  title: string;
  description: string;
  date: string;
}
function WorkContainer(props: WorkContainerProps) {
  return (
    <div className="border-3 flex justify-between items-center mb-[24px]">
      <div className="flex space-x-[8px] ">
        <img
          className="w-[48px] h-[48px] rounded-[8px]"
          src={props.image}
          alt="title"
        />
        <div>
          <p className="text-[16px] font-medium">{props.title}</p>
          <p className="text-[12px] font-light">{props.description}</p>
        </div>
      </div>
      <p className="text-[#919190] font-light text-[14px]">{props.date}</p>
    </div>
  );
}
export default WorkContainer;
