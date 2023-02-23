type GlassPaneProps = {
  children: any;
  className: string;
}

const GlassPane = ({ children, className }: GlassPaneProps) => {
  return (
    <div
      className={`glass rounded-2xl border-solid border-2 border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassPane;