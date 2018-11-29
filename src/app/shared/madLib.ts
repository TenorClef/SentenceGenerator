import { MadLibVariable } from './madLibVariable';

export interface MadLib {
    originalTitle: string;
    originalAuthor: string;
    penName: string;
    fullText: string;
    replacements: MadLibVariable[];
}