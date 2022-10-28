export type CounterActionsProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
};

export const CounterActions = ({
  handleIncrement,
  handleDecrement,
}: CounterActionsProps) => {
  return (
    <div>
      <button data-testid="counter-count-increment" onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid="counter-count-decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};
