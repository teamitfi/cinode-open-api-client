var $8zHUo$buffer = require("buffer");
var $8zHUo$axios = require("axios");
var $8zHUo$formdata = require("form-data");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Cinode", () => $69512043063362f7$export$f13bf947ca742cdc);
$parcel$export(module.exports, "ApiError", () => $b8cb64040de3e013$export$f2e832acab1bdd79);
$parcel$export(module.exports, "BaseHttpRequest", () => $5db21e1949f7b236$export$86fcbb09edb4aebc);
$parcel$export(module.exports, "CancelablePromise", () => $0bc952e2695c5a43$export$551a058e9626aa5a);
$parcel$export(module.exports, "CancelError", () => $0bc952e2695c5a43$export$d7f5e52d091a66db);
$parcel$export(module.exports, "OpenAPI", () => $f527cfa0252fbfc7$export$3bbbb17165d6e0ef);
$parcel$export(module.exports, "AccessLevel", () => $f76b28b0f61b4d2b$export$2fad4038535569b7);
$parcel$export(module.exports, "ActionType", () => $17491ac66398fc30$export$e4a712fff93fb00f);
$parcel$export(module.exports, "AddressType", () => $4ccfc20ac94bfe9a$export$189c6ba3eaa96ac2);
$parcel$export(module.exports, "AttachmentType", () => $6108d4593f541d07$export$86cfdc1f02eaf37a);
$parcel$export(module.exports, "CompanyCandidateQuerySort", () => $77af4c37ed274bd5$export$7561b63adb4bbd04);
$parcel$export(module.exports, "CompanyCandidateState", () => $b501617f98010c49$export$36a6a57a8e62490b);
$parcel$export(module.exports, "CompanyCustomerContactQuerySort", () => $d71974143cf32e04$export$b79c995920f3afc1);
$parcel$export(module.exports, "CompanyCustomerQuerySort", () => $0503fa2d4ce77d2f$export$14ae6a6b3ffd04a9);
$parcel$export(module.exports, "CompanyProfileSort", () => $61281657e5d1df8a$export$d30e01d0901a1ce6);
$parcel$export(module.exports, "CompanySize", () => $12c2d5cb60d5bf24$export$41cc48adf872ce3b);
$parcel$export(module.exports, "CompanyUserCandidateStatus", () => $2ed4e0647a0c0d0c$export$14ce8dcea15e7dd3);
$parcel$export(module.exports, "CompanyUserQuerySort", () => $65dcdae3fe224f47$export$fb2ec0d0fb1caed1);
$parcel$export(module.exports, "CompanyUserStatus", () => $3bc01b530c580407$export$78ece8b332d00629);
$parcel$export(module.exports, "CompanyUserSubcontractorStatus", () => $dec86a120b83bda8$export$83981b6138d1ec0d);
$parcel$export(module.exports, "CompanyUserType", () => $55b8b62248c69e6e$export$7e1e40db963a5766);
$parcel$export(module.exports, "ContractType", () => $ea1bb82e18b53d66$export$ac0154f53c770f12);
$parcel$export(module.exports, "EventNoteType", () => $7684fa498047e7d3$export$b5d90d58758173e6);
$parcel$export(module.exports, "EventStatusValue", () => $8917a3d115403638$export$c5f296066cb6a74d);
$parcel$export(module.exports, "EventTaskType", () => $fd09507e6ef13b08$export$fd3fb5071359f87c);
$parcel$export(module.exports, "EventType", () => $9e5b8f7e46c60b0a$export$3d7865934588d77e);
$parcel$export(module.exports, "EventVisibility", () => $933377bd02f3d323$export$361dc17531b2403c);
$parcel$export(module.exports, "ExtentType", () => $ca50e71005809fbe$export$a4f3dfa6f1416c0f);
$parcel$export(module.exports, "ImageSize", () => $4c53305b04ffc520$export$28064ee355a535f2);
$parcel$export(module.exports, "KeywordType", () => $864de575476b4a0b$export$7ae96d120743514d);
$parcel$export(module.exports, "LanguageLevel", () => $d98d2d4da5566a1e$export$66b4c7ccfd8c5e33);
$parcel$export(module.exports, "LongRunningStatus", () => $57e9869df137cdc7$export$b69ffd3be5b6ff5c);
$parcel$export(module.exports, "ModuleType", () => $b705030bec1fcfd3$export$6a8195ee8dd1cc03);
$parcel$export(module.exports, "PartnerConnectionTrustType", () => $9f66a0a0b32a157f$export$3090b6058eade22a);
$parcel$export(module.exports, "PdfEngineType", () => $fedfd239fcb9eae2$export$700ba33f355b1bcf);
$parcel$export(module.exports, "PdfOrientation", () => $ab89da231b21184c$export$4e525e4bebe39709);
$parcel$export(module.exports, "ProjectAssignmentAllocationStatus", () => $692b6ef8ba3412c2$export$e2c6d619fe74c7ec);
$parcel$export(module.exports, "ProjectAssignmentExtentType", () => $83acd540ea3f66ee$export$14d394e96f15e153);
$parcel$export(module.exports, "ProjectAssignmentMemberAllocationStatus", () => $01440a5834bb66ee$export$932fbbc5915a0ec0);
$parcel$export(module.exports, "ProjectAssignmentMemberState", () => $29a1b3e6a4807cd8$export$b60025ff86d1f1a);
$parcel$export(module.exports, "ProjectAssignmentMemberType", () => $a1e487cb4b051b02$export$3a87eafcf6b09bc8);
$parcel$export(module.exports, "ProjectAssignmentRequestStatus", () => $48e8fe97489a072f$export$b69cb4a58a0dc6b);
$parcel$export(module.exports, "ProjectAssignmentStatus", () => $e32ab295d43ccf1c$export$4998eb9f99843070);
$parcel$export(module.exports, "ProjectPriority", () => $1875ed40ed242bd7$export$6e27aaf4b7580e65);
$parcel$export(module.exports, "ProjectQuerySort", () => $752c97bf1745d7db$export$51868fa3a5f5dc72);
$parcel$export(module.exports, "ProjectState", () => $08e8c15adeda8c30$export$7082239a62c0df57);
$parcel$export(module.exports, "SaveToApiOption", () => $a74f2284bf03bd0f$export$5e40e54564bab075);
$parcel$export(module.exports, "SortOrder", () => $40d85a1b021e0fb6$export$7ae723045d45777a);
$parcel$export(module.exports, "Status", () => $0ad5c3fc54099227$export$96e9906d6d93a972);
$parcel$export(module.exports, "StringComparisonOperator", () => $22aaa8ff24fa3809$export$efb204e93138f2d8);
$parcel$export(module.exports, "TemplateAssetType", () => $c0e6fbc4272dfb8f$export$7593c8ee4e312d71);
$parcel$export(module.exports, "TrainingType", () => $7a0d231525fbd2b3$export$b0710aa41382622d);
$parcel$export(module.exports, "UserGender", () => $e1f3677b1024b22a$export$c078b135ab9633b9);
$parcel$export(module.exports, "WebhookEntityType", () => $5b4ad94d3d2dbdb8$export$f350ca2a822d34f7);
$parcel$export(module.exports, "WordEngineType", () => $decb2a12ecee1f88$export$e81b5809efab3b7);
$parcel$export(module.exports, "AbsenceService", () => $e9be4824e422de88$export$47ee1c28e3d17369);
$parcel$export(module.exports, "AbsencesService", () => $f4697e2f5a5905c9$export$a1746a9cd4653513);
$parcel$export(module.exports, "AbsenceTypeService", () => $67f4c25868852f0b$export$eb58e95b5eb4c6b3);
$parcel$export(module.exports, "AvailabilityService", () => $d00ccc11cbfa05cb$export$5cc1fb0596a42f55);
$parcel$export(module.exports, "CompanyService", () => $a101752ec4ac9cdb$export$81a665b0338610f5);
$parcel$export(module.exports, "CompanyAddressUsersService", () => $3418257e4f998b1c$export$b278987a992e5fe0);
$parcel$export(module.exports, "CompanyCandidateService", () => $437701a8346344ad$export$a24ee0c8bdccf707);
$parcel$export(module.exports, "CompanyCandidateEventService", () => $0034a0e835d5348e$export$35d7f17818448f5a);
$parcel$export(module.exports, "CompanyCandidateEventMeetingService", () => $8f34df899c74d98c$export$85a578801d4bad46);
$parcel$export(module.exports, "CompanyCandidateEventMeetingsService", () => $18b9545791e77013$export$71648590530fa008);
$parcel$export(module.exports, "CompanyCandidateEventNoteService", () => $1be9fdf55fbc99f6$export$7d70a844d6105290);
$parcel$export(module.exports, "CompanyCandidateEventNotesService", () => $6b418e998c77e1e3$export$50aec86de547e333);
$parcel$export(module.exports, "CompanyCandidateEventsService", () => $541fdc693fe3bd44$export$8c8166d5fa7c286d);
$parcel$export(module.exports, "CompanyCandidateEventTaskService", () => $f960dbca7d883733$export$1ba5e78a45067ab0);
$parcel$export(module.exports, "CompanyCandidateEventTasksService", () => $4a16804e814228cf$export$b6bc1ae3b8a6484a);
$parcel$export(module.exports, "CompanyCandidateFileAttachmentService", () => $200b28680a8394e8$export$c8ac3e0490d41de6);
$parcel$export(module.exports, "CompanyCandidateFileAttachmentsService", () => $d06ea1bb88a0661f$export$9ef34bd472cfb16b);
$parcel$export(module.exports, "CompanyCandidatePipelinesService", () => $39e31e85c96ea2a8$export$8bacb692d51e8649);
$parcel$export(module.exports, "CompanyCandidatesService", () => $2d158c2238326066$export$cccbbdbc47111182);
$parcel$export(module.exports, "CompanyCandidateSkillsService", () => $b417a8af0e3c7adb$export$56a491cf6cf94c76);
$parcel$export(module.exports, "CompanyCandidateUriAttachmentService", () => $5c68d4583652b342$export$c0ebe0863eddd316);
$parcel$export(module.exports, "CompanyCandidateUriAttachmentsService", () => $c74c457b99dae327$export$754c0ec67f37947d);
$parcel$export(module.exports, "CompanyCandidateUserService", () => $15b38d98142c9d9c$export$a0026a5769eab5d2);
$parcel$export(module.exports, "CompanyCapabilitiesService", () => $9c851a42aa2b19ce$export$a0707f1d94ce819b);
$parcel$export(module.exports, "CompanyCurrenciesService", () => $9a8be5c8af9c2807$export$4c77df3933660a6d);
$parcel$export(module.exports, "CompanyCustomerService", () => $627b795850f5253a$export$5e0ca4e966076353);
$parcel$export(module.exports, "CompanyCustomerAddressService", () => $ce890fbab1823c16$export$bf561abe2fb5dbc9);
$parcel$export(module.exports, "CompanyCustomerContactService", () => $4754f195774dcbde$export$d50d29cdcdbfd5ce);
$parcel$export(module.exports, "CompanyCustomerContactsService", () => $965a26dd97b7a15e$export$17d89cd4779997d1);
$parcel$export(module.exports, "CompanyCustomerContactTagsService", () => $2408c13bd206152d$export$8e4892b3101b5a56);
$parcel$export(module.exports, "CompanyCustomerEventService", () => $cf9593d6b8857859$export$93ddafb9a54c0212);
$parcel$export(module.exports, "CompanyCustomerEventsService", () => $0a574a3cb44733d6$export$769c6a97a634e038);
$parcel$export(module.exports, "CompanyCustomerEventsMeetingService", () => $432ddad82354be1e$export$ae5ae905d4a426fe);
$parcel$export(module.exports, "CompanyCustomerEventsMeetingsService", () => $c45b6418e6745d7e$export$4b9bbe00845af9de);
$parcel$export(module.exports, "CompanyCustomerEventsNoteService", () => $d8c39f9c7408a6dd$export$7b2eaf9aa467c8f1);
$parcel$export(module.exports, "CompanyCustomerEventsNotesService", () => $1e3f2618c98f7f06$export$ca17c8c93983bf53);
$parcel$export(module.exports, "CompanyCustomerEventsTaskService", () => $d66d7ab0c2ca0778$export$388ecb6624507af3);
$parcel$export(module.exports, "CompanyCustomerEventsTasksService", () => $8cb22a65385a9b9d$export$304ef75be13d69d2);
$parcel$export(module.exports, "CompanyCustomerFileAttachmentService", () => $3c3115af748af59d$export$be5342b121c1e028);
$parcel$export(module.exports, "CompanyCustomerManagersService", () => $db9e57d7380b58df$export$82aca92cfb9ef6f2);
$parcel$export(module.exports, "CompanyCustomersService", () => $dac23fd8541b5e50$export$795fb71b3bad14cb);
$parcel$export(module.exports, "CompanyCustomersExtendedService", () => $dc2e2beb9fbc0def$export$c88e756d252488d4);
$parcel$export(module.exports, "CompanyCustomerTagsService", () => $3c47c8a83a7e8dfa$export$8b13e7a213e7af0a);
$parcel$export(module.exports, "CompanyImageService", () => $ba0e2a7b8a7ae824$export$c2fcdcf3abf79263);
$parcel$export(module.exports, "CompanyImagesService", () => $39de9cddfc5f3f06$export$b2018fc046463812);
$parcel$export(module.exports, "CompanyManagersService", () => $9ae4b551342a1a0a$export$b597a0f306b928d7);
$parcel$export(module.exports, "CompanyProfilesService", () => $8cdafdc277728a81$export$59e98d4ab7ff8c7b);
$parcel$export(module.exports, "CompanyProjectFileAttachmentService", () => $b72c2825181faba2$export$ca2e85756a0c75ed);
$parcel$export(module.exports, "CompanyRecruitmentManagersService", () => $6795ae77004ac365$export$5713bae4e6d7d0d8);
$parcel$export(module.exports, "CompanyResumesService", () => $6a2d6c3765cdb3d3$export$8b837281bd1a79c5);
$parcel$export(module.exports, "CompanySubcontractorGroupService", () => $50251ed1b615a8a5$export$e21518b0632c2d19);
$parcel$export(module.exports, "CompanySubcontractorGroupMembersService", () => $5890ab4e3db16784$export$809520f725c1d7d);
$parcel$export(module.exports, "CompanySubcontractorGroupsService", () => $6faa04c2eb529c08$export$16e5dd2cebfcc609);
$parcel$export(module.exports, "CompanyTagService", () => $7657c17a8fcc70c0$export$f40112f75f119675);
$parcel$export(module.exports, "CompanyTagsService", () => $1f941d956dc9b550$export$8717da62100b1773);
$parcel$export(module.exports, "CompanyTeamService", () => $31c707e249c792d4$export$271fe9a250f232c1);
$parcel$export(module.exports, "CompanyTeamManagersService", () => $d8621d02b4b66f73$export$9b9e5c48cc2a66c0);
$parcel$export(module.exports, "CompanyTeamMemberService", () => $464773000ac02eb1$export$4d187899fd61c416);
$parcel$export(module.exports, "CompanyTeamMembersService", () => $13abeddc5376ee05$export$650f3955e41dfc45);
$parcel$export(module.exports, "CompanyTeamsService", () => $49ed3c9cfa163bf4$export$162ed105dac95d0c);
$parcel$export(module.exports, "CompanyTeamUsersService", () => $d094dda89c4d27cf$export$64d904ffdd8d2286);
$parcel$export(module.exports, "CompanyUserService", () => $8c61faf9b78b9414$export$80525ec1d2c57391);
$parcel$export(module.exports, "CompanyUserConvertService", () => $9884a98a177ab14e$export$83c115d3d2b0ba96);
$parcel$export(module.exports, "CompanyUserEmployeeEventService", () => $36ab13fb674d8e6d$export$8fe712f519126dc0);
$parcel$export(module.exports, "CompanyUserEmployeeEventMeetingService", () => $01b2adc321864533$export$7eb65acfb6da1621);
$parcel$export(module.exports, "CompanyUserEmployeeEventNoteService", () => $19201fc67e962beb$export$eed5ea593bafe920);
$parcel$export(module.exports, "CompanyUserEmployeeEventsService", () => $85c1c8928a7a5e6f$export$513b4c416c5a2a1f);
$parcel$export(module.exports, "CompanyUserEmployeeEventsMeetingsService", () => $028aac08e85e4783$export$8c3335594a3b89d5);
$parcel$export(module.exports, "CompanyUserEmployeeEventsNotesService", () => $d004ce2e29ec9d26$export$d079520dee85fe49);
$parcel$export(module.exports, "CompanyUserEmployeeEventsTasksService", () => $825cd6aa2ab163b8$export$fc7cb0f5eda31b60);
$parcel$export(module.exports, "CompanyUserEmployeeEventTaskService", () => $c266ca6d59db5011$export$f79a39da0c0cdc47);
$parcel$export(module.exports, "CompanyUserFullService", () => $45d9dff7215b9ff1$export$7909a7030858369c);
$parcel$export(module.exports, "CompanyUserPermissionsService", () => $f3075773a1c82329$export$2ac2d9437f09b025);
$parcel$export(module.exports, "CompanyUserProfileService", () => $83eb6b55812bd98c$export$e57da5d4b89e8cb4);
$parcel$export(module.exports, "CompanyUserProfileCommitmentService", () => $e3d7f2c39b6de587$export$889f3fe2032b14fb);
$parcel$export(module.exports, "CompanyUserProfileEducationService", () => $cc95e64512d3c9ce$export$48be4796dd3b09b1);
$parcel$export(module.exports, "CompanyUserProfileEmployerService", () => $e7b1079c6df68ea7$export$5b02c7ef2755646f);
$parcel$export(module.exports, "CompanyUserProfileExtSkillService", () => $7815a5b6f511cc08$export$7ce3b12efbc526b1);
$parcel$export(module.exports, "CompanyUserProfileImportService", () => $d782b663dada7039$export$dc03d29e832e622);
$parcel$export(module.exports, "CompanyUserProfileLanguageService", () => $428d4e0c11c66cb3$export$56a23e645db8f13b);
$parcel$export(module.exports, "CompanyUserProfileLanguagesService", () => $1ae4868dd1436eab$export$de1b171f86e70e92);
$parcel$export(module.exports, "CompanyUserProfilePresentationService", () => $cc4f2acd4ab6da17$export$a461e3b362509444);
$parcel$export(module.exports, "CompanyUserProfileReferenceService", () => $afc52af492c8fc83$export$2ffcd76fc41d3871);
$parcel$export(module.exports, "CompanyUserProfilesService", () => $9f8e4cfc2a7d83e9$export$b38f975cd45385a6);
$parcel$export(module.exports, "CompanyUserProfileSkillService", () => $d3dcd52c7d305173$export$6892c8bbf17f2028);
$parcel$export(module.exports, "CompanyUserProfileTrainingService", () => $ecfcec92f6c87ae2$export$e6a275918e0d423e);
$parcel$export(module.exports, "CompanyUserProfileWorkExperienceService", () => $c9bc7c322732850e$export$6bc5afc1f2b3db96);
$parcel$export(module.exports, "CompanyUserResumeService", () => $7a390f9a144c1b00$export$ed4495c6a4c00add);
$parcel$export(module.exports, "CompanyUserResumesService", () => $6ce92bd1a08ef442$export$575593bab3224c9a);
$parcel$export(module.exports, "CompanyUserRolesService", () => $6a9be09f1aa4ce0b$export$eb7ba955dd37b48c);
$parcel$export(module.exports, "CompanyUsersService", () => $e53f378af120dda2$export$d59fe8dac28bbd7d);
$parcel$export(module.exports, "CompanyUsersExtendedService", () => $68494cd8010a2c8f$export$fc15e1837624e50a);
$parcel$export(module.exports, "CompanyUserSkillService", () => $2047cd135d39beba$export$4a91f4807dce316a);
$parcel$export(module.exports, "CompanyUserSkillsService", () => $5deb75f4c2a002db$export$b3422cd87055d35d);
$parcel$export(module.exports, "CompanyUserSubcontractorService", () => $cef037199baf0c1e$export$a8b63a6b2f767a8e);
$parcel$export(module.exports, "CompanyUserSubcontractorEventService", () => $b838201867037740$export$d8208da4ba78c877);
$parcel$export(module.exports, "CompanyUserSubcontractorEventMeetingService", () => $72ed12652c708033$export$a9776fd23f4cf45f);
$parcel$export(module.exports, "CompanyUserSubcontractorEventNoteService", () => $abfeca71d380bfa9$export$e3d6d5e4a419eccf);
$parcel$export(module.exports, "CompanyUserSubcontractorEventsService", () => $b09df74ccc129511$export$ba4a80ec97b44423);
$parcel$export(module.exports, "CompanyUserSubcontractorEventsMeetingsService", () => $706e76b11aa64aa1$export$32d9f60ae7d643ac);
$parcel$export(module.exports, "CompanyUserSubcontractorEventsNotesService", () => $67a31a9af702f02b$export$19f26cddc1e4a43a);
$parcel$export(module.exports, "CompanyUserSubcontractorEventsTasksService", () => $3118a19612728144$export$8437aa08351bc1ca);
$parcel$export(module.exports, "CompanyUserSubcontractorEventTaskService", () => $8248d72df8b98135$export$e1a185b1a211b19a);
$parcel$export(module.exports, "CompanyUserSubcontractorFileAttachmentService", () => $d86229259263f42a$export$a8360f1b16f063e5);
$parcel$export(module.exports, "CompanyUserSubcontractorFileAttachmentsService", () => $54109438b1e42769$export$aeb133ee930745dd);
$parcel$export(module.exports, "CompanyUserSubcontractorRolesService", () => $65a606bc74c3b285$export$e8c407c1c8977b57);
$parcel$export(module.exports, "CompanyUserSubcontractorsService", () => $d6dbafa415715160$export$749854a6169bb696);
$parcel$export(module.exports, "CompanyUserTagsService", () => $8860c36b8763df55$export$4700363cb7c4bf01);
$parcel$export(module.exports, "CompanyUserTeamsService", () => $1ed9dd27805f1b40$export$d55285a3ab81e66c);
$parcel$export(module.exports, "CompanyWebhookService", () => $9a59c368efe2b830$export$80ea09c47452aeee);
$parcel$export(module.exports, "CompanyWebhooksService", () => $bf3a9ba4720176db$export$ca4decab7ef1aa1e);
$parcel$export(module.exports, "DynamicCompanyUserResumeService", () => $99cae65bd632d3d4$export$a639a6eecb57b3b7);
$parcel$export(module.exports, "KeywordSearchService", () => $3ef44a50ff7509f1$export$44d608147b7bbeb0);
$parcel$export(module.exports, "MentionsService", () => $aab06f4d3b63904e$export$f04085d244fce783);
$parcel$export(module.exports, "PartnersService", () => $90cd3410b6d943d2$export$a07979cfc4e35991);
$parcel$export(module.exports, "ProjectService", () => $afe96552494bbee0$export$9616f8c54d4f56aa);
$parcel$export(module.exports, "ProjectAssignmentService", () => $4f1dcd2af070c94e$export$7b75f5c0f6c791a9);
$parcel$export(module.exports, "ProjectAssignmentMemberService", () => $39aa961a7c12e96c$export$c9c3f472996de0e2);
$parcel$export(module.exports, "ProjectAssignmentsService", () => $774de8fadd1850b2$export$8e97fb162fa11728);
$parcel$export(module.exports, "ProjectAssignmentSkillsService", () => $ea1e761b238fed0a$export$485c8b08a67d53de);
$parcel$export(module.exports, "ProjectEventService", () => $bf8e9d4d4db718f5$export$16ed56dbd717d2d9);
$parcel$export(module.exports, "ProjectEventsService", () => $5cc045c5b37fbaf0$export$65e8b30e8dcc254a);
$parcel$export(module.exports, "ProjectEventsMeetingService", () => $63982a145e5d0f0a$export$c65ad44da9d76f29);
$parcel$export(module.exports, "ProjectEventsMeetingsService", () => $bb8dd6f549423c5b$export$4013195dfacdbeb7);
$parcel$export(module.exports, "ProjectEventsNoteService", () => $6766edbf5c0badc3$export$d835b03e2b60b21);
$parcel$export(module.exports, "ProjectEventsNotesService", () => $308c532dd382c307$export$79c6aaa02ca97a38);
$parcel$export(module.exports, "ProjectEventsTaskService", () => $6ff6e929c30bd140$export$33ad4295cf6a52fe);
$parcel$export(module.exports, "ProjectEventsTasksService", () => $609329421e045831$export$c609291b5d518816);
$parcel$export(module.exports, "ProjectPipelinesService", () => $59ba816838f856ae$export$f05399f130d784ae);
$parcel$export(module.exports, "ProjectReferenceService", () => $23333a2912c2e6b2$export$827284a6eda43684);
$parcel$export(module.exports, "ProjectReferencesService", () => $6e0c847f96b7e043$export$3cbf3a37fdfc52ba);
$parcel$export(module.exports, "ProjectsService", () => $4648dd1bdae60495$export$52e15361974fd6ce);
$parcel$export(module.exports, "ProjectTagsService", () => $d943f5f1f0daea8a$export$410a03e91ff6d180);
$parcel$export(module.exports, "RecruitmentSourcesService", () => $47f81d78ad4236d7$export$cce865641658a46);
$parcel$export(module.exports, "SearchCompanyCandidateService", () => $66e010cb0bca52c0$export$ba969c1c62975e5a);
$parcel$export(module.exports, "SearchCompanyCustomerContactService", () => $2f6767d47beaa2a0$export$6b7396933ce279dd);
$parcel$export(module.exports, "SearchCompanyCustomersService", () => $4fcc14d75233e252$export$5bb89196b8e0fd66);
$parcel$export(module.exports, "SearchCompanyUserService", () => $42f227443a656895$export$3a26835584e937a5);
$parcel$export(module.exports, "SearchProjectService", () => $be0f3e51b8539a21$export$5899a0e3ac5bbdb6);
$parcel$export(module.exports, "SkillSearchService", () => $bf41e4a7081ceae3$export$af76b0904c01521b);
$parcel$export(module.exports, "SkillSearchTermService", () => $d3b98a3931a9f752$export$2b10644a1825cf13);
/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ class $5db21e1949f7b236$export$86fcbb09edb4aebc {
    constructor(config){
        this.config = config;
    }
}


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ 

