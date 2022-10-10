import React from 'react';

export const Options = {
  one: 1,
  two: 2,
};

type OptionKeys = keyof typeof Options;
type OptionValues = typeof Options[OptionKeys];

const OtherComponent = ({ option }: { option: OptionValues }) => {
  return (
    <>
      <h1>Hello world! Option ${option}</h1>
    </>
  );
};

export default OtherComponent;
