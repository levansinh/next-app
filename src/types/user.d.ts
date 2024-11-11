export interface IUser {
  id: number;
  idDeleted: boolean;
  isLocked: boolean;
  isVerified: boolean;
  language: "en" | "vn" | "jp";
  lastUpdated: string;
  secretKey: string;
  slackUserId: string;
  user: number;
  isFreshUser: boolean;
  isSuperuser: boolean;
}
