export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <div className="flex gap-1 text-[6rem] font-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
