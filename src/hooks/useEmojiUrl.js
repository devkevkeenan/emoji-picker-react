import { useConfig } from '../PickerContext';

const useEmojiUrl = unified => {
  const config = useConfig();

  if (config.generateEmojiPath)
    return config.generateEmojiPath(unified, config);

  return unified ? `${config.emojiUrl}/${unified}.png` : config.emojiUrl;
};

export default useEmojiUrl;
