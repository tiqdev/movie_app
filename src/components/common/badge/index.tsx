const Badge = ({ title }: { title: string }) => {
  return (
    <span className="text-light md:text-sm text-[12px] text-m_yellow tracking-wide leading-3 bg-m_brown px-2 py-1 rounded-md">
      {title}
    </span>
  );
};

export default Badge;
