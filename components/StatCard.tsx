const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number | undefined;
}) => {
  return (
    <div className="p-5 rounded-md bg-primary text-white text-center text-2xl">
      <h3 className="uppercase text-base">{title}</h3>
      <span>{value}</span>
    </div>
  );
};

export default StatCard;
