/**
 * Splits a string into words and wraps the last word in a span with 'gradient-text' class.
 */
export const formatHeader = (text: string) => {
  const words = text.split(' ');
  if (words.length <= 1) {
    return <span className="gradient-text">{text}</span>;
  }
  
  const lastWord = words.pop();
  const beginning = words.join(' ');
  
  return (
    <>
      {beginning}{' '}
      <span className="gradient-text">{lastWord}</span>
    </>
  );
};
