const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold md:text-start text-center text-m_yellow">
      {title}
    </h1>
  );
};

export default Title;
