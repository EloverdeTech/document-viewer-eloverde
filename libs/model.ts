export type ViewerType = 'google' | 'office' | 'mammoth' | 'pdf' | 'url';

interface Props {
  loaded?: () => void;
  url: string;
  queryParams?: string;
  viewerUrl?: string;
  googleCheckInterval?: number;
  disableContent?: 'none' | 'all' | 'poput' | 'popout-hide';
  googleCheckContentLoaded?: boolean;
  viewer?: ViewerType;
}

export interface IFrameReloader {
  subscribe: (
    iframe: HTMLIFrameElement,
    interval?: number,
    maxChecks?: number
  ) => any;
  unsubscribe: () => void;
}

export const defaultProps: Props = {
  loaded: () => { },
  disableContent: 'none',
  googleCheckContentLoaded: true,
  googleCheckInterval: 3000,
  queryParams: '',
  url: '',
  viewer: 'google',
  viewerUrl: '',
};
