// INTERFACES
import { LanguageOptions } from './language';

export interface MissionVisionValues {
  mission: LanguageOptions;
  values: LanguageOptions;
  vision: LanguageOptions;
}

export interface AboutTeamMemberProps {
  pic: string;
  name: string;
  role: string;
}

interface TeamMembers {
  name: string;
  pic: string;
  role: LanguageOptions;
}

export interface AboutTeamMembers {
  michelleShana: LanguageOptions;
  teamMembers: TeamMembers[];
}
