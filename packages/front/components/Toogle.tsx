import { useTheme } from 'next-themes';
import Dark from './Dark';
import Sun from './Sun';

const Toogle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          theme === 'light' ? setTheme('dark') : setTheme('light');
        }}>
        {theme === 'light' ? <Dark /> : <Sun />}
      </button>
    </div>
  );
};

export default Toogle;
