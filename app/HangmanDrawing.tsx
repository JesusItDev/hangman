const HEAD = (
  <div className="bg-black w-[50px] h-[50px] rounded-[100%] border-solid border-black absolute ml-[300px] mt-[50px]" />
);

const BODY = (
  <div className="h-[100px] w-[10px] bg-black absolute ml-[320px] mt-[100PX]" />
);

const RIGHT_ARM = (
  <div className="h-[10px] w-[80px] bg-black absolute ml-[320px] mt-[120PX] -rotate-[30deg]" />
);

const LEFT_ARM = (
  <div className="h-[10px] w-[80px] bg-black absolute ml-[250px] mt-[120PX] rotate-[30deg]" />
);

const RIGHT_LEG = (
  <div className="h-[10px] w-[80px] bg-black absolute ml-[315px] mt-[220PX] rotate-[45deg]" />
);

const LEFT_LEG = (
  <div className="h-[10px] w-[80px] bg-black absolute ml-[255px] mt-[220PX] -rotate-[45deg]" />
);

export function HangmanDrawing() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="h-[50px] w-[10px] bg-black absolute ml-[320px]" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}
