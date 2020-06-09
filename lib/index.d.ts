
type iconType = 'loading'|'warn';
type positionType = 'top'|'center'|'bottom';

interface ToastConfig {
  duration?: number;
  position?: positionType;
  icon?: iconType;
  zindex?: number;
}

export function openToast(msg: string, options?: ToastConfig, cd?: any): void;

export function closeToast(): void;

export as namespace toast;


