export type CounterInfoProps = {
  count: number;
};

export const CounterInfo = ({ count }: CounterInfoProps) => (
  <h3 data-testid="counter-count-info">Count: {count}</h3>
);