class $b8cb64040de3e013$export$f2e832acab1bdd79 extends Error {
    constructor(request, response, message){
        super(message);
        this.name = "ApiError";
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.body;
        this.request = request;
    }
}


var $0bc952e2695c5a43$var$__classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $0bc952e2695c5a43$var$__classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $0bc952e2695c5a43$var$_CancelablePromise_isResolved, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers, $0bc952e2695c5a43$var$_CancelablePromise_promise, $0bc952e2695c5a43$var$_CancelablePromise_resolve, $0bc952e2695c5a43$var$_CancelablePromise_reject;
class $0bc952e2695c5a43$export$d7f5e52d091a66db extends Error {
    constructor(message){
        super(message);
        this.name = "CancelError";
    }
    get isCancelled() {
        return true;
    }
}
class $0bc952e2695c5a43$export$551a058e9626aa5a {
    constructor(executor){
        $0bc952e2695c5a43$var$_CancelablePromise_isResolved.set(this, void 0);
        $0bc952e2695c5a43$var$_CancelablePromise_isRejected.set(this, void 0);
        $0bc952e2695c5a43$var$_CancelablePromise_isCancelled.set(this, void 0);
        $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers.set(this, void 0);
        $0bc952e2695c5a43$var$_CancelablePromise_promise.set(this, void 0);
        $0bc952e2695c5a43$var$_CancelablePromise_resolve.set(this, void 0);
        $0bc952e2695c5a43$var$_CancelablePromise_reject.set(this, void 0);
        $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, false, "f");
        $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, false, "f");
        $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, false, "f");
        $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers, [], "f");
        $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_promise, new Promise((resolve, reject)=>{
            $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_resolve, resolve, "f");
            $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_reject, reject, "f");
            const onResolve = (value)=>{
                if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, "f")) return;
                $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, true, "f");
                if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_resolve, "f")) $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_resolve, "f").call(this, value);
            };
            const onReject = (reason)=>{
                if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, "f")) return;
                $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, true, "f");
                if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_reject, "f")) $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_reject, "f").call(this, reason);
            };
            const onCancel = (cancelHandler)=>{
                if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, "f")) return;
                $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers, "f").push(cancelHandler);
            };
            Object.defineProperty(onCancel, "isResolved", {
                get: ()=>$0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, "f")
            });
            Object.defineProperty(onCancel, "isRejected", {
                get: ()=>$0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, "f")
            });
            Object.defineProperty(onCancel, "isCancelled", {
                get: ()=>$0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, "f")
            });
            return executor(onResolve, onReject, onCancel);
        }), "f");
    }
    get [($0bc952e2695c5a43$var$_CancelablePromise_isResolved = new WeakMap(), $0bc952e2695c5a43$var$_CancelablePromise_isRejected = new WeakMap(), $0bc952e2695c5a43$var$_CancelablePromise_isCancelled = new WeakMap(), $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers = new WeakMap(), $0bc952e2695c5a43$var$_CancelablePromise_promise = new WeakMap(), $0bc952e2695c5a43$var$_CancelablePromise_resolve = new WeakMap(), $0bc952e2695c5a43$var$_CancelablePromise_reject = new WeakMap(), Symbol.toStringTag)]() {
        return "Cancellable Promise";
    }
    then(onFulfilled, onRejected) {
        return $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_promise, "f").then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_promise, "f").catch(onRejected);
    }
    finally(onFinally) {
        return $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_promise, "f").finally(onFinally);
    }
    cancel() {
        if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isResolved, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isRejected, "f") || $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, "f")) return;
        $0bc952e2695c5a43$var$__classPrivateFieldSet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, true, "f");
        if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers, "f").length) try {
            for (const cancelHandler of $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers, "f"))cancelHandler();
        } catch (error) {
            console.warn("Cancellation threw an error", error);
            return;
        }
        $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_cancelHandlers, "f").length = 0;
        if ($0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_reject, "f")) $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_reject, "f").call(this, new $0bc952e2695c5a43$export$d7f5e52d091a66db("Request aborted"));
    }
    get isCancelled() {
        return $0bc952e2695c5a43$var$__classPrivateFieldGet(this, $0bc952e2695c5a43$var$_CancelablePromise_isCancelled, "f");
    }
}



var $dde9b101f34c93cb$require$Buffer = $8zHUo$buffer.Buffer;
const $dde9b101f34c93cb$export$4e62c701997796c1 = (value)=>{
    return value !== undefined && value !== null;
};
const $dde9b101f34c93cb$export$844ec244b1367d54 = (value)=>{
    return typeof value === "string";
};
const $dde9b101f34c93cb$export$991095b57f274a5f = (value)=>{
    return $dde9b101f34c93cb$export$844ec244b1367d54(value) && value !== "";
};
const $dde9b101f34c93cb$export$5bcd6e94ed871c88 = (value)=>{
    return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
const $dde9b101f34c93cb$export$67a42df2b7ab73bc = (value)=>{
    return value instanceof (0, ($parcel$interopDefault($8zHUo$formdata)));
};
const $dde9b101f34c93cb$export$b0ac3e614a309be3 = (status)=>{
    return status >= 200 && status < 300;
};
const $dde9b101f34c93cb$export$b3b2de96497acc47 = (str)=>{
    try {
        return btoa(str);
    } catch (err) {
        // @ts-ignore
        return $dde9b101f34c93cb$require$Buffer.from(str).toString("base64");
    }
};
const $dde9b101f34c93cb$export$18380b9f669996bd = (params)=>{
    const qs = [];
    const append = (key, value)=>{
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };
    const process = (key, value)=>{
        if ($dde9b101f34c93cb$export$4e62c701997796c1(value)) {
            if (Array.isArray(value)) value.forEach((v)=>{
                process(key, v);
            });
            else if (typeof value === "object") Object.entries(value).forEach(([k, v])=>{
                process(`${key}[${k}]`, v);
            });
            else append(key, value);
        }
    };
    Object.entries(params).forEach(([key, value])=>{
        process(key, value);
    });
    if (qs.length > 0) return `?${qs.join("&")}`;
    return "";
};
const $dde9b101f34c93cb$var$getUrl = (config, options)=>{
    const encoder = config.ENCODE_PATH || encodeURI;
    const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group)=>{
        var _a;
        if ((_a = options.path) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(group)) return encoder(String(options.path[group]));
        return substring;
    });
    const url = `${config.BASE}${path}`;
    if (options.query) return `${url}${$dde9b101f34c93cb$export$18380b9f669996bd(options.query)}`;
    return url;
};
const $dde9b101f34c93cb$export$9643fd7297feaaf5 = (options)=>{
    if (options.formData) {
        const formData = new (0, ($parcel$interopDefault($8zHUo$formdata)))();
        const process = (key, value)=>{
            if ($dde9b101f34c93cb$export$844ec244b1367d54(value) || $dde9b101f34c93cb$export$5bcd6e94ed871c88(value)) formData.append(key, value);
            else formData.append(key, JSON.stringify(value));
        };
        Object.entries(options.formData).filter(([_, value])=>$dde9b101f34c93cb$export$4e62c701997796c1(value)).forEach(([key, value])=>{
            if (Array.isArray(value)) value.forEach((v)=>process(key, v));
            else process(key, value);
        });
        return formData;
    }
    return undefined;
};
const $dde9b101f34c93cb$export$f7ad0328861e2f03 = async (options, resolver)=>{
    if (typeof resolver === "function") return resolver(options);
    return resolver;
};
const $dde9b101f34c93cb$export$6a9b8dd1339b1a17 = async (config, options, formData)=>{
    const [token, username, password, additionalHeaders] = await Promise.all([
        $dde9b101f34c93cb$export$f7ad0328861e2f03(options, config.TOKEN),
        $dde9b101f34c93cb$export$f7ad0328861e2f03(options, config.USERNAME),
        $dde9b101f34c93cb$export$f7ad0328861e2f03(options, config.PASSWORD),
        $dde9b101f34c93cb$export$f7ad0328861e2f03(options, config.HEADERS)
    ]);
    const formHeaders = typeof (formData === null || formData === void 0 ? void 0 : formData.getHeaders) === "function" && (formData === null || formData === void 0 ? void 0 : formData.getHeaders()) || {};
    const headers = Object.entries({
        Accept: "application/json",
        ...additionalHeaders,
        ...options.headers,
        ...formHeaders
    }).filter(([_, value])=>$dde9b101f34c93cb$export$4e62c701997796c1(value)).reduce((headers, [key, value])=>({
            ...headers,
            [key]: String(value)
        }), {});
    if ($dde9b101f34c93cb$export$991095b57f274a5f(token)) headers["Authorization"] = `Bearer ${token}`;
    if ($dde9b101f34c93cb$export$991095b57f274a5f(username) && $dde9b101f34c93cb$export$991095b57f274a5f(password)) {
        const credentials = $dde9b101f34c93cb$export$b3b2de96497acc47(`${username}:${password}`);
        headers["Authorization"] = `Basic ${credentials}`;
    }
    if (options.body) {
        if (options.mediaType) headers["Content-Type"] = options.mediaType;
        else if ($dde9b101f34c93cb$export$5bcd6e94ed871c88(options.body)) headers["Content-Type"] = options.body.type || "application/octet-stream";
        else if ($dde9b101f34c93cb$export$844ec244b1367d54(options.body)) headers["Content-Type"] = "text/plain";
        else if (!$dde9b101f34c93cb$export$67a42df2b7ab73bc(options.body)) headers["Content-Type"] = "application/json";
    }
    return headers;
};
const $dde9b101f34c93cb$export$55bce18df99af758 = (options)=>{
    if (options.body) return options.body;
    return undefined;
};
const $dde9b101f34c93cb$export$d5a1e65f8aa21b51 = async (config, options, url, body, formData, headers, onCancel, axiosClient)=>{
    const source = (0, ($parcel$interopDefault($8zHUo$axios))).CancelToken.source();
    const requestConfig = {
        url: url,
        headers: headers,
        data: body !== null && body !== void 0 ? body : formData,
        method: options.method,
        withCredentials: config.WITH_CREDENTIALS,
        cancelToken: source.token
    };
    onCancel(()=>source.cancel("The user aborted a request."));
    try {
        return await axiosClient.request(requestConfig);
    } catch (error) {
        const axiosError = error;
        if (axiosError.response) return axiosError.response;
        throw error;
    }
};
const $dde9b101f34c93cb$export$67c14f05e310b1da = (response, responseHeader)=>{
    if (responseHeader) {
        const content = response.headers[responseHeader];
        if ($dde9b101f34c93cb$export$844ec244b1367d54(content)) return content;
    }
    return undefined;
};
const $dde9b101f34c93cb$export$c852f9270b343ec4 = (response)=>{
    if (response.status !== 204) return response.data;
    return undefined;
};
const $dde9b101f34c93cb$export$31bf08a141e671fd = (options, result)=>{
    var _a, _b;
    const errors = {
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error",
        502: "Bad Gateway",
        503: "Service Unavailable",
        ...options.errors
    };
    const error = errors[result.status];
    if (error) throw new (0, $b8cb64040de3e013$export$f2e832acab1bdd79)(options, result, error);
    if (!result.ok) {
        const errorStatus = (_a = result.status) !== null && _a !== void 0 ? _a : "unknown";
        const errorStatusText = (_b = result.statusText) !== null && _b !== void 0 ? _b : "unknown";
        const errorBody = (()=>{
            try {
                return JSON.stringify(result.body, null, 2);
            } catch (e) {
                return undefined;
            }
        })();
        throw new (0, $b8cb64040de3e013$export$f2e832acab1bdd79)(options, result, `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`);
    }
};
const $dde9b101f34c93cb$export$b5fe3f66a567bec0 = (config, options, axiosClient = (0, ($parcel$interopDefault($8zHUo$axios))))=>{
    return new (0, $0bc952e2695c5a43$export$551a058e9626aa5a)(async (resolve, reject, onCancel)=>{
        try {
            const url = $dde9b101f34c93cb$var$getUrl(config, options);
            const formData = $dde9b101f34c93cb$export$9643fd7297feaaf5(options);
            const body = $dde9b101f34c93cb$export$55bce18df99af758(options);
            const headers = await $dde9b101f34c93cb$export$6a9b8dd1339b1a17(config, options, formData);
            if (!onCancel.isCancelled) {
                const response = await $dde9b101f34c93cb$export$d5a1e65f8aa21b51(config, options, url, body, formData, headers, onCancel, axiosClient);
                const responseBody = $dde9b101f34c93cb$export$c852f9270b343ec4(response);
                const responseHeader = $dde9b101f34c93cb$export$67c14f05e310b1da(response, options.responseHeader);
                const result = {
                    url: url,
                    ok: $dde9b101f34c93cb$export$b0ac3e614a309be3(response.status),
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader !== null && responseHeader !== void 0 ? responseHeader : responseBody
                };
                $dde9b101f34c93cb$export$31bf08a141e671fd(options, result);
                resolve(result.body);
            }
        } catch (error) {
            reject(error);
        }
    });
};


