export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface EditingState {
  email: boolean;
  phone: boolean;
  location: boolean;
}

export interface ContactCardProps {
  title: string;
  // icon removed or any if passed via prop
  icon?: any;
  value: string;
  isEditing: boolean;
  tempValue: string;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onChange: (value: string) => void;
  color: {
    primary: string;
    secondary: string;
    hover: string;
  };
  link?: {
    href: string;
    icon?: any;
  };
  additionalInfo?: string;
} 