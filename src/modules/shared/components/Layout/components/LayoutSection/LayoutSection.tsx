import SectionContainer from "../SectionContainer/SectionContainer";

interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export default function LayoutSection({ description, title, children }: Props) {
  return (
    <SectionContainer>
      <header className="text-center max-w-4xl flex flex-col items-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-title-bold mb-3">{title}</h2>

        <p className="text-gray-600 text-lg">{description}</p>
      </header>

      {children}
    </SectionContainer>
  );
}
