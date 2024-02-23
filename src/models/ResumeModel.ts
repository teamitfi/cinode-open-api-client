/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommitmentBlockModel } from './CommitmentBlockModel';
import type { EducationBlockModel } from './EducationBlockModel';
import type { EmployerBlockModel } from './EmployerBlockModel';
import type { ExtraSkillBlockModel } from './ExtraSkillBlockModel';
import type { HighlightedWorkExperienceBlockModel } from './HighlightedWorkExperienceBlockModel';
import type { LanguageBlockModel } from './LanguageBlockModel';
import type { PresentationBlockModel } from './PresentationBlockModel';
import type { ReferenceBlockModel } from './ReferenceBlockModel';
import type { SkillByCategoryBlockModel } from './SkillByCategoryBlockModel';
import type { SkillModelModel } from './SkillModelModel';
import type { TextBlockModel } from './TextBlockModel';
import type { TopSkillBlockModel } from './TopSkillBlockModel';
import type { TrainingBlockModel } from './TrainingBlockModel';
import type { WorkExperienceBlockModel } from './WorkExperienceBlockModel';
export type ResumeModel = {
    presentation?: PresentationBlockModel | null;
    highlightedWorkExperience?: HighlightedWorkExperienceBlockModel | null;
    skillsByCategory?: SkillByCategoryBlockModel | null;
    topSkills?: TopSkillBlockModel | null;
    workExperience?: WorkExperienceBlockModel | null;
    skills?: SkillModelModel | null;
    employer?: EmployerBlockModel | null;
    training?: TrainingBlockModel | null;
    education?: EducationBlockModel | null;
    language?: LanguageBlockModel | null;
    commitment?: CommitmentBlockModel | null;
    extraSkills?: ExtraSkillBlockModel | null;
    reference?: ReferenceBlockModel | null;
    text?: TextBlockModel | null;
    id?: number;
};

