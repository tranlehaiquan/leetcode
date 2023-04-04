export const MAX_MESSAGE_LENGTH = 50;

const splitMessage = (msg: string, chunkSize: number = MAX_MESSAGE_LENGTH): string[] => {
  // base case
  if (msg.length <= chunkSize) return [msg];

  // split message into words
  const words = msg.split(" ");
  const chunkMessages: string[] = [];

  // loop through words to get chunkMessages (no number) (n)
  // get length chunkMessages
  for (let word of words) {
    if (!chunkMessages.length) {
      chunkMessages.push(word);
    } else {
      const currentChunk = chunkMessages[chunkMessages.length - 1];

      // if can't add word to current chunk
      if (currentChunk.length + word.length > chunkSize + 1) {
        // create new chunk
        chunkMessages.push(word);
      } else {
        // else push it to current chunk
        chunkMessages[chunkMessages.length - 1] = currentChunk + ` ${word}`;
      }
    }
  }

  // -> plus length with 1, convert to string and get length (example: 9 + 1 = 10 -> 2, 99 + 1 = 100 -> length 3)
  const possibleTotalChunkStringLength = (chunkMessages.length + 1).toString()
    .length;

  // `${index}/${xxx} hello the world...`
  const chunkMessagesWithNumber: string[] = [];

  // chunkMessages.map((i, index) => `${index + 1}/${'x'.repeat(possibleTotalChunkStringLength)} ${i}`);
  for (let x = 0; x < chunkMessages.length; x++) {
    const chunkMessage = chunkMessages[x];
    let chunkMessageWithNumber: string = `${x + 1}/${"x".repeat(
      possibleTotalChunkStringLength
    )} ${chunkMessage}`;
    // handle if chunkMessageWithNumber more than chunkSize
    if (chunkMessageWithNumber.length > chunkSize) {
      // message need to move
      let messageNeedMove = "";

      while (
        chunkMessageWithNumber.length >
        chunkSize
      ) {
        const chunkMessageWithNumberWords = chunkMessageWithNumber.split(" ");
        if (messageNeedMove.length) {
          messageNeedMove = `${chunkMessageWithNumberWords.pop()} ${messageNeedMove}`;
        } else {
          messageNeedMove = `${chunkMessageWithNumberWords.pop()}`;
        }

        // update chunkMessageWithNumber
        chunkMessageWithNumber = chunkMessageWithNumberWords.join(" ");
      }

      // add messageNeedMove to next chunk
      if (!chunkMessages[x + 1]) {
        chunkMessages[x + 1] = messageNeedMove;
      } else {
        chunkMessages[x + 1] = `${messageNeedMove} ` + chunkMessages[x + 1];
      }
    }
    chunkMessagesWithNumber.push(chunkMessageWithNumber);
  }

  // replace x with chunkMessagesWithNumber length
  const chunkMessagesWithNumberWithLength = chunkMessagesWithNumber.map((i) =>
    i.replace(
      "x".repeat(possibleTotalChunkStringLength),
      chunkMessagesWithNumber.length.toString()
    )
  );

  return chunkMessagesWithNumberWithLength;
};

export default splitMessage;
