
import { FC } from 'react';

interface ToggleProps {
  isToggled: boolean;
  onToggle: () => void;
}

const Toggle: FC<ToggleProps> = ({ isToggled, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isToggled ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
