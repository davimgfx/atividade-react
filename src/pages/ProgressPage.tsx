import { useEffect, useState } from 'react';
import ProgressBar from '../components/progressBar/ProgressBar';

export default function ProgressPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue < 100 ? prevValue + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h1>Carregamento de dados</h1>
      <ProgressBar progress={value} />
    </section>
  );
}
