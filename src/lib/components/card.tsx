type CardProps = {
  children: any;
  className?: string;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={`rounded-3xl px-10 py-4 drop-shadow-xl bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;