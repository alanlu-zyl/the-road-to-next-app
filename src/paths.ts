export const homePath = () => '/';

export const signUpPath = () => '/sign-up';
export const signInPath = () => '/sign-in';
export const forgotPasswordPath = () => '/forgot-password';

export const profilePath = () => '/account/profile';
export const passwordPath = () => '/account/password';

export const ticketsPath = () => '/tickets';

export const ticketPath = (ticketId: string) =>
  `/tickets/${ticketId}`;

export const ticketEditPath = (ticketId: string) =>
  `/tickets/${ticketId}/edit`;