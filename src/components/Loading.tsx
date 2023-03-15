import React from "react";

const Loading = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        <p className="text-white">Cargando...</p>
      </div>
    </>
  );
};

export default Loading;
