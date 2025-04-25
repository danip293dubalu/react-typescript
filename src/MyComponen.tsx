import { useEffect, useState } from "react";

function fetchExample(): Promise<any> {
  return fetch("https:example.com");
}

interface MyComponentProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title = "",
  subtitle,
}) => {
  const [counter, setCounter] = useState(5);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setCounter(counter + 1);
    setLoading(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {counter}
      <button onClick={handleClick}>click</button>
    </div>
  );
};
