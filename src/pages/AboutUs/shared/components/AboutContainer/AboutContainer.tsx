interface Props {
  children?: React.ReactNode;
}

export default function AboutContainer({ children }: Props) {
  return (
    <section className="w-full flex justify-center py-32 px-5">
      <div className="w-full flex flex-col max-w-layout items-center">
        {children}
      </div>
    </section>
  );
}