class $392d95a03c2de617$export$8a3e7688f6bbb233 extends (0, $5db21e1949f7b236$export$86fcbb09edb4aebc) {
    constructor(config){
        super(config);
    }
    /**
     * Request method
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */ request(options) {
        return (0, $dde9b101f34c93cb$export$b5fe3f66a567bec0)(this.config, options);
    }
}


class $e9be4824e422de88$export$47ee1c28e3d17369 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get absence period by id
     * @param companyId Your company id
     * @param companyUserId The id of the actual user
     * @param id The id for the requested absence period
     * @returns AbsencePeriodModel All went well
     * @throws ApiError
     */ absence(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Absence Item for User
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Absence Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns AbsencePeriodModel All went well
     * @throws ApiError
     */ updateAbsence(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete absence
     * @param companyId Company Id
     * @param companyUserId Customer Id
     * @param id Customer Id
     * @returns any All went well
     * @throws ApiError
     */ deleteAbsence(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/absences/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Absence Item for User
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns AbsencePeriodModel Created
     * @throws ApiError
     */ newAbsence(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/absences",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $f4697e2f5a5905c9$export$a1746a9cd4653513 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get absence period by company user id
     * @param companyId Your Cinode Company id
     * @param companyUserId The id of the actual User
     * @returns AbsencePeriodDtoModel All went well
     * @throws ApiError
     */ absences(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/absences",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $67f4c25868852f0b$export$eb58e95b5eb4c6b3 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get absence types for company
     * @param companyId
     * @returns AbsenceTypeModel All went well
     * @throws ApiError
     */ absenceTypes(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/absence/types",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $d00ccc11cbfa05cb$export$5cc1fb0596a42f55 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get availability for company users. Omitting companyUserId gets availability for all company users in company.
     * @param companyId Your Cinode Company id
     * @param requestBody Filter options
     * @returns AvailabilityModel All went well
     * @throws ApiError
     */ searchAvailability(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/availability",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $a101752ec4ac9cdb$export$81a665b0338610f5 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company by id
     * @param companyId CompanyId
     * @returns CompanyModel All went well
     * @throws ApiError
     */ company(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $3418257e4f998b1c$export$b278987a992e5fe0 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company users list for an address
     * @param companyId Company Id
     * @param id Address Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */ companyAddressUsers(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/addresses/{id}/users",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $437701a8346344ad$export$a24ee0c8bdccf707 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Candidate by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */ candidate(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Patch company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyCandidatePatchDocument` for full type information per property
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */ patchCompanyCandidate(companyId, id, requestBody) {
        return this.httpRequest.request({
            method: "PATCH",
            url: "/v0.1/companies/{companyId}/candidates/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete candidate from the system
     * This action is irreversible, use with caution
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCandidate(companyId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/candidates/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param requestBody CompanyCandidateAddModel
     * @returns any All went well
     * @returns CompanyCandidateExtendedModel Created
     * @throws ApiError
     */ addCompanyCandidate(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Invite the CompanyCandidate to create their own Cinode account
     * A email is sent with your message and details for how to login
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Model with data about the candidate needed for the invitation
     * @returns any All went well
     * @throws ApiError
     */ inviteCandidate(companyId, id, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{id}/invite",
            path: {
                "companyId": companyId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $0034a0e835d5348e$export$35d7f17818448f5a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates event by id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventModel All went well
     * @throws ApiError
     */ companyCandidateEvent(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $8f34df899c74d98c$export$85a578801d4bad46 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates meeting event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventMeetingModel All went well
     * @throws ApiError
     */ companyCandidateEventMeeting(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update meeting event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Meeting Event details
     * @returns CompanyCandidateEventMeetingModel All went well
     * @throws ApiError
     */ updateCompanyCandidateEventMeeting(companyId, candidateId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete company candidate meeting event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCandidateEventMeeting(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add new meeting event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Meeting Event details
     * @returns any All went well
     * @returns CompanyCandidateEventMeetingModel Created
     * @throws ApiError
     */ newCompanyCandidateEventMeeting(companyId, candidateId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $18b9545791e77013$export$71648590530fa008 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates events meetings list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */ companyCandidateMeetingEventList(companyId, candidateId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/meetings",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $1be9fdf55fbc99f6$export$7d70a844d6105290 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates note event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventNoteModel All went well
     * @throws ApiError
     */ companyCandidateEventNote(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update note event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Note Event details
     * @returns CompanyCandidateEventNoteModel All went well
     * @throws ApiError
     */ updateCompanyCandidateEventNote(companyId, candidateId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete company candidate note event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCandidateEventNote(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add new note event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Note Event details
     * @returns any All went well
     * @returns CompanyCandidateEventNoteModel Created
     * @throws ApiError
     */ newCompanyCandidateEventNote(companyId, candidateId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $6b418e998c77e1e3$export$50aec86de547e333 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates events notes list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */ companyCandidateNoteEventList(companyId, candidateId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/notes",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $541fdc693fe3bd44$export$8c8166d5fa7c286d {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates events list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */ companyCandidateEvents(companyId, candidateId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $f960dbca7d883733$export$1ba5e78a45067ab0 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates task event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventTaskModel All went well
     * @throws ApiError
     */ companyCandidateEventTask(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update task event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Task Event details
     * @returns CompanyCandidateEventTaskModel All went well
     * @throws ApiError
     */ updateCompanyCandidateEventTask(companyId, candidateId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete company candidate task event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCandidateEventTask(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add new task event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Task Event details
     * @returns any All went well
     * @returns CompanyCandidateEventTaskModel Created
     * @throws ApiError
     */ newCompanyCandidateEventTask(companyId, candidateId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $4a16804e814228cf$export$b6bc1ae3b8a6484a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates events tasks list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */ companyCandidateTaskEventList(companyId, candidateId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/events/tasks",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $200b28680a8394e8$export$c8ac3e0490d41de6 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Candidate File Attachment by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */ getCandidateAttachment(id, companyId, attachmentId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{id}/attachments/{attachmentId}",
            path: {
                "id": id,
                "companyId": companyId,
                "attachmentId": attachmentId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $d06ea1bb88a0661f$export$9ef34bd472cfb16b {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Upload Candidate File Attachment
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param formData
     * @returns CompanyCandidateFileAttachmentListModel Created
     * @throws ApiError
     */ candidateAttachment(id, companyId, formData) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{id}/attachments",
            path: {
                "id": id,
                "companyId": companyId
            },
            formData: formData,
            mediaType: "multipart/form-data",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`
            }
        });
    }
}


class $39e31e85c96ea2a8$export$8bacb692d51e8649 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get candidate pipelines
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyCandidatePipelineModel All went well
     * @throws ApiError
     */ candidatePipelines(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/pipelines",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $2d158c2238326066$export$cccbbdbc47111182 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Candidates
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyCandidateBaseModel All went well
     * @throws ApiError
     */ candidates(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $b417a8af0e3c7adb$export$56a491cf6cf94c76 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Add a Skill to company candidate
     * Sample request:
     *
     * POST /v0.1/companies/1/candidates/19870/skills
     * {
         * "name": "SQL",
         * "companyCandidateId": 19870,
         * "keywordSynonymId": 577,
         * "languageId":1
         * }
         * @param companyId Company Id
         * @param candidateId CandidateId Id
         * @param requestBody CompanyCandidateSkillAddEditModel
         * @returns CompanyCandidateSkillModel All went well
         * @throws ApiError
         */ newCompanyCandidateSkill(companyId, candidateId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/skills",
            path: {
                "companyId": companyId,
                "candidateId": candidateId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Candidate Skill
     * Sample request:
     *
     * DELETE /v0.1/companies/1/candidates/19870/skills/577
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Skill Keyword Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCandidateSkill(companyId, candidateId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/candidates/{candidateId}/skills/{id}",
            path: {
                "companyId": companyId,
                "candidateId": candidateId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $5c68d4583652b342$export$c0ebe0863eddd316 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Add Candidate Uri (Link)
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param requestBody
     * @returns CompanyCandidateUriAttachmentModel Created
     * @throws ApiError
     */ candidateUriAttachment(id, companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{id}/uriattachments",
            path: {
                "id": id,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`
            }
        });
    }
    /**
     * Delete Candidate Uri (Link)
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param attachmentId
     * @returns any Success
     * @throws ApiError
     */ deleteCandidateUriAttachment(id, companyId, attachmentId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/candidates/{id}/uriattachments/{attachmentId}",
            path: {
                "id": id,
                "companyId": companyId,
                "attachmentId": attachmentId
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`
            }
        });
    }
}


class $c74c457b99dae327$export$754c0ec67f37947d {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Candidate Uri Attachment by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns CompanyCandidateUriAttachmentModel All went well
     * @throws ApiError
     */ getCandidateUriAttachment(id, companyId, attachmentId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/{id}/uriattachments/{attachmentId}",
            path: {
                "id": id,
                "companyId": companyId,
                "attachmentId": attachmentId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $15b38d98142c9d9c$export$a0026a5769eab5d2 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Create an account for a candidate.
     * No email is sent to the candidate, you will have to communicate login details to the candidate yourself.
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Basic account information
     * @returns CompanyUserCandidateModel All went well
     * @throws ApiError
     */ addCandidateUserFromCandidate(companyId, id, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/{id}/user",
            path: {
                "companyId": companyId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $9c851a42aa2b19ce$export$a0707f1d94ce819b {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company capabilities
     * @param companyId CompanyId
     * @returns CompanyCapabilitiesModel All went well
     * @throws ApiError
     */ companyCapabilities(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/capabilities",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $9a8be5c8af9c2807$export$4c77df3933660a6d {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company currencies
     * @param companyId Company Id
     * @returns CurrencyModel All went well
     * @throws ApiError
     */ companyCurrencies(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/currencies",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $627b795850f5253a$export$5e0ca4e966076353 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company customer by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId
     * @param id
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */ getCompanyCustomer(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id
     * @param companyId
     * @param requestBody CompanyCustomerAddEditModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */ updateCompanyCustomer(id, companyId, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/customers/{id}",
            path: {
                "id": id,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Patch company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id Customer Id
     * @param companyId Company Id
     * @param requestBody Patch of CompanyCustomerPatchModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */ patchCompanyCustomer(id, companyId, requestBody) {
        return this.httpRequest.request({
            method: "PATCH",
            url: "/v0.1/companies/{companyId}/customers/{id}",
            path: {
                "id": id,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id Customer Id
     * @param companyId Company Id
     * @param requestBody CompanyCustomerDeleteModel
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCustomer(id, companyId, requestBody) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{id}",
            path: {
                "id": id,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody CompanyCustomerAddModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */ newCompanyCustomer(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $ce890fbab1823c16$export$bf561abe2fb5dbc9 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer address by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Address Id
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */ customerAddress(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Customer Address Id
     * @param requestBody CompanyCustomerAddressAddEditModel
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */ editCompanyCustomerAddress(companyId, customerId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Address Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCustomerAddress(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/addresses/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CompanyCustomerAddressAddEditModel
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */ newCompanyCustomerAddress(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/addresses",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $4754f195774dcbde$export$d50d29cdcdbfd5ce {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer contact by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */ contact(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @param requestBody CompanyCustomerContactAddEditModel
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */ editCompanyCustomerContact(companyId, customerId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyCustomerContact(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/contacts/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CompanyCustomerContactAddEditModel
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */ newCompanyCustomerContact(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/contacts",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $965a26dd97b7a15e$export$17d89cd4779997d1 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer contact list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */ contacts(companyId, customerId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/contacts",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $2408c13bd206152d$export$8e4892b3101b5a56 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Edit Tags for CustomerContact
     * Note:
     *
     * Posted tags will replace any existing tags for the contact.
     * A new tag will be created if the Id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/19870/contacts/5360/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param customerId Customer Id
                 * @param contactId CustomerContact Id
                 * @param requestBody CompanyTagModel
                 * @returns CompanyTagModel All went well
                 * @throws ApiError
                 */ editCustomerContactTags(companyId, customerId, contactId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/contacts/{contactId}/tags",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "contactId": contactId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $cf9593d6b8857859$export$93ddafb9a54c0212 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventModel All went well
     * @throws ApiError
     */ companyCustomerEvent(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $0a574a3cb44733d6$export$769c6a97a634e038 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer events list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */ companyCustomerEvents(companyId, customerId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $432ddad82354be1e$export$ae5ae905d4a426fe {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event meeting by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */ companyCustomerEventMeeting(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */ updateMeeting(companyId, customerId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteMeeting(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */ newMeeting(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/meetings",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $c45b6418e6745d7e$export$4b9bbe00845af9de {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event meetings list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */ companyCustomerEventMeetings(companyId, customerId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/meetings",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $d8c39f9c7408a6dd$export$7b2eaf9aa467c8f1 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event note by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */ companyCustomerEventNote(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */ updateNote(companyId, customerId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteNote(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventNoteAddEditModel
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */ newNote(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/notes",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $1e3f2618c98f7f06$export$ca17c8c93983bf53 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event notes list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */ companyCustomerEventNotes(companyId, customerId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/notes",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $d66d7ab0c2ca0778$export$388ecb6624507af3 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event task by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */ companyCustomerEventTask(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventTaskAddEditModel
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */ updateTask(companyId, customerId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteTask(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventTaskAddEditModel
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */ newTask(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/tasks",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $8cb22a65385a9b9d$export$304ef75be13d69d2 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer event tasks list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */ companyCustomerEventTasks(companyId, customerId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/events/tasks",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $3c3115af748af59d$export$be5342b121c1e028 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer file attachment by Id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */ getCustomerAttachment(id, companyId, attachmentId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{id}/attachments/{attachmentId}",
            path: {
                "id": id,
                "companyId": companyId,
                "attachmentId": attachmentId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $db9e57d7380b58df$export$82aca92cfb9ef6f2 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get customer managers
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CompanyCustomerManagerModel All went well
     * @throws ApiError
     */ companyCustomerManagers(companyId, customerId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/managers",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`
            }
        });
    }
    /**
     * Add customer responsible
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/22228/managers
     * {
         * [
             * 51096
             * ]
             * }
             * @param companyId Company Id
             * @param customerId Customer Id
             * @param requestBody CompanyCustomerManagersAddEditModel
             * @returns CompanyCustomerManagerModel All went well
             * @throws ApiError
             */ addCompanyCustomerResponsible(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/managers",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`
            }
        });
    }
    /**
     * Remove customer responsible
     * Sample request:
     *
     * DELETE /v0.1/companies/1/customers/22228/managers/54632
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */ removeCustomerManager(companyId, customerId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/managers/{id}",
            path: {
                "companyId": companyId,
                "customerId": customerId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $dac23fd8541b5e50$export$795fb71b3bad14cb {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company customers list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @returns CompanyCustomerBaseModel All went well
     * @throws ApiError
     */ companyCustomers(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $dc2e2beb9fbc0def$export$c88e756d252488d4 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get extended company customers list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @returns CompanyCustomerExtendedModel All went well
     * @throws ApiError
     */ customersExtended(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/customers/extended",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $3c47c8a83a7e8dfa$export$8b13e7a213e7af0a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Edit Tags for Customer
     * Note:
     *
     * Posted tags will replace any existing tags for the customer.
     * A new tag will be created if the Id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param customerId Customer Id
                 * @param requestBody CompanyTagModel
                 * @returns CompanyCustomerModel All went well
                 * @throws ApiError
                 */ editCustomerTags(companyId, customerId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/{customerId}/tags",
            path: {
                "companyId": companyId,
                "customerId": customerId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $ba0e2a7b8a7ae824$export$c2fcdcf3abf79263 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Company Image by Id
     * @param companyId Company Id
     * @param id Image id
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */ companyImage(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/images/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Download Company Image
     * @param companyId Company Id
     * @param id Image id
     * @param imageFileName Image File Name
     * @returns string All went well
     * @throws ApiError
     */ companyImageDownload(companyId, id, imageFileName) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/images/{id}/{imageFileName}",
            path: {
                "companyId": companyId,
                "id": id,
                "imageFileName": imageFileName
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $39de9cddfc5f3f06$export$b2018fc046463812 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Company Images Assigned to User
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */ companyImages(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{id}/images",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add Image to User
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param formData
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */ addCompanyImage(companyId, id, formData) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{id}/images",
            path: {
                "companyId": companyId,
                "id": id
            },
            formData: formData,
            mediaType: "multipart/form-data",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $9ae4b551342a1a0a$export$b597a0f306b928d7 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company managers
     * Sample request:
     *
     * GET /v0.1/companies/1/managers
     * @param companyId Company Id
     * @returns CompanyUserBaseModel All went well
     * @throws ApiError
     */ companyManagers(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/managers",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $8cdafdc277728a81$export$59e98d4ab7ff8c7b {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profiles list
     * Sample request:
     *
     * POST /v0.1/companies/1/profiles
     * {
         * "createdOffsetDays": 90,
         * "updatedOffsetDays": 30,
         * "pageAndSortBy": {
             * "page": 1,
             * "itemsPerPage": 15,
             * "order": 0,
             * "sortBy": 1
             * }
             * }
             * @param companyId Company Id
             * @param requestBody Company Profile Filter
             * @returns CompanyProfilesModel All went well
             * @throws ApiError
             */ companyProfiles(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/profiles",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`
            }
        });
    }
}


class $b72c2825181faba2$export$ca2e85756a0c75ed {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Project file attachment by Id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */ getProjectAttachment(id, companyId, attachmentId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{id}/attachments/{attachmentId}",
            path: {
                "id": id,
                "companyId": companyId,
                "attachmentId": attachmentId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $6795ae77004ac365$export$5713bae4e6d7d0d8 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get recruitment managers
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyRecruitmentManagerModel All went well
     * @throws ApiError
     */ recruitmentManagers(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/recruitment/managers",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $6a2d6c3765cdb3d3$export$8b837281bd1a79c5 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get resumes list
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @returns CompanyUserResumeBaseModel All went well
     * @throws ApiError
     */ companyResumes(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/resumes",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $50251ed1b615a8a5$export$e21518b0632c2d19 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Subcontractor Group by Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */ getCompanySubcontractorGroup(companyId, subcontractorGroupId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}",
            path: {
                "companyId": companyId,
                "subcontractorGroupId": subcontractorGroupId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $5890ab4e3db16784$export$809520f725c1d7d {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Add subcontractor group member
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @param requestBody AddCompanySubcontractorGroupMemberModel
     * @returns void
     * @throws ApiError
     */ addCompanySubcontractorGroupMember(companyId, subcontractorGroupId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}/members",
            path: {
                "companyId": companyId,
                "subcontractorGroupId": subcontractorGroupId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete subcontractor group member
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @param id Subcontractor Id
     * @returns void
     * @throws ApiError
     */ deleteCompanySubcontractorGroupMember(companyId, subcontractorGroupId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/subcontractors/groups/{subcontractorGroupId}/members/{id}",
            path: {
                "companyId": companyId,
                "subcontractorGroupId": subcontractorGroupId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $6faa04c2eb529c08$export$16e5dd2cebfcc609 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Subcontractor Groups by Company Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */ getCompanySubcontractorGroups(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/groups",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $7657c17a8fcc70c0$export$f40112f75f119675 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company tag by Id
     * Sample request:
     *
     * GET /v0.1/companies/1/tags/1
     * @param companyId Company Id
     * @param id Tag Id
     * @returns CompanyTagModel Success
     * @returns any All went well
     * @throws ApiError
     */ companyTag(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/tags/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`
            }
        });
    }
}


class $1f941d956dc9b550$export$8717da62100b1773 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company tags
     * Sample request:
     *
     * GET /v0.1/companies/1/tags
     * @param companyId Company Id
     * @returns CompanyTagBaseModel All went well
     * @throws ApiError
     */ companyTags(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/tags",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $31c707e249c792d4$export$271fe9a250f232c1 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get team by id
     * @param companyId Company Id
     * @param id Event Id
     * @returns TeamModel All went well
     * @throws ApiError
     */ team(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/teams/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update team
     * Requires access level: CompanyAdmin.
     * @param id Team Id
     * @param companyId Company Id
     * @param requestBody TeamAddEditModel
     * @returns TeamModel All went well
     * @throws ApiError
     */ updateTeam(id, companyId, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/teams/{id}",
            path: {
                "id": id,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add team
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param requestBody TeamAddEditModel
     * @returns TeamModel All went well
     * @throws ApiError
     */ newTeam(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/teams",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $d8621d02b4b66f73$export$9b9e5c48cc2a66c0 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get team managers
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */ teamManagers(companyId, teamId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/managers",
            path: {
                "companyId": companyId,
                "teamId": teamId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add team manager
     * Sample request:
     *
     * POST /v0.1/companies/1/teams/1234/managers
     * {
         * "teamId" : 1234,
         * "companyUserId" : 54632
         * }
         * @param companyId Company Id
         * @param teamId
         * @param requestBody TeamMemberEditModel
         * @returns TeamManagerModel All went well
         * @throws ApiError
         */ addTeamManager(companyId, teamId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/managers",
            path: {
                "companyId": companyId,
                "teamId": teamId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Remove team manager
     * Sample request:
     *
     * DELETE /v0.1/companies/1/teams/1234/managers/54632
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */ removeTeamManager(companyId, teamId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/managers/{id}",
            path: {
                "companyId": companyId,
                "teamId": teamId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $464773000ac02eb1$export$4d187899fd61c416 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get team member
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */ getTeamMember(companyId, teamId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/members/{id}",
            path: {
                "companyId": companyId,
                "teamId": teamId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @param requestBody TeamMemberEditModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */ updateTeamMember(companyId, teamId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/members/{id}",
            path: {
                "companyId": companyId,
                "teamId": teamId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Remove team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */ removeTeamMember(companyId, teamId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/members/{id}",
            path: {
                "companyId": companyId,
                "teamId": teamId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param requestBody TeamMemberAddModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */ addTeamMember(companyId, teamId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/members",
            path: {
                "companyId": companyId,
                "teamId": teamId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Move team member and associated bookings to another team
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @param requestBody TeamMemberMoveModel
     * @returns any All went well
     * @throws ApiError
     */ moveTeamMember(companyId, teamId, id, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/members/{id}/move",
            path: {
                "companyId": companyId,
                "teamId": teamId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $13abeddc5376ee05$export$650f3955e41dfc45 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */ getTeamMembers(companyId, teamId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/members",
            path: {
                "companyId": companyId,
                "teamId": teamId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $49ed3c9cfa163bf4$export$162ed105dac95d0c {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get teams list
     * @param companyId Company Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */ companyTeams(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/teams",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Not Found`,
                500: `Server error`
            }
        });
    }
}


class $d094dda89c4d27cf$export$64d904ffdd8d2286 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * @deprecated
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */ getTeamUsers(companyId, teamId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/users",
            path: {
                "companyId": companyId,
                "teamId": teamId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * @deprecated
     * Add team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param requestBody TeamMemberAddModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */ addTeamUser(companyId, teamId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/users",
            path: {
                "companyId": companyId,
                "teamId": teamId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * @deprecated
     * Remove team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */ removeTeamUser(companyId, teamId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/teams/{teamId}/users/{id}",
            path: {
                "companyId": companyId,
                "teamId": teamId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $8c61faf9b78b9414$export$80525ec1d2c57391 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company user by id
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserModel All went well
     * @throws ApiError
     */ user(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update company user
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param requestBody CompanyUserEditModel
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */ updateCompanyUser(companyId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Patch company user
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param requestBody Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyUserEmployeePatchDocument` for full type information per property
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */ patchCompanyUser(companyId, id, requestBody) {
        return this.httpRequest.request({
            method: "PATCH",
            url: "/v0.1/companies/{companyId}/users/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete user from the system
     * Firstly, the user has to be disconnected, which can be done through a PATCH or PUT
     * This action is irreversible, use with caution
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param firstName CompanyUser FirstName
     * @param lastName CompanyUser LastName
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUser(companyId, id, firstName, lastName) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            query: {
                "firstName": firstName,
                "lastName": lastName
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add company user employee
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param requestBody CompanyUserAddModel
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */ addCompanyUser(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $9884a98a177ab14e$export$83c115d3d2b0ba96 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Convert company user employee to an AAD account
     * Requires access level: CompanyAdmin.
     * @param companyUserId Company User Id
     * @param companyId
     * @param requestBody ConvertCompanyUserToAadAccountModel
     * @returns any All went well
     * @throws ApiError
     */ convertUserToAadAccount(companyUserId, companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/convert-aad",
            path: {
                "companyUserId": companyUserId,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $36ab13fb674d8e6d$export$8fe712f519126dc0 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventModel All went well
     * @throws ApiError
     */ companyUserEmployeeEvent(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $01b2adc321864533$export$7eb65acfb6da1621 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */ companyUserEmployeeEventMeeting(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Updates employee meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Meeting event details
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */ updateCompanyUserEmployeeEventMeeting(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserEmployeeEventMeeting(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Creates new employee meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Meeting event details
     * @returns any All went well
     * @returns CompanyUserEventMeetingModel Created
     * @throws ApiError
     */ newCompanyUserEmployeeEventMeeting(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $19201fc67e962beb$export$eed5ea593bafe920 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */ companyUserEmployeeEventNote(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Updates employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Note event details
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */ updateCompanyUserEmployeeEventNote(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserEmployeeEventNote(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Creates new employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Note event details
     * @returns any All went well
     * @returns CompanyUserEventNoteModel Created
     * @throws ApiError
     */ newCompanyUserEmployeeEventNote(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $85c1c8928a7a5e6f$export$513b4c416c5a2a1f {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserEmployeeEvents(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`
            }
        });
    }
}


class $028aac08e85e4783$export$8c3335594a3b89d5 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee meetings events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserEmployeeEventMeetingList(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/meetings",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $d004ce2e29ec9d26$export$d079520dee85fe49 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee notes events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserEmployeeEventNoteList(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/notes",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $825cd6aa2ab163b8$export$fc7cb0f5eda31b60 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get employee tasks events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserEmployeeEventTaskList(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $c266ca6d59db5011$export$f79a39da0c0cdc47 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Creates new employee task event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Task event details
     * @returns any All went well
     * @returns CompanyUserEventTaskModel Created
     * @throws ApiError
     */ newCompanyUserEmployeeEventTask(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Get employee task event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */ companyUserEmployeeEventTask(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Updates employee's task event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Task event details
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */ updateCompanyUserEmployeeEventTask(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserEmployeeEventTask(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/employees/{companyUserId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $45d9dff7215b9ff1$export$7909a7030858369c {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company user, including financial fields, by id
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */ userFull(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users-full/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $f3075773a1c82329$export$2ac2d9437f09b025 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Update Permissions for Company User
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserPermissionsEditModel
     * @returns RoleModel All went well
     * @throws ApiError
     */ updatePermissions(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/permissions",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $83eb6b55812bd98c$export$e57da5d4b89e8cb4 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile by company user id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfileFullModel All went well
     * @throws ApiError
     */ companyUserProfile(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Profile for user
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileBaseModel Created
     * @throws ApiError
     */ newCompanyUserProfile(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $e3d7f2c39b6de587$export$889f3fe2032b14fb {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile commitment by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileCommitment Id
     * @returns CompanyUserProfileCommitmentModel All went well
     * @throws ApiError
     */ companyUserProfileCommitment(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Commitment
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns CompanyUserProfileCommitmentModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileCommitment(id, companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Commitment
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileCommitment(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Profile Commitment
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileCommitmentModel Created
     * @throws ApiError
     */ newCompanyUserProfileCommitment(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/commitments",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $cc95e64512d3c9ce$export$48be4796dd3b09b1 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile education by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileEducation Id
     * @returns CompanyUserProfileEducationModel All went well
     * @throws ApiError
     */ companyUserProfileEducation(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Education
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileEducationAddEditModel
     * @returns CompanyUserProfileEducationModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileEducation(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Profile Education
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileEducation(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Profile Education
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileEducationAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileEducationModel Created
     * @throws ApiError
     */ newCompanyUserProfileEducation(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/educations",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $e7b1079c6df68ea7$export$5b02c7ef2755646f {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile employer by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileEmployer Id
     * @returns CompanyUserProfileEmployerModel All went well
     * @throws ApiError
     */ companyUserProfileEmployer(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Employer
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileEmployerAddEditModel
     * @returns CompanyUserProfileEmployerModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileEmployer(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Profile Employer
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileEmployer(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Employer profile item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileEmployerAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileEmployerModel Created
     * @throws ApiError
     */ newCompanyUserProfileEmployer(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/employers",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $7815a5b6f511cc08$export$7ce3b12efbc526b1 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile external skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileExtSkill Id
     * @returns CompanyUserProfileExtSkillModel All went well
     * @throws ApiError
     */ companyUserProfileExtSkill(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Extra Skill Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileExtraSkillAddEditModel
     * @returns CompanyUserProfileExtSkillModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileExtSkill(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Extra Skill Profile Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileExtSkill(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Extra Skill Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileExtSkillAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileExtSkillModel Created
     * @throws ApiError
     */ newCompanyUserProfileExtSkill(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/extskills",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $d782b663dada7039$export$dc03d29e832e622 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Create new profile import for a user.
     * This will start an async operation.
     * - If the operation is started successfully, the response will be `202 Accepted` and the `Location` header will contain the URL to get the status of the operation.
     * - If the operation is not started successfully, the response will be `400 Bad Request`
     * @param companyId
     * @param companyUserId
     * @param formData
     * @returns any Accepted
     * @throws ApiError
     */ createCompanyUserProfileImport(companyId, companyUserId, formData) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/import",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            formData: formData,
            mediaType: "multipart/form-data",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`
            }
        });
    }
    /**
     * Get current status of the async profile import operation.
     * This will return the status of an async operation.
     * - If the operation is still in progress, the response will be `202 Accepted`
     * - If the operation is completed successfully, the response will be `200 OK` and the `status` property will be `Completed`
     * - If the operation is completed with errors, the response will be `200 OK` and the `status` property will be `Failed`
     * @param companyId
     * @param companyUserId
     * @param operationId
     * @returns ImportProfileAsyncOperation Success
     * @returns any Accepted
     * @throws ApiError
     */ getCompanyUserProfileImport(companyId, companyUserId, operationId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/import/{operationId}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "operationId": operationId
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`
            }
        });
    }
}


class $428d4e0c11c66cb3$export$56a23e645db8f13b {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile language by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileLanguage Id
     * @returns CompanyUserProfileLanguageModel All went well
     * @throws ApiError
     */ companyUserProfileLanguage(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Language Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileExtraSkillAddEditModel
     * @returns CompanyUserProfileLanguageModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileLanguage(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Language Profile Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileLanguage(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Language Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileLanguageAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileLanguageModel Created
     * @throws ApiError
     */ newCompanyUserProfileLanguage(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/languages",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $1ae4868dd1436eab$export$de1b171f86e70e92 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Available Profile Languages
     * @returns ProfileLanguageModel All went well
     * @throws ApiError
     */ profileLanguages() {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/languages",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $cc4f2acd4ab6da17$export$a461e3b362509444 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */ companyUserProfilePresentation(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/presentation",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Edit Profile Presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfilePresentationEditModel
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */ updateCompanyUserProfilePresentation(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/presentation",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $afc52af492c8fc83$export$2ffcd76fc41d3871 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile reference by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileReference Id
     * @returns CompanyUserProfileReferenceModel All went well
     * @throws ApiError
     */ companyUserProfileReference(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Reference Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileReferenceAddEditModel
     * @returns CompanyUserProfileReferenceModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileReference(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Profile Reference Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileReference(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/references/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Profile Reference Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileReferenceAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileReferenceModel Created
     * @throws ApiError
     */ newCompanyUserProfileReference(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/references",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $9f8e4cfc2a7d83e9$export$b38f975cd45385a6 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profiles list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfileBaseModel All went well
     * @throws ApiError
     */ companyUserProfiles(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profiles",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`
            }
        });
    }
}


class $d3dcd52c7d305173$export$6892c8bbf17f2028 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileSkill Id
     * @returns CompanyUserProfileSkillModel All went well
     * @throws ApiError
     */ companyUserProfileSkill(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Skill
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileSkillEditModel
     * @returns CompanyUserProfileSkillModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileSkill(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Profile Skill
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileSkill(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add Skill to profile
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileSkillAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileSkillModel Created
     * @throws ApiError
     */ newCompanyUserProfileSkill(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/skills",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $ecfcec92f6c87ae2$export$e6a275918e0d423e {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile training by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileTraining Id
     * @returns CompanyUserProfileTrainingModel All went well
     * @throws ApiError
     */ companyUserProfileTraining(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Training Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileTrainingAddEditModel
     * @returns CompanyUserProfileTrainingModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileTraining(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Profile Training Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileTraining(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create Profile Training Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileTrainingAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileTrainingModel Created
     * @throws ApiError
     */ newCompanyUserProfileTraining(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/trainings",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $c9bc7c322732850e$export$6bc5afc1f2b3db96 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get profile work experience by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileWorkExperience Id
     * @returns CompanyUserProfileWorkExperienceModel All went well
     * @throws ApiError
     */ companyUserProfileWorkExperience(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Profile Work Experience
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileWorkExperienceAddEditModel
     * @returns CompanyUserProfileWorkExperienceModel All went well
     * @throws ApiError
     */ updateCompanyUserProfileWorkExperience(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Profile Work Experience Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserProfileWorkExperience(id, companyId, companyUserId) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences/{id}",
            path: {
                "id": id,
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Create WorkExperience Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserWorkExperienceAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileWorkExperienceModel Created
     * @throws ApiError
     */ newCompanyUserProfileWorkExperience(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/profile/workexperiences",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $7a390f9a144c1b00$export$ed4495c6a4c00add {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get resume by id
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Resume Id
     * @returns ClassicCompanyUserResumeModel All went well
     * @throws ApiError
     */ getResume(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/resumes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $6ce92bd1a08ef442$export$575593bab3224c9a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company user resumes list
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserResumeBaseModel All went well
     * @throws ApiError
     */ companyUserResumes(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/resumes",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                500: `Server error`
            }
        });
    }
}


class $6a9be09f1aa4ce0b$export$eb7ba955dd37b48c {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Roles for CompanyUser by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserProjectAssignmentModel All went well
     * @throws ApiError
     */ companyUserRoles(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{id}/roles",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $e53f378af120dda2$export$d59fe8dac28bbd7d {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company users list
     * @param companyId Company Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */ companyUsers(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $68494cd8010a2c8f$export$fc15e1837624e50a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get extended company users list
     * @param companyId Company Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */ companyUsersExtended(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/extended",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $2047cd135d39beba$export$4a91f4807dce316a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Skill Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */ skill(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/skills/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $5deb75f4c2a002db$export$b3422cd87055d35d {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get skills list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */ skills(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/skills",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $cef037199baf0c1e$export$a8b63a6b2f767a8e {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company user by id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserSubcontractorModel All went well
     * @throws ApiError
     */ companySubcontractor(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete subcontractor from the system
     * This action is irreversible, use with caution
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param id Subcontractor Id
     * @param firstName Subcontractor FirstName
     * @param lastName Subcontractor LastName
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanySubcontractor(companyId, id, firstName, lastName) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/subcontractors/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            query: {
                "firstName": firstName,
                "lastName": lastName
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add subcontractor
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody CompanyUserSubcontractorAddEditModel
     * @returns CompanyUserSubcontractorModel All went well
     * @throws ApiError
     */ addCompanyUserSubcontractor(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/subcontractors",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $b838201867037740$export$d8208da4ba78c877 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEvent(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $72ed12652c708033$export$a9776fd23f4cf45f {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Meeting event Id
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEventMeeting(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Updates subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Meeting event details
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */ updateCompanyUserSubcontractorEventMeeting(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserSubcontractorEventMeeting(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Creates new subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Meeting event details
     * @returns any All went well
     * @returns CompanyUserEventMeetingModel Created
     * @throws ApiError
     */ newCompanyUserSubcontractorEventMeeting(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $abfeca71d380bfa9$export$e3d6d5e4a419eccf {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors notes events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEventNote(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Updates subcontractor note event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Note event details
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */ updateCompanyUserSubcontractorEventNote(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserSubcontractorEventNote(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Creates new subcontractors note event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Note event details
     * @returns any All went well
     * @returns CompanyUserEventNoteModel Created
     * @throws ApiError
     */ newCompanyUserSubcontractorEventNote(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $b09df74ccc129511$export$ba4a80ec97b44423 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEvents(companyId, subcontractorId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/events",
            path: {
                "companyId": companyId,
                "subcontractorId": subcontractorId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $706e76b11aa64aa1$export$32d9f60ae7d643ac {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors meetings events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEventMeetingList(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/meetings",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $67a31a9af702f02b$export$19f26cddc1e4a43a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors notes events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEventsNotes(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/notes",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $3118a19612728144$export$8437aa08351bc1ca {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors tasks events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEventsTasks(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $8248d72df8b98135$export$e1a185b1a211b19a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Creates new subcontractor task event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Task event details
     * @returns any All went well
     * @returns CompanyUserEventTaskModel Created
     * @throws ApiError
     */ newCompanyUserSubcontractorEventTask(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Get subcontractors tasks events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */ companyUserSubcontractorEventTask(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Updates subcontractor task event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Task event details
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */ updateCompanyUserSubcontractorEventTask(companyId, companyUserId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyUserSubcontractorEventTask(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/subcontractors/{companyUserId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $d86229259263f42a$export$a8360f1b16f063e5 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractor File Attachment by Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */ getSubcontractorAttachment(id, companyId, attachmentId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{id}/attachments/{attachmentId}",
            path: {
                "id": id,
                "companyId": companyId,
                "attachmentId": attachmentId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $54109438b1e42769$export$aeb133ee930745dd {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Upload subcontractor file attachment
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param formData
     * @returns CompanyUserSubcontractorFileAttachmentListModel Created
     * @throws ApiError
     */ subcontractorAttachment(id, companyId, formData) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/subcontractors/{id}/attachments",
            path: {
                "id": id,
                "companyId": companyId
            },
            formData: formData,
            mediaType: "multipart/form-data",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                500: `Server Error`
            }
        });
    }
}


class $65a606bc74c3b285$export$e8c407c1c8977b57 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get assigned and prospect roles for subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param subcontractorId Subcontractor Id
     * @returns CompanyUserSubcontractorRolesModel All went well
     * @throws ApiError
     */ getSubcontractorRoles(companyId, subcontractorId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/roles",
            path: {
                "companyId": companyId,
                "subcontractorId": subcontractorId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Get a specific role, assigned and or prospected, for subcontractor by role id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param subcontractorId Subcontractor Id
     * @param projectAssignmentId Project assignment Id
     * @returns CompanyUserSubcontractorRoleMemberModel All went well
     * @throws ApiError
     */ getSubcontractorRole(companyId, subcontractorId, projectAssignmentId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors/{subcontractorId}/roles/{projectAssignmentId}",
            path: {
                "companyId": companyId,
                "subcontractorId": subcontractorId,
                "projectAssignmentId": projectAssignmentId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $d6dbafa415715160$export$749854a6169bb696 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get subcontractors list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanyUserSubcontractorBaseModel All went well
     * @throws ApiError
     */ companyUserSubcontractors(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/subcontractors",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $8860c36b8763df55$export$4700363cb7c4bf01 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Edit Tags for User
     * Note:
     *
     * Posted tags will replace any existing tags for the user.
     * A new tag will be created if the id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/users/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-new",
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param companyUserId CompanyUser Id
                 * @param requestBody CompanyTagModel[]
                 * @returns CompanyUserModel All went well
                 * @throws ApiError
                 */ editCompanyUserTags(companyId, companyUserId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/tags",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $1ed9dd27805f1b40$export$d55285a3ab81e66c {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get teams for team member
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */ userTeams(companyId, companyUserId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/teams",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $9a59c368efe2b830$export$80ea09c47452aeee {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Add Webhook
     * Sample request:
     *
     * POST /v0.1/companies/1/webhooks
     * {
         * "isActive": false,
         * "endpointUrl": "https://webhook.site/7a619ffb-e67c-41fc-8113-083d6013f76c",
         * "configurations": [
             * {
                 * "entityType": 1,
                 * "actionType": 1
                 * }
                 * ],
                 * "credentials": [
                     * {
                         * "isBasicAuthentication": true,
                         * "headerName": "user",
                         * "headerValue": "somevalue"
                         * }
                         * ]
                         * }
                         * @param companyId Company Id
                         * @param requestBody WebhookAddModel
                         * @returns WebhookModel All went well
                         * @throws ApiError
                         */ newWebhook(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/webhooks",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`
            }
        });
    }
    /**
     * Requires access level: CompanyAdmin. Requires module: Webhooks.
     * @param companyId
     * @param requestBody
     * @returns WebhookModel Created
     * @throws ApiError
     */ installWebhookManifest(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/webhooks/manifest",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`
            }
        });
    }
    /**
     * Remove webhook
     * Sample request:
     *
     * DELETE /v0.1/companies/1/webhooks/42a3a220-766c-eb11-8e13-000c29b4e92f
     * @param companyId Company Id
     * @param id Webhook Id
     * @returns any All went well
     * @throws ApiError
     */ removeWebhook(companyId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/webhooks/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`
            }
        });
    }
}


class $bf3a9ba4720176db$export$ca4decab7ef1aa1e {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company webhooks
     * Sample request:
     *
     * GET /v0.1/companies/1/webhooks
     * @param companyId Company Id
     * @returns WebhookModel All went well
     * @throws ApiError
     */ companyWebhooks(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/webhooks",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $99cae65bd632d3d4$export$a639a6eecb57b3b7 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get resume by id
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Resume Id
     * @returns DynamicCompanyUserResumeModel All went well
     * @throws ApiError
     */ dynamicResume(companyId, companyUserId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/users/{companyUserId}/resumes/{id}/dynamic",
            path: {
                "companyId": companyId,
                "companyUserId": companyUserId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $3ef44a50ff7509f1$export$44d608147b7bbeb0 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Search keywords by term
     * @param companyId Company Id
     * @param term Search term
     * @returns KeywordModel All went well
     * @throws ApiError
     */ searchKeyword(companyId, term) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/keywords/search/{term}",
            path: {
                "companyId": companyId,
                "term": term
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $aab06f4d3b63904e$export$f04085d244fce783 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Translates any mention-ids in a text to their human readable form.
     * Translations are access restricted, if you don't have enough access
     * to get the name of an id, it won't be translated.
     * @param companyId Company Id
     * @param requestBody The model with one property, value, which contains the text containing the mentions you're looking to translate.  Example of a text with a mention inside: `"Hello @(1|123456) can you please consider this role?"`
     * @returns string All went well
     * @throws ApiError
     */ translateMentions(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/mentions/to-natural-text",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $90cd3410b6d943d2$export$a07979cfc4e35991 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Partners by filter
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns PartnersOverviewModel All went well
     * @throws ApiError
     */ searchPartners(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/partners",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $afe96552494bbee0$export$9616f8c54d4f56aa {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns ProjectModel All went well
     * @throws ApiError
     */ project(companyId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param id Project Id
     * @param companyId Company Id
     * @param requestBody ProjectAddEditModel
     * @returns ProjectModel All went well
     * @throws ApiError
     */ updateCompanyProject(id, companyId, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{id}",
            path: {
                "id": id,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns any All went well
     * @throws ApiError
     */ deleteCompanyProject(companyId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{id}",
            path: {
                "companyId": companyId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param requestBody ProjectAddEditModel
     * @returns ProjectModel All went well
     * @throws ApiError
     */ newCompanyProject(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $4f1dcd2af070c94e$export$7b75f5c0f6c791a9 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * @deprecated
     * Get projectassignment by id (Obsolete)
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ oldProjectAssignment(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/projectassignments/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Get Role by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ projectAssignment(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Edit Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @param requestBody ProjectAssignmentEditModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ updateProjectAssignment(companyId, projectId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ deleteProjectAssignment(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectAssignmentAddEditModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ newProjectAssignment(companyId, projectId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Announce a role (ProjectAssignment) to the Partner Network and optionally also to Cinode Market(https://cinode.market/requests).
     * If you are testing, set the "PublishForReal" to "false", otherwise you will publish this announcement for real. When you're testing ("PublishForReal = false) RequestId will be 0 in the response.
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param projectId Project Id
     * @param projectAssignmentId ProjectAssignment Id
     * @param companyId
     * @param requestBody ProjectAssignmentAnnounceModel
     * @returns ProjectAssignmentAnnouncementBaseModel Success
     * @returns any All went well
     * @throws ApiError
     */ announceProjectAssignment(projectId, projectAssignmentId, companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{projectAssignmentId}/announce",
            path: {
                "projectId": projectId,
                "projectAssignmentId": projectAssignmentId,
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $39aa961a7c12e96c$export$c9c3f472996de0e2 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Add Role Member Employee
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberEmployeeAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ addProjectAssignmentMemberEmployee(companyId, projectId, roleId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/employee",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add Role Member Subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ addProjectAssignmentMemberSubcontractor(companyId, projectId, roleId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/subcontractor",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Edit Role Member Employee
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ updateProjectAssignmentMemberEmployee(companyId, projectId, roleId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/employee/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Edit Role Member Subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ updateProjectAssignmentMemberSubcontractor(companyId, projectId, roleId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/subcontractor/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Role Member
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */ deleteProjectAssignmentMemberEmployee(companyId, projectId, roleId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/members/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $774de8fadd1850b2$export$8e97fb162fa11728 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get Roles by Filter
     * Rate limited, restricted to once per minute, max 1000 requests per day
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns ProjectAssignmentWithStatusModel All went well
     * @throws ApiError
     */ searchRoles(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/roles",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $ea1e761b238fed0a$export$485c8b08a67d53de {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Add Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberSkillAddModel
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */ addProjectAssignmentSkill(companyId, projectId, roleId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Update Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Keyword Id
     * @param requestBody ProjectAssignmentMemberSkillAddModel
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */ updateProjectAssignmentSkill(companyId, projectId, roleId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Keyword Id
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */ deleteProjectAssignmentSkill(companyId, projectId, roleId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/roles/{roleId}/skills/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "roleId": roleId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $bf8e9d4d4db718f5$export$16ed56dbd717d2d9 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project event by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventModel All went well
     * @throws ApiError
     */ projectEvent(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $5cc045c5b37fbaf0$export$65e8b30e8dcc254a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project events list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */ projectEvents(companyId, projectId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $63982a145e5d0f0a$export$c65ad44da9d76f29 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project event meeting by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */ projectEventMeeting(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventMeetingAddEditModel
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */ updateProjectMeeting(companyId, projectId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteProjectMeeting(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/meetings/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventMeetingAddEditModel
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */ newProjectMeeting(companyId, projectId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/meetings",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $bb8dd6f549423c5b$export$4013195dfacdbeb7 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project events meetings list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */ projectEventMeetings(companyId, projectId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/meetings",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $6766edbf5c0badc3$export$d835b03e2b60b21 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project event note by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */ projectEventNote(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventNoteAddEditModel
     * @returns ProjectEventNoteModel All went well
     * @throws ApiError
     */ updateProjectNote(companyId, projectId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteProjectNote(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/notes/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventNoteAddEditModel
     * @returns ProjectEventNoteModel All went well
     * @throws ApiError
     */ newProjectNote(companyId, projectId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/notes",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $308c532dd382c307$export$79c6aaa02ca97a38 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project event notes list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */ projectEventNotes(companyId, projectId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/notes",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $6ff6e929c30bd140$export$33ad4295cf6a52fe {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project event task by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */ projectEventTask(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
    /**
     * Update project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventTaskAddEditModel
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */ updateProjectTask(companyId, projectId, id, requestBody) {
        return this.httpRequest.request({
            method: "PUT",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Delete project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */ deleteProjectTask(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "DELETE",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/tasks/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
    /**
     * Add project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventTaskAddEditModel
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */ newProjectTask(companyId, projectId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/tasks",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $609329421e045831$export$c609291b5d518816 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project event tasks list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */ projectEventTasks(companyId, projectId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/events/tasks",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $59ba816838f856ae$export$f05399f130d784ae {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project pipelines
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @returns ProjectPipelineModel All went well
     * @throws ApiError
     */ projectPipelines(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/pipelines",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $23333a2912c2e6b2$export$827284a6eda43684 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project reference by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Project reference Id
     * @returns ProjectReferenceModel All went well
     * @throws ApiError
     */ projectReference(companyId, projectId, id) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/references/{id}",
            path: {
                "companyId": companyId,
                "projectId": projectId,
                "id": id
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $6e0c847f96b7e043$export$3cbf3a37fdfc52ba {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get project reference by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectReferenceModel All went well
     * @throws ApiError
     */ projectReferences(companyId, projectId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/references",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $4648dd1bdae60495$export$52e15361974fd6ce {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get projects list  - please note this endpoint currently only returns projects with the status WON. Please use the SearchProjects endpoint for more options of filtering desired Projects
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @returns ProjectBaseModel All went well
     * @throws ApiError
     */ projects(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/projects",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $d943f5f1f0daea8a$export$410a03e91ff6d180 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Edit Tags for Project
     * Note:
     *
     * Posted tags will replace any existing tags for the project.
     * A new tag will be created, if the id for a tag not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/projects/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param projectId Project Id
                 * @param requestBody CompanyTagModel
                 * @returns ProjectModel All went well
                 * @throws ApiError
                 */ editProjectTags(companyId, projectId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/{projectId}/tags",
            path: {
                "companyId": companyId,
                "projectId": projectId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                403: `Forbidden request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $47f81d78ad4236d7$export$cce865641658a46 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get recruitment sources
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns RecruitmentSourceModel All went well
     * @throws ApiError
     */ recruitmentSources(companyId) {
        return this.httpRequest.request({
            method: "GET",
            url: "/v0.1/companies/{companyId}/candidates/recruitment-sources",
            path: {
                "companyId": companyId
            },
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $66e010cb0bca52c0$export$ba969c1c62975e5a {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company candidates list from search criteria
     * Sample request:
     *
     * POST /v0.1/companies/1/candidates/search
     * {
         * "term": "candidate property value",
         * "rating": 3
         * "status": 0,
         * "sources": [],
         * "noRecruiter": false,
         * "recruiters": [],
         * "states": [0],
         * "pipeline": null,
         * "pageAndSortBy": {
             * "page": 1,
             * "itemsPerPage": 15
             * },
             * "pipelines": []
             * }
             * @param companyId Company Id
             * @param requestBody SearchCompanyCandidateQueryModel
             * @returns SearchCompanyCandidateResultModel All went well
             * @throws ApiError
             */ searchCompanyCandidate(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/candidates/search",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $2f6767d47beaa2a0$export$6b7396933ce279dd {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company customer contacts list from search criteria
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody SearchCompanyCustomerQueryModel
     * @returns SearchCompanyCustomerContactResultModel All went well
     * @throws ApiError
     */ searchCompanyCustomerContact(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/contacts/search",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $4fcc14d75233e252$export$5bb89196b8e0fd66 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company customers list from search criteria
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody SearchCompanyCustomerQueryModel
     * @returns SearchCompanyCustomerResultModel All went well
     * @throws ApiError
     */ searchCompanyCustomer(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/customers/search",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $42f227443a656895$export$3a26835584e937a5 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get company users list from search criteria
     * @param companyId Company Id
     * @param requestBody SearchCompanyUserQueryModel
     * @returns SearchCompanyUserResultModel All went well
     * @throws ApiError
     */ searchCompanyUser(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/users/search",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $be0f3e51b8539a21$export$5899a0e3ac5bbdb6 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Get projects list from search criteria
     * Sample request
     * {
         * "pipelines": [4],
         * "projectStates": [0],
         * "PageAndSortBy": {
             * "SortBy": "0",
             * "SortOrder": "1",
             * "Page": "1",
             * "ItemsPerPage": "15",
             * }
             * }
             * SortBy Parameter can be:
             * CreatedDateTime=0 // Default
             * Title=1
             * Identifier=2
             * CustomerIdentifier=3
             * SeoId=4
             * UpdatedDateTime=6
             * LastTouchDateTime=7
             * @param companyId Company Id
             * @param requestBody SearchCompanyCustomerQueryModel
             * @returns SearchProjectsResultModel All went well
             * @throws ApiError
             */ searchProject(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/projects/search",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                500: `Server error`
            }
        });
    }
}


class $bf41e4a7081ceae3$export$af76b0904c01521b {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Search users by skill keyword id
     * @param companyId Company Id
     * @param requestBody SearchSkillQueryModel
     * @returns SearchSkillResultModel All went well
     * @throws ApiError
     */ searchSkill(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/skills/search",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $d3b98a3931a9f752$export$2b10644a1825cf13 {
    constructor(httpRequest){
        this.httpRequest = httpRequest;
    }
    /**
     * Search users with skills by term (string value)
     * @param companyId Company Id
     * @param requestBody SkillSearchQueryTermModel
     * @returns SearchSkillResultModel All went well
     * @throws ApiError
     */ searchSkillTerm(companyId, requestBody) {
        return this.httpRequest.request({
            method: "POST",
            url: "/v0.1/companies/{companyId}/skills/search/term",
            path: {
                "companyId": companyId
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                400: `Incorrect request`,
                401: `Unauthorized request`,
                404: `Resource not found`,
                500: `Server error`
            }
        });
    }
}


class $69512043063362f7$export$f13bf947ca742cdc {
    constructor(config, HttpRequest = (0, $392d95a03c2de617$export$8a3e7688f6bbb233)){
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : "https://api.cinode.com",
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : "0.1",
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : "include",
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH
        });
        this.absence = new (0, $e9be4824e422de88$export$47ee1c28e3d17369)(this.request);
        this.absences = new (0, $f4697e2f5a5905c9$export$a1746a9cd4653513)(this.request);
        this.absenceType = new (0, $67f4c25868852f0b$export$eb58e95b5eb4c6b3)(this.request);
        this.availability = new (0, $d00ccc11cbfa05cb$export$5cc1fb0596a42f55)(this.request);
        this.company = new (0, $a101752ec4ac9cdb$export$81a665b0338610f5)(this.request);
        this.companyAddressUsers = new (0, $3418257e4f998b1c$export$b278987a992e5fe0)(this.request);
        this.companyCandidate = new (0, $437701a8346344ad$export$a24ee0c8bdccf707)(this.request);
        this.companyCandidateEvent = new (0, $0034a0e835d5348e$export$35d7f17818448f5a)(this.request);
        this.companyCandidateEventMeeting = new (0, $8f34df899c74d98c$export$85a578801d4bad46)(this.request);
        this.companyCandidateEventMeetings = new (0, $18b9545791e77013$export$71648590530fa008)(this.request);
        this.companyCandidateEventNote = new (0, $1be9fdf55fbc99f6$export$7d70a844d6105290)(this.request);
        this.companyCandidateEventNotes = new (0, $6b418e998c77e1e3$export$50aec86de547e333)(this.request);
        this.companyCandidateEvents = new (0, $541fdc693fe3bd44$export$8c8166d5fa7c286d)(this.request);
        this.companyCandidateEventTask = new (0, $f960dbca7d883733$export$1ba5e78a45067ab0)(this.request);
        this.companyCandidateEventTasks = new (0, $4a16804e814228cf$export$b6bc1ae3b8a6484a)(this.request);
        this.companyCandidateFileAttachment = new (0, $200b28680a8394e8$export$c8ac3e0490d41de6)(this.request);
        this.companyCandidateFileAttachments = new (0, $d06ea1bb88a0661f$export$9ef34bd472cfb16b)(this.request);
        this.companyCandidatePipelines = new (0, $39e31e85c96ea2a8$export$8bacb692d51e8649)(this.request);
        this.companyCandidates = new (0, $2d158c2238326066$export$cccbbdbc47111182)(this.request);
        this.companyCandidateSkills = new (0, $b417a8af0e3c7adb$export$56a491cf6cf94c76)(this.request);
        this.companyCandidateUriAttachment = new (0, $5c68d4583652b342$export$c0ebe0863eddd316)(this.request);
        this.companyCandidateUriAttachments = new (0, $c74c457b99dae327$export$754c0ec67f37947d)(this.request);
        this.companyCandidateUser = new (0, $15b38d98142c9d9c$export$a0026a5769eab5d2)(this.request);
        this.companyCapabilities = new (0, $9c851a42aa2b19ce$export$a0707f1d94ce819b)(this.request);
        this.companyCurrencies = new (0, $9a8be5c8af9c2807$export$4c77df3933660a6d)(this.request);
        this.companyCustomer = new (0, $627b795850f5253a$export$5e0ca4e966076353)(this.request);
        this.companyCustomerAddress = new (0, $ce890fbab1823c16$export$bf561abe2fb5dbc9)(this.request);
        this.companyCustomerContact = new (0, $4754f195774dcbde$export$d50d29cdcdbfd5ce)(this.request);
        this.companyCustomerContacts = new (0, $965a26dd97b7a15e$export$17d89cd4779997d1)(this.request);
        this.companyCustomerContactTags = new (0, $2408c13bd206152d$export$8e4892b3101b5a56)(this.request);
        this.companyCustomerEvent = new (0, $cf9593d6b8857859$export$93ddafb9a54c0212)(this.request);
        this.companyCustomerEvents = new (0, $0a574a3cb44733d6$export$769c6a97a634e038)(this.request);
        this.companyCustomerEventsMeeting = new (0, $432ddad82354be1e$export$ae5ae905d4a426fe)(this.request);
        this.companyCustomerEventsMeetings = new (0, $c45b6418e6745d7e$export$4b9bbe00845af9de)(this.request);
        this.companyCustomerEventsNote = new (0, $d8c39f9c7408a6dd$export$7b2eaf9aa467c8f1)(this.request);
        this.companyCustomerEventsNotes = new (0, $1e3f2618c98f7f06$export$ca17c8c93983bf53)(this.request);
        this.companyCustomerEventsTask = new (0, $d66d7ab0c2ca0778$export$388ecb6624507af3)(this.request);
        this.companyCustomerEventsTasks = new (0, $8cb22a65385a9b9d$export$304ef75be13d69d2)(this.request);
        this.companyCustomerFileAttachment = new (0, $3c3115af748af59d$export$be5342b121c1e028)(this.request);
        this.companyCustomerManagers = new (0, $db9e57d7380b58df$export$82aca92cfb9ef6f2)(this.request);
        this.companyCustomers = new (0, $dac23fd8541b5e50$export$795fb71b3bad14cb)(this.request);
        this.companyCustomersExtended = new (0, $dc2e2beb9fbc0def$export$c88e756d252488d4)(this.request);
        this.companyCustomerTags = new (0, $3c47c8a83a7e8dfa$export$8b13e7a213e7af0a)(this.request);
        this.companyImage = new (0, $ba0e2a7b8a7ae824$export$c2fcdcf3abf79263)(this.request);
        this.companyImages = new (0, $39de9cddfc5f3f06$export$b2018fc046463812)(this.request);
        this.companyManagers = new (0, $9ae4b551342a1a0a$export$b597a0f306b928d7)(this.request);
        this.companyProfiles = new (0, $8cdafdc277728a81$export$59e98d4ab7ff8c7b)(this.request);
        this.companyProjectFileAttachment = new (0, $b72c2825181faba2$export$ca2e85756a0c75ed)(this.request);
        this.companyRecruitmentManagers = new (0, $6795ae77004ac365$export$5713bae4e6d7d0d8)(this.request);
        this.companyResumes = new (0, $6a2d6c3765cdb3d3$export$8b837281bd1a79c5)(this.request);
        this.companySubcontractorGroup = new (0, $50251ed1b615a8a5$export$e21518b0632c2d19)(this.request);
        this.companySubcontractorGroupMembers = new (0, $5890ab4e3db16784$export$809520f725c1d7d)(this.request);
        this.companySubcontractorGroups = new (0, $6faa04c2eb529c08$export$16e5dd2cebfcc609)(this.request);
        this.companyTag = new (0, $7657c17a8fcc70c0$export$f40112f75f119675)(this.request);
        this.companyTags = new (0, $1f941d956dc9b550$export$8717da62100b1773)(this.request);
        this.companyTeam = new (0, $31c707e249c792d4$export$271fe9a250f232c1)(this.request);
        this.companyTeamManagers = new (0, $d8621d02b4b66f73$export$9b9e5c48cc2a66c0)(this.request);
        this.companyTeamMember = new (0, $464773000ac02eb1$export$4d187899fd61c416)(this.request);
        this.companyTeamMembers = new (0, $13abeddc5376ee05$export$650f3955e41dfc45)(this.request);
        this.companyTeams = new (0, $49ed3c9cfa163bf4$export$162ed105dac95d0c)(this.request);
        this.companyTeamUsers = new (0, $d094dda89c4d27cf$export$64d904ffdd8d2286)(this.request);
        this.companyUser = new (0, $8c61faf9b78b9414$export$80525ec1d2c57391)(this.request);
        this.companyUserConvert = new (0, $9884a98a177ab14e$export$83c115d3d2b0ba96)(this.request);
        this.companyUserEmployeeEvent = new (0, $36ab13fb674d8e6d$export$8fe712f519126dc0)(this.request);
        this.companyUserEmployeeEventMeeting = new (0, $01b2adc321864533$export$7eb65acfb6da1621)(this.request);
        this.companyUserEmployeeEventNote = new (0, $19201fc67e962beb$export$eed5ea593bafe920)(this.request);
        this.companyUserEmployeeEvents = new (0, $85c1c8928a7a5e6f$export$513b4c416c5a2a1f)(this.request);
        this.companyUserEmployeeEventsMeetings = new (0, $028aac08e85e4783$export$8c3335594a3b89d5)(this.request);
        this.companyUserEmployeeEventsNotes = new (0, $d004ce2e29ec9d26$export$d079520dee85fe49)(this.request);
        this.companyUserEmployeeEventsTasks = new (0, $825cd6aa2ab163b8$export$fc7cb0f5eda31b60)(this.request);
        this.companyUserEmployeeEventTask = new (0, $c266ca6d59db5011$export$f79a39da0c0cdc47)(this.request);
        this.companyUserFull = new (0, $45d9dff7215b9ff1$export$7909a7030858369c)(this.request);
        this.companyUserPermissions = new (0, $f3075773a1c82329$export$2ac2d9437f09b025)(this.request);
        this.companyUserProfile = new (0, $83eb6b55812bd98c$export$e57da5d4b89e8cb4)(this.request);
        this.companyUserProfileCommitment = new (0, $e3d7f2c39b6de587$export$889f3fe2032b14fb)(this.request);
        this.companyUserProfileEducation = new (0, $cc95e64512d3c9ce$export$48be4796dd3b09b1)(this.request);
        this.companyUserProfileEmployer = new (0, $e7b1079c6df68ea7$export$5b02c7ef2755646f)(this.request);
        this.companyUserProfileExtSkill = new (0, $7815a5b6f511cc08$export$7ce3b12efbc526b1)(this.request);
        this.companyUserProfileImport = new (0, $d782b663dada7039$export$dc03d29e832e622)(this.request);
        this.companyUserProfileLanguage = new (0, $428d4e0c11c66cb3$export$56a23e645db8f13b)(this.request);
        this.companyUserProfileLanguages = new (0, $1ae4868dd1436eab$export$de1b171f86e70e92)(this.request);
        this.companyUserProfilePresentation = new (0, $cc4f2acd4ab6da17$export$a461e3b362509444)(this.request);
        this.companyUserProfileReference = new (0, $afc52af492c8fc83$export$2ffcd76fc41d3871)(this.request);
        this.companyUserProfiles = new (0, $9f8e4cfc2a7d83e9$export$b38f975cd45385a6)(this.request);
        this.companyUserProfileSkill = new (0, $d3dcd52c7d305173$export$6892c8bbf17f2028)(this.request);
        this.companyUserProfileTraining = new (0, $ecfcec92f6c87ae2$export$e6a275918e0d423e)(this.request);
        this.companyUserProfileWorkExperience = new (0, $c9bc7c322732850e$export$6bc5afc1f2b3db96)(this.request);
        this.companyUserResume = new (0, $7a390f9a144c1b00$export$ed4495c6a4c00add)(this.request);
        this.companyUserResumes = new (0, $6ce92bd1a08ef442$export$575593bab3224c9a)(this.request);
        this.companyUserRoles = new (0, $6a9be09f1aa4ce0b$export$eb7ba955dd37b48c)(this.request);
        this.companyUsers = new (0, $e53f378af120dda2$export$d59fe8dac28bbd7d)(this.request);
        this.companyUsersExtended = new (0, $68494cd8010a2c8f$export$fc15e1837624e50a)(this.request);
        this.companyUserSkill = new (0, $2047cd135d39beba$export$4a91f4807dce316a)(this.request);
        this.companyUserSkills = new (0, $5deb75f4c2a002db$export$b3422cd87055d35d)(this.request);
        this.companyUserSubcontractor = new (0, $cef037199baf0c1e$export$a8b63a6b2f767a8e)(this.request);
        this.companyUserSubcontractorEvent = new (0, $b838201867037740$export$d8208da4ba78c877)(this.request);
        this.companyUserSubcontractorEventMeeting = new (0, $72ed12652c708033$export$a9776fd23f4cf45f)(this.request);
        this.companyUserSubcontractorEventNote = new (0, $abfeca71d380bfa9$export$e3d6d5e4a419eccf)(this.request);
        this.companyUserSubcontractorEvents = new (0, $b09df74ccc129511$export$ba4a80ec97b44423)(this.request);
        this.companyUserSubcontractorEventsMeetings = new (0, $706e76b11aa64aa1$export$32d9f60ae7d643ac)(this.request);
        this.companyUserSubcontractorEventsNotes = new (0, $67a31a9af702f02b$export$19f26cddc1e4a43a)(this.request);
        this.companyUserSubcontractorEventsTasks = new (0, $3118a19612728144$export$8437aa08351bc1ca)(this.request);
        this.companyUserSubcontractorEventTask = new (0, $8248d72df8b98135$export$e1a185b1a211b19a)(this.request);
        this.companyUserSubcontractorFileAttachment = new (0, $d86229259263f42a$export$a8360f1b16f063e5)(this.request);
        this.companyUserSubcontractorFileAttachments = new (0, $54109438b1e42769$export$aeb133ee930745dd)(this.request);
        this.companyUserSubcontractorRoles = new (0, $65a606bc74c3b285$export$e8c407c1c8977b57)(this.request);
        this.companyUserSubcontractors = new (0, $d6dbafa415715160$export$749854a6169bb696)(this.request);
        this.companyUserTags = new (0, $8860c36b8763df55$export$4700363cb7c4bf01)(this.request);
        this.companyUserTeams = new (0, $1ed9dd27805f1b40$export$d55285a3ab81e66c)(this.request);
        this.companyWebhook = new (0, $9a59c368efe2b830$export$80ea09c47452aeee)(this.request);
        this.companyWebhooks = new (0, $bf3a9ba4720176db$export$ca4decab7ef1aa1e)(this.request);
        this.dynamicCompanyUserResume = new (0, $99cae65bd632d3d4$export$a639a6eecb57b3b7)(this.request);
        this.keywordSearch = new (0, $3ef44a50ff7509f1$export$44d608147b7bbeb0)(this.request);
        this.mentions = new (0, $aab06f4d3b63904e$export$f04085d244fce783)(this.request);
        this.partners = new (0, $90cd3410b6d943d2$export$a07979cfc4e35991)(this.request);
        this.project = new (0, $afe96552494bbee0$export$9616f8c54d4f56aa)(this.request);
        this.projectAssignment = new (0, $4f1dcd2af070c94e$export$7b75f5c0f6c791a9)(this.request);
        this.projectAssignmentMember = new (0, $39aa961a7c12e96c$export$c9c3f472996de0e2)(this.request);
        this.projectAssignments = new (0, $774de8fadd1850b2$export$8e97fb162fa11728)(this.request);
        this.projectAssignmentSkills = new (0, $ea1e761b238fed0a$export$485c8b08a67d53de)(this.request);
        this.projectEvent = new (0, $bf8e9d4d4db718f5$export$16ed56dbd717d2d9)(this.request);
        this.projectEvents = new (0, $5cc045c5b37fbaf0$export$65e8b30e8dcc254a)(this.request);
        this.projectEventsMeeting = new (0, $63982a145e5d0f0a$export$c65ad44da9d76f29)(this.request);
        this.projectEventsMeetings = new (0, $bb8dd6f549423c5b$export$4013195dfacdbeb7)(this.request);
        this.projectEventsNote = new (0, $6766edbf5c0badc3$export$d835b03e2b60b21)(this.request);
        this.projectEventsNotes = new (0, $308c532dd382c307$export$79c6aaa02ca97a38)(this.request);
        this.projectEventsTask = new (0, $6ff6e929c30bd140$export$33ad4295cf6a52fe)(this.request);
        this.projectEventsTasks = new (0, $609329421e045831$export$c609291b5d518816)(this.request);
        this.projectPipelines = new (0, $59ba816838f856ae$export$f05399f130d784ae)(this.request);
        this.projectReference = new (0, $23333a2912c2e6b2$export$827284a6eda43684)(this.request);
        this.projectReferences = new (0, $6e0c847f96b7e043$export$3cbf3a37fdfc52ba)(this.request);
        this.projects = new (0, $4648dd1bdae60495$export$52e15361974fd6ce)(this.request);
        this.projectTags = new (0, $d943f5f1f0daea8a$export$410a03e91ff6d180)(this.request);
        this.recruitmentSources = new (0, $47f81d78ad4236d7$export$cce865641658a46)(this.request);
        this.searchCompanyCandidate = new (0, $66e010cb0bca52c0$export$ba969c1c62975e5a)(this.request);
        this.searchCompanyCustomerContact = new (0, $2f6767d47beaa2a0$export$6b7396933ce279dd)(this.request);
        this.searchCompanyCustomers = new (0, $4fcc14d75233e252$export$5bb89196b8e0fd66)(this.request);
        this.searchCompanyUser = new (0, $42f227443a656895$export$3a26835584e937a5)(this.request);
        this.searchProject = new (0, $be0f3e51b8539a21$export$5899a0e3ac5bbdb6)(this.request);
        this.skillSearch = new (0, $bf41e4a7081ceae3$export$af76b0904c01521b)(this.request);
        this.skillSearchTerm = new (0, $d3b98a3931a9f752$export$2b10644a1825cf13)(this.request);
    }
}





const $f527cfa0252fbfc7$export$3bbbb17165d6e0ef = {
    BASE: "https://api.cinode.com",
    VERSION: "0.1",
    WITH_CREDENTIALS: false,
    CREDENTIALS: "include",
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined
};


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * NoAccess = 0
 *
 * Anonymous = 50
 *
 * Read = 100
 *
 * Subcontractor = 110
 *
 * Candidate = 115
 *
 * RestrictedCompanyUser = 150
 *
 * CompanyApiUser = 180
 *
 * CompanyUser = 200
 *
 * PartnerManager = 240
 *
 * CompanyRecruiter = 250
 *
 * TeamManager = 270
 *
 * CompanyManager = 300
 *
 * CompanyAdmin = 400
 *
 * Owner = 500
 */ var $f76b28b0f61b4d2b$export$2fad4038535569b7;
(function(AccessLevel) {
    AccessLevel[AccessLevel["NoAccess"] = 0] = "NoAccess";
    AccessLevel[AccessLevel["Anonymous"] = 50] = "Anonymous";
    AccessLevel[AccessLevel["Read"] = 100] = "Read";
    AccessLevel[AccessLevel["Subcontractor"] = 110] = "Subcontractor";
    AccessLevel[AccessLevel["Candidate"] = 115] = "Candidate";
    AccessLevel[AccessLevel["RestrictedCompanyUser"] = 150] = "RestrictedCompanyUser";
    AccessLevel[AccessLevel["CompanyApiUser"] = 180] = "CompanyApiUser";
    AccessLevel[AccessLevel["CompanyUser"] = 200] = "CompanyUser";
    AccessLevel[AccessLevel["PartnerManager"] = 240] = "PartnerManager";
    AccessLevel[AccessLevel["CompanyRecruiter"] = 250] = "CompanyRecruiter";
    AccessLevel[AccessLevel["TeamManager"] = 270] = "TeamManager";
    AccessLevel[AccessLevel["CompanyManager"] = 300] = "CompanyManager";
    AccessLevel[AccessLevel["CompanyAdmin"] = 400] = "CompanyAdmin";
    AccessLevel[AccessLevel["Owner"] = 500] = "Owner";
})($f76b28b0f61b4d2b$export$2fad4038535569b7 || ($f76b28b0f61b4d2b$export$2fad4038535569b7 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * All = 1
 *
 * Created = 2
 *
 * Updated = 3
 *
 * Borttagen = 4
 */ var $17491ac66398fc30$export$e4a712fff93fb00f;
(function(ActionType) {
    ActionType[ActionType["All"] = 1] = "All";
    ActionType[ActionType["Created"] = 2] = "Created";
    ActionType[ActionType["Updated"] = 3] = "Updated";
    ActionType[ActionType["Deleted"] = 4] = "Deleted";
})($17491ac66398fc30$export$e4a712fff93fb00f || ($17491ac66398fc30$export$e4a712fff93fb00f = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Övrig = 0
 *
 * Besöksadress = 1
 *
 * Faktureringsadress = 2
 *
 * Placeringsort = 3
 */ var $4ccfc20ac94bfe9a$export$189c6ba3eaa96ac2;
(function(AddressType) {
    AddressType[AddressType["Undefined"] = 0] = "Undefined";
    AddressType[AddressType["StreetAddress"] = 1] = "StreetAddress";
    AddressType[AddressType["InvoiceAddress"] = 2] = "InvoiceAddress";
    AddressType[AddressType["LocationAddress"] = 3] = "LocationAddress";
})($4ccfc20ac94bfe9a$export$189c6ba3eaa96ac2 || ($4ccfc20ac94bfe9a$export$189c6ba3eaa96ac2 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * File = 0
 *
 * Uri = 1
 */ var $6108d4593f541d07$export$86cfdc1f02eaf37a;
(function(AttachmentType) {
    AttachmentType[AttachmentType["File"] = 0] = "File";
    AttachmentType[AttachmentType["Uri"] = 1] = "Uri";
})($6108d4593f541d07$export$86cfdc1f02eaf37a || ($6108d4593f541d07$export$86cfdc1f02eaf37a = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Status = 3
 *
 * Email = 4
 *
 * UpdatedDateTime = 5
 */ var $77af4c37ed274bd5$export$7561b63adb4bbd04;
(function(CompanyCandidateQuerySort) {
    CompanyCandidateQuerySort[CompanyCandidateQuerySort["CreatedDateTime"] = 0] = "CreatedDateTime";
    CompanyCandidateQuerySort[CompanyCandidateQuerySort["FirstName"] = 1] = "FirstName";
    CompanyCandidateQuerySort[CompanyCandidateQuerySort["LastName"] = 2] = "LastName";
    CompanyCandidateQuerySort[CompanyCandidateQuerySort["Status"] = 3] = "Status";
    CompanyCandidateQuerySort[CompanyCandidateQuerySort["Email"] = 4] = "Email";
    CompanyCandidateQuerySort[CompanyCandidateQuerySort["UpdatedDateTime"] = 5] = "UpdatedDateTime";
})($77af4c37ed274bd5$export$7561b63adb4bbd04 || ($77af4c37ed274bd5$export$7561b63adb4bbd04 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Öppen = 0
 *
 * Vunnen = 10
 *
 * Pausad = 20
 *
 * Avböjd av kandidat = 30
 *
 * Avböjd av oss = 40
 */ var $b501617f98010c49$export$36a6a57a8e62490b;
(function(CompanyCandidateState) {
    CompanyCandidateState[CompanyCandidateState["Open"] = 0] = "Open";
    CompanyCandidateState[CompanyCandidateState["Won"] = 10] = "Won";
    CompanyCandidateState[CompanyCandidateState["Paused"] = 20] = "Paused";
    CompanyCandidateState[CompanyCandidateState["Lost"] = 30] = "Lost";
    CompanyCandidateState[CompanyCandidateState["Rejected"] = 40] = "Rejected";
})($b501617f98010c49$export$36a6a57a8e62490b || ($b501617f98010c49$export$36a6a57a8e62490b = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Email = 3
 *
 * UpdatedDateTime = 4
 *
 * CustomerId = 5
 */ var $d71974143cf32e04$export$b79c995920f3afc1;
(function(CompanyCustomerContactQuerySort) {
    CompanyCustomerContactQuerySort[CompanyCustomerContactQuerySort["CreatedDateTime"] = 0] = "CreatedDateTime";
    CompanyCustomerContactQuerySort[CompanyCustomerContactQuerySort["FirstName"] = 1] = "FirstName";
    CompanyCustomerContactQuerySort[CompanyCustomerContactQuerySort["LastName"] = 2] = "LastName";
    CompanyCustomerContactQuerySort[CompanyCustomerContactQuerySort["Email"] = 3] = "Email";
    CompanyCustomerContactQuerySort[CompanyCustomerContactQuerySort["UpdatedDateTime"] = 4] = "UpdatedDateTime";
    CompanyCustomerContactQuerySort[CompanyCustomerContactQuerySort["CustomerId"] = 5] = "CustomerId";
})($d71974143cf32e04$export$b79c995920f3afc1 || ($d71974143cf32e04$export$b79c995920f3afc1 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * CreatedDateTime = 0
 *
 * Name = 1
 *
 * Description = 2
 *
 * Identification = 3
 *
 * SeoId = 4
 *
 * Status = 5
 *
 * Phone = 6
 *
 * Email = 7
 *
 * Fax = 8
 *
 * Homepage = 9
 *
 * CorporateIdentityNumber = 10
 *
 * VATNumber = 11
 *
 * Intermediator = 12
 *
 * UpdatedDateTime = 13
 *
 * LastTouchDateTime = 14
 */ var $0503fa2d4ce77d2f$export$14ae6a6b3ffd04a9;
(function(CompanyCustomerQuerySort) {
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["CreatedDateTime"] = 0] = "CreatedDateTime";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Name"] = 1] = "Name";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Description"] = 2] = "Description";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Identification"] = 3] = "Identification";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["SeoId"] = 4] = "SeoId";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Status"] = 5] = "Status";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Phone"] = 6] = "Phone";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Email"] = 7] = "Email";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Fax"] = 8] = "Fax";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Homepage"] = 9] = "Homepage";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["CorporateIdentityNumber"] = 10] = "CorporateIdentityNumber";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["VATNumber"] = 11] = "VATNumber";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["Intermediator"] = 12] = "Intermediator";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["UpdatedDateTime"] = 13] = "UpdatedDateTime";
    CompanyCustomerQuerySort[CompanyCustomerQuerySort["LastTouchDateTime"] = 14] = "LastTouchDateTime";
})($0503fa2d4ce77d2f$export$14ae6a6b3ffd04a9 || ($0503fa2d4ce77d2f$export$14ae6a6b3ffd04a9 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 * 0 - Id (Default),
 * 1 - CompanyUserId,
 * 2 - CreatedDateTime,
 * 3 - UpdatedDateTime
 */ var $61281657e5d1df8a$export$d30e01d0901a1ce6;
(function(CompanyProfileSort) {
    CompanyProfileSort[CompanyProfileSort["Id"] = 0] = "Id";
    CompanyProfileSort[CompanyProfileSort["CompanyUserId"] = 1] = "CompanyUserId";
    CompanyProfileSort[CompanyProfileSort["CreatedWhen"] = 2] = "CreatedWhen";
    CompanyProfileSort[CompanyProfileSort["UpdatedWhen"] = 3] = "UpdatedWhen";
})($61281657e5d1df8a$export$d30e01d0901a1ce6 || ($61281657e5d1df8a$export$d30e01d0901a1ce6 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Egenföretagare = 0
 *
 * 2-10 = 1
 *
 * 11-50 = 2
 *
 * 51-200 = 3
 *
 * 201-500 = 4
 *
 * 501-1 000 = 5
 *
 * 1 001-5 000 = 6
 *
 * 5 001-10 000 = 7
 *
 * 10 001+ = 8
 */ var $12c2d5cb60d5bf24$export$41cc48adf872ce3b;
(function(CompanySize) {
    CompanySize[CompanySize["A"] = 0] = "A";
    CompanySize[CompanySize["B"] = 1] = "B";
    CompanySize[CompanySize["C"] = 2] = "C";
    CompanySize[CompanySize["D"] = 3] = "D";
    CompanySize[CompanySize["E"] = 4] = "E";
    CompanySize[CompanySize["F"] = 5] = "F";
    CompanySize[CompanySize["G"] = 6] = "G";
    CompanySize[CompanySize["H"] = 7] = "H";
    CompanySize[CompanySize["I"] = 8] = "I";
})($12c2d5cb60d5bf24$export$41cc48adf872ce3b || ($12c2d5cb60d5bf24$export$41cc48adf872ce3b = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Frånkopplad = 0
 *
 * Aktiv = 1
 */ var $2ed4e0647a0c0d0c$export$14ce8dcea15e7dd3;
(function(CompanyUserCandidateStatus) {
    CompanyUserCandidateStatus[CompanyUserCandidateStatus["Disconnected"] = 0] = "Disconnected";
    CompanyUserCandidateStatus[CompanyUserCandidateStatus["Active"] = 1] = "Active";
})($2ed4e0647a0c0d0c$export$14ce8dcea15e7dd3 || ($2ed4e0647a0c0d0c$export$14ce8dcea15e7dd3 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Email = 3
 *
 * UpdatedDateTime = 4
 */ var $65dcdae3fe224f47$export$fb2ec0d0fb1caed1;
(function(CompanyUserQuerySort) {
    CompanyUserQuerySort[CompanyUserQuerySort["CreatedDateTime"] = 0] = "CreatedDateTime";
    CompanyUserQuerySort[CompanyUserQuerySort["FirstName"] = 1] = "FirstName";
    CompanyUserQuerySort[CompanyUserQuerySort["LastName"] = 2] = "LastName";
    CompanyUserQuerySort[CompanyUserQuerySort["Email"] = 3] = "Email";
    CompanyUserQuerySort[CompanyUserQuerySort["UpdatedDateTime"] = 4] = "UpdatedDateTime";
})($65dcdae3fe224f47$export$fb2ec0d0fb1caed1 || ($65dcdae3fe224f47$export$fb2ec0d0fb1caed1 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Frånkopplad = 0
 *
 * Kommande = 2
 *
 * Aktiv = 3
 */ var $3bc01b530c580407$export$78ece8b332d00629;
(function(CompanyUserStatus) {
    CompanyUserStatus[CompanyUserStatus["Disconnected"] = 0] = "Disconnected";
    CompanyUserStatus[CompanyUserStatus["PreActive"] = 2] = "PreActive";
    CompanyUserStatus[CompanyUserStatus["Active"] = 3] = "Active";
})($3bc01b530c580407$export$78ece8b332d00629 || ($3bc01b530c580407$export$78ece8b332d00629 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Frånkopplad = 0
 *
 * Aktiv = 1
 */ var $dec86a120b83bda8$export$83981b6138d1ec0d;
(function(CompanyUserSubcontractorStatus) {
    CompanyUserSubcontractorStatus[CompanyUserSubcontractorStatus["Disconnected"] = 0] = "Disconnected";
    CompanyUserSubcontractorStatus[CompanyUserSubcontractorStatus["Active"] = 1] = "Active";
})($dec86a120b83bda8$export$83981b6138d1ec0d || ($dec86a120b83bda8$export$83981b6138d1ec0d = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Medarbetare = 0
 *
 * Kandidat = 10
 *
 * Underkonsult = 20
 *
 * Api = 30
 *
 * Bot = 40
 */ var $55b8b62248c69e6e$export$7e1e40db963a5766;
(function(CompanyUserType) {
    CompanyUserType[CompanyUserType["Employee"] = 0] = "Employee";
    CompanyUserType[CompanyUserType["Candidate"] = 10] = "Candidate";
    CompanyUserType[CompanyUserType["Subcontractor"] = 20] = "Subcontractor";
    CompanyUserType[CompanyUserType["Api"] = 30] = "Api";
    CompanyUserType[CompanyUserType["Bot"] = 40] = "Bot";
})($55b8b62248c69e6e$export$7e1e40db963a5766 || ($55b8b62248c69e6e$export$7e1e40db963a5766 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Timpris = 0
 *
 * Fastpris = 1
 */ var $ea1bb82e18b53d66$export$ac0154f53c770f12;
(function(ContractType) {
    ContractType[ContractType["Hourly"] = 0] = "Hourly";
    ContractType[ContractType["Fixed"] = 1] = "Fixed";
})($ea1bb82e18b53d66$export$ac0154f53c770f12 || ($ea1bb82e18b53d66$export$ac0154f53c770f12 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Ej angiven = 0
 *
 * Telefonsamtal = 1
 *
 * E-mail = 2
 */ var $7684fa498047e7d3$export$b5d90d58758173e6;
(function(EventNoteType) {
    EventNoteType[EventNoteType["NotSpecified"] = 0] = "NotSpecified";
    EventNoteType[EventNoteType["Phone"] = 1] = "Phone";
    EventNoteType[EventNoteType["Email"] = 2] = "Email";
})($7684fa498047e7d3$export$b5d90d58758173e6 || ($7684fa498047e7d3$export$b5d90d58758173e6 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Inte påbörjad = 0
 *
 * Påbörjad = 1
 *
 * Färdig = 2
 *
 * Uppskjuten = 3
 *
 * Väntar = 4
 */ var $8917a3d115403638$export$c5f296066cb6a74d;
(function(EventStatusValue) {
    EventStatusValue[EventStatusValue["NotStarted"] = 0] = "NotStarted";
    EventStatusValue[EventStatusValue["InProgress"] = 1] = "InProgress";
    EventStatusValue[EventStatusValue["Completed"] = 2] = "Completed";
    EventStatusValue[EventStatusValue["Deferred"] = 3] = "Deferred";
    EventStatusValue[EventStatusValue["WaitingForSomeoneElse"] = 4] = "WaitingForSomeoneElse";
})($8917a3d115403638$export$c5f296066cb6a74d || ($8917a3d115403638$export$c5f296066cb6a74d = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Ej angiven = 0
 *
 * Telefonsamtal = 1
 *
 * E-mail = 2
 */ var $fd09507e6ef13b08$export$fd3fb5071359f87c;
(function(EventTaskType) {
    EventTaskType[EventTaskType["NotSpecified"] = 0] = "NotSpecified";
    EventTaskType[EventTaskType["Phone"] = 1] = "Phone";
    EventTaskType[EventTaskType["Email"] = 2] = "Email";
})($fd09507e6ef13b08$export$fd3fb5071359f87c || ($fd09507e6ef13b08$export$fd3fb5071359f87c = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Möte = 0
 *
 * Notering = 1
 *
 * Uppgift = 2
 *
 * Samtal = 3
 */ var $9e5b8f7e46c60b0a$export$3d7865934588d77e;
(function(EventType) {
    EventType[EventType["Meeting"] = 0] = "Meeting";
    EventType[EventType["Note"] = 1] = "Note";
    EventType[EventType["Task"] = 2] = "Task";
    EventType[EventType["Call"] = 3] = "Call";
})($9e5b8f7e46c60b0a$export$3d7865934588d77e || ($9e5b8f7e46c60b0a$export$3d7865934588d77e = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Publik = 0
 *
 * Privat = 1
 */ var $933377bd02f3d323$export$361dc17531b2403c;
(function(EventVisibility) {
    EventVisibility[EventVisibility["Public"] = 0] = "Public";
    EventVisibility[EventVisibility["Private"] = 1] = "Private";
})($933377bd02f3d323$export$361dc17531b2403c || ($933377bd02f3d323$export$361dc17531b2403c = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Procent = 0
 *
 * Timmar = 1
 */ var $ca50e71005809fbe$export$a4f3dfa6f1416c0f;
(function(ExtentType) {
    ExtentType[ExtentType["Percent"] = 0] = "Percent";
    ExtentType[ExtentType["Hours"] = 1] = "Hours";
})($ca50e71005809fbe$export$a4f3dfa6f1416c0f || ($ca50e71005809fbe$export$a4f3dfa6f1416c0f = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Original = 0
 *
 * H40W40 = 1
 *
 * H100W100 = 2
 *
 * H200W200 = 3
 *
 * H300W300 = 4
 *
 * W100 = 5
 *
 * H60 = 6
 *
 * H100 = 7
 *
 * H40 = 8
 *
 * W340 = 9
 *
 * W1800 = 10
 *
 * H750W1800 = 11
 *
 * H250 = 12
 *
 * H400W400 = 13
 *
 * W150 = 14
 *
 * W1200 = 15
 */ var $4c53305b04ffc520$export$28064ee355a535f2;
(function(ImageSize) {
    ImageSize[ImageSize["Original"] = 0] = "Original";
    ImageSize[ImageSize["H40W40"] = 1] = "H40W40";
    ImageSize[ImageSize["H100W100"] = 2] = "H100W100";
    ImageSize[ImageSize["H200W200"] = 3] = "H200W200";
    ImageSize[ImageSize["H300W300"] = 4] = "H300W300";
    ImageSize[ImageSize["W100"] = 5] = "W100";
    ImageSize[ImageSize["H60"] = 6] = "H60";
    ImageSize[ImageSize["H100"] = 7] = "H100";
    ImageSize[ImageSize["H40"] = 8] = "H40";
    ImageSize[ImageSize["W340"] = 9] = "W340";
    ImageSize[ImageSize["W1800"] = 10] = "W1800";
    ImageSize[ImageSize["H750W1800"] = 11] = "H750W1800";
    ImageSize[ImageSize["H250"] = 12] = "H250";
    ImageSize[ImageSize["H400W400"] = 13] = "H400W400";
    ImageSize[ImageSize["W150"] = 14] = "W150";
    ImageSize[ImageSize["W1200"] = 15] = "W1200";
})($4c53305b04ffc520$export$28064ee355a535f2 || ($4c53305b04ffc520$export$28064ee355a535f2 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Okategoriserad = 0
 *
 * Branscher = 1
 *
 * Roller = 2
 *
 * Verktyg = 3
 *
 * Tekniker = 4
 *
 * Metoder och processer = 5
 *
 * Plattformar = 6
 *
 * Produkter och tjänster = 7
 *
 * Certifieringar = 10
 *
 * Material = 11
 *
 * Specifikationer och förordningar = 12
 *
 * Hårdvara = 13
 *
 * Verksamhet och funktion = 14
 *
 * Byggnationer = 15
 *
 * Rapporter och utredningar = 16
 *
 * Specialiteter - Medicin = 17
 *
 * Standarder och regelverk = 18
 *
 * Behörigheter = 19
 *
 * Mjuka färdigheter = 20
 *
 * CustomName = 100
 */ var $864de575476b4a0b$export$7ae96d120743514d;
(function(KeywordType) {
    KeywordType[KeywordType["Uncategorized"] = 0] = "Uncategorized";
    KeywordType[KeywordType["Industries"] = 1] = "Industries";
    KeywordType[KeywordType["Roles"] = 2] = "Roles";
    KeywordType[KeywordType["Tools"] = 3] = "Tools";
    KeywordType[KeywordType["Techniques"] = 4] = "Techniques";
    KeywordType[KeywordType["MethodsProcesses"] = 5] = "MethodsProcesses";
    KeywordType[KeywordType["Platforms"] = 6] = "Platforms";
    KeywordType[KeywordType["Products"] = 7] = "Products";
    KeywordType[KeywordType["Certifications"] = 10] = "Certifications";
    KeywordType[KeywordType["Materials"] = 11] = "Materials";
    KeywordType[KeywordType["SpecificationsRegulations"] = 12] = "SpecificationsRegulations";
    KeywordType[KeywordType["Hardware"] = 13] = "Hardware";
    KeywordType[KeywordType["OperationalAreaAndFunction"] = 14] = "OperationalAreaAndFunction";
    KeywordType[KeywordType["Construction"] = 15] = "Construction";
    KeywordType[KeywordType["ReportsInvestigations"] = 16] = "ReportsInvestigations";
    KeywordType[KeywordType["SpecialitiesMedicine"] = 17] = "SpecialitiesMedicine";
    KeywordType[KeywordType["StandardsRegulations"] = 18] = "StandardsRegulations";
    KeywordType[KeywordType["Accreditation"] = 19] = "Accreditation";
    KeywordType[KeywordType["SoftSkills"] = 20] = "SoftSkills";
    KeywordType[KeywordType["CustomName"] = 100] = "CustomName";
})($864de575476b4a0b$export$7ae96d120743514d || ($864de575476b4a0b$export$7ae96d120743514d = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Enstaka ord och fraser = 0
 *
 * Grundläggande kunskaper = 1
 *
 * Goda kunskaper = 2
 *
 * Flytande = 3
 *
 * Modersmål = 4
 */ var $d98d2d4da5566a1e$export$66b4c7ccfd8c5e33;
(function(LanguageLevel) {
    LanguageLevel[LanguageLevel["Level0"] = 0] = "Level0";
    LanguageLevel[LanguageLevel["Level1"] = 1] = "Level1";
    LanguageLevel[LanguageLevel["Level2"] = 2] = "Level2";
    LanguageLevel[LanguageLevel["Level3"] = 3] = "Level3";
    LanguageLevel[LanguageLevel["Level4"] = 4] = "Level4";
})($d98d2d4da5566a1e$export$66b4c7ccfd8c5e33 || ($d98d2d4da5566a1e$export$66b4c7ccfd8c5e33 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * InProgress = 0
 *
 * Completed = 1
 *
 * Failed = 2
 */ var $57e9869df137cdc7$export$b69ffd3be5b6ff5c;
(function(LongRunningStatus) {
    LongRunningStatus[LongRunningStatus["InProgress"] = 0] = "InProgress";
    LongRunningStatus[LongRunningStatus["Completed"] = 1] = "Completed";
    LongRunningStatus[LongRunningStatus["Failed"] = 2] = "Failed";
})($57e9869df137cdc7$export$b69ffd3be5b6ff5c || ($57e9869df137cdc7$export$b69ffd3be5b6ff5c = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * CompanyUserResume = 1
 *
 * Customers = 2
 *
 * Assignments = 3
 *
 * Partners = 4
 *
 * Offers = 5
 *
 * Reports = 6
 *
 * Recruitment = 8
 *
 * Absence = 9
 *
 * Api = 10
 *
 * ReferenceText = 11
 *
 * ProfileCompleteness = 12
 *
 * CalendarSync = 13
 *
 * AllowWidgetModification = 14
 *
 * ConfiguredFilters = 19
 *
 * SkillSets = 20
 *
 * ProfileUpdateReminders = 21
 *
 * OverdueProjectReminders = 22
 *
 * EmailSync = 23
 *
 * ApplicationRegistration = 30
 *
 * ApplicationDirectory = 31
 *
 * NextGenResume = 40
 *
 * HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips = 41
 *
 * ImportCv = 42
 *
 * AI = 43
 *
 * AITextGeneration = 44
 *
 * ProjectPlanning = 48
 *
 * ExternalAccounts = 50
 *
 * ConvertAccount = 51
 *
 * UserProvisioning = 52
 *
 * Webhooks = 60
 *
 * GrowthPlan = 70
 *
 * GUIShowcase = 80
 *
 * Appmixer = 90
 *
 * Intercom = 600
 */ var $b705030bec1fcfd3$export$6a8195ee8dd1cc03;
(function(ModuleType) {
    ModuleType[ModuleType["CompanyUserResume"] = 1] = "CompanyUserResume";
    ModuleType[ModuleType["Customers"] = 2] = "Customers";
    ModuleType[ModuleType["Assignments"] = 3] = "Assignments";
    ModuleType[ModuleType["Partners"] = 4] = "Partners";
    ModuleType[ModuleType["Offers"] = 5] = "Offers";
    ModuleType[ModuleType["Reports"] = 6] = "Reports";
    ModuleType[ModuleType["Recruitment"] = 8] = "Recruitment";
    ModuleType[ModuleType["Absence"] = 9] = "Absence";
    ModuleType[ModuleType["Api"] = 10] = "Api";
    ModuleType[ModuleType["ReferenceText"] = 11] = "ReferenceText";
    ModuleType[ModuleType["ProfileCompleteness"] = 12] = "ProfileCompleteness";
    ModuleType[ModuleType["CalendarSync"] = 13] = "CalendarSync";
    ModuleType[ModuleType["AllowWidgetModification"] = 14] = "AllowWidgetModification";
    ModuleType[ModuleType["ConfiguredFilters"] = 19] = "ConfiguredFilters";
    ModuleType[ModuleType["SkillSets"] = 20] = "SkillSets";
    ModuleType[ModuleType["ProfileUpdateReminders"] = 21] = "ProfileUpdateReminders";
    ModuleType[ModuleType["OverdueProjectReminders"] = 22] = "OverdueProjectReminders";
    ModuleType[ModuleType["EmailSync"] = 23] = "EmailSync";
    ModuleType[ModuleType["ApplicationRegistration"] = 30] = "ApplicationRegistration";
    ModuleType[ModuleType["ApplicationDirectory"] = 31] = "ApplicationDirectory";
    ModuleType[ModuleType["NextGenResume"] = 40] = "NextGenResume";
    ModuleType[ModuleType["HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips"] = 41] = "HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips";
    ModuleType[ModuleType["ImportCv"] = 42] = "ImportCv";
    ModuleType[ModuleType["AI"] = 43] = "AI";
    ModuleType[ModuleType["AITextGeneration"] = 44] = "AITextGeneration";
    ModuleType[ModuleType["ProjectPlanning"] = 48] = "ProjectPlanning";
    ModuleType[ModuleType["ExternalAccounts"] = 50] = "ExternalAccounts";
    ModuleType[ModuleType["ConvertAccount"] = 51] = "ConvertAccount";
    ModuleType[ModuleType["UserProvisioning"] = 52] = "UserProvisioning";
    ModuleType[ModuleType["Webhooks"] = 60] = "Webhooks";
    ModuleType[ModuleType["GrowthPlan"] = 70] = "GrowthPlan";
    ModuleType[ModuleType["GUIShowcase"] = 80] = "GUIShowcase";
    ModuleType[ModuleType["Appmixer"] = 90] = "Appmixer";
    ModuleType[ModuleType["Intercom"] = 600] = "Intercom";
})($b705030bec1fcfd3$export$6a8195ee8dd1cc03 || ($b705030bec1fcfd3$export$6a8195ee8dd1cc03 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Anonymiserat = 10
 *
 * Transparent = 20
 *
 * Avisera = 30
 *
 * Boka = 40
 *
 * Matcha = 50
 *
 * Tillgänglighet = 60
 *
 * UserCv = 70
 */ var $9f66a0a0b32a157f$export$3090b6058eade22a;
(function(PartnerConnectionTrustType) {
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserViewAnonymous"] = 10] = "UserViewAnonymous";
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserViewTransparent"] = 20] = "UserViewTransparent";
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserAssignRequest"] = 30] = "UserAssignRequest";
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserAssignBook"] = 40] = "UserAssignBook";
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserSkillMatch"] = 50] = "UserSkillMatch";
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserAvailability"] = 60] = "UserAvailability";
    PartnerConnectionTrustType[PartnerConnectionTrustType["UserCv"] = 70] = "UserCv";
})($9f66a0a0b32a157f$export$3090b6058eade22a || ($9f66a0a0b32a157f$export$3090b6058eade22a = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * WkHtmlToPdf = 0
 *
 * Puppeteer = 2
 */ var $fedfd239fcb9eae2$export$700ba33f355b1bcf;
(function(PdfEngineType) {
    PdfEngineType[PdfEngineType["WkHtmlToPdf"] = 0] = "WkHtmlToPdf";
    PdfEngineType[PdfEngineType["Puppeteer"] = 2] = "Puppeteer";
})($fedfd239fcb9eae2$export$700ba33f355b1bcf || ($fedfd239fcb9eae2$export$700ba33f355b1bcf = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Portrait = 0
 *
 * Landscape = 1
 */ var $ab89da231b21184c$export$4e525e4bebe39709;
(function(PdfOrientation) {
    PdfOrientation[PdfOrientation["Portrait"] = 0] = "Portrait";
    PdfOrientation[PdfOrientation["Landscape"] = 1] = "Landscape";
})($ab89da231b21184c$export$4e525e4bebe39709 || ($ab89da231b21184c$export$4e525e4bebe39709 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Ej bokad = 0
 *
 * Preliminär = 1
 *
 * Tillsatt = 2
 */ var $692b6ef8ba3412c2$export$e2c6d619fe74c7ec;
(function(ProjectAssignmentAllocationStatus) {
    ProjectAssignmentAllocationStatus[ProjectAssignmentAllocationStatus["NotBooked"] = 0] = "NotBooked";
    ProjectAssignmentAllocationStatus[ProjectAssignmentAllocationStatus["Preliminary"] = 1] = "Preliminary";
    ProjectAssignmentAllocationStatus[ProjectAssignmentAllocationStatus["Assigned"] = 2] = "Assigned";
})($692b6ef8ba3412c2$export$e2c6d619fe74c7ec || ($692b6ef8ba3412c2$export$e2c6d619fe74c7ec = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Procent = 0
 *
 * Timmar = 1
 */ var $83acd540ea3f66ee$export$14d394e96f15e153;
(function(ProjectAssignmentExtentType) {
    ProjectAssignmentExtentType[ProjectAssignmentExtentType["Percent"] = 0] = "Percent";
    ProjectAssignmentExtentType[ProjectAssignmentExtentType["Hours"] = 1] = "Hours";
})($83acd540ea3f66ee$export$14d394e96f15e153 || ($83acd540ea3f66ee$export$14d394e96f15e153 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * None = 0
 *
 * Preliminär = 1
 *
 * Tillsatt = 2
 *
 * Offererad = 3
 */ var $01440a5834bb66ee$export$932fbbc5915a0ec0;
(function(ProjectAssignmentMemberAllocationStatus) {
    ProjectAssignmentMemberAllocationStatus[ProjectAssignmentMemberAllocationStatus["None"] = 0] = "None";
    ProjectAssignmentMemberAllocationStatus[ProjectAssignmentMemberAllocationStatus["Preliminary"] = 1] = "Preliminary";
    ProjectAssignmentMemberAllocationStatus[ProjectAssignmentMemberAllocationStatus["Assigned"] = 2] = "Assigned";
    ProjectAssignmentMemberAllocationStatus[ProjectAssignmentMemberAllocationStatus["Offered"] = 3] = "Offered";
})($01440a5834bb66ee$export$932fbbc5915a0ec0 || ($01440a5834bb66ee$export$932fbbc5915a0ec0 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Tillagd = 0
 *
 * Offererad = 10
 *
 * Avböjd av kund = 20
 *
 * Avböjd av oss = 30
 *
 * Pausad = 40
 */ var $29a1b3e6a4807cd8$export$b60025ff86d1f1a;
(function(ProjectAssignmentMemberState) {
    ProjectAssignmentMemberState[ProjectAssignmentMemberState["Allocated"] = 0] = "Allocated";
    ProjectAssignmentMemberState[ProjectAssignmentMemberState["Offered"] = 10] = "Offered";
    ProjectAssignmentMemberState[ProjectAssignmentMemberState["Rejected"] = 20] = "Rejected";
    ProjectAssignmentMemberState[ProjectAssignmentMemberState["Revoked"] = 30] = "Revoked";
    ProjectAssignmentMemberState[ProjectAssignmentMemberState["Deferred"] = 40] = "Deferred";
})($29a1b3e6a4807cd8$export$b60025ff86d1f1a || ($29a1b3e6a4807cd8$export$b60025ff86d1f1a = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Unspecified = 0
 *
 * Medarbetare = 1
 *
 * Partnerkonsult = 2
 *
 * Underkonsult = 3
 */ var $a1e487cb4b051b02$export$3a87eafcf6b09bc8;
(function(ProjectAssignmentMemberType) {
    ProjectAssignmentMemberType[ProjectAssignmentMemberType["Unspecified"] = 0] = "Unspecified";
    ProjectAssignmentMemberType[ProjectAssignmentMemberType["CompanyUser"] = 1] = "CompanyUser";
    ProjectAssignmentMemberType[ProjectAssignmentMemberType["PartnerCompanyUser"] = 2] = "PartnerCompanyUser";
    ProjectAssignmentMemberType[ProjectAssignmentMemberType["CompanyUserSubcontractor"] = 3] = "CompanyUserSubcontractor";
})($a1e487cb4b051b02$export$3a87eafcf6b09bc8 || ($a1e487cb4b051b02$export$3a87eafcf6b09bc8 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Öppen = 0
 *
 * Återkallad = 10
 *
 * Stängd = 20
 */ var $48e8fe97489a072f$export$b69cb4a58a0dc6b;
(function(ProjectAssignmentRequestStatus) {
    ProjectAssignmentRequestStatus[ProjectAssignmentRequestStatus["Open"] = 0] = "Open";
    ProjectAssignmentRequestStatus[ProjectAssignmentRequestStatus["Revoked"] = 10] = "Revoked";
    ProjectAssignmentRequestStatus[ProjectAssignmentRequestStatus["Closed"] = 20] = "Closed";
})($48e8fe97489a072f$export$b69cb4a58a0dc6b || ($48e8fe97489a072f$export$b69cb4a58a0dc6b = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Inga datum valda = 0
 *
 * Kommande = 1
 *
 * Pågående = 2
 *
 * Avslutat = 3
 */ var $e32ab295d43ccf1c$export$4998eb9f99843070;
(function(ProjectAssignmentStatus) {
    ProjectAssignmentStatus[ProjectAssignmentStatus["Unspecified"] = 0] = "Unspecified";
    ProjectAssignmentStatus[ProjectAssignmentStatus["Coming"] = 1] = "Coming";
    ProjectAssignmentStatus[ProjectAssignmentStatus["Ongoing"] = 2] = "Ongoing";
    ProjectAssignmentStatus[ProjectAssignmentStatus["Ended"] = 3] = "Ended";
})($e32ab295d43ccf1c$export$4998eb9f99843070 || ($e32ab295d43ccf1c$export$4998eb9f99843070 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Låg = 3
 *
 * Medel = 5
 *
 * Hög = 8
 */ var $1875ed40ed242bd7$export$6e27aaf4b7580e65;
(function(ProjectPriority) {
    ProjectPriority[ProjectPriority["Low"] = 3] = "Low";
    ProjectPriority[ProjectPriority["Medium"] = 5] = "Medium";
    ProjectPriority[ProjectPriority["High"] = 8] = "High";
})($1875ed40ed242bd7$export$6e27aaf4b7580e65 || ($1875ed40ed242bd7$export$6e27aaf4b7580e65 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * CreatedDateTime = 0
 *
 * Title = 1
 *
 * Identifier = 2
 *
 * CustomerIdentifier = 3
 *
 * SeoId = 4
 *
 * UpdatedDateTime = 5
 *
 * LastTouchDateTime = 6
 */ var $752c97bf1745d7db$export$51868fa3a5f5dc72;
(function(ProjectQuerySort) {
    ProjectQuerySort[ProjectQuerySort["CreatedDateTime"] = 0] = "CreatedDateTime";
    ProjectQuerySort[ProjectQuerySort["Title"] = 1] = "Title";
    ProjectQuerySort[ProjectQuerySort["Identifier"] = 2] = "Identifier";
    ProjectQuerySort[ProjectQuerySort["CustomerIdentifier"] = 3] = "CustomerIdentifier";
    ProjectQuerySort[ProjectQuerySort["SeoId"] = 4] = "SeoId";
    ProjectQuerySort[ProjectQuerySort["UpdatedDateTime"] = 5] = "UpdatedDateTime";
    ProjectQuerySort[ProjectQuerySort["LastTouchDateTime"] = 6] = "LastTouchDateTime";
})($752c97bf1745d7db$export$51868fa3a5f5dc72 || ($752c97bf1745d7db$export$51868fa3a5f5dc72 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Öppen = 0
 *
 * Vunnen = 30
 *
 * Förlorad = 40
 *
 * Avböjd = 50
 *
 * Uppskjuten = 60
 */ var $08e8c15adeda8c30$export$7082239a62c0df57;
(function(ProjectState) {
    ProjectState[ProjectState["Open"] = 0] = "Open";
    ProjectState[ProjectState["Won"] = 30] = "Won";
    ProjectState[ProjectState["Lost"] = 40] = "Lost";
    ProjectState[ProjectState["Abandoned"] = 50] = "Abandoned";
    ProjectState[ProjectState["Suspended"] = 60] = "Suspended";
})($08e8c15adeda8c30$export$7082239a62c0df57 || ($08e8c15adeda8c30$export$7082239a62c0df57 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * AllResumesOfLanguage = 3
 *
 * Profile = 5
 */ var $a74f2284bf03bd0f$export$5e40e54564bab075;
(function(SaveToApiOption) {
    SaveToApiOption[SaveToApiOption["AllResumesOfLanguage"] = 3] = "AllResumesOfLanguage";
    SaveToApiOption[SaveToApiOption["Profile"] = 5] = "Profile";
})($a74f2284bf03bd0f$export$5e40e54564bab075 || ($a74f2284bf03bd0f$export$5e40e54564bab075 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 * 0 - Ascending,
 * 1 - Descending
 */ var $40d85a1b021e0fb6$export$7ae723045d45777a;
(function(SortOrder) {
    SortOrder[SortOrder["Ascending"] = 0] = "Ascending";
    SortOrder[SortOrder["Descending"] = 1] = "Descending";
})($40d85a1b021e0fb6$export$7ae723045d45777a || ($40d85a1b021e0fb6$export$7ae723045d45777a = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Inaktiv = 0
 *
 * Aktiv = 1
 */ var $0ad5c3fc54099227$export$96e9906d6d93a972;
(function(Status) {
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Active"] = 1] = "Active";
})($0ad5c3fc54099227$export$96e9906d6d93a972 || ($0ad5c3fc54099227$export$96e9906d6d93a972 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Contains = 0
 *
 * StartsWith = 1
 *
 * EndsWith = 2
 *
 * Equals = 3
 */ var $22aaa8ff24fa3809$export$efb204e93138f2d8;
(function(StringComparisonOperator) {
    StringComparisonOperator[StringComparisonOperator["Contains"] = 0] = "Contains";
    StringComparisonOperator[StringComparisonOperator["StartsWith"] = 1] = "StartsWith";
    StringComparisonOperator[StringComparisonOperator["EndsWith"] = 2] = "EndsWith";
    StringComparisonOperator[StringComparisonOperator["Equals"] = 3] = "Equals";
})($22aaa8ff24fa3809$export$efb204e93138f2d8 || ($22aaa8ff24fa3809$export$efb204e93138f2d8 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * None = 0
 *
 * Primary = 1
 *
 * Classic = 2
 *
 * Dynamic = 3
 *
 * PageFlow = 4
 *
 * BlockWorkExperience = 50
 *
 * BlockSkillsByLevel = 51
 *
 * CinodePremium3PageFlow = 70
 *
 * CinodePremium2PageFlow = 71
 *
 * TemplateType = 100
 */ var $c0e6fbc4272dfb8f$export$7593c8ee4e312d71;
(function(TemplateAssetType) {
    TemplateAssetType[TemplateAssetType["None"] = 0] = "None";
    TemplateAssetType[TemplateAssetType["Primary"] = 1] = "Primary";
    TemplateAssetType[TemplateAssetType["Classic"] = 2] = "Classic";
    TemplateAssetType[TemplateAssetType["Dynamic"] = 3] = "Dynamic";
    TemplateAssetType[TemplateAssetType["PageFlow"] = 4] = "PageFlow";
    TemplateAssetType[TemplateAssetType["BlockWorkExperience"] = 50] = "BlockWorkExperience";
    TemplateAssetType[TemplateAssetType["BlockSkillsByLevel"] = 51] = "BlockSkillsByLevel";
    TemplateAssetType[TemplateAssetType["CinodePremium3PageFlow"] = 70] = "CinodePremium3PageFlow";
    TemplateAssetType[TemplateAssetType["CinodePremium2PageFlow"] = 71] = "CinodePremium2PageFlow";
    TemplateAssetType[TemplateAssetType["TemplateType"] = 100] = "TemplateType";
})($c0e6fbc4272dfb8f$export$7593c8ee4e312d71 || ($c0e6fbc4272dfb8f$export$7593c8ee4e312d71 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Kurs = 0
 *
 * Certifiering = 1
 */ var $7a0d231525fbd2b3$export$b0710aa41382622d;
(function(TrainingType) {
    TrainingType[TrainingType["Course"] = 0] = "Course";
    TrainingType[TrainingType["Certification"] = 1] = "Certification";
})($7a0d231525fbd2b3$export$b0710aa41382622d || ($7a0d231525fbd2b3$export$b0710aa41382622d = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * Ej angiven = 0
 *
 * Man = 1
 *
 * Kvinna = 2
 */ var $e1f3677b1024b22a$export$c078b135ab9633b9;
(function(UserGender) {
    UserGender[UserGender["Other"] = 0] = "Other";
    UserGender[UserGender["Male"] = 1] = "Male";
    UserGender[UserGender["Female"] = 2] = "Female";
})($e1f3677b1024b22a$export$c078b135ab9633b9 || ($e1f3677b1024b22a$export$c078b135ab9633b9 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * All = 1
 *
 * CompanyCandidate = 2
 *
 * CompanyEmployee = 3
 *
 * CompanySubcontractor = 4
 *
 * CompanyCustomer = 5
 *
 * CompanyProject = 6
 *
 * Role = 7
 *
 * PublicAnnouncement = 8
 *
 * Absence = 9
 *
 * CompanyCustomerContact = 10
 */ var $5b4ad94d3d2dbdb8$export$f350ca2a822d34f7;
(function(WebhookEntityType) {
    WebhookEntityType[WebhookEntityType["All"] = 1] = "All";
    WebhookEntityType[WebhookEntityType["CompanyCandidate"] = 2] = "CompanyCandidate";
    WebhookEntityType[WebhookEntityType["CompanyEmployee"] = 3] = "CompanyEmployee";
    WebhookEntityType[WebhookEntityType["CompanySubcontractor"] = 4] = "CompanySubcontractor";
    WebhookEntityType[WebhookEntityType["CompanyCustomer"] = 5] = "CompanyCustomer";
    WebhookEntityType[WebhookEntityType["CompanyProject"] = 6] = "CompanyProject";
    WebhookEntityType[WebhookEntityType["Role"] = 7] = "Role";
    WebhookEntityType[WebhookEntityType["PublicAnnouncement"] = 8] = "PublicAnnouncement";
    WebhookEntityType[WebhookEntityType["Absence"] = 9] = "Absence";
    WebhookEntityType[WebhookEntityType["CompanyCustomerContact"] = 10] = "CompanyCustomerContact";
})($5b4ad94d3d2dbdb8$export$f350ca2a822d34f7 || ($5b4ad94d3d2dbdb8$export$f350ca2a822d34f7 = {}));


/* generated using openapi-typescript-codegen -- do no edit */ /* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ /**
 *
 *
 * None = 0
 *
 * GroupDocs = 1
 *
 * Aspose = 2
 */ var $decb2a12ecee1f88$export$e81b5809efab3b7;
(function(WordEngineType) {
    WordEngineType[WordEngineType["None"] = 0] = "None";
    WordEngineType[WordEngineType["GroupDocs"] = 1] = "GroupDocs";
    WordEngineType[WordEngineType["Aspose"] = 2] = "Aspose";
})($decb2a12ecee1f88$export$e81b5809efab3b7 || ($decb2a12ecee1f88$export$e81b5809efab3b7 = {}));

















































































































































//# sourceMappingURL=index.js.map
