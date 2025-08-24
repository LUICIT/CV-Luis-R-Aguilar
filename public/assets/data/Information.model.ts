export interface InformationModel {
    pageConfig: PageConfigModel,
    generalInfo: GeneralInfoModel,
    sections: SeccionModel
}

interface PageConfigModel {
    background: string;
}

interface SeccionModel {
    home: HomeModel;
    aboutMe: AboutMeModel;
    mySkills: MySkillsModel;
}

interface MySkillsModel {
    title: string;
    subtitle: SubtitleModel;
    toolsTechnologies: ToolsTechnologiesModel[];
}

interface ToolsTechnologiesModel {
    icon: string;
    name: string;
    percentage: number;
}

interface HomeModel {
    title: string;
    subtitle: SubtitleModel;
    description: string;
}

interface SubtitleModel {
    part1: string;
    part2: string;
    part3: string;
}

interface AboutMeModel {
    title: string;
    subtitle: SubtitleModel;
    review: ReviewModel;
    principals: PrincipalModel[];
    workExperience: TimeLineModel[];
    educations: TimeLineModel[];
}

interface ReviewModel {
    title: string;
    description: string;
}

interface PrincipalModel {
    icon: string;
    title: string;
    description: string;
}

interface TimeLineModel {
    period: string;
    url?: string;
    positionTitle: string;
    companySchool: string;
}

interface GeneralInfoModel {
    shortName: string;
    fullName: string;
    email: string;
    shortDescription: string;
    description: string;
    socials: SocialModel[];
    assets: AssetsModel
}

interface SocialModel {
    name: string;
    url: string;
}

interface AssetsModel {
    profile: ProfileModel;
    cv: CVModel;
}

interface ProfileModel {
    image: string;
}

interface CVModel {
    url: string;
    fileName: string;
}
