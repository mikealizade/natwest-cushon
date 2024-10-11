import React from "react";

type MessageProps = {
  message: string;
  hasSavedData: string | null;
};

export const Messages = ({
  message,
  hasSavedData,
}: MessageProps): JSX.Element => {
  return (
    <>
      {/* Could use a global error provider */}
      {message && typeof message === "string" && (
        <p className="p-2 px-4 bg-green-200 rounded-lg text-lg">{message}</p>
      )}
      {hasSavedData && (
        <p className="text-lg">
          Welcome back! Here are your previously saved selections.
        </p>
      )}
    </>
  );
};
