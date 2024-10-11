export const Error = ({ error }: { error: string | null }): JSX.Element => (
  <p className="p-4 bg-rose-500 text-white rounded-lg text-lg">{error}</p>
);
