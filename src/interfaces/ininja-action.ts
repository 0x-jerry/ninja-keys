export interface INinjaAction {
  id: string;
  title: string;
  hotkey?: string;
  handler?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  tags?: string[]
  children?: string[];
  section?: string;
}
