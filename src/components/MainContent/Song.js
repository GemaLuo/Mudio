import React from "react";

const Song = () => {
  return (
    <div>
      <div className="mt-4 ml-4">
        <table className="w-full">
          <p className="text-2xl font-bold">熱門</p>
          <tr>
            <td className="mt-4 flex items-center">
              <p className="mx-4">1</p>
              <img className="w-12" src={viuxtemps} />
              <p className="ml-4">
                Violin Concerto No. 5 in A Minor, Op. 37_ I. Allegro non troppo
                - Moderato
              </p>
            </td>
            <td></td>
            <td>12:39</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Song;
