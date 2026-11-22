/** 单一状态色的完整语义套件 */
export interface StatusColorSet {
  DEFAULT: string;
  foreground: string;
  bg: string;
  border: string;
}

export interface SemanticStatusColors {
  success: StatusColorSet;
  warning: StatusColorSet;
  danger: StatusColorSet;
  info: StatusColorSet;
  neutral: StatusColorSet;
}
