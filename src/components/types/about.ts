
export interface Link {
  id: string;
  icon: string;
  link: string;
  preview: boolean;
}

export interface ResumeState {
  link: string;
  gradient: string;
  originalGradient: string;
  color1: string;
  color2: string;
}

export interface LinkDialogState {
  editingLink: string;
  linkInput: string;
  showDialog: boolean;
}

export interface ResumeDialogState {
  showDialog: boolean;
  isEditingColors: boolean;
}

export interface AboutProps {
  links: Link[];
  setLinks: (value: any) => void;
  resumeState: ResumeState;
  setResumeState: (value: any) => void;
  linkDialogState: LinkDialogState;
  setLinkDialogState: (value: any) => void;
  resumeDialogState: ResumeDialogState;
  setResumeDialogState: (value: any) => void;
}
