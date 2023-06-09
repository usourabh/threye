export const Button = ({ label, type = 'button', handleClick, styleClass }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-green-400 px-4 py-2 rounded-lg text-neutral-800 text-lg font-semibold w-1/2 ${
        styleClass && styleClass
      }`}
    >
      {label}
    </button>
  );
};
