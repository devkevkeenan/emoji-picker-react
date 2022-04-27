declare module 'emoji-picker-react' {
  import * as React from 'react';
  import {
    getRecentlyUsed as libGetRecentlyUsed,
    setRecentlyUsed as libSetRecentlyUsed,
  } from './src/lib/recentlyUsed';

  export const SKIN_TONE_NEUTRAL = 'neutral';
  export const SKIN_TONE_LIGHT = '1f3fb';
  export const SKIN_TONE_MEDIUM_LIGHT = '1f3fc';
  export const SKIN_TONE_MEDIUM = '1f3fe';
  export const SKIN_TONE_MEDIUM_DARK = '1f3ff';
  export const SKIN_TONE_DARK = '1f3fd';

  export type SkinTones =
    | typeof SKIN_TONE_NEUTRAL
    | typeof SKIN_TONE_LIGHT
    | typeof SKIN_TONE_MEDIUM_LIGHT
    | typeof SKIN_TONE_MEDIUM
    | typeof SKIN_TONE_MEDIUM_DARK
    | typeof SKIN_TONE_DARK;

  export interface IEmojiData {
    unified: string;
    originalUnified: string;
    names: Array<string>;
    emoji: string;
    activeSkinTone: SkinTones;
  }

  export interface IEmojiPickerProps {
    onEmojiClick: (event: React.MouseEvent, data: IEmojiData) => void;
    emojiUrl?: string;
    generateEmojiPath: (unified: string, config: IEmojiPickerProps) => void;
    ignoreEmojis?: Array<string>;
    preload?: boolean;
    skinTone?: SkinTones;
    disableAutoFocus?: boolean;
    disableSearchBar?: boolean;
    disableSkinTonePicker?: boolean;
    pickerStyle?: { [property: string]: string };
    groupNames?: Record<string, string>;
    groupVisibility?: Record<string, boolean>;
    native?: boolean;
  }

  export interface IRecentlyUsedEmoji {
    unified: string;
    originalUnified: string;
  }

  export function getRecentlyUsed() {
    return libGetRecentlyUsed() as Array<any> | void;
  }
  export function setRecentlyUsed(recentlyUsedEmoji: IRecentlyUsedEmoji) {
    return libSetRecentlyUsed(recentlyUsedEmoji) as void;
  }

  const EmojiPicker: React.FC<IEmojiPickerProps>;

  export default EmojiPicker;
}
