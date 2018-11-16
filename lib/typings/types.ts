/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Scalars
// ====================================================

/** Long type */
export type Long = any;

// ====================================================
// Types
// ====================================================

export interface QueryType {
  Issue?: (Issue | null)[] | null;

  Comment?: (Comment | null)[] | null;

  Label?: (Label | null)[] | null;

  Repo?: (Repo | null)[] | null;

  Commit?: (Commit | null)[] | null;

  Push?: (Push | null)[] | null;

  Build?: (Build | null)[] | null;

  Workflow?: (Workflow | null)[] | null;

  Branch?: (Branch | null)[] | null;

  DeletedBranch?: (DeletedBranch | null)[] | null;

  ChatId?: (ChatId | null)[] | null;

  ChatChannel?: (ChatChannel | null)[] | null;

  PullRequest?: (PullRequest | null)[] | null;

  Org?: (Org | null)[] | null;

  SCMId?: (ScmId | null)[] | null;

  GitHubId?: (GitHubId | null)[] | null;

  Tag?: (Tag | null)[] | null;

  K8Pod?: (K8Pod | null)[] | null;

  K8Container?: (K8Container | null)[] | null;

  DockerImage?: (DockerImage | null)[] | null;

  ImageLinked?: (ImageLinked | null)[] | null;

  Release?: (Release | null)[] | null;

  HerokuApp?: (HerokuApp | null)[] | null;

  Application?: (Application | null)[] | null;

  Team?: (Team | null)[] | null;

  ChatTeam?: (ChatTeam | null)[] | null;

  Person?: (Person | null)[] | null;

  Status?: (Status | null)[] | null;

  Email?: (Email | null)[] | null;

  Fingerprint?: (Fingerprint | null)[] | null;

  ParentImpact?: (ParentImpact | null)[] | null;

  PushImpact?: (PushImpact | null)[] | null;

  PullRequestImpact?: (PullRequestImpact | null)[] | null;

  GitHubProvider?: (GitHubProvider | null)[] | null;

  SCMProvider?: (ScmProvider | null)[] | null;

  UserJoinedChannel?: (UserJoinedChannel | null)[] | null;

  GitHubOrgWebhook?: (GitHubOrgWebhook | null)[] | null;

  Webhook?: (Webhook | null)[] | null;

  ChannelLink?: (ChannelLink | null)[] | null;

  Review?: (Review | null)[] | null;
  /** Auto-generated query for Card */
  Card?: (Card | null)[] | null;
  /** Auto-generated query for Notification */
  Notification?: (Notification | null)[] | null;
  /** Auto-generated query for CommitIssueRelationship */
  CommitIssueRelationship?: (CommitIssueRelationship | null)[] | null;
  /** Auto-generated query for Deployment */
  Deployment?: (Deployment | null)[] | null;
  /** Auto-generated query for IssueRelationship */
  IssueRelationship?: (IssueRelationship | null)[] | null;
  /** Auto-generated query for SdmGoal */
  SdmGoal?: (SdmGoal | null)[] | null;
  /** Auto-generated query for SdmBuildIdentifier */
  SdmBuildIdentifier?: (SdmBuildIdentifier | null)[] | null;
  /** Auto-generated query for SdmDeployEnablement */
  SdmDeployEnablement?: (SdmDeployEnablement | null)[] | null;
  /** Auto-generated query for SdmVersion */
  SdmVersion?: (SdmVersion | null)[] | null;
  /** Auto-generated query for AtomistLog */
  AtomistLog?: (AtomistLog | null)[] | null;
  /** Auto-generated query for SdmGoalSetBadge */
  SdmGoalSetBadge?: (SdmGoalSetBadge | null)[] | null;
  /** Auto-generated query for Feedback */
  Feedback?: (Feedback | null)[] | null;
  /** Auto-generated query for SentryAlert */
  SentryAlert?: (SentryAlert | null)[] | null;
  /** Find a commit by sha */
  commitBySha?: Commit | null;
  /** Find a Push using after-sha and branch */
  pushBySha?: Push | null;
  /** Find repo by name, owner and provider id */
  linkedRepo?: Repo | null;
}
/** Issue-Node */
export interface Issue {
  /** internal node id */
  _id?: Long | null;
  /** id of  Issue */
  id?: string | null;
  /** number of  Issue */
  number?: number | null;
  /** name of  Issue */
  name?: string | null;
  /** title of  Issue */
  title?: string | null;
  /** body of  Issue */
  body?: string | null;
  /** state of  Issue */
  state?: IssueState | null;
  /** timestamp of  Issue */
  timestamp?: string | null;
  /** action of  Issue */
  action?: string | null;
  /** createdAt of  Issue */
  createdAt?: string | null;
  /** updatedAt of  Issue */
  updatedAt?: string | null;
  /** closedAt of  Issue */
  closedAt?: string | null;
  /** Issue repo Repo */
  repo: Repo;
  /** Issue resolvingCommits Commit */
  resolvingCommits?: (Commit | null)[] | null;
  /** Issue openedBy SCMId */
  openedBy?: ScmId | null;
  /** Issue closedBy SCMId */
  closedBy?: ScmId | null;
  /** Issue labels Label */
  labels?: (Label | null)[] | null;
  /** Issue assignees SCMId */
  assignees?: (ScmId | null)[] | null;
  /** Issue lastAssignedBy SCMId */
  lastAssignedBy?: ScmId | null;
  /** Issue comments Comment */
  comments?: (Comment | null)[] | null;
}
/** Repo-Node */
export interface Repo {
  /** internal node id */
  _id?: Long | null;
  /** id of  Repo */
  id?: string | null;
  /** owner of  Repo */
  owner?: string | null;
  /** name of  Repo */
  name?: string | null;
  /** allowRebaseMerge of  Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of  Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of  Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of  Repo */
  repoId?: string | null;
  /** gitHubId of  Repo */
  gitHubId?: string | null;
  /** defaultBranch of  Repo */
  defaultBranch?: string | null;
  /** Repo labels Label */
  labels?: (Label | null)[] | null;
  /** Repo channels ChatChannel */
  channels?: (ChatChannel | null)[] | null;
  /** Repo org Org */
  org?: Org | null;
  /** Repo issue Issue */
  issue?: (Issue | null)[] | null;
  /** Repo issues Issue */
  issues?: (Issue | null)[] | null;
  /** Repo pullRequest PullRequest */
  pullRequest?: (PullRequest | null)[] | null;
  /** Repo pullRequests PullRequest */
  pullRequests?: (PullRequest | null)[] | null;
  /** Repo branches Branch */
  branches?: (Branch | null)[] | null;
  /** Repo links ChannelLink */
  links?: (ChannelLink | null)[] | null;
  /** Repo webhook Webhook */
  webhook?: Webhook | null;
}
/** Label-Node */
export interface Label {
  /** internal node id */
  _id?: Long | null;
  /** id of  Label */
  id?: string | null;
  /** name of  Label */
  name?: string | null;
  /** default of  Label */
  default?: string | null;
  /** color of  Label */
  color?: string | null;
  /** Label repo Repo */
  repo?: Repo | null;
}
/** ChatChannel-Node */
export interface ChatChannel {
  /** internal node id */
  _id?: Long | null;
  /** id of  ChatChannel */
  id?: string | null;
  /** name of  ChatChannel */
  name?: string | null;
  /** provider of  ChatChannel */
  provider?: string | null;
  /** normalizedName of  ChatChannel */
  normalizedName?: string | null;
  /** channelId of  ChatChannel */
  channelId?: string | null;
  /** isDefault of  ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of  ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ChatChannel createdBy ChatId */
  createdBy?: ChatId | null;
  /** ChatChannel repos Repo */
  repos?: (Repo | null)[] | null;
  /** ChatChannel links ChannelLink */
  links?: (ChannelLink | null)[] | null;
  /** ChatChannel members ChatId */
  members?: (ChatId | null)[] | null;
  /** ChatChannel team ChatTeam */
  team?: ChatTeam | null;
}
/** ChatId-Node */
export interface ChatId {
  /** internal node id */
  _id?: Long | null;
  /** id of  ChatId */
  id?: string | null;
  /** screenName of  ChatId */
  screenName?: string | null;
  /** userId of  ChatId */
  userId?: string | null;
  /** provider of  ChatId */
  provider?: string | null;
  /** isAtomistBot of  ChatId */
  isAtomistBot?: string | null;
  /** isOwner of  ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of  ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of  ChatId */
  isAdmin?: string | null;
  /** isBot of  ChatId */
  isBot?: string | null;
  /** timezoneLabel of  ChatId */
  timezoneLabel?: string | null;
  /** ChatId channels ChatChannel */
  channels?: (ChatChannel | null)[] | null;
  /** ChatId emails Email */
  emails?: (Email | null)[] | null;
  /** ChatId chatTeam ChatTeam */
  chatTeam?: ChatTeam | null;
  /** ChatId channelsCreated ChatChannel */
  channelsCreated?: (ChatChannel | null)[] | null;
  /** ChatId person Person */
  person?: Person | null;
  /** Return a user's preferences */
  preferences?: (UserPreference | null)[] | null;
}
/** Email-Node */
export interface Email {
  /** internal node id */
  _id?: Long | null;
  /** address of  Email */
  address?: string | null;
  /** Email scmId SCMId */
  scmId?: ScmId | null;
  /** Email gitHubId GitHubId */
  gitHubId?: GitHubId | null;
  /** Email chatId ChatId */
  chatId?: ChatId | null;
  /** Email person Person */
  person?: Person | null;
}
/** SCMId-Node */
export interface ScmId {
  /** internal node id */
  _id?: Long | null;
  /** login of  SCMId */
  login?: string | null;
  /** name of  SCMId */
  name?: string | null;
  /** SCMId provider GitHubProvider */
  provider?: (GitHubProvider | null)[] | null;
  /** SCMId scmProvider SCMProvider */
  scmProvider?: ScmProvider | null;
  /** SCMId emails Email */
  emails?: (Email | null)[] | null;
  /** SCMId person Person */
  person?: Person | null;
}
/** GitHubProvider-Node */
export interface GitHubProvider {
  /** internal node id */
  _id?: Long | null;
  /** id of  GitHubProvider */
  id?: string | null;
  /** url of  GitHubProvider */
  url?: string | null;
  /** providerId of  GitHubProvider */
  providerId?: string | null;
  /** apiUrl of  GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of  GitHubProvider */
  gitUrl?: string | null;
  /** providerType of  GitHubProvider */
  providerType?: ProviderType | null;
  /** GitHubProvider team Team */
  team?: Team | null;
}
/** Team-Node */
export interface Team {
  /** internal node id */
  _id?: Long | null;
  /** id of  Team */
  id?: string | null;
  /** name of  Team */
  name?: string | null;
  /** description of  Team */
  description?: string | null;
  /** iconUrl of  Team */
  iconUrl?: string | null;
  /** createdAt of  Team */
  createdAt?: string | null;
  /** Team persons Person */
  persons?: (Person | null)[] | null;
  /** Team orgs Org */
  orgs?: (Org | null)[] | null;
  /** Team providers GitHubProvider */
  providers?: (GitHubProvider | null)[] | null;
  /** Team scmProviders SCMProvider */
  scmProviders?: (ScmProvider | null)[] | null;
  /** Team chatTeams ChatTeam */
  chatTeams?: (ChatTeam | null)[] | null;
}
/** Person-Node */
export interface Person {
  /** internal node id */
  _id?: Long | null;
  /** id of  Person */
  id?: string | null;
  /** forename of  Person */
  forename?: string | null;
  /** surname of  Person */
  surname?: string | null;
  /** name of  Person */
  name?: string | null;
  /** Person scmId SCMId */
  scmId?: ScmId | null;
  /** Person gitHubId GitHubId */
  gitHubId?: GitHubId | null;
  /** Person chatId ChatId */
  chatId?: ChatId | null;
  /** Person emails Email */
  emails?: (Email | null)[] | null;
  /** Person team Team */
  team?: Team | null;
  /** Return a person's preferences */
  preferences?: (PersonPreference | null)[] | null;
}
/** GitHubId-Node */
export interface GitHubId {
  /** internal node id */
  _id?: Long | null;
  /** login of  GitHubId */
  login?: string | null;
  /** name of  GitHubId */
  name?: string | null;
  /** GitHubId provider GitHubProvider */
  provider?: (GitHubProvider | null)[] | null;
  /** GitHubId scmProvider SCMProvider */
  scmProvider?: ScmProvider | null;
  /** GitHubId emails Email */
  emails?: (Email | null)[] | null;
  /** GitHubId person Person */
  person?: Person | null;
}
/** SCMProvider-Node */
export interface ScmProvider {
  /** internal node id */
  _id?: Long | null;
  /** id of  SCMProvider */
  id?: string | null;
  /** url of  SCMProvider */
  url?: string | null;
  /** providerId of  SCMProvider */
  providerId?: string | null;
  /** apiUrl of  SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of  SCMProvider */
  gitUrl?: string | null;
  /** providerType of  SCMProvider */
  providerType?: ProviderType | null;
  /** SCMProvider team Team */
  team?: Team | null;
}
/** A person's preferences as key/value pairs */
export interface PersonPreference {
  /** The name of the preference */
  name?: string | null;
  /** The value of the preference */
  value?: string | null;
}
/** Org-Node */
export interface Org {
  /** internal node id */
  _id?: Long | null;
  /** id of  Org */
  id?: string | null;
  /** owner of  Org */
  owner?: string | null;
  /** ownerType of  Org */
  ownerType?: OwnerType | null;
  /** Org provider GitHubProvider */
  provider?: GitHubProvider | null;
  /** Org scmProvider SCMProvider */
  scmProvider?: ScmProvider | null;
  /** Org repo Repo */
  repo?: (Repo | null)[] | null;
  /** Org repos Repo */
  repos?: (Repo | null)[] | null;
  /** Org webhook GitHubOrgWebhook */
  webhook?: (GitHubOrgWebhook | null)[] | null;
  /** Org webhooks Webhook */
  webhooks?: (Webhook | null)[] | null;
  /** Org chatTeam ChatTeam */
  chatTeam?: ChatTeam | null;
  /** Org team Team */
  team?: Team | null;
}
/** GitHubOrgWebhook-Node */
export interface GitHubOrgWebhook {
  /** internal node id */
  _id?: Long | null;
  /** id of  GitHubOrgWebhook */
  id?: string | null;
  /** url of  GitHubOrgWebhook */
  url?: string | null;
  /** webhookType of  GitHubOrgWebhook */
  webhookType?: WebhookType | null;
  /** GitHubOrgWebhook org Org */
  org?: Org | null;
}
/** Webhook-Node */
export interface Webhook {
  /** internal node id */
  _id?: Long | null;
  /** id of  Webhook */
  id?: string | null;
  /** url of  Webhook */
  url?: string | null;
  /** webhookType of  Webhook */
  webhookType?: WebhookType | null;
  /** Webhook org Org */
  org?: Org | null;
  /** Webhook repo Repo */
  repo?: Repo | null;
}
/** ChatTeam-Node */
export interface ChatTeam {
  /** internal node id */
  _id?: Long | null;
  /** id of  ChatTeam */
  id?: string | null;
  /** name of  ChatTeam */
  name?: string | null;
  /** provider of  ChatTeam */
  provider?: string | null;
  /** domain of  ChatTeam */
  domain?: string | null;
  /** messageCount of  ChatTeam */
  messageCount?: number | null;
  /** emailDomain of  ChatTeam */
  emailDomain?: string | null;
  /** ChatTeam orgs Org */
  orgs?: (Org | null)[] | null;
  /** ChatTeam providers GitHubProvider */
  providers?: (GitHubProvider | null)[] | null;
  /** ChatTeam scmProviders SCMProvider */
  scmProviders?: (ScmProvider | null)[] | null;
  /** ChatTeam channels ChatChannel */
  channels?: (ChatChannel | null)[] | null;
  /** ChatTeam members ChatId */
  members?: (ChatId | null)[] | null;
  /** ChatTeam team Team */
  team?: Team | null;
  /** Return a chat team's preferences */
  preferences?: (TeamPreference | null)[] | null;
}
/** A team's preferences as key/value pairs */
export interface TeamPreference {
  /** The name of the preference */
  name?: string | null;
  /** The value of the preference */
  value?: string | null;
}
/** A user's preferences as key/value pairs */
export interface UserPreference {
  /** The name of the preference */
  name?: string | null;
  /** The value of the preference */
  value?: string | null;
}
/** ChannelLink-Node */
export interface ChannelLink {
  /** internal node id */
  _id?: Long | null;
  /** id of  ChannelLink */
  id?: string | null;
  /** ChannelLink channel ChatChannel */
  channel?: ChatChannel | null;
  /** ChannelLink repo Repo */
  repo?: Repo | null;
}
/** PullRequest-Node */
export interface PullRequest {
  /** internal node id */
  _id?: Long | null;
  /** id of  PullRequest */
  id?: string | null;
  /** number of  PullRequest */
  number?: number | null;
  /** prId of  PullRequest */
  prId?: string | null;
  /** name of  PullRequest */
  name?: string | null;
  /** body of  PullRequest */
  body?: string | null;
  /** state of  PullRequest */
  state?: string | null;
  /** merged of  PullRequest */
  merged?: boolean | null;
  /** timestamp of  PullRequest */
  timestamp?: string | null;
  /** baseBranchName of  PullRequest */
  baseBranchName?: string | null;
  /** branchName of  PullRequest */
  branchName?: string | null;
  /** title of  PullRequest */
  title?: string | null;
  /** createdAt of  PullRequest */
  createdAt?: string | null;
  /** updatedAt of  PullRequest */
  updatedAt?: string | null;
  /** closedAt of  PullRequest */
  closedAt?: string | null;
  /** mergedAt of  PullRequest */
  mergedAt?: string | null;
  /** PullRequest repo Repo */
  repo?: Repo | null;
  /** PullRequest head Commit */
  head?: Commit | null;
  /** PullRequest base Commit */
  base?: Commit | null;
  /** PullRequest mergeCommit Commit */
  mergeCommit?: Commit | null;
  /** PullRequest author SCMId */
  author?: ScmId | null;
  /** PullRequest merger SCMId */
  merger?: ScmId | null;
  /** PullRequest assignees SCMId */
  assignees?: (ScmId | null)[] | null;
  /** PullRequest commits Commit */
  commits?: (Commit | null)[] | null;
  /** PullRequest branch Branch */
  branch?: Branch | null;
  /** PullRequest sourceBranch Branch */
  sourceBranch?: Branch | null;
  /** PullRequest destinationBranch Branch */
  destinationBranch?: Branch | null;
  /** PullRequest labels Label */
  labels?: (Label | null)[] | null;
  /** PullRequest reviews Review */
  reviews?: (Review | null)[] | null;
  /** PullRequest reviewers SCMId */
  reviewers?: (ScmId | null)[] | null;
  /** PullRequest lastAssignedBy SCMId */
  lastAssignedBy?: ScmId | null;
  /** PullRequest comments Comment */
  comments?: (Comment | null)[] | null;
  /** PullRequest builds Build */
  builds?: (Build | null)[] | null;
}
/** Commit-Node */
export interface Commit {
  /** internal node id */
  _id?: Long | null;
  /** sha of  Commit */
  sha?: string | null;
  /** message of  Commit */
  message?: string | null;
  /** timestamp of  Commit */
  timestamp?: string | null;
  /** Commit email Email */
  email?: Email | null;
  /** Commit builds Build */
  builds?: (Build | null)[] | null;
  /** Commit repo Repo */
  repo?: Repo | null;
  /** Commit author SCMId */
  author?: ScmId | null;
  /** Commit committer SCMId */
  committer?: ScmId | null;
  /** Commit tags Tag */
  tags?: (Tag | null)[] | null;
  /** Commit resolves Issue */
  resolves?: (Issue | null)[] | null;
  /** Commit statuses Status */
  statuses?: (Status | null)[] | null;
  /** Commit pushes Push */
  pushes?: (Push | null)[] | null;
  /** Commit pullRequests PullRequest */
  pullRequests?: (PullRequest | null)[] | null;
  /** Commit herokuApps HerokuApp */
  herokuApps?: (HerokuApp | null)[] | null;
  /** Commit apps Application */
  apps?: (Application | null)[] | null;
  /** Commit fingerprints Fingerprint */
  fingerprints?: (Fingerprint | null)[] | null;
  /** Commit impact ParentImpact */
  impact?: ParentImpact | null;
  /** Commit image DockerImage */
  image?: DockerImage | null;
  /** Commit images DockerImage */
  images?: (DockerImage | null)[] | null;

  sentryAlerts?: (SentryAlert | null)[] | null;
}
/** Build-Node */
export interface Build {
  /** internal node id */
  _id?: Long | null;
  /** id of  Build */
  id?: string | null;
  /** buildId of  Build */
  buildId?: string | null;
  /** name of  Build */
  name?: string | null;
  /** status of  Build */
  status?: BuildStatus | null;
  /** buildUrl of  Build */
  buildUrl?: string | null;
  /** compareUrl of  Build */
  compareUrl?: string | null;
  /** trigger of  Build */
  trigger?: BuildTrigger | null;
  /** provider of  Build */
  provider?: string | null;
  /** pullRequestNumber of  Build */
  pullRequestNumber?: number | null;
  /** startedAt of  Build */
  startedAt?: string | null;
  /** finishedAt of  Build */
  finishedAt?: string | null;
  /** timestamp of  Build */
  timestamp?: string | null;
  /** workflowId of  Build */
  workflowId?: string | null;
  /** jobName of  Build */
  jobName?: string | null;
  /** jobId of  Build */
  jobId?: string | null;
  /** data of  Build */
  data?: string | null;
  /** Build repo Repo */
  repo?: Repo | null;
  /** Build push Push */
  push?: Push | null;
  /** Build pullRequest PullRequest */
  pullRequest?: PullRequest | null;
  /** Build tag Tag */
  tag?: Tag | null;
  /** Build commit Commit */
  commit?: Commit | null;
  /** Build workflow Workflow */
  workflow?: Workflow | null;
}
/** Push-Node */
export interface Push {
  /** internal node id */
  _id?: Long | null;
  /** id of  Push */
  id?: string | null;
  /** timestamp of  Push */
  timestamp?: string | null;
  /** branch of  Push */
  branch?: string | null;
  /** Push after Commit */
  after?: Commit | null;
  /** Push before Commit */
  before?: Commit | null;
  /** Push commits Commit */
  commits?: (Commit | null)[] | null;
  /** Push repo Repo */
  repo?: Repo | null;
  /** Push builds Build */
  builds?: (Build | null)[] | null;

  goals?: (SdmGoal | null)[] | null;
}

export interface SdmGoal {
  approval?: SdmProvenance | null;

  approvalRequired?: boolean | null;

  branch?: string | null;

  data?: string | null;

  description?: string | null;

  environment?: string | null;

  error?: string | null;

  externalKey?: string | null;

  externalUrl?: string | null;

  fulfillment?: SdmGoalFulfillment | null;

  goalSet?: string | null;

  goalSetId?: string | null;

  name?: string | null;

  phase?: string | null;

  preConditions?: (SdmCondition | null)[] | null;

  provenance?: (SdmProvenance | null)[] | null;

  push?: Push | null;

  repo?: SdmRepository | null;

  retryFeasible?: boolean | null;

  sha?: string | null;

  state?: SdmGoalState | null;

  ts?: number | null;

  uniqueName?: string | null;

  url?: string | null;
  /** The ID of this SdmGoal */
  id?: string | null;
}

export interface SdmProvenance {
  channelId?: string | null;

  correlationId?: string | null;

  name?: string | null;

  registration?: string | null;

  ts?: number | null;

  userId?: string | null;

  version?: string | null;
}

export interface SdmGoalFulfillment {
  method?: string | null;

  name?: string | null;
}

export interface SdmCondition {
  environment?: string | null;

  name?: string | null;
}

export interface SdmRepository {
  name?: string | null;

  owner?: string | null;

  providerId?: string | null;
}
/** Tag-Node */
export interface Tag {
  /** internal node id */
  _id?: Long | null;
  /** id of  Tag */
  id?: string | null;
  /** name of  Tag */
  name?: string | null;
  /** description of  Tag */
  description?: string | null;
  /** ref of  Tag */
  ref?: string | null;
  /** timestamp of  Tag */
  timestamp?: string | null;
  /** Tag release Release */
  release?: Release | null;
  /** Tag commit Commit */
  commit?: Commit | null;
  /** Tag containers DockerImage */
  containers?: (DockerImage | null)[] | null;
  /** Tag builds Build */
  builds?: (Build | null)[] | null;
}
/** Release-Node */
export interface Release {
  /** internal node id */
  _id?: Long | null;
  /** id of  Release */
  id?: string | null;
  /** name of  Release */
  name?: string | null;
  /** timestamp of  Release */
  timestamp?: string | null;
  /** Release tag Tag */
  tag?: Tag | null;
}
/** DockerImage-Node */
export interface DockerImage {
  /** internal node id */
  _id?: Long | null;
  /** image of  DockerImage */
  image?: string | null;
  /** imageName of  DockerImage */
  imageName?: string | null;
  /** timestamp of  DockerImage */
  timestamp?: string | null;
  /** DockerImage pods K8Pod */
  pods?: (K8Pod | null)[] | null;
  /** DockerImage commits Commit */
  commits?: (Commit | null)[] | null;
  /** DockerImage containers K8Container */
  containers?: (K8Container | null)[] | null;
}
/** K8Pod-Node */
export interface K8Pod {
  /** internal node id */
  _id?: Long | null;
  /** name of  K8Pod */
  name?: string | null;
  /** phase of  K8Pod */
  phase?: string | null;
  /** environment of  K8Pod */
  environment?: string | null;
  /** timestamp of  K8Pod */
  timestamp?: string | null;
  /** baseName of  K8Pod */
  baseName?: string | null;
  /** namespace of  K8Pod */
  namespace?: string | null;
  /** statusJSON of  K8Pod */
  statusJSON?: string | null;
  /** host of  K8Pod */
  host?: string | null;
  /** state of  K8Pod */
  state?: string | null;
  /** specsJSON of  K8Pod */
  specsJSON?: string | null;
  /** envJSON of  K8Pod */
  envJSON?: string | null;
  /** metadataJSON of  K8Pod */
  metadataJSON?: string | null;
  /** containersCrashLoopBackOff of  K8Pod */
  containersCrashLoopBackOff?: boolean | null;
  /** resourceVersion of  K8Pod */
  resourceVersion?: number | null;
  /** K8Pod images DockerImage */
  images?: (DockerImage | null)[] | null;
  /** K8Pod containers K8Container */
  containers?: (K8Container | null)[] | null;
}
/** K8Container-Node */
export interface K8Container {
  /** internal node id */
  _id?: Long | null;
  /** name of  K8Container */
  name?: string | null;
  /** imageName of  K8Container */
  imageName?: string | null;
  /** timestamp of  K8Container */
  timestamp?: string | null;
  /** environment of  K8Container */
  environment?: string | null;
  /** containerJSON of  K8Container */
  containerJSON?: string | null;
  /** state of  K8Container */
  state?: string | null;
  /** stateReason of  K8Container */
  stateReason?: string | null;
  /** ready of  K8Container */
  ready?: boolean | null;
  /** restartCount of  K8Container */
  restartCount?: number | null;
  /** statusJSON of  K8Container */
  statusJSON?: string | null;
  /** resourceVersion of  K8Container */
  resourceVersion?: number | null;
  /** containerID of  K8Container */
  containerID?: string | null;
  /** K8Container image DockerImage */
  image?: DockerImage | null;
  /** K8Container pod K8Pod */
  pod?: K8Pod | null;
}
/** Workflow-Node */
export interface Workflow {
  /** internal node id */
  _id?: Long | null;
  /** id of  Workflow */
  id?: string | null;
  /** name of  Workflow */
  name?: string | null;
  /** workflowId of  Workflow */
  workflowId?: string | null;
  /** provider of  Workflow */
  provider?: string | null;
  /** config of  Workflow */
  config?: string | null;
  /** Workflow builds Build */
  builds?: (Build | null)[] | null;
}
/** Status-Node */
export interface Status {
  /** internal node id */
  _id?: Long | null;
  /** id of  Status */
  id?: string | null;
  /** state of  Status */
  state?: StatusState | null;
  /** description of  Status */
  description?: string | null;
  /** targetUrl of  Status */
  targetUrl?: string | null;
  /** context of  Status */
  context?: string | null;
  /** timestamp of  Status */
  timestamp?: string | null;
  /** Status commit Commit */
  commit?: Commit | null;
}
/** HerokuApp-Node */
export interface HerokuApp {
  /** internal node id */
  _id?: Long | null;
  /** app of  HerokuApp */
  app?: string | null;
  /** url of  HerokuApp */
  url?: string | null;
  /** timestamp of  HerokuApp */
  timestamp?: string | null;
  /** user of  HerokuApp */
  user?: string | null;
  /** appId of  HerokuApp */
  appId?: string | null;
  /** release of  HerokuApp */
  release?: string | null;
  /** HerokuApp commits Commit */
  commits?: (Commit | null)[] | null;
}
/** Application-Node */
export interface Application {
  /** internal node id */
  _id?: Long | null;
  /** id of  Application */
  id?: string | null;
  /** state of  Application */
  state?: string | null;
  /** host of  Application */
  host?: string | null;
  /** timestamp of  Application */
  timestamp?: string | null;
  /** domain of  Application */
  domain?: string | null;
  /** data of  Application */
  data?: string | null;
  /** Application commits Commit */
  commits?: (Commit | null)[] | null;
}
/** Fingerprint-Node */
export interface Fingerprint {
  /** internal node id */
  _id?: Long | null;
  /** name of  Fingerprint */
  name?: string | null;
  /** sha of  Fingerprint */
  sha?: string | null;
  /** data of  Fingerprint */
  data?: string | null;
  /** Fingerprint commit Commit */
  commit?: Commit | null;
}
/** ParentImpact-Node */
export interface ParentImpact {
  /** internal node id */
  _id?: Long | null;
  /** id of  ParentImpact */
  id?: string | null;
  /** url of  ParentImpact */
  url?: string | null;
  /** data of  ParentImpact */
  data?: string | null;
  /** ParentImpact commits Commit */
  commits?: (Commit | null)[] | null;
  /** ParentImpact commit Commit */
  commit?: Commit | null;
}

export interface SentryAlert {
  commit?: Commit | null;

  culprit?: string | null;

  event?: SentryEvent | null;

  level?: string | null;

  message?: string | null;

  project?: string | null;

  project_name?: string | null;

  url?: string | null;
  /** The ID of this SentryAlert */
  id?: string | null;
}

export interface SentryEvent {
  event_id?: string | null;

  extra?: SentryEventExtra | null;
}

export interface SentryEventExtra {
  artifact?: string | null;

  correlation_id?: string | null;

  environment?: string | null;

  git_owner?: string | null;

  git_repo?: string | null;

  git_sha?: string | null;

  invocation_id?: string | null;

  operation_name?: string | null;

  operation_type?: string | null;

  team_id?: string | null;

  team_name?: string | null;

  version?: string | null;
}
/** Branch-Node */
export interface Branch {
  /** internal node id */
  _id?: Long | null;
  /** id of  Branch */
  id?: string | null;
  /** name of  Branch */
  name?: string | null;
  /** timestamp of  Branch */
  timestamp?: string | null;
  /** isRemote of  Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of  Branch */
  remoteRepoHtmlUrl?: string | null;
  /** Branch repo Repo */
  repo?: Repo | null;
  /** Branch commit Commit */
  commit?: Commit | null;
  /** Branch pullRequests PullRequest */
  pullRequests?: (PullRequest | null)[] | null;
}
/** Review-Node */
export interface Review {
  /** internal node id */
  _id?: Long | null;
  /** id of  Review */
  id?: string | null;
  /** gitHubId of  Review */
  gitHubId?: string | null;
  /** reviewId of  Review */
  reviewId?: string | null;
  /** body of  Review */
  body?: string | null;
  /** state of  Review */
  state?: ReviewState | null;
  /** submittedAt of  Review */
  submittedAt?: string | null;
  /** htmlUrl of  Review */
  htmlUrl?: string | null;
  /** Review by SCMId */
  by?: (ScmId | null)[] | null;
  /** Review commit Commit */
  commit?: Commit | null;
  /** Review comments Comment */
  comments?: (Comment | null)[] | null;
  /** Review pullRequest PullRequest */
  pullRequest?: PullRequest | null;
}
/** Comment-Node */
export interface Comment {
  /** internal node id */
  _id?: Long | null;
  /** id of  Comment */
  id?: string | null;
  /** body of  Comment */
  body?: string | null;
  /** timestamp of  Comment */
  timestamp?: string | null;
  /** createdAt of  Comment */
  createdAt?: string | null;
  /** updatedAt of  Comment */
  updatedAt?: string | null;
  /** commentId of  Comment */
  commentId?: string | null;
  /** gitHubId of  Comment */
  gitHubId?: string | null;
  /** path of  Comment */
  path?: string | null;
  /** position of  Comment */
  position?: string | null;
  /** htmlUrl of  Comment */
  htmlUrl?: string | null;
  /** commentType of  Comment */
  commentType?: CommentCommentType | null;
  /** Comment issue Issue */
  issue?: Issue | null;
  /** Comment review Review */
  review?: Review | null;
  /** Comment pullRequest PullRequest */
  pullRequest?: PullRequest | null;
  /** Comment by SCMId */
  by?: ScmId | null;
}
/** DeletedBranch-Node */
export interface DeletedBranch {
  /** internal node id */
  _id?: Long | null;
  /** id of  DeletedBranch */
  id?: string | null;
  /** name of  DeletedBranch */
  name?: string | null;
  /** timestamp of  DeletedBranch */
  timestamp?: string | null;
  /** DeletedBranch repo Repo */
  repo?: Repo | null;
  /** DeletedBranch commit Commit */
  commit?: Commit | null;
  /** DeletedBranch pullRequests PullRequest */
  pullRequests?: (PullRequest | null)[] | null;
}
/** ImageLinked-Node */
export interface ImageLinked {
  /** internal node id */
  _id?: Long | null;
  /** timestamp of  ImageLinked */
  timestamp?: string | null;
  /** ImageLinked image DockerImage */
  image?: DockerImage | null;
  /** ImageLinked commit Commit */
  commit?: Commit | null;
}
/** PushImpact-Node */
export interface PushImpact {
  /** internal node id */
  _id?: Long | null;
  /** id of  PushImpact */
  id?: string | null;
  /** url of  PushImpact */
  url?: string | null;
  /** data of  PushImpact */
  data?: string | null;
  /** PushImpact push Push */
  push?: Push | null;
}
/** PullRequestImpact-Node */
export interface PullRequestImpact {
  /** internal node id */
  _id?: Long | null;
  /** id of  PullRequestImpact */
  id?: string | null;
  /** url of  PullRequestImpact */
  url?: string | null;
  /** data of  PullRequestImpact */
  data?: string | null;
  /** PullRequestImpact pullRequest PullRequest */
  pullRequest?: PullRequest | null;
}
/** UserJoinedChannel-Node */
export interface UserJoinedChannel {
  /** internal node id */
  _id?: Long | null;
  /** id of  UserJoinedChannel */
  id?: string | null;
  /** UserJoinedChannel user ChatId */
  user?: ChatId | null;
  /** UserJoinedChannel channel ChatChannel */
  channel?: ChatChannel | null;
}

export interface Card {
  actionGroups?: (CardActionGroup | null)[] | null;

  actions?: (CardAction | null)[] | null;

  body?: CardBody | null;

  collaborators?: (CardCollaborator | null)[] | null;

  comments?: (CardBody | null)[] | null;

  correlations?: (CardCorrelation | null)[] | null;

  events?: (CardEvent | null)[] | null;

  goalSets?: (CardSdmGoalSet | null)[] | null;

  key?: string | null;

  post?: string | null;

  provenance?: (CardProvenance | null)[] | null;

  reactions?: (CardReaction | null)[] | null;

  repository?: CardRepository | null;

  shortTitle?: string | null;

  title?: CardTitle | null;

  ts?: number | null;

  ttl?: number | null;

  type?: string | null;
  /** The ID of this Card */
  id?: string | null;
}

export interface CardActionGroup {
  actions?: (CardAction | null)[] | null;

  text?: string | null;
}

export interface CardAction {
  command?: string | null;

  parameterName?: string | null;

  parameterOptionGroups?: (CardActionParameterOptionGroup | null)[] | null;

  parameterOptions?: (CardActionParameterOption | null)[] | null;

  parameters?: (CardActionParameter | null)[] | null;

  registration?: string | null;

  role?: string | null;

  text?: string | null;

  type?: string | null;
}

export interface CardActionParameterOptionGroup {
  name?: string | null;

  options?: (CardActionParameterOption | null)[] | null;
}

export interface CardActionParameterOption {
  name?: string | null;

  value?: string | null;
}

export interface CardActionParameter {
  name?: string | null;

  value?: string | null;
}

export interface CardBody {
  avatar?: string | null;

  hint?: string | null;

  login?: string | null;

  text?: string | null;

  ts?: number | null;
}

export interface CardCollaborator {
  avatar?: string | null;

  link?: string | null;

  login?: string | null;
}

export interface CardCorrelation {
  body?: (CorrelationBody | null)[] | null;

  icon?: string | null;

  link?: string | null;

  shortTitle?: string | null;

  title?: string | null;

  ts?: number | null;

  type?: string | null;
}

export interface CorrelationBody {
  icon?: string | null;

  text?: string | null;
}

export interface CardEvent {
  actionGroups?: (CardActionGroup | null)[] | null;

  actions?: (CardAction | null)[] | null;

  icon?: string | null;

  text?: string | null;

  ts?: number | null;
}

export interface CardSdmGoalSet {
  actions?: (CardAction | null)[] | null;

  duration?: number | null;

  goalSet?: string | null;

  goalSetId?: string | null;

  goals?: (CardSdmGoal | null)[] | null;

  registration?: string | null;

  state?: string | null;

  ts?: number | null;
}

export interface CardSdmGoal {
  actions?: (CardAction | null)[] | null;

  description?: string | null;

  environment?: string | null;

  link?: string | null;

  logLink?: string | null;

  name?: string | null;

  state?: string | null;

  ts?: number | null;
}

export interface CardProvenance {
  name?: string | null;
}

export interface CardReaction {
  avatar?: string | null;

  login?: string | null;

  reaction?: string | null;
}

export interface CardRepository {
  name?: string | null;

  owner?: string | null;

  slug?: string | null;
}

export interface CardTitle {
  icon?: string | null;

  text?: string | null;
}

export interface Notification {
  actions?: (NotificationAction | null)[] | null;

  body: string;

  contentType: string;

  key: string;

  post?: string | null;

  recipient?: NotificationRecipient | null;

  ts: number;

  ttl?: number | null;
  /** The ID of this Notification */
  id?: string | null;
}

export interface NotificationAction {
  command?: string | null;

  parameterName?: string | null;

  parameterOptionGroups?:
    | (NotificationActionParameterOptionGroup | null)[]
    | null;

  parameterOptions?: (NotificationActionParameterOption | null)[] | null;

  parameters?: (NotificationActionParameter | null)[] | null;

  registration?: string | null;

  role?: string | null;

  text?: string | null;

  type?: string | null;
}

export interface NotificationActionParameterOptionGroup {
  name?: string | null;

  options?: (NotificationActionParameterOption | null)[] | null;
}

export interface NotificationActionParameterOption {
  name?: string | null;

  value?: string | null;
}

export interface NotificationActionParameter {
  name?: string | null;

  value?: string | null;
}

export interface NotificationRecipient {
  address: string;
}

export interface CommitIssueRelationship {
  type?: CommitIssueRelationshipType | null;
  /** The commit that references the issue */
  commit?: CommitIssueRelationshipCommit | null;
  /** The target issue of the relationship */
  issue?: CommitIssueRelationshipIssue | null;
  /** The ID of this CommitIssueRelationship */
  id?: string | null;
}

export interface CommitIssueRelationshipCommit {
  owner?: string | null;

  repo?: string | null;

  sha?: string | null;
}

export interface CommitIssueRelationshipIssue {
  owner?: string | null;

  repo?: string | null;

  name?: string | null;
}

export interface Deployment {
  /** The commit that got deployed */
  commit?: DeploymentCommit | null;
  /** The name of environment the commit got deployed */
  environment?: string | null;

  ts?: number | null;
  /** The ID of this Deployment */
  id?: string | null;
}

export interface DeploymentCommit {
  owner?: string | null;

  repo?: string | null;

  sha?: string | null;
}

export interface IssueRelationship {
  /** Unique id of the issue relationship */
  relationshipId?: string | null;

  type?: string | null;

  state?: string | null;
  /** The source issue of the relationship */
  source?: IssueRelationshipIssue | null;
  /** The target issue of the relationship */
  target?: IssueRelationshipIssue | null;
  /** The ID of this IssueRelationship */
  id?: string | null;
}

export interface IssueRelationshipIssue {
  owner?: string | null;

  repo?: string | null;

  issue?: string | null;
}

export interface SdmBuildIdentifier {
  identifier?: string | null;

  repo?: SdmBuildIdentifierRepository | null;
  /** The ID of this SdmBuildIdentifier */
  id?: string | null;
}

export interface SdmBuildIdentifierRepository {
  name?: string | null;

  owner?: string | null;

  providerId?: string | null;
}

export interface SdmDeployEnablement {
  owner?: string | null;

  providerId?: string | null;

  repo?: string | null;

  state?: SdmDeployState | null;
  /** The ID of this SdmDeployEnablement */
  id?: string | null;
}

export interface SdmVersion {
  branch?: string | null;

  repo?: SdmVersionRepository | null;

  sha?: string | null;

  version?: string | null;
  /** The ID of this SdmVersion */
  id?: string | null;
}

export interface SdmVersionRepository {
  name?: string | null;

  owner?: string | null;

  providerId?: string | null;
}
/** Atomist log messages */
export interface AtomistLog {
  /** Status timestamp */
  timestamp?: number | null;
  /** Team ID for which log message is produced */
  team_id?: string | null;
  /** Log message level: debug, info, warn, error, fatal */
  level?: string | null;
  /** Log message */
  message?: string | null;
  /** Grouping, namespace etc. */
  category?: string | null;
  /** Atomist log correlation context */
  correlation_context?: AtomistLogCorrelationContext | null;
  /** The ID of this AtomistLog */
  id?: string | null;
}
/** Atomist log correlation context */
export interface AtomistLogCorrelationContext {
  /** Correlation ID */
  correlation_id?: string | null;
  /** Automation for which log message is produced */
  automation?: AtomistLogAutomation | null;
}
/** Automation for which log message is produced */
export interface AtomistLogAutomation {
  /** Automation name */
  name?: string | null;
  /** Automation description */
  version?: string | null;
}

export interface SdmGoalSetBadge {
  repo?: SdmGoalSetBadgeRepository | null;

  sdm?: string | null;

  token?: string | null;
  /** The ID of this SdmGoalSetBadge */
  id?: string | null;
}

export interface SdmGoalSetBadgeRepository {
  name?: string | null;

  owner?: string | null;

  providerId?: string | null;
}

export interface Feedback {
  email?: string | null;

  message?: string | null;

  invocation_id?: string | null;
  /** The ID of this Feedback */
  id?: string | null;
}

export interface MutationType {
  /** Set the value of a user preference. */
  setChatUserPreference?: (UserPreference | null)[] | null;
  /** Set the value of a person preference. Returns what was set */
  setPersonPreference?: (PersonPreference | null)[] | null;
  /** Set the value of a chat team preference. Returns what was set */
  setChatTeamPreference?: (TeamPreference | null)[] | null;
  /** Create a slack channel in the current team */
  createSlackChannel?: SlackChannel | null;
  /** Ask the bot to join a chat channel */
  addBotToSlackChannel?: SlackChannel | null;
  /** Link a channel to a repo */
  linkSlackChannelToRepo?: SlackChannel | null;
  /** Ask the bot to invite a user to join a chat channel */
  inviteUserToSlackChannel?: SlackChannel | null;
  /** Unlink a channel from a repo */
  unlinkSlackChannelFromRepo?: SlackChannel | null;
  /** set a GitHub login to be used for resources owned by an Org */
  setOwnerLogin?: OwnerLogin | null;
  /** set a GitHub login to be used for this Repository */
  setRepoLogin?: RepoLogin | null;
  /** Set a team's properties */
  setTeamProperties?: Team | null;
}
/** A slack channel */
export interface SlackChannel {
  /** The id of the chat team */
  chatTeamId?: string | null;
  /** The name of the channel */
  name?: string | null;
  /** The id of the channel */
  id?: string | null;
}
/** a GitHub Owner (like an Org) can set a login to be used for background tasks */
export interface OwnerLogin {
  /** The owner name for the Organization/Team */
  owner?: string | null;
  /** The id of the git provider for this Owner */
  providerId?: string | null;
  /** The login that should be used */
  login?: string | null;
}
/** a GitHub Owner (like an Org) can set a login to be used for background tasks */
export interface RepoLogin {
  /** The repository name */
  repo?: string | null;
  /** The owner name for the Organization/Team */
  owner?: string | null;
  /** The id of the git provider for this Owner */
  providerId?: string | null;
  /** The login that should be used */
  login?: string | null;
}

export interface SubscriptionType {
  Issue?: (Issue | null)[] | null;

  Comment?: (Comment | null)[] | null;

  Label?: (Label | null)[] | null;

  Repo?: (Repo | null)[] | null;

  Commit?: (Commit | null)[] | null;

  Push?: (Push | null)[] | null;

  Build?: (Build | null)[] | null;

  Workflow?: (Workflow | null)[] | null;

  Branch?: (Branch | null)[] | null;

  DeletedBranch?: (DeletedBranch | null)[] | null;

  ChatId?: (ChatId | null)[] | null;

  ChatChannel?: (ChatChannel | null)[] | null;

  PullRequest?: (PullRequest | null)[] | null;

  Org?: (Org | null)[] | null;

  SCMId?: (ScmId | null)[] | null;

  GitHubId?: (GitHubId | null)[] | null;

  Tag?: (Tag | null)[] | null;

  K8Pod?: (K8Pod | null)[] | null;

  K8Container?: (K8Container | null)[] | null;

  DockerImage?: (DockerImage | null)[] | null;

  ImageLinked?: (ImageLinked | null)[] | null;

  Release?: (Release | null)[] | null;

  HerokuApp?: (HerokuApp | null)[] | null;

  Application?: (Application | null)[] | null;

  Team?: (Team | null)[] | null;

  ChatTeam?: (ChatTeam | null)[] | null;

  Person?: (Person | null)[] | null;

  Status?: (Status | null)[] | null;

  Email?: (Email | null)[] | null;

  Fingerprint?: (Fingerprint | null)[] | null;

  ParentImpact?: (ParentImpact | null)[] | null;

  PushImpact?: (PushImpact | null)[] | null;

  PullRequestImpact?: (PullRequestImpact | null)[] | null;

  GitHubProvider?: (GitHubProvider | null)[] | null;

  SCMProvider?: (ScmProvider | null)[] | null;

  UserJoinedChannel?: (UserJoinedChannel | null)[] | null;

  GitHubOrgWebhook?: (GitHubOrgWebhook | null)[] | null;

  Webhook?: (Webhook | null)[] | null;

  ChannelLink?: (ChannelLink | null)[] | null;

  Review?: (Review | null)[] | null;
  /** Auto-generated subscription for Card */
  Card?: (Card | null)[] | null;
  /** Auto-generated subscription for Notification */
  Notification?: (Notification | null)[] | null;
  /** Auto-generated subscription for CommitIssueRelationship */
  CommitIssueRelationship?: (CommitIssueRelationship | null)[] | null;
  /** Auto-generated subscription for Deployment */
  Deployment?: (Deployment | null)[] | null;
  /** Auto-generated subscription for IssueRelationship */
  IssueRelationship?: (IssueRelationship | null)[] | null;
  /** Auto-generated subscription for SdmGoal */
  SdmGoal?: (SdmGoal | null)[] | null;
  /** Auto-generated subscription for SdmBuildIdentifier */
  SdmBuildIdentifier?: (SdmBuildIdentifier | null)[] | null;
  /** Auto-generated subscription for SdmDeployEnablement */
  SdmDeployEnablement?: (SdmDeployEnablement | null)[] | null;
  /** Auto-generated subscription for SdmVersion */
  SdmVersion?: (SdmVersion | null)[] | null;
  /** Auto-generated subscription for AtomistLog */
  AtomistLog?: (AtomistLog | null)[] | null;
  /** Auto-generated subscription for SdmGoalSetBadge */
  SdmGoalSetBadge?: (SdmGoalSetBadge | null)[] | null;
  /** Auto-generated subscription for Feedback */
  Feedback?: (Feedback | null)[] | null;
  /** Auto-generated subscription for SentryAlert */
  SentryAlert?: (SentryAlert | null)[] | null;

  RepoOnboarded?: (RepoOnboarded | null)[] | null;
}
/** The data for an existing Repo has been loaded and is ready for querying */
export interface RepoOnboarded {
  /** GitHub Repository */
  repo: Repo;
}

export interface NotificationActionGroup {
  actions?: (CardAction | null)[] | null;

  text?: string | null;
}

// ====================================================
// InputTypes
// ====================================================

/** Filter Input Type for Issue */
export interface _IssueFilter {
  /** AND */
  AND?: _IssueFilter[] | null;
  /** OR */
  OR?: _IssueFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** number */
  number?: number | null;
  /** number_not */
  number_not?: number | null;
  /** number_in */
  number_in?: number[] | null;
  /** number_not_in */
  number_not_in?: number[] | null;
  /** number_lt */
  number_lt?: number | null;
  /** number_lte */
  number_lte?: number | null;
  /** number_gt */
  number_gt?: number | null;
  /** number_gte */
  number_gte?: number | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** title */
  title?: string | null;
  /** title_not */
  title_not?: string | null;
  /** title_in */
  title_in?: string[] | null;
  /** title_not_in */
  title_not_in?: string[] | null;
  /** title_lt */
  title_lt?: string | null;
  /** title_lte */
  title_lte?: string | null;
  /** title_gt */
  title_gt?: string | null;
  /** title_gte */
  title_gte?: string | null;
  /** title_contains */
  title_contains?: string | null;
  /** title_not_contains */
  title_not_contains?: string | null;
  /** title_starts_with */
  title_starts_with?: string | null;
  /** title_not_starts_with */
  title_not_starts_with?: string | null;
  /** title_ends_with */
  title_ends_with?: string | null;
  /** title_not_ends_with */
  title_not_ends_with?: string | null;
  /** body */
  body?: string | null;
  /** body_not */
  body_not?: string | null;
  /** body_in */
  body_in?: string[] | null;
  /** body_not_in */
  body_not_in?: string[] | null;
  /** body_lt */
  body_lt?: string | null;
  /** body_lte */
  body_lte?: string | null;
  /** body_gt */
  body_gt?: string | null;
  /** body_gte */
  body_gte?: string | null;
  /** body_contains */
  body_contains?: string | null;
  /** body_not_contains */
  body_not_contains?: string | null;
  /** body_starts_with */
  body_starts_with?: string | null;
  /** body_not_starts_with */
  body_not_starts_with?: string | null;
  /** body_ends_with */
  body_ends_with?: string | null;
  /** body_not_ends_with */
  body_not_ends_with?: string | null;
  /** state */
  state?: IssueState | null;
  /** state_not */
  state_not?: IssueState | null;
  /** state_in */
  state_in?: IssueState[] | null;
  /** state_not_in */
  state_not_in?: IssueState[] | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** action */
  action?: string | null;
  /** action_not */
  action_not?: string | null;
  /** action_in */
  action_in?: string[] | null;
  /** action_not_in */
  action_not_in?: string[] | null;
  /** action_lt */
  action_lt?: string | null;
  /** action_lte */
  action_lte?: string | null;
  /** action_gt */
  action_gt?: string | null;
  /** action_gte */
  action_gte?: string | null;
  /** action_contains */
  action_contains?: string | null;
  /** action_not_contains */
  action_not_contains?: string | null;
  /** action_starts_with */
  action_starts_with?: string | null;
  /** action_not_starts_with */
  action_not_starts_with?: string | null;
  /** action_ends_with */
  action_ends_with?: string | null;
  /** action_not_ends_with */
  action_not_ends_with?: string | null;
  /** createdAt */
  createdAt?: string | null;
  /** createdAt_not */
  createdAt_not?: string | null;
  /** createdAt_in */
  createdAt_in?: string[] | null;
  /** createdAt_not_in */
  createdAt_not_in?: string[] | null;
  /** createdAt_lt */
  createdAt_lt?: string | null;
  /** createdAt_lte */
  createdAt_lte?: string | null;
  /** createdAt_gt */
  createdAt_gt?: string | null;
  /** createdAt_gte */
  createdAt_gte?: string | null;
  /** createdAt_contains */
  createdAt_contains?: string | null;
  /** createdAt_not_contains */
  createdAt_not_contains?: string | null;
  /** createdAt_starts_with */
  createdAt_starts_with?: string | null;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: string | null;
  /** createdAt_ends_with */
  createdAt_ends_with?: string | null;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: string | null;
  /** updatedAt */
  updatedAt?: string | null;
  /** updatedAt_not */
  updatedAt_not?: string | null;
  /** updatedAt_in */
  updatedAt_in?: string[] | null;
  /** updatedAt_not_in */
  updatedAt_not_in?: string[] | null;
  /** updatedAt_lt */
  updatedAt_lt?: string | null;
  /** updatedAt_lte */
  updatedAt_lte?: string | null;
  /** updatedAt_gt */
  updatedAt_gt?: string | null;
  /** updatedAt_gte */
  updatedAt_gte?: string | null;
  /** updatedAt_contains */
  updatedAt_contains?: string | null;
  /** updatedAt_not_contains */
  updatedAt_not_contains?: string | null;
  /** updatedAt_starts_with */
  updatedAt_starts_with?: string | null;
  /** updatedAt_not_starts_with */
  updatedAt_not_starts_with?: string | null;
  /** updatedAt_ends_with */
  updatedAt_ends_with?: string | null;
  /** updatedAt_not_ends_with */
  updatedAt_not_ends_with?: string | null;
  /** closedAt */
  closedAt?: string | null;
  /** closedAt_not */
  closedAt_not?: string | null;
  /** closedAt_in */
  closedAt_in?: string[] | null;
  /** closedAt_not_in */
  closedAt_not_in?: string[] | null;
  /** closedAt_lt */
  closedAt_lt?: string | null;
  /** closedAt_lte */
  closedAt_lte?: string | null;
  /** closedAt_gt */
  closedAt_gt?: string | null;
  /** closedAt_gte */
  closedAt_gte?: string | null;
  /** closedAt_contains */
  closedAt_contains?: string | null;
  /** closedAt_not_contains */
  closedAt_not_contains?: string | null;
  /** closedAt_starts_with */
  closedAt_starts_with?: string | null;
  /** closedAt_not_starts_with */
  closedAt_not_starts_with?: string | null;
  /** closedAt_ends_with */
  closedAt_ends_with?: string | null;
  /** closedAt_not_ends_with */
  closedAt_not_ends_with?: string | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** resolvingCommits */
  resolvingCommits?: _CommitFilter | null;
  /** resolvingCommits_not */
  resolvingCommits_not?: _CommitFilter | null;
  /** resolvingCommits_in */
  resolvingCommits_in?: _CommitFilter | null;
  /** resolvingCommits_not_in */
  resolvingCommits_not_in?: _CommitFilter | null;
  /** resolvingCommits_some */
  resolvingCommits_some?: _CommitFilter | null;
  /** resolvingCommits_none */
  resolvingCommits_none?: _CommitFilter | null;
  /** resolvingCommits_single */
  resolvingCommits_single?: _CommitFilter | null;
  /** resolvingCommits_every */
  resolvingCommits_every?: _CommitFilter | null;
  /** openedBy */
  openedBy?: _ScmIdFilter | null;
  /** openedBy_not */
  openedBy_not?: _ScmIdFilter | null;
  /** openedBy_in */
  openedBy_in?: _ScmIdFilter | null;
  /** openedBy_not_in */
  openedBy_not_in?: _ScmIdFilter | null;
  /** closedBy */
  closedBy?: _ScmIdFilter | null;
  /** closedBy_not */
  closedBy_not?: _ScmIdFilter | null;
  /** closedBy_in */
  closedBy_in?: _ScmIdFilter | null;
  /** closedBy_not_in */
  closedBy_not_in?: _ScmIdFilter | null;
  /** labels */
  labels?: _LabelFilter | null;
  /** labels_not */
  labels_not?: _LabelFilter | null;
  /** labels_in */
  labels_in?: _LabelFilter | null;
  /** labels_not_in */
  labels_not_in?: _LabelFilter | null;
  /** labels_some */
  labels_some?: _LabelFilter | null;
  /** labels_none */
  labels_none?: _LabelFilter | null;
  /** labels_single */
  labels_single?: _LabelFilter | null;
  /** labels_every */
  labels_every?: _LabelFilter | null;
  /** assignees */
  assignees?: _ScmIdFilter | null;
  /** assignees_not */
  assignees_not?: _ScmIdFilter | null;
  /** assignees_in */
  assignees_in?: _ScmIdFilter | null;
  /** assignees_not_in */
  assignees_not_in?: _ScmIdFilter | null;
  /** assignees_some */
  assignees_some?: _ScmIdFilter | null;
  /** assignees_none */
  assignees_none?: _ScmIdFilter | null;
  /** assignees_single */
  assignees_single?: _ScmIdFilter | null;
  /** assignees_every */
  assignees_every?: _ScmIdFilter | null;
  /** lastAssignedBy */
  lastAssignedBy?: _ScmIdFilter | null;
  /** lastAssignedBy_not */
  lastAssignedBy_not?: _ScmIdFilter | null;
  /** lastAssignedBy_in */
  lastAssignedBy_in?: _ScmIdFilter | null;
  /** lastAssignedBy_not_in */
  lastAssignedBy_not_in?: _ScmIdFilter | null;
  /** comments */
  comments?: _CommentFilter | null;
  /** comments_not */
  comments_not?: _CommentFilter | null;
  /** comments_in */
  comments_in?: _CommentFilter | null;
  /** comments_not_in */
  comments_not_in?: _CommentFilter | null;
  /** comments_some */
  comments_some?: _CommentFilter | null;
  /** comments_none */
  comments_none?: _CommentFilter | null;
  /** comments_single */
  comments_single?: _CommentFilter | null;
  /** comments_every */
  comments_every?: _CommentFilter | null;
}
/** Filter Input Type for Repo */
export interface _RepoFilter {
  /** AND */
  AND?: _RepoFilter[] | null;
  /** OR */
  OR?: _RepoFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** owner */
  owner?: string | null;
  /** owner_not */
  owner_not?: string | null;
  /** owner_in */
  owner_in?: string[] | null;
  /** owner_not_in */
  owner_not_in?: string[] | null;
  /** owner_lt */
  owner_lt?: string | null;
  /** owner_lte */
  owner_lte?: string | null;
  /** owner_gt */
  owner_gt?: string | null;
  /** owner_gte */
  owner_gte?: string | null;
  /** owner_contains */
  owner_contains?: string | null;
  /** owner_not_contains */
  owner_not_contains?: string | null;
  /** owner_starts_with */
  owner_starts_with?: string | null;
  /** owner_not_starts_with */
  owner_not_starts_with?: string | null;
  /** owner_ends_with */
  owner_ends_with?: string | null;
  /** owner_not_ends_with */
  owner_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** allowRebaseMerge */
  allowRebaseMerge?: boolean | null;
  /** allowRebaseMerge_not */
  allowRebaseMerge_not?: boolean | null;
  /** allowSquashMerge */
  allowSquashMerge?: boolean | null;
  /** allowSquashMerge_not */
  allowSquashMerge_not?: boolean | null;
  /** allowMergeCommit */
  allowMergeCommit?: boolean | null;
  /** allowMergeCommit_not */
  allowMergeCommit_not?: boolean | null;
  /** repoId */
  repoId?: string | null;
  /** repoId_not */
  repoId_not?: string | null;
  /** repoId_in */
  repoId_in?: string[] | null;
  /** repoId_not_in */
  repoId_not_in?: string[] | null;
  /** repoId_lt */
  repoId_lt?: string | null;
  /** repoId_lte */
  repoId_lte?: string | null;
  /** repoId_gt */
  repoId_gt?: string | null;
  /** repoId_gte */
  repoId_gte?: string | null;
  /** repoId_contains */
  repoId_contains?: string | null;
  /** repoId_not_contains */
  repoId_not_contains?: string | null;
  /** repoId_starts_with */
  repoId_starts_with?: string | null;
  /** repoId_not_starts_with */
  repoId_not_starts_with?: string | null;
  /** repoId_ends_with */
  repoId_ends_with?: string | null;
  /** repoId_not_ends_with */
  repoId_not_ends_with?: string | null;
  /** gitHubId */
  gitHubId?: string | null;
  /** gitHubId_not */
  gitHubId_not?: string | null;
  /** gitHubId_in */
  gitHubId_in?: string[] | null;
  /** gitHubId_not_in */
  gitHubId_not_in?: string[] | null;
  /** gitHubId_lt */
  gitHubId_lt?: string | null;
  /** gitHubId_lte */
  gitHubId_lte?: string | null;
  /** gitHubId_gt */
  gitHubId_gt?: string | null;
  /** gitHubId_gte */
  gitHubId_gte?: string | null;
  /** gitHubId_contains */
  gitHubId_contains?: string | null;
  /** gitHubId_not_contains */
  gitHubId_not_contains?: string | null;
  /** gitHubId_starts_with */
  gitHubId_starts_with?: string | null;
  /** gitHubId_not_starts_with */
  gitHubId_not_starts_with?: string | null;
  /** gitHubId_ends_with */
  gitHubId_ends_with?: string | null;
  /** gitHubId_not_ends_with */
  gitHubId_not_ends_with?: string | null;
  /** defaultBranch */
  defaultBranch?: string | null;
  /** defaultBranch_not */
  defaultBranch_not?: string | null;
  /** defaultBranch_in */
  defaultBranch_in?: string[] | null;
  /** defaultBranch_not_in */
  defaultBranch_not_in?: string[] | null;
  /** defaultBranch_lt */
  defaultBranch_lt?: string | null;
  /** defaultBranch_lte */
  defaultBranch_lte?: string | null;
  /** defaultBranch_gt */
  defaultBranch_gt?: string | null;
  /** defaultBranch_gte */
  defaultBranch_gte?: string | null;
  /** defaultBranch_contains */
  defaultBranch_contains?: string | null;
  /** defaultBranch_not_contains */
  defaultBranch_not_contains?: string | null;
  /** defaultBranch_starts_with */
  defaultBranch_starts_with?: string | null;
  /** defaultBranch_not_starts_with */
  defaultBranch_not_starts_with?: string | null;
  /** defaultBranch_ends_with */
  defaultBranch_ends_with?: string | null;
  /** defaultBranch_not_ends_with */
  defaultBranch_not_ends_with?: string | null;
  /** labels */
  labels?: _LabelFilter | null;
  /** labels_not */
  labels_not?: _LabelFilter | null;
  /** labels_in */
  labels_in?: _LabelFilter | null;
  /** labels_not_in */
  labels_not_in?: _LabelFilter | null;
  /** labels_some */
  labels_some?: _LabelFilter | null;
  /** labels_none */
  labels_none?: _LabelFilter | null;
  /** labels_single */
  labels_single?: _LabelFilter | null;
  /** labels_every */
  labels_every?: _LabelFilter | null;
  /** channels */
  channels?: _ChatChannelFilter | null;
  /** channels_not */
  channels_not?: _ChatChannelFilter | null;
  /** channels_in */
  channels_in?: _ChatChannelFilter | null;
  /** channels_not_in */
  channels_not_in?: _ChatChannelFilter | null;
  /** channels_some */
  channels_some?: _ChatChannelFilter | null;
  /** channels_none */
  channels_none?: _ChatChannelFilter | null;
  /** channels_single */
  channels_single?: _ChatChannelFilter | null;
  /** channels_every */
  channels_every?: _ChatChannelFilter | null;
  /** org */
  org?: _OrgFilter | null;
  /** org_not */
  org_not?: _OrgFilter | null;
  /** org_in */
  org_in?: _OrgFilter | null;
  /** org_not_in */
  org_not_in?: _OrgFilter | null;
  /** issue */
  issue?: _IssueFilter | null;
  /** issue_not */
  issue_not?: _IssueFilter | null;
  /** issue_in */
  issue_in?: _IssueFilter | null;
  /** issue_not_in */
  issue_not_in?: _IssueFilter | null;
  /** issue_some */
  issue_some?: _IssueFilter | null;
  /** issue_none */
  issue_none?: _IssueFilter | null;
  /** issue_single */
  issue_single?: _IssueFilter | null;
  /** issue_every */
  issue_every?: _IssueFilter | null;
  /** issues */
  issues?: _IssueFilter | null;
  /** issues_not */
  issues_not?: _IssueFilter | null;
  /** issues_in */
  issues_in?: _IssueFilter | null;
  /** issues_not_in */
  issues_not_in?: _IssueFilter | null;
  /** issues_some */
  issues_some?: _IssueFilter | null;
  /** issues_none */
  issues_none?: _IssueFilter | null;
  /** issues_single */
  issues_single?: _IssueFilter | null;
  /** issues_every */
  issues_every?: _IssueFilter | null;
  /** pullRequest */
  pullRequest?: _PullRequestFilter | null;
  /** pullRequest_not */
  pullRequest_not?: _PullRequestFilter | null;
  /** pullRequest_in */
  pullRequest_in?: _PullRequestFilter | null;
  /** pullRequest_not_in */
  pullRequest_not_in?: _PullRequestFilter | null;
  /** pullRequest_some */
  pullRequest_some?: _PullRequestFilter | null;
  /** pullRequest_none */
  pullRequest_none?: _PullRequestFilter | null;
  /** pullRequest_single */
  pullRequest_single?: _PullRequestFilter | null;
  /** pullRequest_every */
  pullRequest_every?: _PullRequestFilter | null;
  /** pullRequests */
  pullRequests?: _PullRequestFilter | null;
  /** pullRequests_not */
  pullRequests_not?: _PullRequestFilter | null;
  /** pullRequests_in */
  pullRequests_in?: _PullRequestFilter | null;
  /** pullRequests_not_in */
  pullRequests_not_in?: _PullRequestFilter | null;
  /** pullRequests_some */
  pullRequests_some?: _PullRequestFilter | null;
  /** pullRequests_none */
  pullRequests_none?: _PullRequestFilter | null;
  /** pullRequests_single */
  pullRequests_single?: _PullRequestFilter | null;
  /** pullRequests_every */
  pullRequests_every?: _PullRequestFilter | null;
  /** branches */
  branches?: _BranchFilter | null;
  /** branches_not */
  branches_not?: _BranchFilter | null;
  /** branches_in */
  branches_in?: _BranchFilter | null;
  /** branches_not_in */
  branches_not_in?: _BranchFilter | null;
  /** branches_some */
  branches_some?: _BranchFilter | null;
  /** branches_none */
  branches_none?: _BranchFilter | null;
  /** branches_single */
  branches_single?: _BranchFilter | null;
  /** branches_every */
  branches_every?: _BranchFilter | null;
  /** links */
  links?: _ChannelLinkFilter | null;
  /** links_not */
  links_not?: _ChannelLinkFilter | null;
  /** links_in */
  links_in?: _ChannelLinkFilter | null;
  /** links_not_in */
  links_not_in?: _ChannelLinkFilter | null;
  /** links_some */
  links_some?: _ChannelLinkFilter | null;
  /** links_none */
  links_none?: _ChannelLinkFilter | null;
  /** links_single */
  links_single?: _ChannelLinkFilter | null;
  /** links_every */
  links_every?: _ChannelLinkFilter | null;
  /** webhook */
  webhook?: _WebhookFilter | null;
  /** webhook_not */
  webhook_not?: _WebhookFilter | null;
  /** webhook_in */
  webhook_in?: _WebhookFilter | null;
  /** webhook_not_in */
  webhook_not_in?: _WebhookFilter | null;
}
/** Filter Input Type for Label */
export interface _LabelFilter {
  /** AND */
  AND?: _LabelFilter[] | null;
  /** OR */
  OR?: _LabelFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** default */
  default?: string | null;
  /** default_not */
  default_not?: string | null;
  /** default_in */
  default_in?: string[] | null;
  /** default_not_in */
  default_not_in?: string[] | null;
  /** default_lt */
  default_lt?: string | null;
  /** default_lte */
  default_lte?: string | null;
  /** default_gt */
  default_gt?: string | null;
  /** default_gte */
  default_gte?: string | null;
  /** default_contains */
  default_contains?: string | null;
  /** default_not_contains */
  default_not_contains?: string | null;
  /** default_starts_with */
  default_starts_with?: string | null;
  /** default_not_starts_with */
  default_not_starts_with?: string | null;
  /** default_ends_with */
  default_ends_with?: string | null;
  /** default_not_ends_with */
  default_not_ends_with?: string | null;
  /** color */
  color?: string | null;
  /** color_not */
  color_not?: string | null;
  /** color_in */
  color_in?: string[] | null;
  /** color_not_in */
  color_not_in?: string[] | null;
  /** color_lt */
  color_lt?: string | null;
  /** color_lte */
  color_lte?: string | null;
  /** color_gt */
  color_gt?: string | null;
  /** color_gte */
  color_gte?: string | null;
  /** color_contains */
  color_contains?: string | null;
  /** color_not_contains */
  color_not_contains?: string | null;
  /** color_starts_with */
  color_starts_with?: string | null;
  /** color_not_starts_with */
  color_not_starts_with?: string | null;
  /** color_ends_with */
  color_ends_with?: string | null;
  /** color_not_ends_with */
  color_not_ends_with?: string | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
}
/** Filter Input Type for ChatChannel */
export interface _ChatChannelFilter {
  /** AND */
  AND?: _ChatChannelFilter[] | null;
  /** OR */
  OR?: _ChatChannelFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** provider */
  provider?: string | null;
  /** provider_not */
  provider_not?: string | null;
  /** provider_in */
  provider_in?: string[] | null;
  /** provider_not_in */
  provider_not_in?: string[] | null;
  /** provider_lt */
  provider_lt?: string | null;
  /** provider_lte */
  provider_lte?: string | null;
  /** provider_gt */
  provider_gt?: string | null;
  /** provider_gte */
  provider_gte?: string | null;
  /** provider_contains */
  provider_contains?: string | null;
  /** provider_not_contains */
  provider_not_contains?: string | null;
  /** provider_starts_with */
  provider_starts_with?: string | null;
  /** provider_not_starts_with */
  provider_not_starts_with?: string | null;
  /** provider_ends_with */
  provider_ends_with?: string | null;
  /** provider_not_ends_with */
  provider_not_ends_with?: string | null;
  /** normalizedName */
  normalizedName?: string | null;
  /** normalizedName_not */
  normalizedName_not?: string | null;
  /** normalizedName_in */
  normalizedName_in?: string[] | null;
  /** normalizedName_not_in */
  normalizedName_not_in?: string[] | null;
  /** normalizedName_lt */
  normalizedName_lt?: string | null;
  /** normalizedName_lte */
  normalizedName_lte?: string | null;
  /** normalizedName_gt */
  normalizedName_gt?: string | null;
  /** normalizedName_gte */
  normalizedName_gte?: string | null;
  /** normalizedName_contains */
  normalizedName_contains?: string | null;
  /** normalizedName_not_contains */
  normalizedName_not_contains?: string | null;
  /** normalizedName_starts_with */
  normalizedName_starts_with?: string | null;
  /** normalizedName_not_starts_with */
  normalizedName_not_starts_with?: string | null;
  /** normalizedName_ends_with */
  normalizedName_ends_with?: string | null;
  /** normalizedName_not_ends_with */
  normalizedName_not_ends_with?: string | null;
  /** channelId */
  channelId?: string | null;
  /** channelId_not */
  channelId_not?: string | null;
  /** channelId_in */
  channelId_in?: string[] | null;
  /** channelId_not_in */
  channelId_not_in?: string[] | null;
  /** channelId_lt */
  channelId_lt?: string | null;
  /** channelId_lte */
  channelId_lte?: string | null;
  /** channelId_gt */
  channelId_gt?: string | null;
  /** channelId_gte */
  channelId_gte?: string | null;
  /** channelId_contains */
  channelId_contains?: string | null;
  /** channelId_not_contains */
  channelId_not_contains?: string | null;
  /** channelId_starts_with */
  channelId_starts_with?: string | null;
  /** channelId_not_starts_with */
  channelId_not_starts_with?: string | null;
  /** channelId_ends_with */
  channelId_ends_with?: string | null;
  /** channelId_not_ends_with */
  channelId_not_ends_with?: string | null;
  /** isDefault */
  isDefault?: boolean | null;
  /** isDefault_not */
  isDefault_not?: boolean | null;
  /** botInvitedSelf */
  botInvitedSelf?: boolean | null;
  /** botInvitedSelf_not */
  botInvitedSelf_not?: boolean | null;
  /** createdBy */
  createdBy?: _ChatIdFilter | null;
  /** createdBy_not */
  createdBy_not?: _ChatIdFilter | null;
  /** createdBy_in */
  createdBy_in?: _ChatIdFilter | null;
  /** createdBy_not_in */
  createdBy_not_in?: _ChatIdFilter | null;
  /** repos */
  repos?: _RepoFilter | null;
  /** repos_not */
  repos_not?: _RepoFilter | null;
  /** repos_in */
  repos_in?: _RepoFilter | null;
  /** repos_not_in */
  repos_not_in?: _RepoFilter | null;
  /** repos_some */
  repos_some?: _RepoFilter | null;
  /** repos_none */
  repos_none?: _RepoFilter | null;
  /** repos_single */
  repos_single?: _RepoFilter | null;
  /** repos_every */
  repos_every?: _RepoFilter | null;
  /** links */
  links?: _ChannelLinkFilter | null;
  /** links_not */
  links_not?: _ChannelLinkFilter | null;
  /** links_in */
  links_in?: _ChannelLinkFilter | null;
  /** links_not_in */
  links_not_in?: _ChannelLinkFilter | null;
  /** links_some */
  links_some?: _ChannelLinkFilter | null;
  /** links_none */
  links_none?: _ChannelLinkFilter | null;
  /** links_single */
  links_single?: _ChannelLinkFilter | null;
  /** links_every */
  links_every?: _ChannelLinkFilter | null;
  /** members */
  members?: _ChatIdFilter | null;
  /** members_not */
  members_not?: _ChatIdFilter | null;
  /** members_in */
  members_in?: _ChatIdFilter | null;
  /** members_not_in */
  members_not_in?: _ChatIdFilter | null;
  /** members_some */
  members_some?: _ChatIdFilter | null;
  /** members_none */
  members_none?: _ChatIdFilter | null;
  /** members_single */
  members_single?: _ChatIdFilter | null;
  /** members_every */
  members_every?: _ChatIdFilter | null;
  /** team */
  team?: _ChatTeamFilter | null;
  /** team_not */
  team_not?: _ChatTeamFilter | null;
  /** team_in */
  team_in?: _ChatTeamFilter | null;
  /** team_not_in */
  team_not_in?: _ChatTeamFilter | null;
}
/** Filter Input Type for ChatId */
export interface _ChatIdFilter {
  /** AND */
  AND?: _ChatIdFilter[] | null;
  /** OR */
  OR?: _ChatIdFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** screenName */
  screenName?: string | null;
  /** screenName_not */
  screenName_not?: string | null;
  /** screenName_in */
  screenName_in?: string[] | null;
  /** screenName_not_in */
  screenName_not_in?: string[] | null;
  /** screenName_lt */
  screenName_lt?: string | null;
  /** screenName_lte */
  screenName_lte?: string | null;
  /** screenName_gt */
  screenName_gt?: string | null;
  /** screenName_gte */
  screenName_gte?: string | null;
  /** screenName_contains */
  screenName_contains?: string | null;
  /** screenName_not_contains */
  screenName_not_contains?: string | null;
  /** screenName_starts_with */
  screenName_starts_with?: string | null;
  /** screenName_not_starts_with */
  screenName_not_starts_with?: string | null;
  /** screenName_ends_with */
  screenName_ends_with?: string | null;
  /** screenName_not_ends_with */
  screenName_not_ends_with?: string | null;
  /** userId */
  userId?: string | null;
  /** userId_not */
  userId_not?: string | null;
  /** userId_in */
  userId_in?: string[] | null;
  /** userId_not_in */
  userId_not_in?: string[] | null;
  /** userId_lt */
  userId_lt?: string | null;
  /** userId_lte */
  userId_lte?: string | null;
  /** userId_gt */
  userId_gt?: string | null;
  /** userId_gte */
  userId_gte?: string | null;
  /** userId_contains */
  userId_contains?: string | null;
  /** userId_not_contains */
  userId_not_contains?: string | null;
  /** userId_starts_with */
  userId_starts_with?: string | null;
  /** userId_not_starts_with */
  userId_not_starts_with?: string | null;
  /** userId_ends_with */
  userId_ends_with?: string | null;
  /** userId_not_ends_with */
  userId_not_ends_with?: string | null;
  /** provider */
  provider?: string | null;
  /** provider_not */
  provider_not?: string | null;
  /** provider_in */
  provider_in?: string[] | null;
  /** provider_not_in */
  provider_not_in?: string[] | null;
  /** provider_lt */
  provider_lt?: string | null;
  /** provider_lte */
  provider_lte?: string | null;
  /** provider_gt */
  provider_gt?: string | null;
  /** provider_gte */
  provider_gte?: string | null;
  /** provider_contains */
  provider_contains?: string | null;
  /** provider_not_contains */
  provider_not_contains?: string | null;
  /** provider_starts_with */
  provider_starts_with?: string | null;
  /** provider_not_starts_with */
  provider_not_starts_with?: string | null;
  /** provider_ends_with */
  provider_ends_with?: string | null;
  /** provider_not_ends_with */
  provider_not_ends_with?: string | null;
  /** isAtomistBot */
  isAtomistBot?: string | null;
  /** isAtomistBot_not */
  isAtomistBot_not?: string | null;
  /** isAtomistBot_in */
  isAtomistBot_in?: string[] | null;
  /** isAtomistBot_not_in */
  isAtomistBot_not_in?: string[] | null;
  /** isAtomistBot_lt */
  isAtomistBot_lt?: string | null;
  /** isAtomistBot_lte */
  isAtomistBot_lte?: string | null;
  /** isAtomistBot_gt */
  isAtomistBot_gt?: string | null;
  /** isAtomistBot_gte */
  isAtomistBot_gte?: string | null;
  /** isAtomistBot_contains */
  isAtomistBot_contains?: string | null;
  /** isAtomistBot_not_contains */
  isAtomistBot_not_contains?: string | null;
  /** isAtomistBot_starts_with */
  isAtomistBot_starts_with?: string | null;
  /** isAtomistBot_not_starts_with */
  isAtomistBot_not_starts_with?: string | null;
  /** isAtomistBot_ends_with */
  isAtomistBot_ends_with?: string | null;
  /** isAtomistBot_not_ends_with */
  isAtomistBot_not_ends_with?: string | null;
  /** isOwner */
  isOwner?: string | null;
  /** isOwner_not */
  isOwner_not?: string | null;
  /** isOwner_in */
  isOwner_in?: string[] | null;
  /** isOwner_not_in */
  isOwner_not_in?: string[] | null;
  /** isOwner_lt */
  isOwner_lt?: string | null;
  /** isOwner_lte */
  isOwner_lte?: string | null;
  /** isOwner_gt */
  isOwner_gt?: string | null;
  /** isOwner_gte */
  isOwner_gte?: string | null;
  /** isOwner_contains */
  isOwner_contains?: string | null;
  /** isOwner_not_contains */
  isOwner_not_contains?: string | null;
  /** isOwner_starts_with */
  isOwner_starts_with?: string | null;
  /** isOwner_not_starts_with */
  isOwner_not_starts_with?: string | null;
  /** isOwner_ends_with */
  isOwner_ends_with?: string | null;
  /** isOwner_not_ends_with */
  isOwner_not_ends_with?: string | null;
  /** isPrimaryOwner */
  isPrimaryOwner?: string | null;
  /** isPrimaryOwner_not */
  isPrimaryOwner_not?: string | null;
  /** isPrimaryOwner_in */
  isPrimaryOwner_in?: string[] | null;
  /** isPrimaryOwner_not_in */
  isPrimaryOwner_not_in?: string[] | null;
  /** isPrimaryOwner_lt */
  isPrimaryOwner_lt?: string | null;
  /** isPrimaryOwner_lte */
  isPrimaryOwner_lte?: string | null;
  /** isPrimaryOwner_gt */
  isPrimaryOwner_gt?: string | null;
  /** isPrimaryOwner_gte */
  isPrimaryOwner_gte?: string | null;
  /** isPrimaryOwner_contains */
  isPrimaryOwner_contains?: string | null;
  /** isPrimaryOwner_not_contains */
  isPrimaryOwner_not_contains?: string | null;
  /** isPrimaryOwner_starts_with */
  isPrimaryOwner_starts_with?: string | null;
  /** isPrimaryOwner_not_starts_with */
  isPrimaryOwner_not_starts_with?: string | null;
  /** isPrimaryOwner_ends_with */
  isPrimaryOwner_ends_with?: string | null;
  /** isPrimaryOwner_not_ends_with */
  isPrimaryOwner_not_ends_with?: string | null;
  /** isAdmin */
  isAdmin?: string | null;
  /** isAdmin_not */
  isAdmin_not?: string | null;
  /** isAdmin_in */
  isAdmin_in?: string[] | null;
  /** isAdmin_not_in */
  isAdmin_not_in?: string[] | null;
  /** isAdmin_lt */
  isAdmin_lt?: string | null;
  /** isAdmin_lte */
  isAdmin_lte?: string | null;
  /** isAdmin_gt */
  isAdmin_gt?: string | null;
  /** isAdmin_gte */
  isAdmin_gte?: string | null;
  /** isAdmin_contains */
  isAdmin_contains?: string | null;
  /** isAdmin_not_contains */
  isAdmin_not_contains?: string | null;
  /** isAdmin_starts_with */
  isAdmin_starts_with?: string | null;
  /** isAdmin_not_starts_with */
  isAdmin_not_starts_with?: string | null;
  /** isAdmin_ends_with */
  isAdmin_ends_with?: string | null;
  /** isAdmin_not_ends_with */
  isAdmin_not_ends_with?: string | null;
  /** isBot */
  isBot?: string | null;
  /** isBot_not */
  isBot_not?: string | null;
  /** isBot_in */
  isBot_in?: string[] | null;
  /** isBot_not_in */
  isBot_not_in?: string[] | null;
  /** isBot_lt */
  isBot_lt?: string | null;
  /** isBot_lte */
  isBot_lte?: string | null;
  /** isBot_gt */
  isBot_gt?: string | null;
  /** isBot_gte */
  isBot_gte?: string | null;
  /** isBot_contains */
  isBot_contains?: string | null;
  /** isBot_not_contains */
  isBot_not_contains?: string | null;
  /** isBot_starts_with */
  isBot_starts_with?: string | null;
  /** isBot_not_starts_with */
  isBot_not_starts_with?: string | null;
  /** isBot_ends_with */
  isBot_ends_with?: string | null;
  /** isBot_not_ends_with */
  isBot_not_ends_with?: string | null;
  /** timezoneLabel */
  timezoneLabel?: string | null;
  /** timezoneLabel_not */
  timezoneLabel_not?: string | null;
  /** timezoneLabel_in */
  timezoneLabel_in?: string[] | null;
  /** timezoneLabel_not_in */
  timezoneLabel_not_in?: string[] | null;
  /** timezoneLabel_lt */
  timezoneLabel_lt?: string | null;
  /** timezoneLabel_lte */
  timezoneLabel_lte?: string | null;
  /** timezoneLabel_gt */
  timezoneLabel_gt?: string | null;
  /** timezoneLabel_gte */
  timezoneLabel_gte?: string | null;
  /** timezoneLabel_contains */
  timezoneLabel_contains?: string | null;
  /** timezoneLabel_not_contains */
  timezoneLabel_not_contains?: string | null;
  /** timezoneLabel_starts_with */
  timezoneLabel_starts_with?: string | null;
  /** timezoneLabel_not_starts_with */
  timezoneLabel_not_starts_with?: string | null;
  /** timezoneLabel_ends_with */
  timezoneLabel_ends_with?: string | null;
  /** timezoneLabel_not_ends_with */
  timezoneLabel_not_ends_with?: string | null;
  /** channels */
  channels?: _ChatChannelFilter | null;
  /** channels_not */
  channels_not?: _ChatChannelFilter | null;
  /** channels_in */
  channels_in?: _ChatChannelFilter | null;
  /** channels_not_in */
  channels_not_in?: _ChatChannelFilter | null;
  /** channels_some */
  channels_some?: _ChatChannelFilter | null;
  /** channels_none */
  channels_none?: _ChatChannelFilter | null;
  /** channels_single */
  channels_single?: _ChatChannelFilter | null;
  /** channels_every */
  channels_every?: _ChatChannelFilter | null;
  /** emails */
  emails?: _EmailFilter | null;
  /** emails_not */
  emails_not?: _EmailFilter | null;
  /** emails_in */
  emails_in?: _EmailFilter | null;
  /** emails_not_in */
  emails_not_in?: _EmailFilter | null;
  /** emails_some */
  emails_some?: _EmailFilter | null;
  /** emails_none */
  emails_none?: _EmailFilter | null;
  /** emails_single */
  emails_single?: _EmailFilter | null;
  /** emails_every */
  emails_every?: _EmailFilter | null;
  /** chatTeam */
  chatTeam?: _ChatTeamFilter | null;
  /** chatTeam_not */
  chatTeam_not?: _ChatTeamFilter | null;
  /** chatTeam_in */
  chatTeam_in?: _ChatTeamFilter | null;
  /** chatTeam_not_in */
  chatTeam_not_in?: _ChatTeamFilter | null;
  /** channelsCreated */
  channelsCreated?: _ChatChannelFilter | null;
  /** channelsCreated_not */
  channelsCreated_not?: _ChatChannelFilter | null;
  /** channelsCreated_in */
  channelsCreated_in?: _ChatChannelFilter | null;
  /** channelsCreated_not_in */
  channelsCreated_not_in?: _ChatChannelFilter | null;
  /** channelsCreated_some */
  channelsCreated_some?: _ChatChannelFilter | null;
  /** channelsCreated_none */
  channelsCreated_none?: _ChatChannelFilter | null;
  /** channelsCreated_single */
  channelsCreated_single?: _ChatChannelFilter | null;
  /** channelsCreated_every */
  channelsCreated_every?: _ChatChannelFilter | null;
  /** person */
  person?: _PersonFilter | null;
  /** person_not */
  person_not?: _PersonFilter | null;
  /** person_in */
  person_in?: _PersonFilter | null;
  /** person_not_in */
  person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for Email */
export interface _EmailFilter {
  /** AND */
  AND?: _EmailFilter[] | null;
  /** OR */
  OR?: _EmailFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** address */
  address?: string | null;
  /** address_not */
  address_not?: string | null;
  /** address_in */
  address_in?: string[] | null;
  /** address_not_in */
  address_not_in?: string[] | null;
  /** address_lt */
  address_lt?: string | null;
  /** address_lte */
  address_lte?: string | null;
  /** address_gt */
  address_gt?: string | null;
  /** address_gte */
  address_gte?: string | null;
  /** address_contains */
  address_contains?: string | null;
  /** address_not_contains */
  address_not_contains?: string | null;
  /** address_starts_with */
  address_starts_with?: string | null;
  /** address_not_starts_with */
  address_not_starts_with?: string | null;
  /** address_ends_with */
  address_ends_with?: string | null;
  /** address_not_ends_with */
  address_not_ends_with?: string | null;
  /** scmId */
  scmId?: _ScmIdFilter | null;
  /** scmId_not */
  scmId_not?: _ScmIdFilter | null;
  /** scmId_in */
  scmId_in?: _ScmIdFilter | null;
  /** scmId_not_in */
  scmId_not_in?: _ScmIdFilter | null;
  /** gitHubId */
  gitHubId?: _GitHubIdFilter | null;
  /** gitHubId_not */
  gitHubId_not?: _GitHubIdFilter | null;
  /** gitHubId_in */
  gitHubId_in?: _GitHubIdFilter | null;
  /** gitHubId_not_in */
  gitHubId_not_in?: _GitHubIdFilter | null;
  /** chatId */
  chatId?: _ChatIdFilter | null;
  /** chatId_not */
  chatId_not?: _ChatIdFilter | null;
  /** chatId_in */
  chatId_in?: _ChatIdFilter | null;
  /** chatId_not_in */
  chatId_not_in?: _ChatIdFilter | null;
  /** person */
  person?: _PersonFilter | null;
  /** person_not */
  person_not?: _PersonFilter | null;
  /** person_in */
  person_in?: _PersonFilter | null;
  /** person_not_in */
  person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for SCMId */
export interface _ScmIdFilter {
  /** AND */
  AND?: _ScmIdFilter[] | null;
  /** OR */
  OR?: _ScmIdFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** login */
  login?: string | null;
  /** login_not */
  login_not?: string | null;
  /** login_in */
  login_in?: string[] | null;
  /** login_not_in */
  login_not_in?: string[] | null;
  /** login_lt */
  login_lt?: string | null;
  /** login_lte */
  login_lte?: string | null;
  /** login_gt */
  login_gt?: string | null;
  /** login_gte */
  login_gte?: string | null;
  /** login_contains */
  login_contains?: string | null;
  /** login_not_contains */
  login_not_contains?: string | null;
  /** login_starts_with */
  login_starts_with?: string | null;
  /** login_not_starts_with */
  login_not_starts_with?: string | null;
  /** login_ends_with */
  login_ends_with?: string | null;
  /** login_not_ends_with */
  login_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** provider */
  provider?: _GitHubProviderFilter | null;
  /** provider_not */
  provider_not?: _GitHubProviderFilter | null;
  /** provider_in */
  provider_in?: _GitHubProviderFilter | null;
  /** provider_not_in */
  provider_not_in?: _GitHubProviderFilter | null;
  /** provider_some */
  provider_some?: _GitHubProviderFilter | null;
  /** provider_none */
  provider_none?: _GitHubProviderFilter | null;
  /** provider_single */
  provider_single?: _GitHubProviderFilter | null;
  /** provider_every */
  provider_every?: _GitHubProviderFilter | null;
  /** scmProvider */
  scmProvider?: _ScmProviderFilter | null;
  /** scmProvider_not */
  scmProvider_not?: _ScmProviderFilter | null;
  /** scmProvider_in */
  scmProvider_in?: _ScmProviderFilter | null;
  /** scmProvider_not_in */
  scmProvider_not_in?: _ScmProviderFilter | null;
  /** emails */
  emails?: _EmailFilter | null;
  /** emails_not */
  emails_not?: _EmailFilter | null;
  /** emails_in */
  emails_in?: _EmailFilter | null;
  /** emails_not_in */
  emails_not_in?: _EmailFilter | null;
  /** emails_some */
  emails_some?: _EmailFilter | null;
  /** emails_none */
  emails_none?: _EmailFilter | null;
  /** emails_single */
  emails_single?: _EmailFilter | null;
  /** emails_every */
  emails_every?: _EmailFilter | null;
  /** person */
  person?: _PersonFilter | null;
  /** person_not */
  person_not?: _PersonFilter | null;
  /** person_in */
  person_in?: _PersonFilter | null;
  /** person_not_in */
  person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for GitHubProvider */
export interface _GitHubProviderFilter {
  /** AND */
  AND?: _GitHubProviderFilter[] | null;
  /** OR */
  OR?: _GitHubProviderFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** providerId */
  providerId?: string | null;
  /** providerId_not */
  providerId_not?: string | null;
  /** providerId_in */
  providerId_in?: string[] | null;
  /** providerId_not_in */
  providerId_not_in?: string[] | null;
  /** providerId_lt */
  providerId_lt?: string | null;
  /** providerId_lte */
  providerId_lte?: string | null;
  /** providerId_gt */
  providerId_gt?: string | null;
  /** providerId_gte */
  providerId_gte?: string | null;
  /** providerId_contains */
  providerId_contains?: string | null;
  /** providerId_not_contains */
  providerId_not_contains?: string | null;
  /** providerId_starts_with */
  providerId_starts_with?: string | null;
  /** providerId_not_starts_with */
  providerId_not_starts_with?: string | null;
  /** providerId_ends_with */
  providerId_ends_with?: string | null;
  /** providerId_not_ends_with */
  providerId_not_ends_with?: string | null;
  /** apiUrl */
  apiUrl?: string | null;
  /** apiUrl_not */
  apiUrl_not?: string | null;
  /** apiUrl_in */
  apiUrl_in?: string[] | null;
  /** apiUrl_not_in */
  apiUrl_not_in?: string[] | null;
  /** apiUrl_lt */
  apiUrl_lt?: string | null;
  /** apiUrl_lte */
  apiUrl_lte?: string | null;
  /** apiUrl_gt */
  apiUrl_gt?: string | null;
  /** apiUrl_gte */
  apiUrl_gte?: string | null;
  /** apiUrl_contains */
  apiUrl_contains?: string | null;
  /** apiUrl_not_contains */
  apiUrl_not_contains?: string | null;
  /** apiUrl_starts_with */
  apiUrl_starts_with?: string | null;
  /** apiUrl_not_starts_with */
  apiUrl_not_starts_with?: string | null;
  /** apiUrl_ends_with */
  apiUrl_ends_with?: string | null;
  /** apiUrl_not_ends_with */
  apiUrl_not_ends_with?: string | null;
  /** gitUrl */
  gitUrl?: string | null;
  /** gitUrl_not */
  gitUrl_not?: string | null;
  /** gitUrl_in */
  gitUrl_in?: string[] | null;
  /** gitUrl_not_in */
  gitUrl_not_in?: string[] | null;
  /** gitUrl_lt */
  gitUrl_lt?: string | null;
  /** gitUrl_lte */
  gitUrl_lte?: string | null;
  /** gitUrl_gt */
  gitUrl_gt?: string | null;
  /** gitUrl_gte */
  gitUrl_gte?: string | null;
  /** gitUrl_contains */
  gitUrl_contains?: string | null;
  /** gitUrl_not_contains */
  gitUrl_not_contains?: string | null;
  /** gitUrl_starts_with */
  gitUrl_starts_with?: string | null;
  /** gitUrl_not_starts_with */
  gitUrl_not_starts_with?: string | null;
  /** gitUrl_ends_with */
  gitUrl_ends_with?: string | null;
  /** gitUrl_not_ends_with */
  gitUrl_not_ends_with?: string | null;
  /** providerType */
  providerType?: ProviderType | null;
  /** providerType_not */
  providerType_not?: ProviderType | null;
  /** providerType_in */
  providerType_in?: ProviderType[] | null;
  /** providerType_not_in */
  providerType_not_in?: ProviderType[] | null;
  /** team */
  team?: _TeamFilter | null;
  /** team_not */
  team_not?: _TeamFilter | null;
  /** team_in */
  team_in?: _TeamFilter | null;
  /** team_not_in */
  team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for Team */
export interface _TeamFilter {
  /** AND */
  AND?: _TeamFilter[] | null;
  /** OR */
  OR?: _TeamFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** description */
  description?: string | null;
  /** description_not */
  description_not?: string | null;
  /** description_in */
  description_in?: string[] | null;
  /** description_not_in */
  description_not_in?: string[] | null;
  /** description_lt */
  description_lt?: string | null;
  /** description_lte */
  description_lte?: string | null;
  /** description_gt */
  description_gt?: string | null;
  /** description_gte */
  description_gte?: string | null;
  /** description_contains */
  description_contains?: string | null;
  /** description_not_contains */
  description_not_contains?: string | null;
  /** description_starts_with */
  description_starts_with?: string | null;
  /** description_not_starts_with */
  description_not_starts_with?: string | null;
  /** description_ends_with */
  description_ends_with?: string | null;
  /** description_not_ends_with */
  description_not_ends_with?: string | null;
  /** iconUrl */
  iconUrl?: string | null;
  /** iconUrl_not */
  iconUrl_not?: string | null;
  /** iconUrl_in */
  iconUrl_in?: string[] | null;
  /** iconUrl_not_in */
  iconUrl_not_in?: string[] | null;
  /** iconUrl_lt */
  iconUrl_lt?: string | null;
  /** iconUrl_lte */
  iconUrl_lte?: string | null;
  /** iconUrl_gt */
  iconUrl_gt?: string | null;
  /** iconUrl_gte */
  iconUrl_gte?: string | null;
  /** iconUrl_contains */
  iconUrl_contains?: string | null;
  /** iconUrl_not_contains */
  iconUrl_not_contains?: string | null;
  /** iconUrl_starts_with */
  iconUrl_starts_with?: string | null;
  /** iconUrl_not_starts_with */
  iconUrl_not_starts_with?: string | null;
  /** iconUrl_ends_with */
  iconUrl_ends_with?: string | null;
  /** iconUrl_not_ends_with */
  iconUrl_not_ends_with?: string | null;
  /** createdAt */
  createdAt?: string | null;
  /** createdAt_not */
  createdAt_not?: string | null;
  /** createdAt_in */
  createdAt_in?: string[] | null;
  /** createdAt_not_in */
  createdAt_not_in?: string[] | null;
  /** createdAt_lt */
  createdAt_lt?: string | null;
  /** createdAt_lte */
  createdAt_lte?: string | null;
  /** createdAt_gt */
  createdAt_gt?: string | null;
  /** createdAt_gte */
  createdAt_gte?: string | null;
  /** createdAt_contains */
  createdAt_contains?: string | null;
  /** createdAt_not_contains */
  createdAt_not_contains?: string | null;
  /** createdAt_starts_with */
  createdAt_starts_with?: string | null;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: string | null;
  /** createdAt_ends_with */
  createdAt_ends_with?: string | null;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: string | null;
  /** persons */
  persons?: _PersonFilter | null;
  /** persons_not */
  persons_not?: _PersonFilter | null;
  /** persons_in */
  persons_in?: _PersonFilter | null;
  /** persons_not_in */
  persons_not_in?: _PersonFilter | null;
  /** persons_some */
  persons_some?: _PersonFilter | null;
  /** persons_none */
  persons_none?: _PersonFilter | null;
  /** persons_single */
  persons_single?: _PersonFilter | null;
  /** persons_every */
  persons_every?: _PersonFilter | null;
  /** orgs */
  orgs?: _OrgFilter | null;
  /** orgs_not */
  orgs_not?: _OrgFilter | null;
  /** orgs_in */
  orgs_in?: _OrgFilter | null;
  /** orgs_not_in */
  orgs_not_in?: _OrgFilter | null;
  /** orgs_some */
  orgs_some?: _OrgFilter | null;
  /** orgs_none */
  orgs_none?: _OrgFilter | null;
  /** orgs_single */
  orgs_single?: _OrgFilter | null;
  /** orgs_every */
  orgs_every?: _OrgFilter | null;
  /** providers */
  providers?: _GitHubProviderFilter | null;
  /** providers_not */
  providers_not?: _GitHubProviderFilter | null;
  /** providers_in */
  providers_in?: _GitHubProviderFilter | null;
  /** providers_not_in */
  providers_not_in?: _GitHubProviderFilter | null;
  /** providers_some */
  providers_some?: _GitHubProviderFilter | null;
  /** providers_none */
  providers_none?: _GitHubProviderFilter | null;
  /** providers_single */
  providers_single?: _GitHubProviderFilter | null;
  /** providers_every */
  providers_every?: _GitHubProviderFilter | null;
  /** scmProviders */
  scmProviders?: _ScmProviderFilter | null;
  /** scmProviders_not */
  scmProviders_not?: _ScmProviderFilter | null;
  /** scmProviders_in */
  scmProviders_in?: _ScmProviderFilter | null;
  /** scmProviders_not_in */
  scmProviders_not_in?: _ScmProviderFilter | null;
  /** scmProviders_some */
  scmProviders_some?: _ScmProviderFilter | null;
  /** scmProviders_none */
  scmProviders_none?: _ScmProviderFilter | null;
  /** scmProviders_single */
  scmProviders_single?: _ScmProviderFilter | null;
  /** scmProviders_every */
  scmProviders_every?: _ScmProviderFilter | null;
  /** chatTeams */
  chatTeams?: _ChatTeamFilter | null;
  /** chatTeams_not */
  chatTeams_not?: _ChatTeamFilter | null;
  /** chatTeams_in */
  chatTeams_in?: _ChatTeamFilter | null;
  /** chatTeams_not_in */
  chatTeams_not_in?: _ChatTeamFilter | null;
  /** chatTeams_some */
  chatTeams_some?: _ChatTeamFilter | null;
  /** chatTeams_none */
  chatTeams_none?: _ChatTeamFilter | null;
  /** chatTeams_single */
  chatTeams_single?: _ChatTeamFilter | null;
  /** chatTeams_every */
  chatTeams_every?: _ChatTeamFilter | null;
}
/** Filter Input Type for Person */
export interface _PersonFilter {
  /** AND */
  AND?: _PersonFilter[] | null;
  /** OR */
  OR?: _PersonFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** forename */
  forename?: string | null;
  /** forename_not */
  forename_not?: string | null;
  /** forename_in */
  forename_in?: string[] | null;
  /** forename_not_in */
  forename_not_in?: string[] | null;
  /** forename_lt */
  forename_lt?: string | null;
  /** forename_lte */
  forename_lte?: string | null;
  /** forename_gt */
  forename_gt?: string | null;
  /** forename_gte */
  forename_gte?: string | null;
  /** forename_contains */
  forename_contains?: string | null;
  /** forename_not_contains */
  forename_not_contains?: string | null;
  /** forename_starts_with */
  forename_starts_with?: string | null;
  /** forename_not_starts_with */
  forename_not_starts_with?: string | null;
  /** forename_ends_with */
  forename_ends_with?: string | null;
  /** forename_not_ends_with */
  forename_not_ends_with?: string | null;
  /** surname */
  surname?: string | null;
  /** surname_not */
  surname_not?: string | null;
  /** surname_in */
  surname_in?: string[] | null;
  /** surname_not_in */
  surname_not_in?: string[] | null;
  /** surname_lt */
  surname_lt?: string | null;
  /** surname_lte */
  surname_lte?: string | null;
  /** surname_gt */
  surname_gt?: string | null;
  /** surname_gte */
  surname_gte?: string | null;
  /** surname_contains */
  surname_contains?: string | null;
  /** surname_not_contains */
  surname_not_contains?: string | null;
  /** surname_starts_with */
  surname_starts_with?: string | null;
  /** surname_not_starts_with */
  surname_not_starts_with?: string | null;
  /** surname_ends_with */
  surname_ends_with?: string | null;
  /** surname_not_ends_with */
  surname_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** scmId */
  scmId?: _ScmIdFilter | null;
  /** scmId_not */
  scmId_not?: _ScmIdFilter | null;
  /** scmId_in */
  scmId_in?: _ScmIdFilter | null;
  /** scmId_not_in */
  scmId_not_in?: _ScmIdFilter | null;
  /** gitHubId */
  gitHubId?: _GitHubIdFilter | null;
  /** gitHubId_not */
  gitHubId_not?: _GitHubIdFilter | null;
  /** gitHubId_in */
  gitHubId_in?: _GitHubIdFilter | null;
  /** gitHubId_not_in */
  gitHubId_not_in?: _GitHubIdFilter | null;
  /** chatId */
  chatId?: _ChatIdFilter | null;
  /** chatId_not */
  chatId_not?: _ChatIdFilter | null;
  /** chatId_in */
  chatId_in?: _ChatIdFilter | null;
  /** chatId_not_in */
  chatId_not_in?: _ChatIdFilter | null;
  /** emails */
  emails?: _EmailFilter | null;
  /** emails_not */
  emails_not?: _EmailFilter | null;
  /** emails_in */
  emails_in?: _EmailFilter | null;
  /** emails_not_in */
  emails_not_in?: _EmailFilter | null;
  /** emails_some */
  emails_some?: _EmailFilter | null;
  /** emails_none */
  emails_none?: _EmailFilter | null;
  /** emails_single */
  emails_single?: _EmailFilter | null;
  /** emails_every */
  emails_every?: _EmailFilter | null;
  /** team */
  team?: _TeamFilter | null;
  /** team_not */
  team_not?: _TeamFilter | null;
  /** team_in */
  team_in?: _TeamFilter | null;
  /** team_not_in */
  team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for GitHubId */
export interface _GitHubIdFilter {
  /** AND */
  AND?: _GitHubIdFilter[] | null;
  /** OR */
  OR?: _GitHubIdFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** login */
  login?: string | null;
  /** login_not */
  login_not?: string | null;
  /** login_in */
  login_in?: string[] | null;
  /** login_not_in */
  login_not_in?: string[] | null;
  /** login_lt */
  login_lt?: string | null;
  /** login_lte */
  login_lte?: string | null;
  /** login_gt */
  login_gt?: string | null;
  /** login_gte */
  login_gte?: string | null;
  /** login_contains */
  login_contains?: string | null;
  /** login_not_contains */
  login_not_contains?: string | null;
  /** login_starts_with */
  login_starts_with?: string | null;
  /** login_not_starts_with */
  login_not_starts_with?: string | null;
  /** login_ends_with */
  login_ends_with?: string | null;
  /** login_not_ends_with */
  login_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** provider */
  provider?: _GitHubProviderFilter | null;
  /** provider_not */
  provider_not?: _GitHubProviderFilter | null;
  /** provider_in */
  provider_in?: _GitHubProviderFilter | null;
  /** provider_not_in */
  provider_not_in?: _GitHubProviderFilter | null;
  /** provider_some */
  provider_some?: _GitHubProviderFilter | null;
  /** provider_none */
  provider_none?: _GitHubProviderFilter | null;
  /** provider_single */
  provider_single?: _GitHubProviderFilter | null;
  /** provider_every */
  provider_every?: _GitHubProviderFilter | null;
  /** scmProvider */
  scmProvider?: _ScmProviderFilter | null;
  /** scmProvider_not */
  scmProvider_not?: _ScmProviderFilter | null;
  /** scmProvider_in */
  scmProvider_in?: _ScmProviderFilter | null;
  /** scmProvider_not_in */
  scmProvider_not_in?: _ScmProviderFilter | null;
  /** emails */
  emails?: _EmailFilter | null;
  /** emails_not */
  emails_not?: _EmailFilter | null;
  /** emails_in */
  emails_in?: _EmailFilter | null;
  /** emails_not_in */
  emails_not_in?: _EmailFilter | null;
  /** emails_some */
  emails_some?: _EmailFilter | null;
  /** emails_none */
  emails_none?: _EmailFilter | null;
  /** emails_single */
  emails_single?: _EmailFilter | null;
  /** emails_every */
  emails_every?: _EmailFilter | null;
  /** person */
  person?: _PersonFilter | null;
  /** person_not */
  person_not?: _PersonFilter | null;
  /** person_in */
  person_in?: _PersonFilter | null;
  /** person_not_in */
  person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for SCMProvider */
export interface _ScmProviderFilter {
  /** AND */
  AND?: _ScmProviderFilter[] | null;
  /** OR */
  OR?: _ScmProviderFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** providerId */
  providerId?: string | null;
  /** providerId_not */
  providerId_not?: string | null;
  /** providerId_in */
  providerId_in?: string[] | null;
  /** providerId_not_in */
  providerId_not_in?: string[] | null;
  /** providerId_lt */
  providerId_lt?: string | null;
  /** providerId_lte */
  providerId_lte?: string | null;
  /** providerId_gt */
  providerId_gt?: string | null;
  /** providerId_gte */
  providerId_gte?: string | null;
  /** providerId_contains */
  providerId_contains?: string | null;
  /** providerId_not_contains */
  providerId_not_contains?: string | null;
  /** providerId_starts_with */
  providerId_starts_with?: string | null;
  /** providerId_not_starts_with */
  providerId_not_starts_with?: string | null;
  /** providerId_ends_with */
  providerId_ends_with?: string | null;
  /** providerId_not_ends_with */
  providerId_not_ends_with?: string | null;
  /** apiUrl */
  apiUrl?: string | null;
  /** apiUrl_not */
  apiUrl_not?: string | null;
  /** apiUrl_in */
  apiUrl_in?: string[] | null;
  /** apiUrl_not_in */
  apiUrl_not_in?: string[] | null;
  /** apiUrl_lt */
  apiUrl_lt?: string | null;
  /** apiUrl_lte */
  apiUrl_lte?: string | null;
  /** apiUrl_gt */
  apiUrl_gt?: string | null;
  /** apiUrl_gte */
  apiUrl_gte?: string | null;
  /** apiUrl_contains */
  apiUrl_contains?: string | null;
  /** apiUrl_not_contains */
  apiUrl_not_contains?: string | null;
  /** apiUrl_starts_with */
  apiUrl_starts_with?: string | null;
  /** apiUrl_not_starts_with */
  apiUrl_not_starts_with?: string | null;
  /** apiUrl_ends_with */
  apiUrl_ends_with?: string | null;
  /** apiUrl_not_ends_with */
  apiUrl_not_ends_with?: string | null;
  /** gitUrl */
  gitUrl?: string | null;
  /** gitUrl_not */
  gitUrl_not?: string | null;
  /** gitUrl_in */
  gitUrl_in?: string[] | null;
  /** gitUrl_not_in */
  gitUrl_not_in?: string[] | null;
  /** gitUrl_lt */
  gitUrl_lt?: string | null;
  /** gitUrl_lte */
  gitUrl_lte?: string | null;
  /** gitUrl_gt */
  gitUrl_gt?: string | null;
  /** gitUrl_gte */
  gitUrl_gte?: string | null;
  /** gitUrl_contains */
  gitUrl_contains?: string | null;
  /** gitUrl_not_contains */
  gitUrl_not_contains?: string | null;
  /** gitUrl_starts_with */
  gitUrl_starts_with?: string | null;
  /** gitUrl_not_starts_with */
  gitUrl_not_starts_with?: string | null;
  /** gitUrl_ends_with */
  gitUrl_ends_with?: string | null;
  /** gitUrl_not_ends_with */
  gitUrl_not_ends_with?: string | null;
  /** providerType */
  providerType?: ProviderType | null;
  /** providerType_not */
  providerType_not?: ProviderType | null;
  /** providerType_in */
  providerType_in?: ProviderType[] | null;
  /** providerType_not_in */
  providerType_not_in?: ProviderType[] | null;
  /** team */
  team?: _TeamFilter | null;
  /** team_not */
  team_not?: _TeamFilter | null;
  /** team_in */
  team_in?: _TeamFilter | null;
  /** team_not_in */
  team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for Org */
export interface _OrgFilter {
  /** AND */
  AND?: _OrgFilter[] | null;
  /** OR */
  OR?: _OrgFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** owner */
  owner?: string | null;
  /** owner_not */
  owner_not?: string | null;
  /** owner_in */
  owner_in?: string[] | null;
  /** owner_not_in */
  owner_not_in?: string[] | null;
  /** owner_lt */
  owner_lt?: string | null;
  /** owner_lte */
  owner_lte?: string | null;
  /** owner_gt */
  owner_gt?: string | null;
  /** owner_gte */
  owner_gte?: string | null;
  /** owner_contains */
  owner_contains?: string | null;
  /** owner_not_contains */
  owner_not_contains?: string | null;
  /** owner_starts_with */
  owner_starts_with?: string | null;
  /** owner_not_starts_with */
  owner_not_starts_with?: string | null;
  /** owner_ends_with */
  owner_ends_with?: string | null;
  /** owner_not_ends_with */
  owner_not_ends_with?: string | null;
  /** ownerType */
  ownerType?: OwnerType | null;
  /** ownerType_not */
  ownerType_not?: OwnerType | null;
  /** ownerType_in */
  ownerType_in?: OwnerType[] | null;
  /** ownerType_not_in */
  ownerType_not_in?: OwnerType[] | null;
  /** provider */
  provider?: _GitHubProviderFilter | null;
  /** provider_not */
  provider_not?: _GitHubProviderFilter | null;
  /** provider_in */
  provider_in?: _GitHubProviderFilter | null;
  /** provider_not_in */
  provider_not_in?: _GitHubProviderFilter | null;
  /** scmProvider */
  scmProvider?: _ScmProviderFilter | null;
  /** scmProvider_not */
  scmProvider_not?: _ScmProviderFilter | null;
  /** scmProvider_in */
  scmProvider_in?: _ScmProviderFilter | null;
  /** scmProvider_not_in */
  scmProvider_not_in?: _ScmProviderFilter | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** repo_some */
  repo_some?: _RepoFilter | null;
  /** repo_none */
  repo_none?: _RepoFilter | null;
  /** repo_single */
  repo_single?: _RepoFilter | null;
  /** repo_every */
  repo_every?: _RepoFilter | null;
  /** repos */
  repos?: _RepoFilter | null;
  /** repos_not */
  repos_not?: _RepoFilter | null;
  /** repos_in */
  repos_in?: _RepoFilter | null;
  /** repos_not_in */
  repos_not_in?: _RepoFilter | null;
  /** repos_some */
  repos_some?: _RepoFilter | null;
  /** repos_none */
  repos_none?: _RepoFilter | null;
  /** repos_single */
  repos_single?: _RepoFilter | null;
  /** repos_every */
  repos_every?: _RepoFilter | null;
  /** webhook */
  webhook?: _GitHubOrgWebhookFilter | null;
  /** webhook_not */
  webhook_not?: _GitHubOrgWebhookFilter | null;
  /** webhook_in */
  webhook_in?: _GitHubOrgWebhookFilter | null;
  /** webhook_not_in */
  webhook_not_in?: _GitHubOrgWebhookFilter | null;
  /** webhook_some */
  webhook_some?: _GitHubOrgWebhookFilter | null;
  /** webhook_none */
  webhook_none?: _GitHubOrgWebhookFilter | null;
  /** webhook_single */
  webhook_single?: _GitHubOrgWebhookFilter | null;
  /** webhook_every */
  webhook_every?: _GitHubOrgWebhookFilter | null;
  /** webhooks */
  webhooks?: _WebhookFilter | null;
  /** webhooks_not */
  webhooks_not?: _WebhookFilter | null;
  /** webhooks_in */
  webhooks_in?: _WebhookFilter | null;
  /** webhooks_not_in */
  webhooks_not_in?: _WebhookFilter | null;
  /** webhooks_some */
  webhooks_some?: _WebhookFilter | null;
  /** webhooks_none */
  webhooks_none?: _WebhookFilter | null;
  /** webhooks_single */
  webhooks_single?: _WebhookFilter | null;
  /** webhooks_every */
  webhooks_every?: _WebhookFilter | null;
  /** chatTeam */
  chatTeam?: _ChatTeamFilter | null;
  /** chatTeam_not */
  chatTeam_not?: _ChatTeamFilter | null;
  /** chatTeam_in */
  chatTeam_in?: _ChatTeamFilter | null;
  /** chatTeam_not_in */
  chatTeam_not_in?: _ChatTeamFilter | null;
  /** team */
  team?: _TeamFilter | null;
  /** team_not */
  team_not?: _TeamFilter | null;
  /** team_in */
  team_in?: _TeamFilter | null;
  /** team_not_in */
  team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for GitHubOrgWebhook */
export interface _GitHubOrgWebhookFilter {
  /** AND */
  AND?: _GitHubOrgWebhookFilter[] | null;
  /** OR */
  OR?: _GitHubOrgWebhookFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** webhookType */
  webhookType?: WebhookType | null;
  /** webhookType_not */
  webhookType_not?: WebhookType | null;
  /** webhookType_in */
  webhookType_in?: WebhookType[] | null;
  /** webhookType_not_in */
  webhookType_not_in?: WebhookType[] | null;
  /** org */
  org?: _OrgFilter | null;
  /** org_not */
  org_not?: _OrgFilter | null;
  /** org_in */
  org_in?: _OrgFilter | null;
  /** org_not_in */
  org_not_in?: _OrgFilter | null;
}
/** Filter Input Type for Webhook */
export interface _WebhookFilter {
  /** AND */
  AND?: _WebhookFilter[] | null;
  /** OR */
  OR?: _WebhookFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** webhookType */
  webhookType?: WebhookType | null;
  /** webhookType_not */
  webhookType_not?: WebhookType | null;
  /** webhookType_in */
  webhookType_in?: WebhookType[] | null;
  /** webhookType_not_in */
  webhookType_not_in?: WebhookType[] | null;
  /** org */
  org?: _OrgFilter | null;
  /** org_not */
  org_not?: _OrgFilter | null;
  /** org_in */
  org_in?: _OrgFilter | null;
  /** org_not_in */
  org_not_in?: _OrgFilter | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
}
/** Filter Input Type for ChatTeam */
export interface _ChatTeamFilter {
  /** AND */
  AND?: _ChatTeamFilter[] | null;
  /** OR */
  OR?: _ChatTeamFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** provider */
  provider?: string | null;
  /** provider_not */
  provider_not?: string | null;
  /** provider_in */
  provider_in?: string[] | null;
  /** provider_not_in */
  provider_not_in?: string[] | null;
  /** provider_lt */
  provider_lt?: string | null;
  /** provider_lte */
  provider_lte?: string | null;
  /** provider_gt */
  provider_gt?: string | null;
  /** provider_gte */
  provider_gte?: string | null;
  /** provider_contains */
  provider_contains?: string | null;
  /** provider_not_contains */
  provider_not_contains?: string | null;
  /** provider_starts_with */
  provider_starts_with?: string | null;
  /** provider_not_starts_with */
  provider_not_starts_with?: string | null;
  /** provider_ends_with */
  provider_ends_with?: string | null;
  /** provider_not_ends_with */
  provider_not_ends_with?: string | null;
  /** domain */
  domain?: string | null;
  /** domain_not */
  domain_not?: string | null;
  /** domain_in */
  domain_in?: string[] | null;
  /** domain_not_in */
  domain_not_in?: string[] | null;
  /** domain_lt */
  domain_lt?: string | null;
  /** domain_lte */
  domain_lte?: string | null;
  /** domain_gt */
  domain_gt?: string | null;
  /** domain_gte */
  domain_gte?: string | null;
  /** domain_contains */
  domain_contains?: string | null;
  /** domain_not_contains */
  domain_not_contains?: string | null;
  /** domain_starts_with */
  domain_starts_with?: string | null;
  /** domain_not_starts_with */
  domain_not_starts_with?: string | null;
  /** domain_ends_with */
  domain_ends_with?: string | null;
  /** domain_not_ends_with */
  domain_not_ends_with?: string | null;
  /** messageCount */
  messageCount?: number | null;
  /** messageCount_not */
  messageCount_not?: number | null;
  /** messageCount_in */
  messageCount_in?: number[] | null;
  /** messageCount_not_in */
  messageCount_not_in?: number[] | null;
  /** messageCount_lt */
  messageCount_lt?: number | null;
  /** messageCount_lte */
  messageCount_lte?: number | null;
  /** messageCount_gt */
  messageCount_gt?: number | null;
  /** messageCount_gte */
  messageCount_gte?: number | null;
  /** emailDomain */
  emailDomain?: string | null;
  /** emailDomain_not */
  emailDomain_not?: string | null;
  /** emailDomain_in */
  emailDomain_in?: string[] | null;
  /** emailDomain_not_in */
  emailDomain_not_in?: string[] | null;
  /** emailDomain_lt */
  emailDomain_lt?: string | null;
  /** emailDomain_lte */
  emailDomain_lte?: string | null;
  /** emailDomain_gt */
  emailDomain_gt?: string | null;
  /** emailDomain_gte */
  emailDomain_gte?: string | null;
  /** emailDomain_contains */
  emailDomain_contains?: string | null;
  /** emailDomain_not_contains */
  emailDomain_not_contains?: string | null;
  /** emailDomain_starts_with */
  emailDomain_starts_with?: string | null;
  /** emailDomain_not_starts_with */
  emailDomain_not_starts_with?: string | null;
  /** emailDomain_ends_with */
  emailDomain_ends_with?: string | null;
  /** emailDomain_not_ends_with */
  emailDomain_not_ends_with?: string | null;
  /** orgs */
  orgs?: _OrgFilter | null;
  /** orgs_not */
  orgs_not?: _OrgFilter | null;
  /** orgs_in */
  orgs_in?: _OrgFilter | null;
  /** orgs_not_in */
  orgs_not_in?: _OrgFilter | null;
  /** orgs_some */
  orgs_some?: _OrgFilter | null;
  /** orgs_none */
  orgs_none?: _OrgFilter | null;
  /** orgs_single */
  orgs_single?: _OrgFilter | null;
  /** orgs_every */
  orgs_every?: _OrgFilter | null;
  /** providers */
  providers?: _GitHubProviderFilter | null;
  /** providers_not */
  providers_not?: _GitHubProviderFilter | null;
  /** providers_in */
  providers_in?: _GitHubProviderFilter | null;
  /** providers_not_in */
  providers_not_in?: _GitHubProviderFilter | null;
  /** providers_some */
  providers_some?: _GitHubProviderFilter | null;
  /** providers_none */
  providers_none?: _GitHubProviderFilter | null;
  /** providers_single */
  providers_single?: _GitHubProviderFilter | null;
  /** providers_every */
  providers_every?: _GitHubProviderFilter | null;
  /** scmProviders */
  scmProviders?: _ScmProviderFilter | null;
  /** scmProviders_not */
  scmProviders_not?: _ScmProviderFilter | null;
  /** scmProviders_in */
  scmProviders_in?: _ScmProviderFilter | null;
  /** scmProviders_not_in */
  scmProviders_not_in?: _ScmProviderFilter | null;
  /** scmProviders_some */
  scmProviders_some?: _ScmProviderFilter | null;
  /** scmProviders_none */
  scmProviders_none?: _ScmProviderFilter | null;
  /** scmProviders_single */
  scmProviders_single?: _ScmProviderFilter | null;
  /** scmProviders_every */
  scmProviders_every?: _ScmProviderFilter | null;
  /** channels */
  channels?: _ChatChannelFilter | null;
  /** channels_not */
  channels_not?: _ChatChannelFilter | null;
  /** channels_in */
  channels_in?: _ChatChannelFilter | null;
  /** channels_not_in */
  channels_not_in?: _ChatChannelFilter | null;
  /** channels_some */
  channels_some?: _ChatChannelFilter | null;
  /** channels_none */
  channels_none?: _ChatChannelFilter | null;
  /** channels_single */
  channels_single?: _ChatChannelFilter | null;
  /** channels_every */
  channels_every?: _ChatChannelFilter | null;
  /** members */
  members?: _ChatIdFilter | null;
  /** members_not */
  members_not?: _ChatIdFilter | null;
  /** members_in */
  members_in?: _ChatIdFilter | null;
  /** members_not_in */
  members_not_in?: _ChatIdFilter | null;
  /** members_some */
  members_some?: _ChatIdFilter | null;
  /** members_none */
  members_none?: _ChatIdFilter | null;
  /** members_single */
  members_single?: _ChatIdFilter | null;
  /** members_every */
  members_every?: _ChatIdFilter | null;
  /** team */
  team?: _TeamFilter | null;
  /** team_not */
  team_not?: _TeamFilter | null;
  /** team_in */
  team_in?: _TeamFilter | null;
  /** team_not_in */
  team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for ChannelLink */
export interface _ChannelLinkFilter {
  /** AND */
  AND?: _ChannelLinkFilter[] | null;
  /** OR */
  OR?: _ChannelLinkFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** channel */
  channel?: _ChatChannelFilter | null;
  /** channel_not */
  channel_not?: _ChatChannelFilter | null;
  /** channel_in */
  channel_in?: _ChatChannelFilter | null;
  /** channel_not_in */
  channel_not_in?: _ChatChannelFilter | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
}
/** Filter Input Type for PullRequest */
export interface _PullRequestFilter {
  /** AND */
  AND?: _PullRequestFilter[] | null;
  /** OR */
  OR?: _PullRequestFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** number */
  number?: number | null;
  /** number_not */
  number_not?: number | null;
  /** number_in */
  number_in?: number[] | null;
  /** number_not_in */
  number_not_in?: number[] | null;
  /** number_lt */
  number_lt?: number | null;
  /** number_lte */
  number_lte?: number | null;
  /** number_gt */
  number_gt?: number | null;
  /** number_gte */
  number_gte?: number | null;
  /** prId */
  prId?: string | null;
  /** prId_not */
  prId_not?: string | null;
  /** prId_in */
  prId_in?: string[] | null;
  /** prId_not_in */
  prId_not_in?: string[] | null;
  /** prId_lt */
  prId_lt?: string | null;
  /** prId_lte */
  prId_lte?: string | null;
  /** prId_gt */
  prId_gt?: string | null;
  /** prId_gte */
  prId_gte?: string | null;
  /** prId_contains */
  prId_contains?: string | null;
  /** prId_not_contains */
  prId_not_contains?: string | null;
  /** prId_starts_with */
  prId_starts_with?: string | null;
  /** prId_not_starts_with */
  prId_not_starts_with?: string | null;
  /** prId_ends_with */
  prId_ends_with?: string | null;
  /** prId_not_ends_with */
  prId_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** body */
  body?: string | null;
  /** body_not */
  body_not?: string | null;
  /** body_in */
  body_in?: string[] | null;
  /** body_not_in */
  body_not_in?: string[] | null;
  /** body_lt */
  body_lt?: string | null;
  /** body_lte */
  body_lte?: string | null;
  /** body_gt */
  body_gt?: string | null;
  /** body_gte */
  body_gte?: string | null;
  /** body_contains */
  body_contains?: string | null;
  /** body_not_contains */
  body_not_contains?: string | null;
  /** body_starts_with */
  body_starts_with?: string | null;
  /** body_not_starts_with */
  body_not_starts_with?: string | null;
  /** body_ends_with */
  body_ends_with?: string | null;
  /** body_not_ends_with */
  body_not_ends_with?: string | null;
  /** state */
  state?: string | null;
  /** state_not */
  state_not?: string | null;
  /** state_in */
  state_in?: string[] | null;
  /** state_not_in */
  state_not_in?: string[] | null;
  /** state_lt */
  state_lt?: string | null;
  /** state_lte */
  state_lte?: string | null;
  /** state_gt */
  state_gt?: string | null;
  /** state_gte */
  state_gte?: string | null;
  /** state_contains */
  state_contains?: string | null;
  /** state_not_contains */
  state_not_contains?: string | null;
  /** state_starts_with */
  state_starts_with?: string | null;
  /** state_not_starts_with */
  state_not_starts_with?: string | null;
  /** state_ends_with */
  state_ends_with?: string | null;
  /** state_not_ends_with */
  state_not_ends_with?: string | null;
  /** merged */
  merged?: boolean | null;
  /** merged_not */
  merged_not?: boolean | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** baseBranchName */
  baseBranchName?: string | null;
  /** baseBranchName_not */
  baseBranchName_not?: string | null;
  /** baseBranchName_in */
  baseBranchName_in?: string[] | null;
  /** baseBranchName_not_in */
  baseBranchName_not_in?: string[] | null;
  /** baseBranchName_lt */
  baseBranchName_lt?: string | null;
  /** baseBranchName_lte */
  baseBranchName_lte?: string | null;
  /** baseBranchName_gt */
  baseBranchName_gt?: string | null;
  /** baseBranchName_gte */
  baseBranchName_gte?: string | null;
  /** baseBranchName_contains */
  baseBranchName_contains?: string | null;
  /** baseBranchName_not_contains */
  baseBranchName_not_contains?: string | null;
  /** baseBranchName_starts_with */
  baseBranchName_starts_with?: string | null;
  /** baseBranchName_not_starts_with */
  baseBranchName_not_starts_with?: string | null;
  /** baseBranchName_ends_with */
  baseBranchName_ends_with?: string | null;
  /** baseBranchName_not_ends_with */
  baseBranchName_not_ends_with?: string | null;
  /** branchName */
  branchName?: string | null;
  /** branchName_not */
  branchName_not?: string | null;
  /** branchName_in */
  branchName_in?: string[] | null;
  /** branchName_not_in */
  branchName_not_in?: string[] | null;
  /** branchName_lt */
  branchName_lt?: string | null;
  /** branchName_lte */
  branchName_lte?: string | null;
  /** branchName_gt */
  branchName_gt?: string | null;
  /** branchName_gte */
  branchName_gte?: string | null;
  /** branchName_contains */
  branchName_contains?: string | null;
  /** branchName_not_contains */
  branchName_not_contains?: string | null;
  /** branchName_starts_with */
  branchName_starts_with?: string | null;
  /** branchName_not_starts_with */
  branchName_not_starts_with?: string | null;
  /** branchName_ends_with */
  branchName_ends_with?: string | null;
  /** branchName_not_ends_with */
  branchName_not_ends_with?: string | null;
  /** title */
  title?: string | null;
  /** title_not */
  title_not?: string | null;
  /** title_in */
  title_in?: string[] | null;
  /** title_not_in */
  title_not_in?: string[] | null;
  /** title_lt */
  title_lt?: string | null;
  /** title_lte */
  title_lte?: string | null;
  /** title_gt */
  title_gt?: string | null;
  /** title_gte */
  title_gte?: string | null;
  /** title_contains */
  title_contains?: string | null;
  /** title_not_contains */
  title_not_contains?: string | null;
  /** title_starts_with */
  title_starts_with?: string | null;
  /** title_not_starts_with */
  title_not_starts_with?: string | null;
  /** title_ends_with */
  title_ends_with?: string | null;
  /** title_not_ends_with */
  title_not_ends_with?: string | null;
  /** createdAt */
  createdAt?: string | null;
  /** createdAt_not */
  createdAt_not?: string | null;
  /** createdAt_in */
  createdAt_in?: string[] | null;
  /** createdAt_not_in */
  createdAt_not_in?: string[] | null;
  /** createdAt_lt */
  createdAt_lt?: string | null;
  /** createdAt_lte */
  createdAt_lte?: string | null;
  /** createdAt_gt */
  createdAt_gt?: string | null;
  /** createdAt_gte */
  createdAt_gte?: string | null;
  /** createdAt_contains */
  createdAt_contains?: string | null;
  /** createdAt_not_contains */
  createdAt_not_contains?: string | null;
  /** createdAt_starts_with */
  createdAt_starts_with?: string | null;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: string | null;
  /** createdAt_ends_with */
  createdAt_ends_with?: string | null;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: string | null;
  /** updatedAt */
  updatedAt?: string | null;
  /** updatedAt_not */
  updatedAt_not?: string | null;
  /** updatedAt_in */
  updatedAt_in?: string[] | null;
  /** updatedAt_not_in */
  updatedAt_not_in?: string[] | null;
  /** updatedAt_lt */
  updatedAt_lt?: string | null;
  /** updatedAt_lte */
  updatedAt_lte?: string | null;
  /** updatedAt_gt */
  updatedAt_gt?: string | null;
  /** updatedAt_gte */
  updatedAt_gte?: string | null;
  /** updatedAt_contains */
  updatedAt_contains?: string | null;
  /** updatedAt_not_contains */
  updatedAt_not_contains?: string | null;
  /** updatedAt_starts_with */
  updatedAt_starts_with?: string | null;
  /** updatedAt_not_starts_with */
  updatedAt_not_starts_with?: string | null;
  /** updatedAt_ends_with */
  updatedAt_ends_with?: string | null;
  /** updatedAt_not_ends_with */
  updatedAt_not_ends_with?: string | null;
  /** closedAt */
  closedAt?: string | null;
  /** closedAt_not */
  closedAt_not?: string | null;
  /** closedAt_in */
  closedAt_in?: string[] | null;
  /** closedAt_not_in */
  closedAt_not_in?: string[] | null;
  /** closedAt_lt */
  closedAt_lt?: string | null;
  /** closedAt_lte */
  closedAt_lte?: string | null;
  /** closedAt_gt */
  closedAt_gt?: string | null;
  /** closedAt_gte */
  closedAt_gte?: string | null;
  /** closedAt_contains */
  closedAt_contains?: string | null;
  /** closedAt_not_contains */
  closedAt_not_contains?: string | null;
  /** closedAt_starts_with */
  closedAt_starts_with?: string | null;
  /** closedAt_not_starts_with */
  closedAt_not_starts_with?: string | null;
  /** closedAt_ends_with */
  closedAt_ends_with?: string | null;
  /** closedAt_not_ends_with */
  closedAt_not_ends_with?: string | null;
  /** mergedAt */
  mergedAt?: string | null;
  /** mergedAt_not */
  mergedAt_not?: string | null;
  /** mergedAt_in */
  mergedAt_in?: string[] | null;
  /** mergedAt_not_in */
  mergedAt_not_in?: string[] | null;
  /** mergedAt_lt */
  mergedAt_lt?: string | null;
  /** mergedAt_lte */
  mergedAt_lte?: string | null;
  /** mergedAt_gt */
  mergedAt_gt?: string | null;
  /** mergedAt_gte */
  mergedAt_gte?: string | null;
  /** mergedAt_contains */
  mergedAt_contains?: string | null;
  /** mergedAt_not_contains */
  mergedAt_not_contains?: string | null;
  /** mergedAt_starts_with */
  mergedAt_starts_with?: string | null;
  /** mergedAt_not_starts_with */
  mergedAt_not_starts_with?: string | null;
  /** mergedAt_ends_with */
  mergedAt_ends_with?: string | null;
  /** mergedAt_not_ends_with */
  mergedAt_not_ends_with?: string | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** head */
  head?: _CommitFilter | null;
  /** head_not */
  head_not?: _CommitFilter | null;
  /** head_in */
  head_in?: _CommitFilter | null;
  /** head_not_in */
  head_not_in?: _CommitFilter | null;
  /** base */
  base?: _CommitFilter | null;
  /** base_not */
  base_not?: _CommitFilter | null;
  /** base_in */
  base_in?: _CommitFilter | null;
  /** base_not_in */
  base_not_in?: _CommitFilter | null;
  /** mergeCommit */
  mergeCommit?: _CommitFilter | null;
  /** mergeCommit_not */
  mergeCommit_not?: _CommitFilter | null;
  /** mergeCommit_in */
  mergeCommit_in?: _CommitFilter | null;
  /** mergeCommit_not_in */
  mergeCommit_not_in?: _CommitFilter | null;
  /** author */
  author?: _ScmIdFilter | null;
  /** author_not */
  author_not?: _ScmIdFilter | null;
  /** author_in */
  author_in?: _ScmIdFilter | null;
  /** author_not_in */
  author_not_in?: _ScmIdFilter | null;
  /** merger */
  merger?: _ScmIdFilter | null;
  /** merger_not */
  merger_not?: _ScmIdFilter | null;
  /** merger_in */
  merger_in?: _ScmIdFilter | null;
  /** merger_not_in */
  merger_not_in?: _ScmIdFilter | null;
  /** assignees */
  assignees?: _ScmIdFilter | null;
  /** assignees_not */
  assignees_not?: _ScmIdFilter | null;
  /** assignees_in */
  assignees_in?: _ScmIdFilter | null;
  /** assignees_not_in */
  assignees_not_in?: _ScmIdFilter | null;
  /** assignees_some */
  assignees_some?: _ScmIdFilter | null;
  /** assignees_none */
  assignees_none?: _ScmIdFilter | null;
  /** assignees_single */
  assignees_single?: _ScmIdFilter | null;
  /** assignees_every */
  assignees_every?: _ScmIdFilter | null;
  /** commits */
  commits?: _CommitFilter | null;
  /** commits_not */
  commits_not?: _CommitFilter | null;
  /** commits_in */
  commits_in?: _CommitFilter | null;
  /** commits_not_in */
  commits_not_in?: _CommitFilter | null;
  /** commits_some */
  commits_some?: _CommitFilter | null;
  /** commits_none */
  commits_none?: _CommitFilter | null;
  /** commits_single */
  commits_single?: _CommitFilter | null;
  /** commits_every */
  commits_every?: _CommitFilter | null;
  /** branch */
  branch?: _BranchFilter | null;
  /** branch_not */
  branch_not?: _BranchFilter | null;
  /** branch_in */
  branch_in?: _BranchFilter | null;
  /** branch_not_in */
  branch_not_in?: _BranchFilter | null;
  /** sourceBranch */
  sourceBranch?: _BranchFilter | null;
  /** sourceBranch_not */
  sourceBranch_not?: _BranchFilter | null;
  /** sourceBranch_in */
  sourceBranch_in?: _BranchFilter | null;
  /** sourceBranch_not_in */
  sourceBranch_not_in?: _BranchFilter | null;
  /** destinationBranch */
  destinationBranch?: _BranchFilter | null;
  /** destinationBranch_not */
  destinationBranch_not?: _BranchFilter | null;
  /** destinationBranch_in */
  destinationBranch_in?: _BranchFilter | null;
  /** destinationBranch_not_in */
  destinationBranch_not_in?: _BranchFilter | null;
  /** labels */
  labels?: _LabelFilter | null;
  /** labels_not */
  labels_not?: _LabelFilter | null;
  /** labels_in */
  labels_in?: _LabelFilter | null;
  /** labels_not_in */
  labels_not_in?: _LabelFilter | null;
  /** labels_some */
  labels_some?: _LabelFilter | null;
  /** labels_none */
  labels_none?: _LabelFilter | null;
  /** labels_single */
  labels_single?: _LabelFilter | null;
  /** labels_every */
  labels_every?: _LabelFilter | null;
  /** reviews */
  reviews?: _ReviewFilter | null;
  /** reviews_not */
  reviews_not?: _ReviewFilter | null;
  /** reviews_in */
  reviews_in?: _ReviewFilter | null;
  /** reviews_not_in */
  reviews_not_in?: _ReviewFilter | null;
  /** reviews_some */
  reviews_some?: _ReviewFilter | null;
  /** reviews_none */
  reviews_none?: _ReviewFilter | null;
  /** reviews_single */
  reviews_single?: _ReviewFilter | null;
  /** reviews_every */
  reviews_every?: _ReviewFilter | null;
  /** reviewers */
  reviewers?: _ScmIdFilter | null;
  /** reviewers_not */
  reviewers_not?: _ScmIdFilter | null;
  /** reviewers_in */
  reviewers_in?: _ScmIdFilter | null;
  /** reviewers_not_in */
  reviewers_not_in?: _ScmIdFilter | null;
  /** reviewers_some */
  reviewers_some?: _ScmIdFilter | null;
  /** reviewers_none */
  reviewers_none?: _ScmIdFilter | null;
  /** reviewers_single */
  reviewers_single?: _ScmIdFilter | null;
  /** reviewers_every */
  reviewers_every?: _ScmIdFilter | null;
  /** lastAssignedBy */
  lastAssignedBy?: _ScmIdFilter | null;
  /** lastAssignedBy_not */
  lastAssignedBy_not?: _ScmIdFilter | null;
  /** lastAssignedBy_in */
  lastAssignedBy_in?: _ScmIdFilter | null;
  /** lastAssignedBy_not_in */
  lastAssignedBy_not_in?: _ScmIdFilter | null;
  /** comments */
  comments?: _CommentFilter | null;
  /** comments_not */
  comments_not?: _CommentFilter | null;
  /** comments_in */
  comments_in?: _CommentFilter | null;
  /** comments_not_in */
  comments_not_in?: _CommentFilter | null;
  /** comments_some */
  comments_some?: _CommentFilter | null;
  /** comments_none */
  comments_none?: _CommentFilter | null;
  /** comments_single */
  comments_single?: _CommentFilter | null;
  /** comments_every */
  comments_every?: _CommentFilter | null;
  /** builds */
  builds?: _BuildFilter | null;
  /** builds_not */
  builds_not?: _BuildFilter | null;
  /** builds_in */
  builds_in?: _BuildFilter | null;
  /** builds_not_in */
  builds_not_in?: _BuildFilter | null;
  /** builds_some */
  builds_some?: _BuildFilter | null;
  /** builds_none */
  builds_none?: _BuildFilter | null;
  /** builds_single */
  builds_single?: _BuildFilter | null;
  /** builds_every */
  builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Commit */
export interface _CommitFilter {
  /** AND */
  AND?: _CommitFilter[] | null;
  /** OR */
  OR?: _CommitFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** sha */
  sha?: string | null;
  /** sha_not */
  sha_not?: string | null;
  /** sha_in */
  sha_in?: string[] | null;
  /** sha_not_in */
  sha_not_in?: string[] | null;
  /** sha_lt */
  sha_lt?: string | null;
  /** sha_lte */
  sha_lte?: string | null;
  /** sha_gt */
  sha_gt?: string | null;
  /** sha_gte */
  sha_gte?: string | null;
  /** sha_contains */
  sha_contains?: string | null;
  /** sha_not_contains */
  sha_not_contains?: string | null;
  /** sha_starts_with */
  sha_starts_with?: string | null;
  /** sha_not_starts_with */
  sha_not_starts_with?: string | null;
  /** sha_ends_with */
  sha_ends_with?: string | null;
  /** sha_not_ends_with */
  sha_not_ends_with?: string | null;
  /** message */
  message?: string | null;
  /** message_not */
  message_not?: string | null;
  /** message_in */
  message_in?: string[] | null;
  /** message_not_in */
  message_not_in?: string[] | null;
  /** message_lt */
  message_lt?: string | null;
  /** message_lte */
  message_lte?: string | null;
  /** message_gt */
  message_gt?: string | null;
  /** message_gte */
  message_gte?: string | null;
  /** message_contains */
  message_contains?: string | null;
  /** message_not_contains */
  message_not_contains?: string | null;
  /** message_starts_with */
  message_starts_with?: string | null;
  /** message_not_starts_with */
  message_not_starts_with?: string | null;
  /** message_ends_with */
  message_ends_with?: string | null;
  /** message_not_ends_with */
  message_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** email */
  email?: _EmailFilter | null;
  /** email_not */
  email_not?: _EmailFilter | null;
  /** email_in */
  email_in?: _EmailFilter | null;
  /** email_not_in */
  email_not_in?: _EmailFilter | null;
  /** builds */
  builds?: _BuildFilter | null;
  /** builds_not */
  builds_not?: _BuildFilter | null;
  /** builds_in */
  builds_in?: _BuildFilter | null;
  /** builds_not_in */
  builds_not_in?: _BuildFilter | null;
  /** builds_some */
  builds_some?: _BuildFilter | null;
  /** builds_none */
  builds_none?: _BuildFilter | null;
  /** builds_single */
  builds_single?: _BuildFilter | null;
  /** builds_every */
  builds_every?: _BuildFilter | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** author */
  author?: _ScmIdFilter | null;
  /** author_not */
  author_not?: _ScmIdFilter | null;
  /** author_in */
  author_in?: _ScmIdFilter | null;
  /** author_not_in */
  author_not_in?: _ScmIdFilter | null;
  /** committer */
  committer?: _ScmIdFilter | null;
  /** committer_not */
  committer_not?: _ScmIdFilter | null;
  /** committer_in */
  committer_in?: _ScmIdFilter | null;
  /** committer_not_in */
  committer_not_in?: _ScmIdFilter | null;
  /** tags */
  tags?: _TagFilter | null;
  /** tags_not */
  tags_not?: _TagFilter | null;
  /** tags_in */
  tags_in?: _TagFilter | null;
  /** tags_not_in */
  tags_not_in?: _TagFilter | null;
  /** tags_some */
  tags_some?: _TagFilter | null;
  /** tags_none */
  tags_none?: _TagFilter | null;
  /** tags_single */
  tags_single?: _TagFilter | null;
  /** tags_every */
  tags_every?: _TagFilter | null;
  /** resolves */
  resolves?: _IssueFilter | null;
  /** resolves_not */
  resolves_not?: _IssueFilter | null;
  /** resolves_in */
  resolves_in?: _IssueFilter | null;
  /** resolves_not_in */
  resolves_not_in?: _IssueFilter | null;
  /** resolves_some */
  resolves_some?: _IssueFilter | null;
  /** resolves_none */
  resolves_none?: _IssueFilter | null;
  /** resolves_single */
  resolves_single?: _IssueFilter | null;
  /** resolves_every */
  resolves_every?: _IssueFilter | null;
  /** statuses */
  statuses?: _StatusFilter | null;
  /** statuses_not */
  statuses_not?: _StatusFilter | null;
  /** statuses_in */
  statuses_in?: _StatusFilter | null;
  /** statuses_not_in */
  statuses_not_in?: _StatusFilter | null;
  /** statuses_some */
  statuses_some?: _StatusFilter | null;
  /** statuses_none */
  statuses_none?: _StatusFilter | null;
  /** statuses_single */
  statuses_single?: _StatusFilter | null;
  /** statuses_every */
  statuses_every?: _StatusFilter | null;
  /** pushes */
  pushes?: _PushFilter | null;
  /** pushes_not */
  pushes_not?: _PushFilter | null;
  /** pushes_in */
  pushes_in?: _PushFilter | null;
  /** pushes_not_in */
  pushes_not_in?: _PushFilter | null;
  /** pushes_some */
  pushes_some?: _PushFilter | null;
  /** pushes_none */
  pushes_none?: _PushFilter | null;
  /** pushes_single */
  pushes_single?: _PushFilter | null;
  /** pushes_every */
  pushes_every?: _PushFilter | null;
  /** pullRequests */
  pullRequests?: _PullRequestFilter | null;
  /** pullRequests_not */
  pullRequests_not?: _PullRequestFilter | null;
  /** pullRequests_in */
  pullRequests_in?: _PullRequestFilter | null;
  /** pullRequests_not_in */
  pullRequests_not_in?: _PullRequestFilter | null;
  /** pullRequests_some */
  pullRequests_some?: _PullRequestFilter | null;
  /** pullRequests_none */
  pullRequests_none?: _PullRequestFilter | null;
  /** pullRequests_single */
  pullRequests_single?: _PullRequestFilter | null;
  /** pullRequests_every */
  pullRequests_every?: _PullRequestFilter | null;
  /** herokuApps */
  herokuApps?: _HerokuAppFilter | null;
  /** herokuApps_not */
  herokuApps_not?: _HerokuAppFilter | null;
  /** herokuApps_in */
  herokuApps_in?: _HerokuAppFilter | null;
  /** herokuApps_not_in */
  herokuApps_not_in?: _HerokuAppFilter | null;
  /** herokuApps_some */
  herokuApps_some?: _HerokuAppFilter | null;
  /** herokuApps_none */
  herokuApps_none?: _HerokuAppFilter | null;
  /** herokuApps_single */
  herokuApps_single?: _HerokuAppFilter | null;
  /** herokuApps_every */
  herokuApps_every?: _HerokuAppFilter | null;
  /** apps */
  apps?: _ApplicationFilter | null;
  /** apps_not */
  apps_not?: _ApplicationFilter | null;
  /** apps_in */
  apps_in?: _ApplicationFilter | null;
  /** apps_not_in */
  apps_not_in?: _ApplicationFilter | null;
  /** apps_some */
  apps_some?: _ApplicationFilter | null;
  /** apps_none */
  apps_none?: _ApplicationFilter | null;
  /** apps_single */
  apps_single?: _ApplicationFilter | null;
  /** apps_every */
  apps_every?: _ApplicationFilter | null;
  /** fingerprints */
  fingerprints?: _FingerprintFilter | null;
  /** fingerprints_not */
  fingerprints_not?: _FingerprintFilter | null;
  /** fingerprints_in */
  fingerprints_in?: _FingerprintFilter | null;
  /** fingerprints_not_in */
  fingerprints_not_in?: _FingerprintFilter | null;
  /** fingerprints_some */
  fingerprints_some?: _FingerprintFilter | null;
  /** fingerprints_none */
  fingerprints_none?: _FingerprintFilter | null;
  /** fingerprints_single */
  fingerprints_single?: _FingerprintFilter | null;
  /** fingerprints_every */
  fingerprints_every?: _FingerprintFilter | null;
  /** impact */
  impact?: _ParentImpactFilter | null;
  /** impact_not */
  impact_not?: _ParentImpactFilter | null;
  /** impact_in */
  impact_in?: _ParentImpactFilter | null;
  /** impact_not_in */
  impact_not_in?: _ParentImpactFilter | null;
  /** image */
  image?: _DockerImageFilter | null;
  /** image_not */
  image_not?: _DockerImageFilter | null;
  /** image_in */
  image_in?: _DockerImageFilter | null;
  /** image_not_in */
  image_not_in?: _DockerImageFilter | null;
  /** images */
  images?: _DockerImageFilter | null;
  /** images_not */
  images_not?: _DockerImageFilter | null;
  /** images_in */
  images_in?: _DockerImageFilter | null;
  /** images_not_in */
  images_not_in?: _DockerImageFilter | null;
  /** images_some */
  images_some?: _DockerImageFilter | null;
  /** images_none */
  images_none?: _DockerImageFilter | null;
  /** images_single */
  images_single?: _DockerImageFilter | null;
  /** images_every */
  images_every?: _DockerImageFilter | null;
}
/** Filter Input Type for Build */
export interface _BuildFilter {
  /** AND */
  AND?: _BuildFilter[] | null;
  /** OR */
  OR?: _BuildFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** buildId */
  buildId?: string | null;
  /** buildId_not */
  buildId_not?: string | null;
  /** buildId_in */
  buildId_in?: string[] | null;
  /** buildId_not_in */
  buildId_not_in?: string[] | null;
  /** buildId_lt */
  buildId_lt?: string | null;
  /** buildId_lte */
  buildId_lte?: string | null;
  /** buildId_gt */
  buildId_gt?: string | null;
  /** buildId_gte */
  buildId_gte?: string | null;
  /** buildId_contains */
  buildId_contains?: string | null;
  /** buildId_not_contains */
  buildId_not_contains?: string | null;
  /** buildId_starts_with */
  buildId_starts_with?: string | null;
  /** buildId_not_starts_with */
  buildId_not_starts_with?: string | null;
  /** buildId_ends_with */
  buildId_ends_with?: string | null;
  /** buildId_not_ends_with */
  buildId_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** status */
  status?: BuildStatus | null;
  /** status_not */
  status_not?: BuildStatus | null;
  /** status_in */
  status_in?: BuildStatus[] | null;
  /** status_not_in */
  status_not_in?: BuildStatus[] | null;
  /** buildUrl */
  buildUrl?: string | null;
  /** buildUrl_not */
  buildUrl_not?: string | null;
  /** buildUrl_in */
  buildUrl_in?: string[] | null;
  /** buildUrl_not_in */
  buildUrl_not_in?: string[] | null;
  /** buildUrl_lt */
  buildUrl_lt?: string | null;
  /** buildUrl_lte */
  buildUrl_lte?: string | null;
  /** buildUrl_gt */
  buildUrl_gt?: string | null;
  /** buildUrl_gte */
  buildUrl_gte?: string | null;
  /** buildUrl_contains */
  buildUrl_contains?: string | null;
  /** buildUrl_not_contains */
  buildUrl_not_contains?: string | null;
  /** buildUrl_starts_with */
  buildUrl_starts_with?: string | null;
  /** buildUrl_not_starts_with */
  buildUrl_not_starts_with?: string | null;
  /** buildUrl_ends_with */
  buildUrl_ends_with?: string | null;
  /** buildUrl_not_ends_with */
  buildUrl_not_ends_with?: string | null;
  /** compareUrl */
  compareUrl?: string | null;
  /** compareUrl_not */
  compareUrl_not?: string | null;
  /** compareUrl_in */
  compareUrl_in?: string[] | null;
  /** compareUrl_not_in */
  compareUrl_not_in?: string[] | null;
  /** compareUrl_lt */
  compareUrl_lt?: string | null;
  /** compareUrl_lte */
  compareUrl_lte?: string | null;
  /** compareUrl_gt */
  compareUrl_gt?: string | null;
  /** compareUrl_gte */
  compareUrl_gte?: string | null;
  /** compareUrl_contains */
  compareUrl_contains?: string | null;
  /** compareUrl_not_contains */
  compareUrl_not_contains?: string | null;
  /** compareUrl_starts_with */
  compareUrl_starts_with?: string | null;
  /** compareUrl_not_starts_with */
  compareUrl_not_starts_with?: string | null;
  /** compareUrl_ends_with */
  compareUrl_ends_with?: string | null;
  /** compareUrl_not_ends_with */
  compareUrl_not_ends_with?: string | null;
  /** trigger */
  trigger?: BuildTrigger | null;
  /** trigger_not */
  trigger_not?: BuildTrigger | null;
  /** trigger_in */
  trigger_in?: BuildTrigger[] | null;
  /** trigger_not_in */
  trigger_not_in?: BuildTrigger[] | null;
  /** provider */
  provider?: string | null;
  /** provider_not */
  provider_not?: string | null;
  /** provider_in */
  provider_in?: string[] | null;
  /** provider_not_in */
  provider_not_in?: string[] | null;
  /** provider_lt */
  provider_lt?: string | null;
  /** provider_lte */
  provider_lte?: string | null;
  /** provider_gt */
  provider_gt?: string | null;
  /** provider_gte */
  provider_gte?: string | null;
  /** provider_contains */
  provider_contains?: string | null;
  /** provider_not_contains */
  provider_not_contains?: string | null;
  /** provider_starts_with */
  provider_starts_with?: string | null;
  /** provider_not_starts_with */
  provider_not_starts_with?: string | null;
  /** provider_ends_with */
  provider_ends_with?: string | null;
  /** provider_not_ends_with */
  provider_not_ends_with?: string | null;
  /** pullRequestNumber */
  pullRequestNumber?: number | null;
  /** pullRequestNumber_not */
  pullRequestNumber_not?: number | null;
  /** pullRequestNumber_in */
  pullRequestNumber_in?: number[] | null;
  /** pullRequestNumber_not_in */
  pullRequestNumber_not_in?: number[] | null;
  /** pullRequestNumber_lt */
  pullRequestNumber_lt?: number | null;
  /** pullRequestNumber_lte */
  pullRequestNumber_lte?: number | null;
  /** pullRequestNumber_gt */
  pullRequestNumber_gt?: number | null;
  /** pullRequestNumber_gte */
  pullRequestNumber_gte?: number | null;
  /** startedAt */
  startedAt?: string | null;
  /** startedAt_not */
  startedAt_not?: string | null;
  /** startedAt_in */
  startedAt_in?: string[] | null;
  /** startedAt_not_in */
  startedAt_not_in?: string[] | null;
  /** startedAt_lt */
  startedAt_lt?: string | null;
  /** startedAt_lte */
  startedAt_lte?: string | null;
  /** startedAt_gt */
  startedAt_gt?: string | null;
  /** startedAt_gte */
  startedAt_gte?: string | null;
  /** startedAt_contains */
  startedAt_contains?: string | null;
  /** startedAt_not_contains */
  startedAt_not_contains?: string | null;
  /** startedAt_starts_with */
  startedAt_starts_with?: string | null;
  /** startedAt_not_starts_with */
  startedAt_not_starts_with?: string | null;
  /** startedAt_ends_with */
  startedAt_ends_with?: string | null;
  /** startedAt_not_ends_with */
  startedAt_not_ends_with?: string | null;
  /** finishedAt */
  finishedAt?: string | null;
  /** finishedAt_not */
  finishedAt_not?: string | null;
  /** finishedAt_in */
  finishedAt_in?: string[] | null;
  /** finishedAt_not_in */
  finishedAt_not_in?: string[] | null;
  /** finishedAt_lt */
  finishedAt_lt?: string | null;
  /** finishedAt_lte */
  finishedAt_lte?: string | null;
  /** finishedAt_gt */
  finishedAt_gt?: string | null;
  /** finishedAt_gte */
  finishedAt_gte?: string | null;
  /** finishedAt_contains */
  finishedAt_contains?: string | null;
  /** finishedAt_not_contains */
  finishedAt_not_contains?: string | null;
  /** finishedAt_starts_with */
  finishedAt_starts_with?: string | null;
  /** finishedAt_not_starts_with */
  finishedAt_not_starts_with?: string | null;
  /** finishedAt_ends_with */
  finishedAt_ends_with?: string | null;
  /** finishedAt_not_ends_with */
  finishedAt_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** workflowId */
  workflowId?: string | null;
  /** workflowId_not */
  workflowId_not?: string | null;
  /** workflowId_in */
  workflowId_in?: string[] | null;
  /** workflowId_not_in */
  workflowId_not_in?: string[] | null;
  /** workflowId_lt */
  workflowId_lt?: string | null;
  /** workflowId_lte */
  workflowId_lte?: string | null;
  /** workflowId_gt */
  workflowId_gt?: string | null;
  /** workflowId_gte */
  workflowId_gte?: string | null;
  /** workflowId_contains */
  workflowId_contains?: string | null;
  /** workflowId_not_contains */
  workflowId_not_contains?: string | null;
  /** workflowId_starts_with */
  workflowId_starts_with?: string | null;
  /** workflowId_not_starts_with */
  workflowId_not_starts_with?: string | null;
  /** workflowId_ends_with */
  workflowId_ends_with?: string | null;
  /** workflowId_not_ends_with */
  workflowId_not_ends_with?: string | null;
  /** jobName */
  jobName?: string | null;
  /** jobName_not */
  jobName_not?: string | null;
  /** jobName_in */
  jobName_in?: string[] | null;
  /** jobName_not_in */
  jobName_not_in?: string[] | null;
  /** jobName_lt */
  jobName_lt?: string | null;
  /** jobName_lte */
  jobName_lte?: string | null;
  /** jobName_gt */
  jobName_gt?: string | null;
  /** jobName_gte */
  jobName_gte?: string | null;
  /** jobName_contains */
  jobName_contains?: string | null;
  /** jobName_not_contains */
  jobName_not_contains?: string | null;
  /** jobName_starts_with */
  jobName_starts_with?: string | null;
  /** jobName_not_starts_with */
  jobName_not_starts_with?: string | null;
  /** jobName_ends_with */
  jobName_ends_with?: string | null;
  /** jobName_not_ends_with */
  jobName_not_ends_with?: string | null;
  /** jobId */
  jobId?: string | null;
  /** jobId_not */
  jobId_not?: string | null;
  /** jobId_in */
  jobId_in?: string[] | null;
  /** jobId_not_in */
  jobId_not_in?: string[] | null;
  /** jobId_lt */
  jobId_lt?: string | null;
  /** jobId_lte */
  jobId_lte?: string | null;
  /** jobId_gt */
  jobId_gt?: string | null;
  /** jobId_gte */
  jobId_gte?: string | null;
  /** jobId_contains */
  jobId_contains?: string | null;
  /** jobId_not_contains */
  jobId_not_contains?: string | null;
  /** jobId_starts_with */
  jobId_starts_with?: string | null;
  /** jobId_not_starts_with */
  jobId_not_starts_with?: string | null;
  /** jobId_ends_with */
  jobId_ends_with?: string | null;
  /** jobId_not_ends_with */
  jobId_not_ends_with?: string | null;
  /** data */
  data?: string | null;
  /** data_not */
  data_not?: string | null;
  /** data_in */
  data_in?: string[] | null;
  /** data_not_in */
  data_not_in?: string[] | null;
  /** data_lt */
  data_lt?: string | null;
  /** data_lte */
  data_lte?: string | null;
  /** data_gt */
  data_gt?: string | null;
  /** data_gte */
  data_gte?: string | null;
  /** data_contains */
  data_contains?: string | null;
  /** data_not_contains */
  data_not_contains?: string | null;
  /** data_starts_with */
  data_starts_with?: string | null;
  /** data_not_starts_with */
  data_not_starts_with?: string | null;
  /** data_ends_with */
  data_ends_with?: string | null;
  /** data_not_ends_with */
  data_not_ends_with?: string | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** push */
  push?: _PushFilter | null;
  /** push_not */
  push_not?: _PushFilter | null;
  /** push_in */
  push_in?: _PushFilter | null;
  /** push_not_in */
  push_not_in?: _PushFilter | null;
  /** pullRequest */
  pullRequest?: _PullRequestFilter | null;
  /** pullRequest_not */
  pullRequest_not?: _PullRequestFilter | null;
  /** pullRequest_in */
  pullRequest_in?: _PullRequestFilter | null;
  /** pullRequest_not_in */
  pullRequest_not_in?: _PullRequestFilter | null;
  /** tag */
  tag?: _TagFilter | null;
  /** tag_not */
  tag_not?: _TagFilter | null;
  /** tag_in */
  tag_in?: _TagFilter | null;
  /** tag_not_in */
  tag_not_in?: _TagFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
  /** workflow */
  workflow?: _WorkflowFilter | null;
  /** workflow_not */
  workflow_not?: _WorkflowFilter | null;
  /** workflow_in */
  workflow_in?: _WorkflowFilter | null;
  /** workflow_not_in */
  workflow_not_in?: _WorkflowFilter | null;
}
/** Filter Input Type for Push */
export interface _PushFilter {
  /** AND */
  AND?: _PushFilter[] | null;
  /** OR */
  OR?: _PushFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** branch */
  branch?: string | null;
  /** branch_not */
  branch_not?: string | null;
  /** branch_in */
  branch_in?: string[] | null;
  /** branch_not_in */
  branch_not_in?: string[] | null;
  /** branch_lt */
  branch_lt?: string | null;
  /** branch_lte */
  branch_lte?: string | null;
  /** branch_gt */
  branch_gt?: string | null;
  /** branch_gte */
  branch_gte?: string | null;
  /** branch_contains */
  branch_contains?: string | null;
  /** branch_not_contains */
  branch_not_contains?: string | null;
  /** branch_starts_with */
  branch_starts_with?: string | null;
  /** branch_not_starts_with */
  branch_not_starts_with?: string | null;
  /** branch_ends_with */
  branch_ends_with?: string | null;
  /** branch_not_ends_with */
  branch_not_ends_with?: string | null;
  /** after */
  after?: _CommitFilter | null;
  /** after_not */
  after_not?: _CommitFilter | null;
  /** after_in */
  after_in?: _CommitFilter | null;
  /** after_not_in */
  after_not_in?: _CommitFilter | null;
  /** before */
  before?: _CommitFilter | null;
  /** before_not */
  before_not?: _CommitFilter | null;
  /** before_in */
  before_in?: _CommitFilter | null;
  /** before_not_in */
  before_not_in?: _CommitFilter | null;
  /** commits */
  commits?: _CommitFilter | null;
  /** commits_not */
  commits_not?: _CommitFilter | null;
  /** commits_in */
  commits_in?: _CommitFilter | null;
  /** commits_not_in */
  commits_not_in?: _CommitFilter | null;
  /** commits_some */
  commits_some?: _CommitFilter | null;
  /** commits_none */
  commits_none?: _CommitFilter | null;
  /** commits_single */
  commits_single?: _CommitFilter | null;
  /** commits_every */
  commits_every?: _CommitFilter | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** builds */
  builds?: _BuildFilter | null;
  /** builds_not */
  builds_not?: _BuildFilter | null;
  /** builds_in */
  builds_in?: _BuildFilter | null;
  /** builds_not_in */
  builds_not_in?: _BuildFilter | null;
  /** builds_some */
  builds_some?: _BuildFilter | null;
  /** builds_none */
  builds_none?: _BuildFilter | null;
  /** builds_single */
  builds_single?: _BuildFilter | null;
  /** builds_every */
  builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Tag */
export interface _TagFilter {
  /** AND */
  AND?: _TagFilter[] | null;
  /** OR */
  OR?: _TagFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** description */
  description?: string | null;
  /** description_not */
  description_not?: string | null;
  /** description_in */
  description_in?: string[] | null;
  /** description_not_in */
  description_not_in?: string[] | null;
  /** description_lt */
  description_lt?: string | null;
  /** description_lte */
  description_lte?: string | null;
  /** description_gt */
  description_gt?: string | null;
  /** description_gte */
  description_gte?: string | null;
  /** description_contains */
  description_contains?: string | null;
  /** description_not_contains */
  description_not_contains?: string | null;
  /** description_starts_with */
  description_starts_with?: string | null;
  /** description_not_starts_with */
  description_not_starts_with?: string | null;
  /** description_ends_with */
  description_ends_with?: string | null;
  /** description_not_ends_with */
  description_not_ends_with?: string | null;
  /** ref */
  ref?: string | null;
  /** ref_not */
  ref_not?: string | null;
  /** ref_in */
  ref_in?: string[] | null;
  /** ref_not_in */
  ref_not_in?: string[] | null;
  /** ref_lt */
  ref_lt?: string | null;
  /** ref_lte */
  ref_lte?: string | null;
  /** ref_gt */
  ref_gt?: string | null;
  /** ref_gte */
  ref_gte?: string | null;
  /** ref_contains */
  ref_contains?: string | null;
  /** ref_not_contains */
  ref_not_contains?: string | null;
  /** ref_starts_with */
  ref_starts_with?: string | null;
  /** ref_not_starts_with */
  ref_not_starts_with?: string | null;
  /** ref_ends_with */
  ref_ends_with?: string | null;
  /** ref_not_ends_with */
  ref_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** release */
  release?: _ReleaseFilter | null;
  /** release_not */
  release_not?: _ReleaseFilter | null;
  /** release_in */
  release_in?: _ReleaseFilter | null;
  /** release_not_in */
  release_not_in?: _ReleaseFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
  /** containers */
  containers?: _DockerImageFilter | null;
  /** containers_not */
  containers_not?: _DockerImageFilter | null;
  /** containers_in */
  containers_in?: _DockerImageFilter | null;
  /** containers_not_in */
  containers_not_in?: _DockerImageFilter | null;
  /** containers_some */
  containers_some?: _DockerImageFilter | null;
  /** containers_none */
  containers_none?: _DockerImageFilter | null;
  /** containers_single */
  containers_single?: _DockerImageFilter | null;
  /** containers_every */
  containers_every?: _DockerImageFilter | null;
  /** builds */
  builds?: _BuildFilter | null;
  /** builds_not */
  builds_not?: _BuildFilter | null;
  /** builds_in */
  builds_in?: _BuildFilter | null;
  /** builds_not_in */
  builds_not_in?: _BuildFilter | null;
  /** builds_some */
  builds_some?: _BuildFilter | null;
  /** builds_none */
  builds_none?: _BuildFilter | null;
  /** builds_single */
  builds_single?: _BuildFilter | null;
  /** builds_every */
  builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Release */
export interface _ReleaseFilter {
  /** AND */
  AND?: _ReleaseFilter[] | null;
  /** OR */
  OR?: _ReleaseFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** tag */
  tag?: _TagFilter | null;
  /** tag_not */
  tag_not?: _TagFilter | null;
  /** tag_in */
  tag_in?: _TagFilter | null;
  /** tag_not_in */
  tag_not_in?: _TagFilter | null;
}
/** Filter Input Type for DockerImage */
export interface _DockerImageFilter {
  /** AND */
  AND?: _DockerImageFilter[] | null;
  /** OR */
  OR?: _DockerImageFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** image */
  image?: string | null;
  /** image_not */
  image_not?: string | null;
  /** image_in */
  image_in?: string[] | null;
  /** image_not_in */
  image_not_in?: string[] | null;
  /** image_lt */
  image_lt?: string | null;
  /** image_lte */
  image_lte?: string | null;
  /** image_gt */
  image_gt?: string | null;
  /** image_gte */
  image_gte?: string | null;
  /** image_contains */
  image_contains?: string | null;
  /** image_not_contains */
  image_not_contains?: string | null;
  /** image_starts_with */
  image_starts_with?: string | null;
  /** image_not_starts_with */
  image_not_starts_with?: string | null;
  /** image_ends_with */
  image_ends_with?: string | null;
  /** image_not_ends_with */
  image_not_ends_with?: string | null;
  /** imageName */
  imageName?: string | null;
  /** imageName_not */
  imageName_not?: string | null;
  /** imageName_in */
  imageName_in?: string[] | null;
  /** imageName_not_in */
  imageName_not_in?: string[] | null;
  /** imageName_lt */
  imageName_lt?: string | null;
  /** imageName_lte */
  imageName_lte?: string | null;
  /** imageName_gt */
  imageName_gt?: string | null;
  /** imageName_gte */
  imageName_gte?: string | null;
  /** imageName_contains */
  imageName_contains?: string | null;
  /** imageName_not_contains */
  imageName_not_contains?: string | null;
  /** imageName_starts_with */
  imageName_starts_with?: string | null;
  /** imageName_not_starts_with */
  imageName_not_starts_with?: string | null;
  /** imageName_ends_with */
  imageName_ends_with?: string | null;
  /** imageName_not_ends_with */
  imageName_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** pods */
  pods?: _K8PodFilter | null;
  /** pods_not */
  pods_not?: _K8PodFilter | null;
  /** pods_in */
  pods_in?: _K8PodFilter | null;
  /** pods_not_in */
  pods_not_in?: _K8PodFilter | null;
  /** pods_some */
  pods_some?: _K8PodFilter | null;
  /** pods_none */
  pods_none?: _K8PodFilter | null;
  /** pods_single */
  pods_single?: _K8PodFilter | null;
  /** pods_every */
  pods_every?: _K8PodFilter | null;
  /** commits */
  commits?: _CommitFilter | null;
  /** commits_not */
  commits_not?: _CommitFilter | null;
  /** commits_in */
  commits_in?: _CommitFilter | null;
  /** commits_not_in */
  commits_not_in?: _CommitFilter | null;
  /** commits_some */
  commits_some?: _CommitFilter | null;
  /** commits_none */
  commits_none?: _CommitFilter | null;
  /** commits_single */
  commits_single?: _CommitFilter | null;
  /** commits_every */
  commits_every?: _CommitFilter | null;
  /** containers */
  containers?: _K8ContainerFilter | null;
  /** containers_not */
  containers_not?: _K8ContainerFilter | null;
  /** containers_in */
  containers_in?: _K8ContainerFilter | null;
  /** containers_not_in */
  containers_not_in?: _K8ContainerFilter | null;
  /** containers_some */
  containers_some?: _K8ContainerFilter | null;
  /** containers_none */
  containers_none?: _K8ContainerFilter | null;
  /** containers_single */
  containers_single?: _K8ContainerFilter | null;
  /** containers_every */
  containers_every?: _K8ContainerFilter | null;
}
/** Filter Input Type for K8Pod */
export interface _K8PodFilter {
  /** AND */
  AND?: _K8PodFilter[] | null;
  /** OR */
  OR?: _K8PodFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** phase */
  phase?: string | null;
  /** phase_not */
  phase_not?: string | null;
  /** phase_in */
  phase_in?: string[] | null;
  /** phase_not_in */
  phase_not_in?: string[] | null;
  /** phase_lt */
  phase_lt?: string | null;
  /** phase_lte */
  phase_lte?: string | null;
  /** phase_gt */
  phase_gt?: string | null;
  /** phase_gte */
  phase_gte?: string | null;
  /** phase_contains */
  phase_contains?: string | null;
  /** phase_not_contains */
  phase_not_contains?: string | null;
  /** phase_starts_with */
  phase_starts_with?: string | null;
  /** phase_not_starts_with */
  phase_not_starts_with?: string | null;
  /** phase_ends_with */
  phase_ends_with?: string | null;
  /** phase_not_ends_with */
  phase_not_ends_with?: string | null;
  /** environment */
  environment?: string | null;
  /** environment_not */
  environment_not?: string | null;
  /** environment_in */
  environment_in?: string[] | null;
  /** environment_not_in */
  environment_not_in?: string[] | null;
  /** environment_lt */
  environment_lt?: string | null;
  /** environment_lte */
  environment_lte?: string | null;
  /** environment_gt */
  environment_gt?: string | null;
  /** environment_gte */
  environment_gte?: string | null;
  /** environment_contains */
  environment_contains?: string | null;
  /** environment_not_contains */
  environment_not_contains?: string | null;
  /** environment_starts_with */
  environment_starts_with?: string | null;
  /** environment_not_starts_with */
  environment_not_starts_with?: string | null;
  /** environment_ends_with */
  environment_ends_with?: string | null;
  /** environment_not_ends_with */
  environment_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** baseName */
  baseName?: string | null;
  /** baseName_not */
  baseName_not?: string | null;
  /** baseName_in */
  baseName_in?: string[] | null;
  /** baseName_not_in */
  baseName_not_in?: string[] | null;
  /** baseName_lt */
  baseName_lt?: string | null;
  /** baseName_lte */
  baseName_lte?: string | null;
  /** baseName_gt */
  baseName_gt?: string | null;
  /** baseName_gte */
  baseName_gte?: string | null;
  /** baseName_contains */
  baseName_contains?: string | null;
  /** baseName_not_contains */
  baseName_not_contains?: string | null;
  /** baseName_starts_with */
  baseName_starts_with?: string | null;
  /** baseName_not_starts_with */
  baseName_not_starts_with?: string | null;
  /** baseName_ends_with */
  baseName_ends_with?: string | null;
  /** baseName_not_ends_with */
  baseName_not_ends_with?: string | null;
  /** namespace */
  namespace?: string | null;
  /** namespace_not */
  namespace_not?: string | null;
  /** namespace_in */
  namespace_in?: string[] | null;
  /** namespace_not_in */
  namespace_not_in?: string[] | null;
  /** namespace_lt */
  namespace_lt?: string | null;
  /** namespace_lte */
  namespace_lte?: string | null;
  /** namespace_gt */
  namespace_gt?: string | null;
  /** namespace_gte */
  namespace_gte?: string | null;
  /** namespace_contains */
  namespace_contains?: string | null;
  /** namespace_not_contains */
  namespace_not_contains?: string | null;
  /** namespace_starts_with */
  namespace_starts_with?: string | null;
  /** namespace_not_starts_with */
  namespace_not_starts_with?: string | null;
  /** namespace_ends_with */
  namespace_ends_with?: string | null;
  /** namespace_not_ends_with */
  namespace_not_ends_with?: string | null;
  /** statusJSON */
  statusJSON?: string | null;
  /** statusJSON_not */
  statusJSON_not?: string | null;
  /** statusJSON_in */
  statusJSON_in?: string[] | null;
  /** statusJSON_not_in */
  statusJSON_not_in?: string[] | null;
  /** statusJSON_lt */
  statusJSON_lt?: string | null;
  /** statusJSON_lte */
  statusJSON_lte?: string | null;
  /** statusJSON_gt */
  statusJSON_gt?: string | null;
  /** statusJSON_gte */
  statusJSON_gte?: string | null;
  /** statusJSON_contains */
  statusJSON_contains?: string | null;
  /** statusJSON_not_contains */
  statusJSON_not_contains?: string | null;
  /** statusJSON_starts_with */
  statusJSON_starts_with?: string | null;
  /** statusJSON_not_starts_with */
  statusJSON_not_starts_with?: string | null;
  /** statusJSON_ends_with */
  statusJSON_ends_with?: string | null;
  /** statusJSON_not_ends_with */
  statusJSON_not_ends_with?: string | null;
  /** host */
  host?: string | null;
  /** host_not */
  host_not?: string | null;
  /** host_in */
  host_in?: string[] | null;
  /** host_not_in */
  host_not_in?: string[] | null;
  /** host_lt */
  host_lt?: string | null;
  /** host_lte */
  host_lte?: string | null;
  /** host_gt */
  host_gt?: string | null;
  /** host_gte */
  host_gte?: string | null;
  /** host_contains */
  host_contains?: string | null;
  /** host_not_contains */
  host_not_contains?: string | null;
  /** host_starts_with */
  host_starts_with?: string | null;
  /** host_not_starts_with */
  host_not_starts_with?: string | null;
  /** host_ends_with */
  host_ends_with?: string | null;
  /** host_not_ends_with */
  host_not_ends_with?: string | null;
  /** state */
  state?: string | null;
  /** state_not */
  state_not?: string | null;
  /** state_in */
  state_in?: string[] | null;
  /** state_not_in */
  state_not_in?: string[] | null;
  /** state_lt */
  state_lt?: string | null;
  /** state_lte */
  state_lte?: string | null;
  /** state_gt */
  state_gt?: string | null;
  /** state_gte */
  state_gte?: string | null;
  /** state_contains */
  state_contains?: string | null;
  /** state_not_contains */
  state_not_contains?: string | null;
  /** state_starts_with */
  state_starts_with?: string | null;
  /** state_not_starts_with */
  state_not_starts_with?: string | null;
  /** state_ends_with */
  state_ends_with?: string | null;
  /** state_not_ends_with */
  state_not_ends_with?: string | null;
  /** specsJSON */
  specsJSON?: string | null;
  /** specsJSON_not */
  specsJSON_not?: string | null;
  /** specsJSON_in */
  specsJSON_in?: string[] | null;
  /** specsJSON_not_in */
  specsJSON_not_in?: string[] | null;
  /** specsJSON_lt */
  specsJSON_lt?: string | null;
  /** specsJSON_lte */
  specsJSON_lte?: string | null;
  /** specsJSON_gt */
  specsJSON_gt?: string | null;
  /** specsJSON_gte */
  specsJSON_gte?: string | null;
  /** specsJSON_contains */
  specsJSON_contains?: string | null;
  /** specsJSON_not_contains */
  specsJSON_not_contains?: string | null;
  /** specsJSON_starts_with */
  specsJSON_starts_with?: string | null;
  /** specsJSON_not_starts_with */
  specsJSON_not_starts_with?: string | null;
  /** specsJSON_ends_with */
  specsJSON_ends_with?: string | null;
  /** specsJSON_not_ends_with */
  specsJSON_not_ends_with?: string | null;
  /** envJSON */
  envJSON?: string | null;
  /** envJSON_not */
  envJSON_not?: string | null;
  /** envJSON_in */
  envJSON_in?: string[] | null;
  /** envJSON_not_in */
  envJSON_not_in?: string[] | null;
  /** envJSON_lt */
  envJSON_lt?: string | null;
  /** envJSON_lte */
  envJSON_lte?: string | null;
  /** envJSON_gt */
  envJSON_gt?: string | null;
  /** envJSON_gte */
  envJSON_gte?: string | null;
  /** envJSON_contains */
  envJSON_contains?: string | null;
  /** envJSON_not_contains */
  envJSON_not_contains?: string | null;
  /** envJSON_starts_with */
  envJSON_starts_with?: string | null;
  /** envJSON_not_starts_with */
  envJSON_not_starts_with?: string | null;
  /** envJSON_ends_with */
  envJSON_ends_with?: string | null;
  /** envJSON_not_ends_with */
  envJSON_not_ends_with?: string | null;
  /** metadataJSON */
  metadataJSON?: string | null;
  /** metadataJSON_not */
  metadataJSON_not?: string | null;
  /** metadataJSON_in */
  metadataJSON_in?: string[] | null;
  /** metadataJSON_not_in */
  metadataJSON_not_in?: string[] | null;
  /** metadataJSON_lt */
  metadataJSON_lt?: string | null;
  /** metadataJSON_lte */
  metadataJSON_lte?: string | null;
  /** metadataJSON_gt */
  metadataJSON_gt?: string | null;
  /** metadataJSON_gte */
  metadataJSON_gte?: string | null;
  /** metadataJSON_contains */
  metadataJSON_contains?: string | null;
  /** metadataJSON_not_contains */
  metadataJSON_not_contains?: string | null;
  /** metadataJSON_starts_with */
  metadataJSON_starts_with?: string | null;
  /** metadataJSON_not_starts_with */
  metadataJSON_not_starts_with?: string | null;
  /** metadataJSON_ends_with */
  metadataJSON_ends_with?: string | null;
  /** metadataJSON_not_ends_with */
  metadataJSON_not_ends_with?: string | null;
  /** containersCrashLoopBackOff */
  containersCrashLoopBackOff?: boolean | null;
  /** containersCrashLoopBackOff_not */
  containersCrashLoopBackOff_not?: boolean | null;
  /** resourceVersion */
  resourceVersion?: number | null;
  /** resourceVersion_not */
  resourceVersion_not?: number | null;
  /** resourceVersion_in */
  resourceVersion_in?: number[] | null;
  /** resourceVersion_not_in */
  resourceVersion_not_in?: number[] | null;
  /** resourceVersion_lt */
  resourceVersion_lt?: number | null;
  /** resourceVersion_lte */
  resourceVersion_lte?: number | null;
  /** resourceVersion_gt */
  resourceVersion_gt?: number | null;
  /** resourceVersion_gte */
  resourceVersion_gte?: number | null;
  /** images */
  images?: _DockerImageFilter | null;
  /** images_not */
  images_not?: _DockerImageFilter | null;
  /** images_in */
  images_in?: _DockerImageFilter | null;
  /** images_not_in */
  images_not_in?: _DockerImageFilter | null;
  /** images_some */
  images_some?: _DockerImageFilter | null;
  /** images_none */
  images_none?: _DockerImageFilter | null;
  /** images_single */
  images_single?: _DockerImageFilter | null;
  /** images_every */
  images_every?: _DockerImageFilter | null;
  /** containers */
  containers?: _K8ContainerFilter | null;
  /** containers_not */
  containers_not?: _K8ContainerFilter | null;
  /** containers_in */
  containers_in?: _K8ContainerFilter | null;
  /** containers_not_in */
  containers_not_in?: _K8ContainerFilter | null;
  /** containers_some */
  containers_some?: _K8ContainerFilter | null;
  /** containers_none */
  containers_none?: _K8ContainerFilter | null;
  /** containers_single */
  containers_single?: _K8ContainerFilter | null;
  /** containers_every */
  containers_every?: _K8ContainerFilter | null;
}
/** Filter Input Type for K8Container */
export interface _K8ContainerFilter {
  /** AND */
  AND?: _K8ContainerFilter[] | null;
  /** OR */
  OR?: _K8ContainerFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** imageName */
  imageName?: string | null;
  /** imageName_not */
  imageName_not?: string | null;
  /** imageName_in */
  imageName_in?: string[] | null;
  /** imageName_not_in */
  imageName_not_in?: string[] | null;
  /** imageName_lt */
  imageName_lt?: string | null;
  /** imageName_lte */
  imageName_lte?: string | null;
  /** imageName_gt */
  imageName_gt?: string | null;
  /** imageName_gte */
  imageName_gte?: string | null;
  /** imageName_contains */
  imageName_contains?: string | null;
  /** imageName_not_contains */
  imageName_not_contains?: string | null;
  /** imageName_starts_with */
  imageName_starts_with?: string | null;
  /** imageName_not_starts_with */
  imageName_not_starts_with?: string | null;
  /** imageName_ends_with */
  imageName_ends_with?: string | null;
  /** imageName_not_ends_with */
  imageName_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** environment */
  environment?: string | null;
  /** environment_not */
  environment_not?: string | null;
  /** environment_in */
  environment_in?: string[] | null;
  /** environment_not_in */
  environment_not_in?: string[] | null;
  /** environment_lt */
  environment_lt?: string | null;
  /** environment_lte */
  environment_lte?: string | null;
  /** environment_gt */
  environment_gt?: string | null;
  /** environment_gte */
  environment_gte?: string | null;
  /** environment_contains */
  environment_contains?: string | null;
  /** environment_not_contains */
  environment_not_contains?: string | null;
  /** environment_starts_with */
  environment_starts_with?: string | null;
  /** environment_not_starts_with */
  environment_not_starts_with?: string | null;
  /** environment_ends_with */
  environment_ends_with?: string | null;
  /** environment_not_ends_with */
  environment_not_ends_with?: string | null;
  /** containerJSON */
  containerJSON?: string | null;
  /** containerJSON_not */
  containerJSON_not?: string | null;
  /** containerJSON_in */
  containerJSON_in?: string[] | null;
  /** containerJSON_not_in */
  containerJSON_not_in?: string[] | null;
  /** containerJSON_lt */
  containerJSON_lt?: string | null;
  /** containerJSON_lte */
  containerJSON_lte?: string | null;
  /** containerJSON_gt */
  containerJSON_gt?: string | null;
  /** containerJSON_gte */
  containerJSON_gte?: string | null;
  /** containerJSON_contains */
  containerJSON_contains?: string | null;
  /** containerJSON_not_contains */
  containerJSON_not_contains?: string | null;
  /** containerJSON_starts_with */
  containerJSON_starts_with?: string | null;
  /** containerJSON_not_starts_with */
  containerJSON_not_starts_with?: string | null;
  /** containerJSON_ends_with */
  containerJSON_ends_with?: string | null;
  /** containerJSON_not_ends_with */
  containerJSON_not_ends_with?: string | null;
  /** state */
  state?: string | null;
  /** state_not */
  state_not?: string | null;
  /** state_in */
  state_in?: string[] | null;
  /** state_not_in */
  state_not_in?: string[] | null;
  /** state_lt */
  state_lt?: string | null;
  /** state_lte */
  state_lte?: string | null;
  /** state_gt */
  state_gt?: string | null;
  /** state_gte */
  state_gte?: string | null;
  /** state_contains */
  state_contains?: string | null;
  /** state_not_contains */
  state_not_contains?: string | null;
  /** state_starts_with */
  state_starts_with?: string | null;
  /** state_not_starts_with */
  state_not_starts_with?: string | null;
  /** state_ends_with */
  state_ends_with?: string | null;
  /** state_not_ends_with */
  state_not_ends_with?: string | null;
  /** stateReason */
  stateReason?: string | null;
  /** stateReason_not */
  stateReason_not?: string | null;
  /** stateReason_in */
  stateReason_in?: string[] | null;
  /** stateReason_not_in */
  stateReason_not_in?: string[] | null;
  /** stateReason_lt */
  stateReason_lt?: string | null;
  /** stateReason_lte */
  stateReason_lte?: string | null;
  /** stateReason_gt */
  stateReason_gt?: string | null;
  /** stateReason_gte */
  stateReason_gte?: string | null;
  /** stateReason_contains */
  stateReason_contains?: string | null;
  /** stateReason_not_contains */
  stateReason_not_contains?: string | null;
  /** stateReason_starts_with */
  stateReason_starts_with?: string | null;
  /** stateReason_not_starts_with */
  stateReason_not_starts_with?: string | null;
  /** stateReason_ends_with */
  stateReason_ends_with?: string | null;
  /** stateReason_not_ends_with */
  stateReason_not_ends_with?: string | null;
  /** ready */
  ready?: boolean | null;
  /** ready_not */
  ready_not?: boolean | null;
  /** restartCount */
  restartCount?: number | null;
  /** restartCount_not */
  restartCount_not?: number | null;
  /** restartCount_in */
  restartCount_in?: number[] | null;
  /** restartCount_not_in */
  restartCount_not_in?: number[] | null;
  /** restartCount_lt */
  restartCount_lt?: number | null;
  /** restartCount_lte */
  restartCount_lte?: number | null;
  /** restartCount_gt */
  restartCount_gt?: number | null;
  /** restartCount_gte */
  restartCount_gte?: number | null;
  /** statusJSON */
  statusJSON?: string | null;
  /** statusJSON_not */
  statusJSON_not?: string | null;
  /** statusJSON_in */
  statusJSON_in?: string[] | null;
  /** statusJSON_not_in */
  statusJSON_not_in?: string[] | null;
  /** statusJSON_lt */
  statusJSON_lt?: string | null;
  /** statusJSON_lte */
  statusJSON_lte?: string | null;
  /** statusJSON_gt */
  statusJSON_gt?: string | null;
  /** statusJSON_gte */
  statusJSON_gte?: string | null;
  /** statusJSON_contains */
  statusJSON_contains?: string | null;
  /** statusJSON_not_contains */
  statusJSON_not_contains?: string | null;
  /** statusJSON_starts_with */
  statusJSON_starts_with?: string | null;
  /** statusJSON_not_starts_with */
  statusJSON_not_starts_with?: string | null;
  /** statusJSON_ends_with */
  statusJSON_ends_with?: string | null;
  /** statusJSON_not_ends_with */
  statusJSON_not_ends_with?: string | null;
  /** resourceVersion */
  resourceVersion?: number | null;
  /** resourceVersion_not */
  resourceVersion_not?: number | null;
  /** resourceVersion_in */
  resourceVersion_in?: number[] | null;
  /** resourceVersion_not_in */
  resourceVersion_not_in?: number[] | null;
  /** resourceVersion_lt */
  resourceVersion_lt?: number | null;
  /** resourceVersion_lte */
  resourceVersion_lte?: number | null;
  /** resourceVersion_gt */
  resourceVersion_gt?: number | null;
  /** resourceVersion_gte */
  resourceVersion_gte?: number | null;
  /** containerID */
  containerID?: string | null;
  /** containerID_not */
  containerID_not?: string | null;
  /** containerID_in */
  containerID_in?: string[] | null;
  /** containerID_not_in */
  containerID_not_in?: string[] | null;
  /** containerID_lt */
  containerID_lt?: string | null;
  /** containerID_lte */
  containerID_lte?: string | null;
  /** containerID_gt */
  containerID_gt?: string | null;
  /** containerID_gte */
  containerID_gte?: string | null;
  /** containerID_contains */
  containerID_contains?: string | null;
  /** containerID_not_contains */
  containerID_not_contains?: string | null;
  /** containerID_starts_with */
  containerID_starts_with?: string | null;
  /** containerID_not_starts_with */
  containerID_not_starts_with?: string | null;
  /** containerID_ends_with */
  containerID_ends_with?: string | null;
  /** containerID_not_ends_with */
  containerID_not_ends_with?: string | null;
  /** image */
  image?: _DockerImageFilter | null;
  /** image_not */
  image_not?: _DockerImageFilter | null;
  /** image_in */
  image_in?: _DockerImageFilter | null;
  /** image_not_in */
  image_not_in?: _DockerImageFilter | null;
  /** pod */
  pod?: _K8PodFilter | null;
  /** pod_not */
  pod_not?: _K8PodFilter | null;
  /** pod_in */
  pod_in?: _K8PodFilter | null;
  /** pod_not_in */
  pod_not_in?: _K8PodFilter | null;
}
/** Filter Input Type for Workflow */
export interface _WorkflowFilter {
  /** AND */
  AND?: _WorkflowFilter[] | null;
  /** OR */
  OR?: _WorkflowFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** workflowId */
  workflowId?: string | null;
  /** workflowId_not */
  workflowId_not?: string | null;
  /** workflowId_in */
  workflowId_in?: string[] | null;
  /** workflowId_not_in */
  workflowId_not_in?: string[] | null;
  /** workflowId_lt */
  workflowId_lt?: string | null;
  /** workflowId_lte */
  workflowId_lte?: string | null;
  /** workflowId_gt */
  workflowId_gt?: string | null;
  /** workflowId_gte */
  workflowId_gte?: string | null;
  /** workflowId_contains */
  workflowId_contains?: string | null;
  /** workflowId_not_contains */
  workflowId_not_contains?: string | null;
  /** workflowId_starts_with */
  workflowId_starts_with?: string | null;
  /** workflowId_not_starts_with */
  workflowId_not_starts_with?: string | null;
  /** workflowId_ends_with */
  workflowId_ends_with?: string | null;
  /** workflowId_not_ends_with */
  workflowId_not_ends_with?: string | null;
  /** provider */
  provider?: string | null;
  /** provider_not */
  provider_not?: string | null;
  /** provider_in */
  provider_in?: string[] | null;
  /** provider_not_in */
  provider_not_in?: string[] | null;
  /** provider_lt */
  provider_lt?: string | null;
  /** provider_lte */
  provider_lte?: string | null;
  /** provider_gt */
  provider_gt?: string | null;
  /** provider_gte */
  provider_gte?: string | null;
  /** provider_contains */
  provider_contains?: string | null;
  /** provider_not_contains */
  provider_not_contains?: string | null;
  /** provider_starts_with */
  provider_starts_with?: string | null;
  /** provider_not_starts_with */
  provider_not_starts_with?: string | null;
  /** provider_ends_with */
  provider_ends_with?: string | null;
  /** provider_not_ends_with */
  provider_not_ends_with?: string | null;
  /** config */
  config?: string | null;
  /** config_not */
  config_not?: string | null;
  /** config_in */
  config_in?: string[] | null;
  /** config_not_in */
  config_not_in?: string[] | null;
  /** config_lt */
  config_lt?: string | null;
  /** config_lte */
  config_lte?: string | null;
  /** config_gt */
  config_gt?: string | null;
  /** config_gte */
  config_gte?: string | null;
  /** config_contains */
  config_contains?: string | null;
  /** config_not_contains */
  config_not_contains?: string | null;
  /** config_starts_with */
  config_starts_with?: string | null;
  /** config_not_starts_with */
  config_not_starts_with?: string | null;
  /** config_ends_with */
  config_ends_with?: string | null;
  /** config_not_ends_with */
  config_not_ends_with?: string | null;
  /** builds */
  builds?: _BuildFilter | null;
  /** builds_not */
  builds_not?: _BuildFilter | null;
  /** builds_in */
  builds_in?: _BuildFilter | null;
  /** builds_not_in */
  builds_not_in?: _BuildFilter | null;
  /** builds_some */
  builds_some?: _BuildFilter | null;
  /** builds_none */
  builds_none?: _BuildFilter | null;
  /** builds_single */
  builds_single?: _BuildFilter | null;
  /** builds_every */
  builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Status */
export interface _StatusFilter {
  /** AND */
  AND?: _StatusFilter[] | null;
  /** OR */
  OR?: _StatusFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** state */
  state?: StatusState | null;
  /** state_not */
  state_not?: StatusState | null;
  /** state_in */
  state_in?: StatusState[] | null;
  /** state_not_in */
  state_not_in?: StatusState[] | null;
  /** description */
  description?: string | null;
  /** description_not */
  description_not?: string | null;
  /** description_in */
  description_in?: string[] | null;
  /** description_not_in */
  description_not_in?: string[] | null;
  /** description_lt */
  description_lt?: string | null;
  /** description_lte */
  description_lte?: string | null;
  /** description_gt */
  description_gt?: string | null;
  /** description_gte */
  description_gte?: string | null;
  /** description_contains */
  description_contains?: string | null;
  /** description_not_contains */
  description_not_contains?: string | null;
  /** description_starts_with */
  description_starts_with?: string | null;
  /** description_not_starts_with */
  description_not_starts_with?: string | null;
  /** description_ends_with */
  description_ends_with?: string | null;
  /** description_not_ends_with */
  description_not_ends_with?: string | null;
  /** targetUrl */
  targetUrl?: string | null;
  /** targetUrl_not */
  targetUrl_not?: string | null;
  /** targetUrl_in */
  targetUrl_in?: string[] | null;
  /** targetUrl_not_in */
  targetUrl_not_in?: string[] | null;
  /** targetUrl_lt */
  targetUrl_lt?: string | null;
  /** targetUrl_lte */
  targetUrl_lte?: string | null;
  /** targetUrl_gt */
  targetUrl_gt?: string | null;
  /** targetUrl_gte */
  targetUrl_gte?: string | null;
  /** targetUrl_contains */
  targetUrl_contains?: string | null;
  /** targetUrl_not_contains */
  targetUrl_not_contains?: string | null;
  /** targetUrl_starts_with */
  targetUrl_starts_with?: string | null;
  /** targetUrl_not_starts_with */
  targetUrl_not_starts_with?: string | null;
  /** targetUrl_ends_with */
  targetUrl_ends_with?: string | null;
  /** targetUrl_not_ends_with */
  targetUrl_not_ends_with?: string | null;
  /** context */
  context?: string | null;
  /** context_not */
  context_not?: string | null;
  /** context_in */
  context_in?: string[] | null;
  /** context_not_in */
  context_not_in?: string[] | null;
  /** context_lt */
  context_lt?: string | null;
  /** context_lte */
  context_lte?: string | null;
  /** context_gt */
  context_gt?: string | null;
  /** context_gte */
  context_gte?: string | null;
  /** context_contains */
  context_contains?: string | null;
  /** context_not_contains */
  context_not_contains?: string | null;
  /** context_starts_with */
  context_starts_with?: string | null;
  /** context_not_starts_with */
  context_not_starts_with?: string | null;
  /** context_ends_with */
  context_ends_with?: string | null;
  /** context_not_ends_with */
  context_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for HerokuApp */
export interface _HerokuAppFilter {
  /** AND */
  AND?: _HerokuAppFilter[] | null;
  /** OR */
  OR?: _HerokuAppFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** app */
  app?: string | null;
  /** app_not */
  app_not?: string | null;
  /** app_in */
  app_in?: string[] | null;
  /** app_not_in */
  app_not_in?: string[] | null;
  /** app_lt */
  app_lt?: string | null;
  /** app_lte */
  app_lte?: string | null;
  /** app_gt */
  app_gt?: string | null;
  /** app_gte */
  app_gte?: string | null;
  /** app_contains */
  app_contains?: string | null;
  /** app_not_contains */
  app_not_contains?: string | null;
  /** app_starts_with */
  app_starts_with?: string | null;
  /** app_not_starts_with */
  app_not_starts_with?: string | null;
  /** app_ends_with */
  app_ends_with?: string | null;
  /** app_not_ends_with */
  app_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** user */
  user?: string | null;
  /** user_not */
  user_not?: string | null;
  /** user_in */
  user_in?: string[] | null;
  /** user_not_in */
  user_not_in?: string[] | null;
  /** user_lt */
  user_lt?: string | null;
  /** user_lte */
  user_lte?: string | null;
  /** user_gt */
  user_gt?: string | null;
  /** user_gte */
  user_gte?: string | null;
  /** user_contains */
  user_contains?: string | null;
  /** user_not_contains */
  user_not_contains?: string | null;
  /** user_starts_with */
  user_starts_with?: string | null;
  /** user_not_starts_with */
  user_not_starts_with?: string | null;
  /** user_ends_with */
  user_ends_with?: string | null;
  /** user_not_ends_with */
  user_not_ends_with?: string | null;
  /** appId */
  appId?: string | null;
  /** appId_not */
  appId_not?: string | null;
  /** appId_in */
  appId_in?: string[] | null;
  /** appId_not_in */
  appId_not_in?: string[] | null;
  /** appId_lt */
  appId_lt?: string | null;
  /** appId_lte */
  appId_lte?: string | null;
  /** appId_gt */
  appId_gt?: string | null;
  /** appId_gte */
  appId_gte?: string | null;
  /** appId_contains */
  appId_contains?: string | null;
  /** appId_not_contains */
  appId_not_contains?: string | null;
  /** appId_starts_with */
  appId_starts_with?: string | null;
  /** appId_not_starts_with */
  appId_not_starts_with?: string | null;
  /** appId_ends_with */
  appId_ends_with?: string | null;
  /** appId_not_ends_with */
  appId_not_ends_with?: string | null;
  /** release */
  release?: string | null;
  /** release_not */
  release_not?: string | null;
  /** release_in */
  release_in?: string[] | null;
  /** release_not_in */
  release_not_in?: string[] | null;
  /** release_lt */
  release_lt?: string | null;
  /** release_lte */
  release_lte?: string | null;
  /** release_gt */
  release_gt?: string | null;
  /** release_gte */
  release_gte?: string | null;
  /** release_contains */
  release_contains?: string | null;
  /** release_not_contains */
  release_not_contains?: string | null;
  /** release_starts_with */
  release_starts_with?: string | null;
  /** release_not_starts_with */
  release_not_starts_with?: string | null;
  /** release_ends_with */
  release_ends_with?: string | null;
  /** release_not_ends_with */
  release_not_ends_with?: string | null;
  /** commits */
  commits?: _CommitFilter | null;
  /** commits_not */
  commits_not?: _CommitFilter | null;
  /** commits_in */
  commits_in?: _CommitFilter | null;
  /** commits_not_in */
  commits_not_in?: _CommitFilter | null;
  /** commits_some */
  commits_some?: _CommitFilter | null;
  /** commits_none */
  commits_none?: _CommitFilter | null;
  /** commits_single */
  commits_single?: _CommitFilter | null;
  /** commits_every */
  commits_every?: _CommitFilter | null;
}
/** Filter Input Type for Application */
export interface _ApplicationFilter {
  /** AND */
  AND?: _ApplicationFilter[] | null;
  /** OR */
  OR?: _ApplicationFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** state */
  state?: string | null;
  /** state_not */
  state_not?: string | null;
  /** state_in */
  state_in?: string[] | null;
  /** state_not_in */
  state_not_in?: string[] | null;
  /** state_lt */
  state_lt?: string | null;
  /** state_lte */
  state_lte?: string | null;
  /** state_gt */
  state_gt?: string | null;
  /** state_gte */
  state_gte?: string | null;
  /** state_contains */
  state_contains?: string | null;
  /** state_not_contains */
  state_not_contains?: string | null;
  /** state_starts_with */
  state_starts_with?: string | null;
  /** state_not_starts_with */
  state_not_starts_with?: string | null;
  /** state_ends_with */
  state_ends_with?: string | null;
  /** state_not_ends_with */
  state_not_ends_with?: string | null;
  /** host */
  host?: string | null;
  /** host_not */
  host_not?: string | null;
  /** host_in */
  host_in?: string[] | null;
  /** host_not_in */
  host_not_in?: string[] | null;
  /** host_lt */
  host_lt?: string | null;
  /** host_lte */
  host_lte?: string | null;
  /** host_gt */
  host_gt?: string | null;
  /** host_gte */
  host_gte?: string | null;
  /** host_contains */
  host_contains?: string | null;
  /** host_not_contains */
  host_not_contains?: string | null;
  /** host_starts_with */
  host_starts_with?: string | null;
  /** host_not_starts_with */
  host_not_starts_with?: string | null;
  /** host_ends_with */
  host_ends_with?: string | null;
  /** host_not_ends_with */
  host_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** domain */
  domain?: string | null;
  /** domain_not */
  domain_not?: string | null;
  /** domain_in */
  domain_in?: string[] | null;
  /** domain_not_in */
  domain_not_in?: string[] | null;
  /** domain_lt */
  domain_lt?: string | null;
  /** domain_lte */
  domain_lte?: string | null;
  /** domain_gt */
  domain_gt?: string | null;
  /** domain_gte */
  domain_gte?: string | null;
  /** domain_contains */
  domain_contains?: string | null;
  /** domain_not_contains */
  domain_not_contains?: string | null;
  /** domain_starts_with */
  domain_starts_with?: string | null;
  /** domain_not_starts_with */
  domain_not_starts_with?: string | null;
  /** domain_ends_with */
  domain_ends_with?: string | null;
  /** domain_not_ends_with */
  domain_not_ends_with?: string | null;
  /** data */
  data?: string | null;
  /** data_not */
  data_not?: string | null;
  /** data_in */
  data_in?: string[] | null;
  /** data_not_in */
  data_not_in?: string[] | null;
  /** data_lt */
  data_lt?: string | null;
  /** data_lte */
  data_lte?: string | null;
  /** data_gt */
  data_gt?: string | null;
  /** data_gte */
  data_gte?: string | null;
  /** data_contains */
  data_contains?: string | null;
  /** data_not_contains */
  data_not_contains?: string | null;
  /** data_starts_with */
  data_starts_with?: string | null;
  /** data_not_starts_with */
  data_not_starts_with?: string | null;
  /** data_ends_with */
  data_ends_with?: string | null;
  /** data_not_ends_with */
  data_not_ends_with?: string | null;
  /** commits */
  commits?: _CommitFilter | null;
  /** commits_not */
  commits_not?: _CommitFilter | null;
  /** commits_in */
  commits_in?: _CommitFilter | null;
  /** commits_not_in */
  commits_not_in?: _CommitFilter | null;
  /** commits_some */
  commits_some?: _CommitFilter | null;
  /** commits_none */
  commits_none?: _CommitFilter | null;
  /** commits_single */
  commits_single?: _CommitFilter | null;
  /** commits_every */
  commits_every?: _CommitFilter | null;
}
/** Filter Input Type for Fingerprint */
export interface _FingerprintFilter {
  /** AND */
  AND?: _FingerprintFilter[] | null;
  /** OR */
  OR?: _FingerprintFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** sha */
  sha?: string | null;
  /** sha_not */
  sha_not?: string | null;
  /** sha_in */
  sha_in?: string[] | null;
  /** sha_not_in */
  sha_not_in?: string[] | null;
  /** sha_lt */
  sha_lt?: string | null;
  /** sha_lte */
  sha_lte?: string | null;
  /** sha_gt */
  sha_gt?: string | null;
  /** sha_gte */
  sha_gte?: string | null;
  /** sha_contains */
  sha_contains?: string | null;
  /** sha_not_contains */
  sha_not_contains?: string | null;
  /** sha_starts_with */
  sha_starts_with?: string | null;
  /** sha_not_starts_with */
  sha_not_starts_with?: string | null;
  /** sha_ends_with */
  sha_ends_with?: string | null;
  /** sha_not_ends_with */
  sha_not_ends_with?: string | null;
  /** data */
  data?: string | null;
  /** data_not */
  data_not?: string | null;
  /** data_in */
  data_in?: string[] | null;
  /** data_not_in */
  data_not_in?: string[] | null;
  /** data_lt */
  data_lt?: string | null;
  /** data_lte */
  data_lte?: string | null;
  /** data_gt */
  data_gt?: string | null;
  /** data_gte */
  data_gte?: string | null;
  /** data_contains */
  data_contains?: string | null;
  /** data_not_contains */
  data_not_contains?: string | null;
  /** data_starts_with */
  data_starts_with?: string | null;
  /** data_not_starts_with */
  data_not_starts_with?: string | null;
  /** data_ends_with */
  data_ends_with?: string | null;
  /** data_not_ends_with */
  data_not_ends_with?: string | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for ParentImpact */
export interface _ParentImpactFilter {
  /** AND */
  AND?: _ParentImpactFilter[] | null;
  /** OR */
  OR?: _ParentImpactFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** data */
  data?: string | null;
  /** data_not */
  data_not?: string | null;
  /** data_in */
  data_in?: string[] | null;
  /** data_not_in */
  data_not_in?: string[] | null;
  /** data_lt */
  data_lt?: string | null;
  /** data_lte */
  data_lte?: string | null;
  /** data_gt */
  data_gt?: string | null;
  /** data_gte */
  data_gte?: string | null;
  /** data_contains */
  data_contains?: string | null;
  /** data_not_contains */
  data_not_contains?: string | null;
  /** data_starts_with */
  data_starts_with?: string | null;
  /** data_not_starts_with */
  data_not_starts_with?: string | null;
  /** data_ends_with */
  data_ends_with?: string | null;
  /** data_not_ends_with */
  data_not_ends_with?: string | null;
  /** commits */
  commits?: _CommitFilter | null;
  /** commits_not */
  commits_not?: _CommitFilter | null;
  /** commits_in */
  commits_in?: _CommitFilter | null;
  /** commits_not_in */
  commits_not_in?: _CommitFilter | null;
  /** commits_some */
  commits_some?: _CommitFilter | null;
  /** commits_none */
  commits_none?: _CommitFilter | null;
  /** commits_single */
  commits_single?: _CommitFilter | null;
  /** commits_every */
  commits_every?: _CommitFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for Branch */
export interface _BranchFilter {
  /** AND */
  AND?: _BranchFilter[] | null;
  /** OR */
  OR?: _BranchFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** isRemote */
  isRemote?: boolean | null;
  /** isRemote_not */
  isRemote_not?: boolean | null;
  /** remoteRepoHtmlUrl */
  remoteRepoHtmlUrl?: string | null;
  /** remoteRepoHtmlUrl_not */
  remoteRepoHtmlUrl_not?: string | null;
  /** remoteRepoHtmlUrl_in */
  remoteRepoHtmlUrl_in?: string[] | null;
  /** remoteRepoHtmlUrl_not_in */
  remoteRepoHtmlUrl_not_in?: string[] | null;
  /** remoteRepoHtmlUrl_lt */
  remoteRepoHtmlUrl_lt?: string | null;
  /** remoteRepoHtmlUrl_lte */
  remoteRepoHtmlUrl_lte?: string | null;
  /** remoteRepoHtmlUrl_gt */
  remoteRepoHtmlUrl_gt?: string | null;
  /** remoteRepoHtmlUrl_gte */
  remoteRepoHtmlUrl_gte?: string | null;
  /** remoteRepoHtmlUrl_contains */
  remoteRepoHtmlUrl_contains?: string | null;
  /** remoteRepoHtmlUrl_not_contains */
  remoteRepoHtmlUrl_not_contains?: string | null;
  /** remoteRepoHtmlUrl_starts_with */
  remoteRepoHtmlUrl_starts_with?: string | null;
  /** remoteRepoHtmlUrl_not_starts_with */
  remoteRepoHtmlUrl_not_starts_with?: string | null;
  /** remoteRepoHtmlUrl_ends_with */
  remoteRepoHtmlUrl_ends_with?: string | null;
  /** remoteRepoHtmlUrl_not_ends_with */
  remoteRepoHtmlUrl_not_ends_with?: string | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
  /** pullRequests */
  pullRequests?: _PullRequestFilter | null;
  /** pullRequests_not */
  pullRequests_not?: _PullRequestFilter | null;
  /** pullRequests_in */
  pullRequests_in?: _PullRequestFilter | null;
  /** pullRequests_not_in */
  pullRequests_not_in?: _PullRequestFilter | null;
  /** pullRequests_some */
  pullRequests_some?: _PullRequestFilter | null;
  /** pullRequests_none */
  pullRequests_none?: _PullRequestFilter | null;
  /** pullRequests_single */
  pullRequests_single?: _PullRequestFilter | null;
  /** pullRequests_every */
  pullRequests_every?: _PullRequestFilter | null;
}
/** Filter Input Type for Review */
export interface _ReviewFilter {
  /** AND */
  AND?: _ReviewFilter[] | null;
  /** OR */
  OR?: _ReviewFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** gitHubId */
  gitHubId?: string | null;
  /** gitHubId_not */
  gitHubId_not?: string | null;
  /** gitHubId_in */
  gitHubId_in?: string[] | null;
  /** gitHubId_not_in */
  gitHubId_not_in?: string[] | null;
  /** gitHubId_lt */
  gitHubId_lt?: string | null;
  /** gitHubId_lte */
  gitHubId_lte?: string | null;
  /** gitHubId_gt */
  gitHubId_gt?: string | null;
  /** gitHubId_gte */
  gitHubId_gte?: string | null;
  /** gitHubId_contains */
  gitHubId_contains?: string | null;
  /** gitHubId_not_contains */
  gitHubId_not_contains?: string | null;
  /** gitHubId_starts_with */
  gitHubId_starts_with?: string | null;
  /** gitHubId_not_starts_with */
  gitHubId_not_starts_with?: string | null;
  /** gitHubId_ends_with */
  gitHubId_ends_with?: string | null;
  /** gitHubId_not_ends_with */
  gitHubId_not_ends_with?: string | null;
  /** reviewId */
  reviewId?: string | null;
  /** reviewId_not */
  reviewId_not?: string | null;
  /** reviewId_in */
  reviewId_in?: string[] | null;
  /** reviewId_not_in */
  reviewId_not_in?: string[] | null;
  /** reviewId_lt */
  reviewId_lt?: string | null;
  /** reviewId_lte */
  reviewId_lte?: string | null;
  /** reviewId_gt */
  reviewId_gt?: string | null;
  /** reviewId_gte */
  reviewId_gte?: string | null;
  /** reviewId_contains */
  reviewId_contains?: string | null;
  /** reviewId_not_contains */
  reviewId_not_contains?: string | null;
  /** reviewId_starts_with */
  reviewId_starts_with?: string | null;
  /** reviewId_not_starts_with */
  reviewId_not_starts_with?: string | null;
  /** reviewId_ends_with */
  reviewId_ends_with?: string | null;
  /** reviewId_not_ends_with */
  reviewId_not_ends_with?: string | null;
  /** body */
  body?: string | null;
  /** body_not */
  body_not?: string | null;
  /** body_in */
  body_in?: string[] | null;
  /** body_not_in */
  body_not_in?: string[] | null;
  /** body_lt */
  body_lt?: string | null;
  /** body_lte */
  body_lte?: string | null;
  /** body_gt */
  body_gt?: string | null;
  /** body_gte */
  body_gte?: string | null;
  /** body_contains */
  body_contains?: string | null;
  /** body_not_contains */
  body_not_contains?: string | null;
  /** body_starts_with */
  body_starts_with?: string | null;
  /** body_not_starts_with */
  body_not_starts_with?: string | null;
  /** body_ends_with */
  body_ends_with?: string | null;
  /** body_not_ends_with */
  body_not_ends_with?: string | null;
  /** state */
  state?: ReviewState | null;
  /** state_not */
  state_not?: ReviewState | null;
  /** state_in */
  state_in?: ReviewState[] | null;
  /** state_not_in */
  state_not_in?: ReviewState[] | null;
  /** submittedAt */
  submittedAt?: string | null;
  /** submittedAt_not */
  submittedAt_not?: string | null;
  /** submittedAt_in */
  submittedAt_in?: string[] | null;
  /** submittedAt_not_in */
  submittedAt_not_in?: string[] | null;
  /** submittedAt_lt */
  submittedAt_lt?: string | null;
  /** submittedAt_lte */
  submittedAt_lte?: string | null;
  /** submittedAt_gt */
  submittedAt_gt?: string | null;
  /** submittedAt_gte */
  submittedAt_gte?: string | null;
  /** submittedAt_contains */
  submittedAt_contains?: string | null;
  /** submittedAt_not_contains */
  submittedAt_not_contains?: string | null;
  /** submittedAt_starts_with */
  submittedAt_starts_with?: string | null;
  /** submittedAt_not_starts_with */
  submittedAt_not_starts_with?: string | null;
  /** submittedAt_ends_with */
  submittedAt_ends_with?: string | null;
  /** submittedAt_not_ends_with */
  submittedAt_not_ends_with?: string | null;
  /** htmlUrl */
  htmlUrl?: string | null;
  /** htmlUrl_not */
  htmlUrl_not?: string | null;
  /** htmlUrl_in */
  htmlUrl_in?: string[] | null;
  /** htmlUrl_not_in */
  htmlUrl_not_in?: string[] | null;
  /** htmlUrl_lt */
  htmlUrl_lt?: string | null;
  /** htmlUrl_lte */
  htmlUrl_lte?: string | null;
  /** htmlUrl_gt */
  htmlUrl_gt?: string | null;
  /** htmlUrl_gte */
  htmlUrl_gte?: string | null;
  /** htmlUrl_contains */
  htmlUrl_contains?: string | null;
  /** htmlUrl_not_contains */
  htmlUrl_not_contains?: string | null;
  /** htmlUrl_starts_with */
  htmlUrl_starts_with?: string | null;
  /** htmlUrl_not_starts_with */
  htmlUrl_not_starts_with?: string | null;
  /** htmlUrl_ends_with */
  htmlUrl_ends_with?: string | null;
  /** htmlUrl_not_ends_with */
  htmlUrl_not_ends_with?: string | null;
  /** by */
  by?: _ScmIdFilter | null;
  /** by_not */
  by_not?: _ScmIdFilter | null;
  /** by_in */
  by_in?: _ScmIdFilter | null;
  /** by_not_in */
  by_not_in?: _ScmIdFilter | null;
  /** by_some */
  by_some?: _ScmIdFilter | null;
  /** by_none */
  by_none?: _ScmIdFilter | null;
  /** by_single */
  by_single?: _ScmIdFilter | null;
  /** by_every */
  by_every?: _ScmIdFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
  /** comments */
  comments?: _CommentFilter | null;
  /** comments_not */
  comments_not?: _CommentFilter | null;
  /** comments_in */
  comments_in?: _CommentFilter | null;
  /** comments_not_in */
  comments_not_in?: _CommentFilter | null;
  /** comments_some */
  comments_some?: _CommentFilter | null;
  /** comments_none */
  comments_none?: _CommentFilter | null;
  /** comments_single */
  comments_single?: _CommentFilter | null;
  /** comments_every */
  comments_every?: _CommentFilter | null;
  /** pullRequest */
  pullRequest?: _PullRequestFilter | null;
  /** pullRequest_not */
  pullRequest_not?: _PullRequestFilter | null;
  /** pullRequest_in */
  pullRequest_in?: _PullRequestFilter | null;
  /** pullRequest_not_in */
  pullRequest_not_in?: _PullRequestFilter | null;
}
/** Filter Input Type for Comment */
export interface _CommentFilter {
  /** AND */
  AND?: _CommentFilter[] | null;
  /** OR */
  OR?: _CommentFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** body */
  body?: string | null;
  /** body_not */
  body_not?: string | null;
  /** body_in */
  body_in?: string[] | null;
  /** body_not_in */
  body_not_in?: string[] | null;
  /** body_lt */
  body_lt?: string | null;
  /** body_lte */
  body_lte?: string | null;
  /** body_gt */
  body_gt?: string | null;
  /** body_gte */
  body_gte?: string | null;
  /** body_contains */
  body_contains?: string | null;
  /** body_not_contains */
  body_not_contains?: string | null;
  /** body_starts_with */
  body_starts_with?: string | null;
  /** body_not_starts_with */
  body_not_starts_with?: string | null;
  /** body_ends_with */
  body_ends_with?: string | null;
  /** body_not_ends_with */
  body_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** createdAt */
  createdAt?: string | null;
  /** createdAt_not */
  createdAt_not?: string | null;
  /** createdAt_in */
  createdAt_in?: string[] | null;
  /** createdAt_not_in */
  createdAt_not_in?: string[] | null;
  /** createdAt_lt */
  createdAt_lt?: string | null;
  /** createdAt_lte */
  createdAt_lte?: string | null;
  /** createdAt_gt */
  createdAt_gt?: string | null;
  /** createdAt_gte */
  createdAt_gte?: string | null;
  /** createdAt_contains */
  createdAt_contains?: string | null;
  /** createdAt_not_contains */
  createdAt_not_contains?: string | null;
  /** createdAt_starts_with */
  createdAt_starts_with?: string | null;
  /** createdAt_not_starts_with */
  createdAt_not_starts_with?: string | null;
  /** createdAt_ends_with */
  createdAt_ends_with?: string | null;
  /** createdAt_not_ends_with */
  createdAt_not_ends_with?: string | null;
  /** updatedAt */
  updatedAt?: string | null;
  /** updatedAt_not */
  updatedAt_not?: string | null;
  /** updatedAt_in */
  updatedAt_in?: string[] | null;
  /** updatedAt_not_in */
  updatedAt_not_in?: string[] | null;
  /** updatedAt_lt */
  updatedAt_lt?: string | null;
  /** updatedAt_lte */
  updatedAt_lte?: string | null;
  /** updatedAt_gt */
  updatedAt_gt?: string | null;
  /** updatedAt_gte */
  updatedAt_gte?: string | null;
  /** updatedAt_contains */
  updatedAt_contains?: string | null;
  /** updatedAt_not_contains */
  updatedAt_not_contains?: string | null;
  /** updatedAt_starts_with */
  updatedAt_starts_with?: string | null;
  /** updatedAt_not_starts_with */
  updatedAt_not_starts_with?: string | null;
  /** updatedAt_ends_with */
  updatedAt_ends_with?: string | null;
  /** updatedAt_not_ends_with */
  updatedAt_not_ends_with?: string | null;
  /** commentId */
  commentId?: string | null;
  /** commentId_not */
  commentId_not?: string | null;
  /** commentId_in */
  commentId_in?: string[] | null;
  /** commentId_not_in */
  commentId_not_in?: string[] | null;
  /** commentId_lt */
  commentId_lt?: string | null;
  /** commentId_lte */
  commentId_lte?: string | null;
  /** commentId_gt */
  commentId_gt?: string | null;
  /** commentId_gte */
  commentId_gte?: string | null;
  /** commentId_contains */
  commentId_contains?: string | null;
  /** commentId_not_contains */
  commentId_not_contains?: string | null;
  /** commentId_starts_with */
  commentId_starts_with?: string | null;
  /** commentId_not_starts_with */
  commentId_not_starts_with?: string | null;
  /** commentId_ends_with */
  commentId_ends_with?: string | null;
  /** commentId_not_ends_with */
  commentId_not_ends_with?: string | null;
  /** gitHubId */
  gitHubId?: string | null;
  /** gitHubId_not */
  gitHubId_not?: string | null;
  /** gitHubId_in */
  gitHubId_in?: string[] | null;
  /** gitHubId_not_in */
  gitHubId_not_in?: string[] | null;
  /** gitHubId_lt */
  gitHubId_lt?: string | null;
  /** gitHubId_lte */
  gitHubId_lte?: string | null;
  /** gitHubId_gt */
  gitHubId_gt?: string | null;
  /** gitHubId_gte */
  gitHubId_gte?: string | null;
  /** gitHubId_contains */
  gitHubId_contains?: string | null;
  /** gitHubId_not_contains */
  gitHubId_not_contains?: string | null;
  /** gitHubId_starts_with */
  gitHubId_starts_with?: string | null;
  /** gitHubId_not_starts_with */
  gitHubId_not_starts_with?: string | null;
  /** gitHubId_ends_with */
  gitHubId_ends_with?: string | null;
  /** gitHubId_not_ends_with */
  gitHubId_not_ends_with?: string | null;
  /** path */
  path?: string | null;
  /** path_not */
  path_not?: string | null;
  /** path_in */
  path_in?: string[] | null;
  /** path_not_in */
  path_not_in?: string[] | null;
  /** path_lt */
  path_lt?: string | null;
  /** path_lte */
  path_lte?: string | null;
  /** path_gt */
  path_gt?: string | null;
  /** path_gte */
  path_gte?: string | null;
  /** path_contains */
  path_contains?: string | null;
  /** path_not_contains */
  path_not_contains?: string | null;
  /** path_starts_with */
  path_starts_with?: string | null;
  /** path_not_starts_with */
  path_not_starts_with?: string | null;
  /** path_ends_with */
  path_ends_with?: string | null;
  /** path_not_ends_with */
  path_not_ends_with?: string | null;
  /** position */
  position?: string | null;
  /** position_not */
  position_not?: string | null;
  /** position_in */
  position_in?: string[] | null;
  /** position_not_in */
  position_not_in?: string[] | null;
  /** position_lt */
  position_lt?: string | null;
  /** position_lte */
  position_lte?: string | null;
  /** position_gt */
  position_gt?: string | null;
  /** position_gte */
  position_gte?: string | null;
  /** position_contains */
  position_contains?: string | null;
  /** position_not_contains */
  position_not_contains?: string | null;
  /** position_starts_with */
  position_starts_with?: string | null;
  /** position_not_starts_with */
  position_not_starts_with?: string | null;
  /** position_ends_with */
  position_ends_with?: string | null;
  /** position_not_ends_with */
  position_not_ends_with?: string | null;
  /** htmlUrl */
  htmlUrl?: string | null;
  /** htmlUrl_not */
  htmlUrl_not?: string | null;
  /** htmlUrl_in */
  htmlUrl_in?: string[] | null;
  /** htmlUrl_not_in */
  htmlUrl_not_in?: string[] | null;
  /** htmlUrl_lt */
  htmlUrl_lt?: string | null;
  /** htmlUrl_lte */
  htmlUrl_lte?: string | null;
  /** htmlUrl_gt */
  htmlUrl_gt?: string | null;
  /** htmlUrl_gte */
  htmlUrl_gte?: string | null;
  /** htmlUrl_contains */
  htmlUrl_contains?: string | null;
  /** htmlUrl_not_contains */
  htmlUrl_not_contains?: string | null;
  /** htmlUrl_starts_with */
  htmlUrl_starts_with?: string | null;
  /** htmlUrl_not_starts_with */
  htmlUrl_not_starts_with?: string | null;
  /** htmlUrl_ends_with */
  htmlUrl_ends_with?: string | null;
  /** htmlUrl_not_ends_with */
  htmlUrl_not_ends_with?: string | null;
  /** commentType */
  commentType?: CommentCommentType | null;
  /** commentType_not */
  commentType_not?: CommentCommentType | null;
  /** commentType_in */
  commentType_in?: CommentCommentType[] | null;
  /** commentType_not_in */
  commentType_not_in?: CommentCommentType[] | null;
  /** issue */
  issue?: _IssueFilter | null;
  /** issue_not */
  issue_not?: _IssueFilter | null;
  /** issue_in */
  issue_in?: _IssueFilter | null;
  /** issue_not_in */
  issue_not_in?: _IssueFilter | null;
  /** review */
  review?: _ReviewFilter | null;
  /** review_not */
  review_not?: _ReviewFilter | null;
  /** review_in */
  review_in?: _ReviewFilter | null;
  /** review_not_in */
  review_not_in?: _ReviewFilter | null;
  /** pullRequest */
  pullRequest?: _PullRequestFilter | null;
  /** pullRequest_not */
  pullRequest_not?: _PullRequestFilter | null;
  /** pullRequest_in */
  pullRequest_in?: _PullRequestFilter | null;
  /** pullRequest_not_in */
  pullRequest_not_in?: _PullRequestFilter | null;
  /** by */
  by?: _ScmIdFilter | null;
  /** by_not */
  by_not?: _ScmIdFilter | null;
  /** by_in */
  by_in?: _ScmIdFilter | null;
  /** by_not_in */
  by_not_in?: _ScmIdFilter | null;
}
/** Filter Input Type for DeletedBranch */
export interface _DeletedBranchFilter {
  /** AND */
  AND?: _DeletedBranchFilter[] | null;
  /** OR */
  OR?: _DeletedBranchFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** name */
  name?: string | null;
  /** name_not */
  name_not?: string | null;
  /** name_in */
  name_in?: string[] | null;
  /** name_not_in */
  name_not_in?: string[] | null;
  /** name_lt */
  name_lt?: string | null;
  /** name_lte */
  name_lte?: string | null;
  /** name_gt */
  name_gt?: string | null;
  /** name_gte */
  name_gte?: string | null;
  /** name_contains */
  name_contains?: string | null;
  /** name_not_contains */
  name_not_contains?: string | null;
  /** name_starts_with */
  name_starts_with?: string | null;
  /** name_not_starts_with */
  name_not_starts_with?: string | null;
  /** name_ends_with */
  name_ends_with?: string | null;
  /** name_not_ends_with */
  name_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** repo */
  repo?: _RepoFilter | null;
  /** repo_not */
  repo_not?: _RepoFilter | null;
  /** repo_in */
  repo_in?: _RepoFilter | null;
  /** repo_not_in */
  repo_not_in?: _RepoFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
  /** pullRequests */
  pullRequests?: _PullRequestFilter | null;
  /** pullRequests_not */
  pullRequests_not?: _PullRequestFilter | null;
  /** pullRequests_in */
  pullRequests_in?: _PullRequestFilter | null;
  /** pullRequests_not_in */
  pullRequests_not_in?: _PullRequestFilter | null;
  /** pullRequests_some */
  pullRequests_some?: _PullRequestFilter | null;
  /** pullRequests_none */
  pullRequests_none?: _PullRequestFilter | null;
  /** pullRequests_single */
  pullRequests_single?: _PullRequestFilter | null;
  /** pullRequests_every */
  pullRequests_every?: _PullRequestFilter | null;
}
/** Filter Input Type for ImageLinked */
export interface _ImageLinkedFilter {
  /** AND */
  AND?: _ImageLinkedFilter[] | null;
  /** OR */
  OR?: _ImageLinkedFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** timestamp */
  timestamp?: string | null;
  /** timestamp_not */
  timestamp_not?: string | null;
  /** timestamp_in */
  timestamp_in?: string[] | null;
  /** timestamp_not_in */
  timestamp_not_in?: string[] | null;
  /** timestamp_lt */
  timestamp_lt?: string | null;
  /** timestamp_lte */
  timestamp_lte?: string | null;
  /** timestamp_gt */
  timestamp_gt?: string | null;
  /** timestamp_gte */
  timestamp_gte?: string | null;
  /** timestamp_contains */
  timestamp_contains?: string | null;
  /** timestamp_not_contains */
  timestamp_not_contains?: string | null;
  /** timestamp_starts_with */
  timestamp_starts_with?: string | null;
  /** timestamp_not_starts_with */
  timestamp_not_starts_with?: string | null;
  /** timestamp_ends_with */
  timestamp_ends_with?: string | null;
  /** timestamp_not_ends_with */
  timestamp_not_ends_with?: string | null;
  /** image */
  image?: _DockerImageFilter | null;
  /** image_not */
  image_not?: _DockerImageFilter | null;
  /** image_in */
  image_in?: _DockerImageFilter | null;
  /** image_not_in */
  image_not_in?: _DockerImageFilter | null;
  /** commit */
  commit?: _CommitFilter | null;
  /** commit_not */
  commit_not?: _CommitFilter | null;
  /** commit_in */
  commit_in?: _CommitFilter | null;
  /** commit_not_in */
  commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for PushImpact */
export interface _PushImpactFilter {
  /** AND */
  AND?: _PushImpactFilter[] | null;
  /** OR */
  OR?: _PushImpactFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** data */
  data?: string | null;
  /** data_not */
  data_not?: string | null;
  /** data_in */
  data_in?: string[] | null;
  /** data_not_in */
  data_not_in?: string[] | null;
  /** data_lt */
  data_lt?: string | null;
  /** data_lte */
  data_lte?: string | null;
  /** data_gt */
  data_gt?: string | null;
  /** data_gte */
  data_gte?: string | null;
  /** data_contains */
  data_contains?: string | null;
  /** data_not_contains */
  data_not_contains?: string | null;
  /** data_starts_with */
  data_starts_with?: string | null;
  /** data_not_starts_with */
  data_not_starts_with?: string | null;
  /** data_ends_with */
  data_ends_with?: string | null;
  /** data_not_ends_with */
  data_not_ends_with?: string | null;
  /** push */
  push?: _PushFilter | null;
  /** push_not */
  push_not?: _PushFilter | null;
  /** push_in */
  push_in?: _PushFilter | null;
  /** push_not_in */
  push_not_in?: _PushFilter | null;
}
/** Filter Input Type for PullRequestImpact */
export interface _PullRequestImpactFilter {
  /** AND */
  AND?: _PullRequestImpactFilter[] | null;
  /** OR */
  OR?: _PullRequestImpactFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** url */
  url?: string | null;
  /** url_not */
  url_not?: string | null;
  /** url_in */
  url_in?: string[] | null;
  /** url_not_in */
  url_not_in?: string[] | null;
  /** url_lt */
  url_lt?: string | null;
  /** url_lte */
  url_lte?: string | null;
  /** url_gt */
  url_gt?: string | null;
  /** url_gte */
  url_gte?: string | null;
  /** url_contains */
  url_contains?: string | null;
  /** url_not_contains */
  url_not_contains?: string | null;
  /** url_starts_with */
  url_starts_with?: string | null;
  /** url_not_starts_with */
  url_not_starts_with?: string | null;
  /** url_ends_with */
  url_ends_with?: string | null;
  /** url_not_ends_with */
  url_not_ends_with?: string | null;
  /** data */
  data?: string | null;
  /** data_not */
  data_not?: string | null;
  /** data_in */
  data_in?: string[] | null;
  /** data_not_in */
  data_not_in?: string[] | null;
  /** data_lt */
  data_lt?: string | null;
  /** data_lte */
  data_lte?: string | null;
  /** data_gt */
  data_gt?: string | null;
  /** data_gte */
  data_gte?: string | null;
  /** data_contains */
  data_contains?: string | null;
  /** data_not_contains */
  data_not_contains?: string | null;
  /** data_starts_with */
  data_starts_with?: string | null;
  /** data_not_starts_with */
  data_not_starts_with?: string | null;
  /** data_ends_with */
  data_ends_with?: string | null;
  /** data_not_ends_with */
  data_not_ends_with?: string | null;
  /** pullRequest */
  pullRequest?: _PullRequestFilter | null;
  /** pullRequest_not */
  pullRequest_not?: _PullRequestFilter | null;
  /** pullRequest_in */
  pullRequest_in?: _PullRequestFilter | null;
  /** pullRequest_not_in */
  pullRequest_not_in?: _PullRequestFilter | null;
}
/** Filter Input Type for UserJoinedChannel */
export interface _UserJoinedChannelFilter {
  /** AND */
  AND?: _UserJoinedChannelFilter[] | null;
  /** OR */
  OR?: _UserJoinedChannelFilter[] | null;
  /** atmTeamId */
  atmTeamId?: string | null;
  /** atmTeamId_not */
  atmTeamId_not?: string | null;
  /** atmTeamId_in */
  atmTeamId_in?: string[] | null;
  /** atmTeamId_not_in */
  atmTeamId_not_in?: string[] | null;
  /** atmTeamId_lt */
  atmTeamId_lt?: string | null;
  /** atmTeamId_lte */
  atmTeamId_lte?: string | null;
  /** atmTeamId_gt */
  atmTeamId_gt?: string | null;
  /** atmTeamId_gte */
  atmTeamId_gte?: string | null;
  /** atmTeamId_contains */
  atmTeamId_contains?: string | null;
  /** atmTeamId_not_contains */
  atmTeamId_not_contains?: string | null;
  /** atmTeamId_starts_with */
  atmTeamId_starts_with?: string | null;
  /** atmTeamId_not_starts_with */
  atmTeamId_not_starts_with?: string | null;
  /** atmTeamId_ends_with */
  atmTeamId_ends_with?: string | null;
  /** atmTeamId_not_ends_with */
  atmTeamId_not_ends_with?: string | null;
  /** id */
  id?: string | null;
  /** id_not */
  id_not?: string | null;
  /** id_in */
  id_in?: string[] | null;
  /** id_not_in */
  id_not_in?: string[] | null;
  /** id_lt */
  id_lt?: string | null;
  /** id_lte */
  id_lte?: string | null;
  /** id_gt */
  id_gt?: string | null;
  /** id_gte */
  id_gte?: string | null;
  /** id_contains */
  id_contains?: string | null;
  /** id_not_contains */
  id_not_contains?: string | null;
  /** id_starts_with */
  id_starts_with?: string | null;
  /** id_not_starts_with */
  id_not_starts_with?: string | null;
  /** id_ends_with */
  id_ends_with?: string | null;
  /** id_not_ends_with */
  id_not_ends_with?: string | null;
  /** user */
  user?: _ChatIdFilter | null;
  /** user_not */
  user_not?: _ChatIdFilter | null;
  /** user_in */
  user_in?: _ChatIdFilter | null;
  /** user_not_in */
  user_not_in?: _ChatIdFilter | null;
  /** channel */
  channel?: _ChatChannelFilter | null;
  /** channel_not */
  channel_not?: _ChatChannelFilter | null;
  /** channel_in */
  channel_in?: _ChatChannelFilter | null;
  /** channel_not_in */
  channel_not_in?: _ChatChannelFilter | null;
}

// ====================================================
// Arguments
// ====================================================

export interface IssueQueryTypeArgs {
  /** id of Issue */
  id?: string | null;
  /** number of Issue */
  number?: number | null;
  /** name of Issue */
  name?: string | null;
  /** title of Issue */
  title?: string | null;
  /** body of Issue */
  body?: string | null;
  /** state of Issue */
  state?: IssueState | null;
  /** timestamp of Issue */
  timestamp?: string | null;
  /** action of Issue */
  action?: string | null;
  /** createdAt of Issue */
  createdAt?: string | null;
  /** updatedAt of Issue */
  updatedAt?: string | null;
  /** closedAt of Issue */
  closedAt?: string | null;
  /** ids is list variant of id of Issue */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of Issue */
  numbers?: (number | null)[] | null;
  /** names is list variant of name of Issue */
  names?: (string | null)[] | null;
  /** titles is list variant of title of Issue */
  titles?: (string | null)[] | null;
  /** bodys is list variant of body of Issue */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Issue */
  states?: (IssueState | null)[] | null;
  /** timestamps is list variant of timestamp of Issue */
  timestamps?: (string | null)[] | null;
  /** actions is list variant of action of Issue */
  actions?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Issue */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Issue */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of Issue */
  closedAts?: (string | null)[] | null;

  orderBy?: (_IssueOrdering | null)[] | null;

  filter?: _IssueFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommentQueryTypeArgs {
  /** id of Comment */
  id?: string | null;
  /** body of Comment */
  body?: string | null;
  /** timestamp of Comment */
  timestamp?: string | null;
  /** createdAt of Comment */
  createdAt?: string | null;
  /** updatedAt of Comment */
  updatedAt?: string | null;
  /** commentId of Comment */
  commentId?: string | null;
  /** gitHubId of Comment */
  gitHubId?: string | null;
  /** path of Comment */
  path?: string | null;
  /** position of Comment */
  position?: string | null;
  /** htmlUrl of Comment */
  htmlUrl?: string | null;
  /** commentType of Comment */
  commentType?: CommentCommentType | null;
  /** ids is list variant of id of Comment */
  ids?: (string | null)[] | null;
  /** bodys is list variant of body of Comment */
  bodys?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Comment */
  timestamps?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Comment */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Comment */
  updatedAts?: (string | null)[] | null;
  /** commentIds is list variant of commentId of Comment */
  commentIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Comment */
  gitHubIds?: (string | null)[] | null;
  /** paths is list variant of path of Comment */
  paths?: (string | null)[] | null;
  /** positions is list variant of position of Comment */
  positions?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Comment */
  htmlUrls?: (string | null)[] | null;
  /** commentTypes is list variant of commentType of Comment */
  commentTypes?: (CommentCommentType | null)[] | null;

  orderBy?: (_CommentOrdering | null)[] | null;

  filter?: _CommentFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LabelQueryTypeArgs {
  /** id of Label */
  id?: string | null;
  /** name of Label */
  name?: string | null;
  /** default of Label */
  default?: string | null;
  /** color of Label */
  color?: string | null;
  /** ids is list variant of id of Label */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Label */
  names?: (string | null)[] | null;
  /** defaults is list variant of default of Label */
  defaults?: (string | null)[] | null;
  /** colors is list variant of color of Label */
  colors?: (string | null)[] | null;

  orderBy?: (_LabelOrdering | null)[] | null;

  filter?: _LabelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface RepoQueryTypeArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitQueryTypeArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PushQueryTypeArgs {
  /** id of Push */
  id?: string | null;
  /** timestamp of Push */
  timestamp?: string | null;
  /** branch of Push */
  branch?: string | null;
  /** ids is list variant of id of Push */
  ids?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Push */
  timestamps?: (string | null)[] | null;
  /** branchs is list variant of branch of Push */
  branchs?: (string | null)[] | null;

  orderBy?: (_PushOrdering | null)[] | null;

  filter?: _PushFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BuildQueryTypeArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WorkflowQueryTypeArgs {
  /** id of Workflow */
  id?: string | null;
  /** name of Workflow */
  name?: string | null;
  /** workflowId of Workflow */
  workflowId?: string | null;
  /** provider of Workflow */
  provider?: string | null;
  /** config of Workflow */
  config?: string | null;
  /** ids is list variant of id of Workflow */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Workflow */
  names?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Workflow */
  workflowIds?: (string | null)[] | null;
  /** providers is list variant of provider of Workflow */
  providers?: (string | null)[] | null;
  /** configs is list variant of config of Workflow */
  configs?: (string | null)[] | null;

  orderBy?: (_WorkflowOrdering | null)[] | null;

  filter?: _WorkflowFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BranchQueryTypeArgs {
  /** id of Branch */
  id?: string | null;
  /** name of Branch */
  name?: string | null;
  /** timestamp of Branch */
  timestamp?: string | null;
  /** isRemote of Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrl?: string | null;
  /** ids is list variant of id of Branch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Branch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Branch */
  timestamps?: (string | null)[] | null;
  /** isRemotes is list variant of isRemote of Branch */
  isRemotes?: (boolean | null)[] | null;
  /** remoteRepoHtmlUrls is list variant of remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrls?: (string | null)[] | null;

  orderBy?: (_BranchOrdering | null)[] | null;

  filter?: _BranchFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface DeletedBranchQueryTypeArgs {
  /** id of DeletedBranch */
  id?: string | null;
  /** name of DeletedBranch */
  name?: string | null;
  /** timestamp of DeletedBranch */
  timestamp?: string | null;
  /** ids is list variant of id of DeletedBranch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of DeletedBranch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DeletedBranch */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DeletedBranchOrdering | null)[] | null;

  filter?: _DeletedBranchFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatIdQueryTypeArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatChannelQueryTypeArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestQueryTypeArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface OrgQueryTypeArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmIdQueryTypeArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface GitHubIdQueryTypeArgs {
  /** login of GitHubId */
  login?: string | null;
  /** name of GitHubId */
  name?: string | null;
  /** logins is list variant of login of GitHubId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of GitHubId */
  names?: (string | null)[] | null;

  orderBy?: (_GitHubIdOrdering | null)[] | null;

  filter?: _GitHubIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TagQueryTypeArgs {
  /** id of Tag */
  id?: string | null;
  /** name of Tag */
  name?: string | null;
  /** description of Tag */
  description?: string | null;
  /** ref of Tag */
  ref?: string | null;
  /** timestamp of Tag */
  timestamp?: string | null;
  /** ids is list variant of id of Tag */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Tag */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Tag */
  descriptions?: (string | null)[] | null;
  /** refs is list variant of ref of Tag */
  refs?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Tag */
  timestamps?: (string | null)[] | null;

  orderBy?: (_TagOrdering | null)[] | null;

  filter?: _TagFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface K8PodQueryTypeArgs {
  /** name of K8Pod */
  name?: string | null;
  /** phase of K8Pod */
  phase?: string | null;
  /** environment of K8Pod */
  environment?: string | null;
  /** timestamp of K8Pod */
  timestamp?: string | null;
  /** baseName of K8Pod */
  baseName?: string | null;
  /** namespace of K8Pod */
  namespace?: string | null;
  /** statusJSON of K8Pod */
  statusJSON?: string | null;
  /** host of K8Pod */
  host?: string | null;
  /** state of K8Pod */
  state?: string | null;
  /** specsJSON of K8Pod */
  specsJSON?: string | null;
  /** envJSON of K8Pod */
  envJSON?: string | null;
  /** metadataJSON of K8Pod */
  metadataJSON?: string | null;
  /** containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOff?: boolean | null;
  /** resourceVersion of K8Pod */
  resourceVersion?: number | null;
  /** names is list variant of name of K8Pod */
  names?: (string | null)[] | null;
  /** phases is list variant of phase of K8Pod */
  phases?: (string | null)[] | null;
  /** environments is list variant of environment of K8Pod */
  environments?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Pod */
  timestamps?: (string | null)[] | null;
  /** baseNames is list variant of baseName of K8Pod */
  baseNames?: (string | null)[] | null;
  /** namespaces is list variant of namespace of K8Pod */
  namespaces?: (string | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Pod */
  statusJSONs?: (string | null)[] | null;
  /** hosts is list variant of host of K8Pod */
  hosts?: (string | null)[] | null;
  /** states is list variant of state of K8Pod */
  states?: (string | null)[] | null;
  /** specsJSONs is list variant of specsJSON of K8Pod */
  specsJSONs?: (string | null)[] | null;
  /** envJSONs is list variant of envJSON of K8Pod */
  envJSONs?: (string | null)[] | null;
  /** metadataJSONs is list variant of metadataJSON of K8Pod */
  metadataJSONs?: (string | null)[] | null;
  /** containersCrashLoopBackOffs is list variant of containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOffs?: (boolean | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Pod */
  resourceVersions?: (number | null)[] | null;

  orderBy?: (_K8PodOrdering | null)[] | null;

  filter?: _K8PodFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface K8ContainerQueryTypeArgs {
  /** name of K8Container */
  name?: string | null;
  /** imageName of K8Container */
  imageName?: string | null;
  /** timestamp of K8Container */
  timestamp?: string | null;
  /** environment of K8Container */
  environment?: string | null;
  /** containerJSON of K8Container */
  containerJSON?: string | null;
  /** state of K8Container */
  state?: string | null;
  /** stateReason of K8Container */
  stateReason?: string | null;
  /** ready of K8Container */
  ready?: boolean | null;
  /** restartCount of K8Container */
  restartCount?: number | null;
  /** statusJSON of K8Container */
  statusJSON?: string | null;
  /** resourceVersion of K8Container */
  resourceVersion?: number | null;
  /** containerID of K8Container */
  containerID?: string | null;
  /** names is list variant of name of K8Container */
  names?: (string | null)[] | null;
  /** imageNames is list variant of imageName of K8Container */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Container */
  timestamps?: (string | null)[] | null;
  /** environments is list variant of environment of K8Container */
  environments?: (string | null)[] | null;
  /** containerJSONs is list variant of containerJSON of K8Container */
  containerJSONs?: (string | null)[] | null;
  /** states is list variant of state of K8Container */
  states?: (string | null)[] | null;
  /** stateReasons is list variant of stateReason of K8Container */
  stateReasons?: (string | null)[] | null;
  /** readys is list variant of ready of K8Container */
  readys?: (boolean | null)[] | null;
  /** restartCounts is list variant of restartCount of K8Container */
  restartCounts?: (number | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Container */
  statusJSONs?: (string | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Container */
  resourceVersions?: (number | null)[] | null;
  /** containerIDs is list variant of containerID of K8Container */
  containerIDs?: (string | null)[] | null;

  orderBy?: (_K8ContainerOrdering | null)[] | null;

  filter?: _K8ContainerFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface DockerImageQueryTypeArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ImageLinkedQueryTypeArgs {
  /** timestamp of ImageLinked */
  timestamp?: string | null;
  /** timestamps is list variant of timestamp of ImageLinked */
  timestamps?: (string | null)[] | null;

  orderBy?: (_ImageLinkedOrdering | null)[] | null;

  filter?: _ImageLinkedFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReleaseQueryTypeArgs {
  /** id of Release */
  id?: string | null;
  /** name of Release */
  name?: string | null;
  /** timestamp of Release */
  timestamp?: string | null;
  /** ids is list variant of id of Release */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Release */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Release */
  timestamps?: (string | null)[] | null;

  orderBy?: (_ReleaseOrdering | null)[] | null;

  filter?: _ReleaseFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface HerokuAppQueryTypeArgs {
  /** app of HerokuApp */
  app?: string | null;
  /** url of HerokuApp */
  url?: string | null;
  /** timestamp of HerokuApp */
  timestamp?: string | null;
  /** user of HerokuApp */
  user?: string | null;
  /** appId of HerokuApp */
  appId?: string | null;
  /** release of HerokuApp */
  release?: string | null;
  /** apps is list variant of app of HerokuApp */
  apps?: (string | null)[] | null;
  /** urls is list variant of url of HerokuApp */
  urls?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of HerokuApp */
  timestamps?: (string | null)[] | null;
  /** users is list variant of user of HerokuApp */
  users?: (string | null)[] | null;
  /** appIds is list variant of appId of HerokuApp */
  appIds?: (string | null)[] | null;
  /** releases is list variant of release of HerokuApp */
  releases?: (string | null)[] | null;

  orderBy?: (_HerokuAppOrdering | null)[] | null;

  filter?: _HerokuAppFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ApplicationQueryTypeArgs {
  /** id of Application */
  id?: string | null;
  /** state of Application */
  state?: string | null;
  /** host of Application */
  host?: string | null;
  /** timestamp of Application */
  timestamp?: string | null;
  /** domain of Application */
  domain?: string | null;
  /** data of Application */
  data?: string | null;
  /** ids is list variant of id of Application */
  ids?: (string | null)[] | null;
  /** states is list variant of state of Application */
  states?: (string | null)[] | null;
  /** hosts is list variant of host of Application */
  hosts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Application */
  timestamps?: (string | null)[] | null;
  /** domains is list variant of domain of Application */
  domains?: (string | null)[] | null;
  /** datas is list variant of data of Application */
  datas?: (string | null)[] | null;

  orderBy?: (_ApplicationOrdering | null)[] | null;

  filter?: _ApplicationFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TeamQueryTypeArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatTeamQueryTypeArgs {
  /** id of ChatTeam */
  id?: string | null;
  /** name of ChatTeam */
  name?: string | null;
  /** provider of ChatTeam */
  provider?: string | null;
  /** domain of ChatTeam */
  domain?: string | null;
  /** messageCount of ChatTeam */
  messageCount?: number | null;
  /** emailDomain of ChatTeam */
  emailDomain?: string | null;
  /** ids is list variant of id of ChatTeam */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatTeam */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatTeam */
  providers?: (string | null)[] | null;
  /** domains is list variant of domain of ChatTeam */
  domains?: (string | null)[] | null;
  /** messageCounts is list variant of messageCount of ChatTeam */
  messageCounts?: (number | null)[] | null;
  /** emailDomains is list variant of emailDomain of ChatTeam */
  emailDomains?: (string | null)[] | null;

  orderBy?: (_ChatTeamOrdering | null)[] | null;

  filter?: _ChatTeamFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PersonQueryTypeArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface StatusQueryTypeArgs {
  /** id of Status */
  id?: string | null;
  /** state of Status */
  state?: StatusState | null;
  /** description of Status */
  description?: string | null;
  /** targetUrl of Status */
  targetUrl?: string | null;
  /** context of Status */
  context?: string | null;
  /** timestamp of Status */
  timestamp?: string | null;
  /** ids is list variant of id of Status */
  ids?: (string | null)[] | null;
  /** states is list variant of state of Status */
  states?: (StatusState | null)[] | null;
  /** descriptions is list variant of description of Status */
  descriptions?: (string | null)[] | null;
  /** targetUrls is list variant of targetUrl of Status */
  targetUrls?: (string | null)[] | null;
  /** contexts is list variant of context of Status */
  contexts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Status */
  timestamps?: (string | null)[] | null;

  orderBy?: (_StatusOrdering | null)[] | null;

  filter?: _StatusFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface EmailQueryTypeArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface FingerprintQueryTypeArgs {
  /** name of Fingerprint */
  name?: string | null;
  /** sha of Fingerprint */
  sha?: string | null;
  /** data of Fingerprint */
  data?: string | null;
  /** names is list variant of name of Fingerprint */
  names?: (string | null)[] | null;
  /** shas is list variant of sha of Fingerprint */
  shas?: (string | null)[] | null;
  /** datas is list variant of data of Fingerprint */
  datas?: (string | null)[] | null;

  orderBy?: (_FingerprintOrdering | null)[] | null;

  filter?: _FingerprintFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ParentImpactQueryTypeArgs {
  /** id of ParentImpact */
  id?: string | null;
  /** url of ParentImpact */
  url?: string | null;
  /** data of ParentImpact */
  data?: string | null;
  /** ids is list variant of id of ParentImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of ParentImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of ParentImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_ParentImpactOrdering | null)[] | null;

  filter?: _ParentImpactFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PushImpactQueryTypeArgs {
  /** id of PushImpact */
  id?: string | null;
  /** url of PushImpact */
  url?: string | null;
  /** data of PushImpact */
  data?: string | null;
  /** ids is list variant of id of PushImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of PushImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of PushImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_PushImpactOrdering | null)[] | null;

  filter?: _PushImpactFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestImpactQueryTypeArgs {
  /** id of PullRequestImpact */
  id?: string | null;
  /** url of PullRequestImpact */
  url?: string | null;
  /** data of PullRequestImpact */
  data?: string | null;
  /** ids is list variant of id of PullRequestImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of PullRequestImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of PullRequestImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_PullRequestImpactOrdering | null)[] | null;

  filter?: _PullRequestImpactFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface GitHubProviderQueryTypeArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmProviderQueryTypeArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface UserJoinedChannelQueryTypeArgs {
  /** id of UserJoinedChannel */
  id?: string | null;
  /** ids is list variant of id of UserJoinedChannel */
  ids?: (string | null)[] | null;

  orderBy?: (_UserJoinedChannelOrdering | null)[] | null;

  filter?: _UserJoinedChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface GitHubOrgWebhookQueryTypeArgs {
  /** id of GitHubOrgWebhook */
  id?: string | null;
  /** url of GitHubOrgWebhook */
  url?: string | null;
  /** webhookType of GitHubOrgWebhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of GitHubOrgWebhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubOrgWebhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of GitHubOrgWebhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_GitHubOrgWebhookOrdering | null)[] | null;

  filter?: _GitHubOrgWebhookFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WebhookQueryTypeArgs {
  /** id of Webhook */
  id?: string | null;
  /** url of Webhook */
  url?: string | null;
  /** webhookType of Webhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of Webhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of Webhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of Webhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_WebhookOrdering | null)[] | null;

  filter?: _WebhookFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChannelLinkQueryTypeArgs {
  /** id of ChannelLink */
  id?: string | null;
  /** ids is list variant of id of ChannelLink */
  ids?: (string | null)[] | null;

  orderBy?: (_ChannelLinkOrdering | null)[] | null;

  filter?: _ChannelLinkFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReviewQueryTypeArgs {
  /** id of Review */
  id?: string | null;
  /** gitHubId of Review */
  gitHubId?: string | null;
  /** reviewId of Review */
  reviewId?: string | null;
  /** body of Review */
  body?: string | null;
  /** state of Review */
  state?: ReviewState | null;
  /** submittedAt of Review */
  submittedAt?: string | null;
  /** htmlUrl of Review */
  htmlUrl?: string | null;
  /** ids is list variant of id of Review */
  ids?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Review */
  gitHubIds?: (string | null)[] | null;
  /** reviewIds is list variant of reviewId of Review */
  reviewIds?: (string | null)[] | null;
  /** bodys is list variant of body of Review */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Review */
  states?: (ReviewState | null)[] | null;
  /** submittedAts is list variant of submittedAt of Review */
  submittedAts?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Review */
  htmlUrls?: (string | null)[] | null;

  orderBy?: (_ReviewOrdering | null)[] | null;

  filter?: _ReviewFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CardQueryTypeArgs {
  /** The ID of this Card */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  key?: (string | null)[] | null;

  post?: (string | null)[] | null;

  shortTitle?: (string | null)[] | null;

  ts?: (number | null)[] | null;

  ttl?: (number | null)[] | null;

  type?: (string | null)[] | null;
}
export interface NotificationQueryTypeArgs {
  /** The ID of this Notification */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  body?: string | null;

  contentType?: string | null;

  key?: string | null;

  post?: (string | null)[] | null;

  ts?: number | null;

  ttl?: (number | null)[] | null;
}
export interface CommitIssueRelationshipQueryTypeArgs {
  /** The ID of this CommitIssueRelationship */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  type?: (CommitIssueRelationshipType | null)[] | null;
}
export interface DeploymentQueryTypeArgs {
  /** The ID of this Deployment */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;
  /** The name of environment the commit got deployed */
  environment?: (string | null)[] | null;

  ts?: (number | null)[] | null;
}
export interface IssueRelationshipQueryTypeArgs {
  /** The ID of this IssueRelationship */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;
  /** Unique id of the issue relationship */
  relationshipId?: (string | null)[] | null;

  type?: (string | null)[] | null;

  state?: (string | null)[] | null;
}
export interface SdmGoalQueryTypeArgs {
  /** The ID of this SdmGoal */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  approvalRequired?: (boolean | null)[] | null;

  branch?: (string | null)[] | null;

  data?: (string | null)[] | null;

  description?: (string | null)[] | null;

  environment?: (string | null)[] | null;

  error?: (string | null)[] | null;

  externalKey?: (string | null)[] | null;

  externalUrl?: (string | null)[] | null;

  goalSet?: (string | null)[] | null;

  goalSetId?: (string | null)[] | null;

  name?: (string | null)[] | null;

  phase?: (string | null)[] | null;

  retryFeasible?: (boolean | null)[] | null;

  sha?: (string | null)[] | null;

  state?: (SdmGoalState | null)[] | null;

  ts?: (number | null)[] | null;

  uniqueName?: (string | null)[] | null;

  url?: (string | null)[] | null;
}
export interface SdmBuildIdentifierQueryTypeArgs {
  /** The ID of this SdmBuildIdentifier */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  identifier?: (string | null)[] | null;
}
export interface SdmDeployEnablementQueryTypeArgs {
  /** The ID of this SdmDeployEnablement */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  owner?: (string | null)[] | null;

  providerId?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  state?: (SdmDeployState | null)[] | null;
}
export interface SdmVersionQueryTypeArgs {
  /** The ID of this SdmVersion */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  branch?: (string | null)[] | null;

  sha?: (string | null)[] | null;

  version?: (string | null)[] | null;
}
export interface AtomistLogQueryTypeArgs {
  /** The ID of this AtomistLog */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;
  /** Status timestamp */
  timestamp?: (number | null)[] | null;
  /** Team ID for which log message is produced */
  team_id?: (string | null)[] | null;
  /** Log message level: debug, info, warn, error, fatal */
  level?: (string | null)[] | null;
  /** Log message */
  message?: (string | null)[] | null;
  /** Grouping, namespace etc. */
  category?: (string | null)[] | null;
}
export interface SdmGoalSetBadgeQueryTypeArgs {
  /** The ID of this SdmGoalSetBadge */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  sdm?: (string | null)[] | null;

  token?: (string | null)[] | null;
}
export interface FeedbackQueryTypeArgs {
  /** The ID of this Feedback */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  email?: (string | null)[] | null;

  message?: (string | null)[] | null;

  invocation_id?: (string | null)[] | null;
}
export interface SentryAlertQueryTypeArgs {
  /** The ID of this SentryAlert */
  id?: string | null;
  /** Paging offset (default 0) */
  _offset?: number | null;
  /** Return the first X results (default 10) */
  _first?: number | null;
  /** Name of property to sort on */
  _orderBy?: string | null;
  /** Direction of ordering */
  _ordering?: _Ordering | null;
  /** Elastic Search simple full text search syntax */
  _search?: string | null;

  culprit?: (string | null)[] | null;

  level?: (string | null)[] | null;

  message?: (string | null)[] | null;

  project?: (string | null)[] | null;

  project_name?: (string | null)[] | null;

  url?: (string | null)[] | null;
}
export interface CommitByShaQueryTypeArgs {
  /** The sha of the commit */
  sha: string;
}
export interface PushByShaQueryTypeArgs {
  /** The branch of the Push */
  branchName: string;
  /** The after-sha of the Push */
  afterSha: string;
}
export interface LinkedRepoQueryTypeArgs {
  /** Repo name */
  name: string;
  /** Repo owner */
  owner: string;
  /** Repo provider */
  provider: string;
}
export interface RepoIssueArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface ResolvingCommitsIssueArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface OpenedByIssueArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface ClosedByIssueArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface LabelsIssueArgs {
  /** id of Label */
  id?: string | null;
  /** name of Label */
  name?: string | null;
  /** default of Label */
  default?: string | null;
  /** color of Label */
  color?: string | null;
  /** ids is list variant of id of Label */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Label */
  names?: (string | null)[] | null;
  /** defaults is list variant of default of Label */
  defaults?: (string | null)[] | null;
  /** colors is list variant of color of Label */
  colors?: (string | null)[] | null;

  orderBy?: (_LabelOrdering | null)[] | null;

  filter?: _LabelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface AssigneesIssueArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LastAssignedByIssueArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface CommentsIssueArgs {
  /** id of Comment */
  id?: string | null;
  /** body of Comment */
  body?: string | null;
  /** timestamp of Comment */
  timestamp?: string | null;
  /** createdAt of Comment */
  createdAt?: string | null;
  /** updatedAt of Comment */
  updatedAt?: string | null;
  /** commentId of Comment */
  commentId?: string | null;
  /** gitHubId of Comment */
  gitHubId?: string | null;
  /** path of Comment */
  path?: string | null;
  /** position of Comment */
  position?: string | null;
  /** htmlUrl of Comment */
  htmlUrl?: string | null;
  /** commentType of Comment */
  commentType?: CommentCommentType | null;
  /** ids is list variant of id of Comment */
  ids?: (string | null)[] | null;
  /** bodys is list variant of body of Comment */
  bodys?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Comment */
  timestamps?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Comment */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Comment */
  updatedAts?: (string | null)[] | null;
  /** commentIds is list variant of commentId of Comment */
  commentIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Comment */
  gitHubIds?: (string | null)[] | null;
  /** paths is list variant of path of Comment */
  paths?: (string | null)[] | null;
  /** positions is list variant of position of Comment */
  positions?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Comment */
  htmlUrls?: (string | null)[] | null;
  /** commentTypes is list variant of commentType of Comment */
  commentTypes?: (CommentCommentType | null)[] | null;

  orderBy?: (_CommentOrdering | null)[] | null;

  filter?: _CommentFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LabelsRepoArgs {
  /** id of Label */
  id?: string | null;
  /** name of Label */
  name?: string | null;
  /** default of Label */
  default?: string | null;
  /** color of Label */
  color?: string | null;
  /** ids is list variant of id of Label */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Label */
  names?: (string | null)[] | null;
  /** defaults is list variant of default of Label */
  defaults?: (string | null)[] | null;
  /** colors is list variant of color of Label */
  colors?: (string | null)[] | null;

  orderBy?: (_LabelOrdering | null)[] | null;

  filter?: _LabelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChannelsRepoArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface OrgRepoArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;
}
export interface IssueRepoArgs {
  /** id of Issue */
  id?: string | null;
  /** number of Issue */
  number?: number | null;
  /** name of Issue */
  name?: string | null;
  /** title of Issue */
  title?: string | null;
  /** body of Issue */
  body?: string | null;
  /** state of Issue */
  state?: IssueState | null;
  /** timestamp of Issue */
  timestamp?: string | null;
  /** action of Issue */
  action?: string | null;
  /** createdAt of Issue */
  createdAt?: string | null;
  /** updatedAt of Issue */
  updatedAt?: string | null;
  /** closedAt of Issue */
  closedAt?: string | null;
  /** ids is list variant of id of Issue */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of Issue */
  numbers?: (number | null)[] | null;
  /** names is list variant of name of Issue */
  names?: (string | null)[] | null;
  /** titles is list variant of title of Issue */
  titles?: (string | null)[] | null;
  /** bodys is list variant of body of Issue */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Issue */
  states?: (IssueState | null)[] | null;
  /** timestamps is list variant of timestamp of Issue */
  timestamps?: (string | null)[] | null;
  /** actions is list variant of action of Issue */
  actions?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Issue */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Issue */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of Issue */
  closedAts?: (string | null)[] | null;

  orderBy?: (_IssueOrdering | null)[] | null;

  filter?: _IssueFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface IssuesRepoArgs {
  /** id of Issue */
  id?: string | null;
  /** number of Issue */
  number?: number | null;
  /** name of Issue */
  name?: string | null;
  /** title of Issue */
  title?: string | null;
  /** body of Issue */
  body?: string | null;
  /** state of Issue */
  state?: IssueState | null;
  /** timestamp of Issue */
  timestamp?: string | null;
  /** action of Issue */
  action?: string | null;
  /** createdAt of Issue */
  createdAt?: string | null;
  /** updatedAt of Issue */
  updatedAt?: string | null;
  /** closedAt of Issue */
  closedAt?: string | null;
  /** ids is list variant of id of Issue */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of Issue */
  numbers?: (number | null)[] | null;
  /** names is list variant of name of Issue */
  names?: (string | null)[] | null;
  /** titles is list variant of title of Issue */
  titles?: (string | null)[] | null;
  /** bodys is list variant of body of Issue */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Issue */
  states?: (IssueState | null)[] | null;
  /** timestamps is list variant of timestamp of Issue */
  timestamps?: (string | null)[] | null;
  /** actions is list variant of action of Issue */
  actions?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Issue */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Issue */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of Issue */
  closedAts?: (string | null)[] | null;

  orderBy?: (_IssueOrdering | null)[] | null;

  filter?: _IssueFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestRepoArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestsRepoArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BranchesRepoArgs {
  /** id of Branch */
  id?: string | null;
  /** name of Branch */
  name?: string | null;
  /** timestamp of Branch */
  timestamp?: string | null;
  /** isRemote of Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrl?: string | null;
  /** ids is list variant of id of Branch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Branch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Branch */
  timestamps?: (string | null)[] | null;
  /** isRemotes is list variant of isRemote of Branch */
  isRemotes?: (boolean | null)[] | null;
  /** remoteRepoHtmlUrls is list variant of remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrls?: (string | null)[] | null;

  orderBy?: (_BranchOrdering | null)[] | null;

  filter?: _BranchFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LinksRepoArgs {
  /** id of ChannelLink */
  id?: string | null;
  /** ids is list variant of id of ChannelLink */
  ids?: (string | null)[] | null;

  orderBy?: (_ChannelLinkOrdering | null)[] | null;

  filter?: _ChannelLinkFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WebhookRepoArgs {
  /** id of Webhook */
  id?: string | null;
  /** url of Webhook */
  url?: string | null;
  /** webhookType of Webhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of Webhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of Webhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of Webhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_WebhookOrdering | null)[] | null;

  filter?: _WebhookFilter | null;
}
export interface RepoLabelArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface CreatedByChatChannelArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;
}
export interface ReposChatChannelArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LinksChatChannelArgs {
  /** id of ChannelLink */
  id?: string | null;
  /** ids is list variant of id of ChannelLink */
  ids?: (string | null)[] | null;

  orderBy?: (_ChannelLinkOrdering | null)[] | null;

  filter?: _ChannelLinkFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface MembersChatChannelArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TeamChatChannelArgs {
  /** id of ChatTeam */
  id?: string | null;
  /** name of ChatTeam */
  name?: string | null;
  /** provider of ChatTeam */
  provider?: string | null;
  /** domain of ChatTeam */
  domain?: string | null;
  /** messageCount of ChatTeam */
  messageCount?: number | null;
  /** emailDomain of ChatTeam */
  emailDomain?: string | null;
  /** ids is list variant of id of ChatTeam */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatTeam */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatTeam */
  providers?: (string | null)[] | null;
  /** domains is list variant of domain of ChatTeam */
  domains?: (string | null)[] | null;
  /** messageCounts is list variant of messageCount of ChatTeam */
  messageCounts?: (number | null)[] | null;
  /** emailDomains is list variant of emailDomain of ChatTeam */
  emailDomains?: (string | null)[] | null;

  orderBy?: (_ChatTeamOrdering | null)[] | null;

  filter?: _ChatTeamFilter | null;
}
export interface ChannelsChatIdArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface EmailsChatIdArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatTeamChatIdArgs {
  /** id of ChatTeam */
  id?: string | null;
  /** name of ChatTeam */
  name?: string | null;
  /** provider of ChatTeam */
  provider?: string | null;
  /** domain of ChatTeam */
  domain?: string | null;
  /** messageCount of ChatTeam */
  messageCount?: number | null;
  /** emailDomain of ChatTeam */
  emailDomain?: string | null;
  /** ids is list variant of id of ChatTeam */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatTeam */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatTeam */
  providers?: (string | null)[] | null;
  /** domains is list variant of domain of ChatTeam */
  domains?: (string | null)[] | null;
  /** messageCounts is list variant of messageCount of ChatTeam */
  messageCounts?: (number | null)[] | null;
  /** emailDomains is list variant of emailDomain of ChatTeam */
  emailDomains?: (string | null)[] | null;

  orderBy?: (_ChatTeamOrdering | null)[] | null;

  filter?: _ChatTeamFilter | null;
}
export interface ChannelsCreatedChatIdArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PersonChatIdArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;
}
export interface ScmIdEmailArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface GitHubIdEmailArgs {
  /** login of GitHubId */
  login?: string | null;
  /** name of GitHubId */
  name?: string | null;
  /** logins is list variant of login of GitHubId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of GitHubId */
  names?: (string | null)[] | null;

  orderBy?: (_GitHubIdOrdering | null)[] | null;

  filter?: _GitHubIdFilter | null;
}
export interface ChatIdEmailArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;
}
export interface PersonEmailArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;
}
export interface ProviderScmIdArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmProviderScmIdArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;
}
export interface EmailsScmIdArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PersonScmIdArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;
}
export interface TeamGitHubProviderArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;
}
export interface PersonsTeamArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface OrgsTeamArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ProvidersTeamArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmProvidersTeamArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatTeamsTeamArgs {
  /** id of ChatTeam */
  id?: string | null;
  /** name of ChatTeam */
  name?: string | null;
  /** provider of ChatTeam */
  provider?: string | null;
  /** domain of ChatTeam */
  domain?: string | null;
  /** messageCount of ChatTeam */
  messageCount?: number | null;
  /** emailDomain of ChatTeam */
  emailDomain?: string | null;
  /** ids is list variant of id of ChatTeam */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatTeam */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatTeam */
  providers?: (string | null)[] | null;
  /** domains is list variant of domain of ChatTeam */
  domains?: (string | null)[] | null;
  /** messageCounts is list variant of messageCount of ChatTeam */
  messageCounts?: (number | null)[] | null;
  /** emailDomains is list variant of emailDomain of ChatTeam */
  emailDomains?: (string | null)[] | null;

  orderBy?: (_ChatTeamOrdering | null)[] | null;

  filter?: _ChatTeamFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmIdPersonArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface GitHubIdPersonArgs {
  /** login of GitHubId */
  login?: string | null;
  /** name of GitHubId */
  name?: string | null;
  /** logins is list variant of login of GitHubId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of GitHubId */
  names?: (string | null)[] | null;

  orderBy?: (_GitHubIdOrdering | null)[] | null;

  filter?: _GitHubIdFilter | null;
}
export interface ChatIdPersonArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;
}
export interface EmailsPersonArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TeamPersonArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;
}
export interface ProviderGitHubIdArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmProviderGitHubIdArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;
}
export interface EmailsGitHubIdArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PersonGitHubIdArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;
}
export interface TeamScmProviderArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;
}
export interface ProviderOrgArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;
}
export interface ScmProviderOrgArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;
}
export interface RepoOrgArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReposOrgArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WebhookOrgArgs {
  /** id of GitHubOrgWebhook */
  id?: string | null;
  /** url of GitHubOrgWebhook */
  url?: string | null;
  /** webhookType of GitHubOrgWebhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of GitHubOrgWebhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubOrgWebhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of GitHubOrgWebhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_GitHubOrgWebhookOrdering | null)[] | null;

  filter?: _GitHubOrgWebhookFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WebhooksOrgArgs {
  /** id of Webhook */
  id?: string | null;
  /** url of Webhook */
  url?: string | null;
  /** webhookType of Webhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of Webhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of Webhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of Webhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_WebhookOrdering | null)[] | null;

  filter?: _WebhookFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatTeamOrgArgs {
  /** id of ChatTeam */
  id?: string | null;
  /** name of ChatTeam */
  name?: string | null;
  /** provider of ChatTeam */
  provider?: string | null;
  /** domain of ChatTeam */
  domain?: string | null;
  /** messageCount of ChatTeam */
  messageCount?: number | null;
  /** emailDomain of ChatTeam */
  emailDomain?: string | null;
  /** ids is list variant of id of ChatTeam */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatTeam */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatTeam */
  providers?: (string | null)[] | null;
  /** domains is list variant of domain of ChatTeam */
  domains?: (string | null)[] | null;
  /** messageCounts is list variant of messageCount of ChatTeam */
  messageCounts?: (number | null)[] | null;
  /** emailDomains is list variant of emailDomain of ChatTeam */
  emailDomains?: (string | null)[] | null;

  orderBy?: (_ChatTeamOrdering | null)[] | null;

  filter?: _ChatTeamFilter | null;
}
export interface TeamOrgArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;
}
export interface OrgGitHubOrgWebhookArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;
}
export interface OrgWebhookArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;
}
export interface RepoWebhookArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface OrgsChatTeamArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ProvidersChatTeamArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmProvidersChatTeamArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChannelsChatTeamArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface MembersChatTeamArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TeamChatTeamArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;
}
export interface ChannelChannelLinkArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;
}
export interface RepoChannelLinkArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface RepoPullRequestArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface HeadPullRequestArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface BasePullRequestArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface MergeCommitPullRequestArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface AuthorPullRequestArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface MergerPullRequestArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface AssigneesPullRequestArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitsPullRequestArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BranchPullRequestArgs {
  /** id of Branch */
  id?: string | null;
  /** name of Branch */
  name?: string | null;
  /** timestamp of Branch */
  timestamp?: string | null;
  /** isRemote of Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrl?: string | null;
  /** ids is list variant of id of Branch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Branch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Branch */
  timestamps?: (string | null)[] | null;
  /** isRemotes is list variant of isRemote of Branch */
  isRemotes?: (boolean | null)[] | null;
  /** remoteRepoHtmlUrls is list variant of remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrls?: (string | null)[] | null;

  orderBy?: (_BranchOrdering | null)[] | null;

  filter?: _BranchFilter | null;
}
export interface SourceBranchPullRequestArgs {
  /** id of Branch */
  id?: string | null;
  /** name of Branch */
  name?: string | null;
  /** timestamp of Branch */
  timestamp?: string | null;
  /** isRemote of Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrl?: string | null;
  /** ids is list variant of id of Branch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Branch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Branch */
  timestamps?: (string | null)[] | null;
  /** isRemotes is list variant of isRemote of Branch */
  isRemotes?: (boolean | null)[] | null;
  /** remoteRepoHtmlUrls is list variant of remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrls?: (string | null)[] | null;

  orderBy?: (_BranchOrdering | null)[] | null;

  filter?: _BranchFilter | null;
}
export interface DestinationBranchPullRequestArgs {
  /** id of Branch */
  id?: string | null;
  /** name of Branch */
  name?: string | null;
  /** timestamp of Branch */
  timestamp?: string | null;
  /** isRemote of Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrl?: string | null;
  /** ids is list variant of id of Branch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Branch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Branch */
  timestamps?: (string | null)[] | null;
  /** isRemotes is list variant of isRemote of Branch */
  isRemotes?: (boolean | null)[] | null;
  /** remoteRepoHtmlUrls is list variant of remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrls?: (string | null)[] | null;

  orderBy?: (_BranchOrdering | null)[] | null;

  filter?: _BranchFilter | null;
}
export interface LabelsPullRequestArgs {
  /** id of Label */
  id?: string | null;
  /** name of Label */
  name?: string | null;
  /** default of Label */
  default?: string | null;
  /** color of Label */
  color?: string | null;
  /** ids is list variant of id of Label */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Label */
  names?: (string | null)[] | null;
  /** defaults is list variant of default of Label */
  defaults?: (string | null)[] | null;
  /** colors is list variant of color of Label */
  colors?: (string | null)[] | null;

  orderBy?: (_LabelOrdering | null)[] | null;

  filter?: _LabelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReviewsPullRequestArgs {
  /** id of Review */
  id?: string | null;
  /** gitHubId of Review */
  gitHubId?: string | null;
  /** reviewId of Review */
  reviewId?: string | null;
  /** body of Review */
  body?: string | null;
  /** state of Review */
  state?: ReviewState | null;
  /** submittedAt of Review */
  submittedAt?: string | null;
  /** htmlUrl of Review */
  htmlUrl?: string | null;
  /** ids is list variant of id of Review */
  ids?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Review */
  gitHubIds?: (string | null)[] | null;
  /** reviewIds is list variant of reviewId of Review */
  reviewIds?: (string | null)[] | null;
  /** bodys is list variant of body of Review */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Review */
  states?: (ReviewState | null)[] | null;
  /** submittedAts is list variant of submittedAt of Review */
  submittedAts?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Review */
  htmlUrls?: (string | null)[] | null;

  orderBy?: (_ReviewOrdering | null)[] | null;

  filter?: _ReviewFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReviewersPullRequestArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LastAssignedByPullRequestArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface CommentsPullRequestArgs {
  /** id of Comment */
  id?: string | null;
  /** body of Comment */
  body?: string | null;
  /** timestamp of Comment */
  timestamp?: string | null;
  /** createdAt of Comment */
  createdAt?: string | null;
  /** updatedAt of Comment */
  updatedAt?: string | null;
  /** commentId of Comment */
  commentId?: string | null;
  /** gitHubId of Comment */
  gitHubId?: string | null;
  /** path of Comment */
  path?: string | null;
  /** position of Comment */
  position?: string | null;
  /** htmlUrl of Comment */
  htmlUrl?: string | null;
  /** commentType of Comment */
  commentType?: CommentCommentType | null;
  /** ids is list variant of id of Comment */
  ids?: (string | null)[] | null;
  /** bodys is list variant of body of Comment */
  bodys?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Comment */
  timestamps?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Comment */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Comment */
  updatedAts?: (string | null)[] | null;
  /** commentIds is list variant of commentId of Comment */
  commentIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Comment */
  gitHubIds?: (string | null)[] | null;
  /** paths is list variant of path of Comment */
  paths?: (string | null)[] | null;
  /** positions is list variant of position of Comment */
  positions?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Comment */
  htmlUrls?: (string | null)[] | null;
  /** commentTypes is list variant of commentType of Comment */
  commentTypes?: (CommentCommentType | null)[] | null;

  orderBy?: (_CommentOrdering | null)[] | null;

  filter?: _CommentFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BuildsPullRequestArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface EmailCommitArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;
}
export interface BuildsCommitArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface RepoCommitArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface AuthorCommitArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface CommitterCommitArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface TagsCommitArgs {
  /** id of Tag */
  id?: string | null;
  /** name of Tag */
  name?: string | null;
  /** description of Tag */
  description?: string | null;
  /** ref of Tag */
  ref?: string | null;
  /** timestamp of Tag */
  timestamp?: string | null;
  /** ids is list variant of id of Tag */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Tag */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Tag */
  descriptions?: (string | null)[] | null;
  /** refs is list variant of ref of Tag */
  refs?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Tag */
  timestamps?: (string | null)[] | null;

  orderBy?: (_TagOrdering | null)[] | null;

  filter?: _TagFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ResolvesCommitArgs {
  /** id of Issue */
  id?: string | null;
  /** number of Issue */
  number?: number | null;
  /** name of Issue */
  name?: string | null;
  /** title of Issue */
  title?: string | null;
  /** body of Issue */
  body?: string | null;
  /** state of Issue */
  state?: IssueState | null;
  /** timestamp of Issue */
  timestamp?: string | null;
  /** action of Issue */
  action?: string | null;
  /** createdAt of Issue */
  createdAt?: string | null;
  /** updatedAt of Issue */
  updatedAt?: string | null;
  /** closedAt of Issue */
  closedAt?: string | null;
  /** ids is list variant of id of Issue */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of Issue */
  numbers?: (number | null)[] | null;
  /** names is list variant of name of Issue */
  names?: (string | null)[] | null;
  /** titles is list variant of title of Issue */
  titles?: (string | null)[] | null;
  /** bodys is list variant of body of Issue */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Issue */
  states?: (IssueState | null)[] | null;
  /** timestamps is list variant of timestamp of Issue */
  timestamps?: (string | null)[] | null;
  /** actions is list variant of action of Issue */
  actions?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Issue */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Issue */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of Issue */
  closedAts?: (string | null)[] | null;

  orderBy?: (_IssueOrdering | null)[] | null;

  filter?: _IssueFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface StatusesCommitArgs {
  /** id of Status */
  id?: string | null;
  /** state of Status */
  state?: StatusState | null;
  /** description of Status */
  description?: string | null;
  /** targetUrl of Status */
  targetUrl?: string | null;
  /** context of Status */
  context?: string | null;
  /** timestamp of Status */
  timestamp?: string | null;
  /** ids is list variant of id of Status */
  ids?: (string | null)[] | null;
  /** states is list variant of state of Status */
  states?: (StatusState | null)[] | null;
  /** descriptions is list variant of description of Status */
  descriptions?: (string | null)[] | null;
  /** targetUrls is list variant of targetUrl of Status */
  targetUrls?: (string | null)[] | null;
  /** contexts is list variant of context of Status */
  contexts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Status */
  timestamps?: (string | null)[] | null;

  orderBy?: (_StatusOrdering | null)[] | null;

  filter?: _StatusFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PushesCommitArgs {
  /** id of Push */
  id?: string | null;
  /** timestamp of Push */
  timestamp?: string | null;
  /** branch of Push */
  branch?: string | null;
  /** ids is list variant of id of Push */
  ids?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Push */
  timestamps?: (string | null)[] | null;
  /** branchs is list variant of branch of Push */
  branchs?: (string | null)[] | null;

  orderBy?: (_PushOrdering | null)[] | null;

  filter?: _PushFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestsCommitArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface HerokuAppsCommitArgs {
  /** app of HerokuApp */
  app?: string | null;
  /** url of HerokuApp */
  url?: string | null;
  /** timestamp of HerokuApp */
  timestamp?: string | null;
  /** user of HerokuApp */
  user?: string | null;
  /** appId of HerokuApp */
  appId?: string | null;
  /** release of HerokuApp */
  release?: string | null;
  /** apps is list variant of app of HerokuApp */
  apps?: (string | null)[] | null;
  /** urls is list variant of url of HerokuApp */
  urls?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of HerokuApp */
  timestamps?: (string | null)[] | null;
  /** users is list variant of user of HerokuApp */
  users?: (string | null)[] | null;
  /** appIds is list variant of appId of HerokuApp */
  appIds?: (string | null)[] | null;
  /** releases is list variant of release of HerokuApp */
  releases?: (string | null)[] | null;

  orderBy?: (_HerokuAppOrdering | null)[] | null;

  filter?: _HerokuAppFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface AppsCommitArgs {
  /** id of Application */
  id?: string | null;
  /** state of Application */
  state?: string | null;
  /** host of Application */
  host?: string | null;
  /** timestamp of Application */
  timestamp?: string | null;
  /** domain of Application */
  domain?: string | null;
  /** data of Application */
  data?: string | null;
  /** ids is list variant of id of Application */
  ids?: (string | null)[] | null;
  /** states is list variant of state of Application */
  states?: (string | null)[] | null;
  /** hosts is list variant of host of Application */
  hosts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Application */
  timestamps?: (string | null)[] | null;
  /** domains is list variant of domain of Application */
  domains?: (string | null)[] | null;
  /** datas is list variant of data of Application */
  datas?: (string | null)[] | null;

  orderBy?: (_ApplicationOrdering | null)[] | null;

  filter?: _ApplicationFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface FingerprintsCommitArgs {
  /** name of Fingerprint */
  name?: string | null;
  /** sha of Fingerprint */
  sha?: string | null;
  /** data of Fingerprint */
  data?: string | null;
  /** names is list variant of name of Fingerprint */
  names?: (string | null)[] | null;
  /** shas is list variant of sha of Fingerprint */
  shas?: (string | null)[] | null;
  /** datas is list variant of data of Fingerprint */
  datas?: (string | null)[] | null;

  orderBy?: (_FingerprintOrdering | null)[] | null;

  filter?: _FingerprintFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ImpactCommitArgs {
  /** id of ParentImpact */
  id?: string | null;
  /** url of ParentImpact */
  url?: string | null;
  /** data of ParentImpact */
  data?: string | null;
  /** ids is list variant of id of ParentImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of ParentImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of ParentImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_ParentImpactOrdering | null)[] | null;

  filter?: _ParentImpactFilter | null;
}
export interface ImageCommitArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;
}
export interface ImagesCommitArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface RepoBuildArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface PushBuildArgs {
  /** id of Push */
  id?: string | null;
  /** timestamp of Push */
  timestamp?: string | null;
  /** branch of Push */
  branch?: string | null;
  /** ids is list variant of id of Push */
  ids?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Push */
  timestamps?: (string | null)[] | null;
  /** branchs is list variant of branch of Push */
  branchs?: (string | null)[] | null;

  orderBy?: (_PushOrdering | null)[] | null;

  filter?: _PushFilter | null;
}
export interface PullRequestBuildArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;
}
export interface TagBuildArgs {
  /** id of Tag */
  id?: string | null;
  /** name of Tag */
  name?: string | null;
  /** description of Tag */
  description?: string | null;
  /** ref of Tag */
  ref?: string | null;
  /** timestamp of Tag */
  timestamp?: string | null;
  /** ids is list variant of id of Tag */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Tag */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Tag */
  descriptions?: (string | null)[] | null;
  /** refs is list variant of ref of Tag */
  refs?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Tag */
  timestamps?: (string | null)[] | null;

  orderBy?: (_TagOrdering | null)[] | null;

  filter?: _TagFilter | null;
}
export interface CommitBuildArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface WorkflowBuildArgs {
  /** id of Workflow */
  id?: string | null;
  /** name of Workflow */
  name?: string | null;
  /** workflowId of Workflow */
  workflowId?: string | null;
  /** provider of Workflow */
  provider?: string | null;
  /** config of Workflow */
  config?: string | null;
  /** ids is list variant of id of Workflow */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Workflow */
  names?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Workflow */
  workflowIds?: (string | null)[] | null;
  /** providers is list variant of provider of Workflow */
  providers?: (string | null)[] | null;
  /** configs is list variant of config of Workflow */
  configs?: (string | null)[] | null;

  orderBy?: (_WorkflowOrdering | null)[] | null;

  filter?: _WorkflowFilter | null;
}
export interface AfterPushArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface BeforePushArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface CommitsPushArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface RepoPushArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface BuildsPushArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface FulfillmentSdmGoalArgs {
  name?: (string | null)[] | null;

  method?: (string | null)[] | null;
}
export interface RepoSdmGoalArgs {
  name?: (string | null)[] | null;

  owner?: (string | null)[] | null;

  providerId?: (string | null)[] | null;
}
export interface ReleaseTagArgs {
  /** id of Release */
  id?: string | null;
  /** name of Release */
  name?: string | null;
  /** timestamp of Release */
  timestamp?: string | null;
  /** ids is list variant of id of Release */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Release */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Release */
  timestamps?: (string | null)[] | null;

  orderBy?: (_ReleaseOrdering | null)[] | null;

  filter?: _ReleaseFilter | null;
}
export interface CommitTagArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface ContainersTagArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BuildsTagArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TagReleaseArgs {
  /** id of Tag */
  id?: string | null;
  /** name of Tag */
  name?: string | null;
  /** description of Tag */
  description?: string | null;
  /** ref of Tag */
  ref?: string | null;
  /** timestamp of Tag */
  timestamp?: string | null;
  /** ids is list variant of id of Tag */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Tag */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Tag */
  descriptions?: (string | null)[] | null;
  /** refs is list variant of ref of Tag */
  refs?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Tag */
  timestamps?: (string | null)[] | null;

  orderBy?: (_TagOrdering | null)[] | null;

  filter?: _TagFilter | null;
}
export interface PodsDockerImageArgs {
  /** name of K8Pod */
  name?: string | null;
  /** phase of K8Pod */
  phase?: string | null;
  /** environment of K8Pod */
  environment?: string | null;
  /** timestamp of K8Pod */
  timestamp?: string | null;
  /** baseName of K8Pod */
  baseName?: string | null;
  /** namespace of K8Pod */
  namespace?: string | null;
  /** statusJSON of K8Pod */
  statusJSON?: string | null;
  /** host of K8Pod */
  host?: string | null;
  /** state of K8Pod */
  state?: string | null;
  /** specsJSON of K8Pod */
  specsJSON?: string | null;
  /** envJSON of K8Pod */
  envJSON?: string | null;
  /** metadataJSON of K8Pod */
  metadataJSON?: string | null;
  /** containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOff?: boolean | null;
  /** resourceVersion of K8Pod */
  resourceVersion?: number | null;
  /** names is list variant of name of K8Pod */
  names?: (string | null)[] | null;
  /** phases is list variant of phase of K8Pod */
  phases?: (string | null)[] | null;
  /** environments is list variant of environment of K8Pod */
  environments?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Pod */
  timestamps?: (string | null)[] | null;
  /** baseNames is list variant of baseName of K8Pod */
  baseNames?: (string | null)[] | null;
  /** namespaces is list variant of namespace of K8Pod */
  namespaces?: (string | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Pod */
  statusJSONs?: (string | null)[] | null;
  /** hosts is list variant of host of K8Pod */
  hosts?: (string | null)[] | null;
  /** states is list variant of state of K8Pod */
  states?: (string | null)[] | null;
  /** specsJSONs is list variant of specsJSON of K8Pod */
  specsJSONs?: (string | null)[] | null;
  /** envJSONs is list variant of envJSON of K8Pod */
  envJSONs?: (string | null)[] | null;
  /** metadataJSONs is list variant of metadataJSON of K8Pod */
  metadataJSONs?: (string | null)[] | null;
  /** containersCrashLoopBackOffs is list variant of containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOffs?: (boolean | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Pod */
  resourceVersions?: (number | null)[] | null;

  orderBy?: (_K8PodOrdering | null)[] | null;

  filter?: _K8PodFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitsDockerImageArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ContainersDockerImageArgs {
  /** name of K8Container */
  name?: string | null;
  /** imageName of K8Container */
  imageName?: string | null;
  /** timestamp of K8Container */
  timestamp?: string | null;
  /** environment of K8Container */
  environment?: string | null;
  /** containerJSON of K8Container */
  containerJSON?: string | null;
  /** state of K8Container */
  state?: string | null;
  /** stateReason of K8Container */
  stateReason?: string | null;
  /** ready of K8Container */
  ready?: boolean | null;
  /** restartCount of K8Container */
  restartCount?: number | null;
  /** statusJSON of K8Container */
  statusJSON?: string | null;
  /** resourceVersion of K8Container */
  resourceVersion?: number | null;
  /** containerID of K8Container */
  containerID?: string | null;
  /** names is list variant of name of K8Container */
  names?: (string | null)[] | null;
  /** imageNames is list variant of imageName of K8Container */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Container */
  timestamps?: (string | null)[] | null;
  /** environments is list variant of environment of K8Container */
  environments?: (string | null)[] | null;
  /** containerJSONs is list variant of containerJSON of K8Container */
  containerJSONs?: (string | null)[] | null;
  /** states is list variant of state of K8Container */
  states?: (string | null)[] | null;
  /** stateReasons is list variant of stateReason of K8Container */
  stateReasons?: (string | null)[] | null;
  /** readys is list variant of ready of K8Container */
  readys?: (boolean | null)[] | null;
  /** restartCounts is list variant of restartCount of K8Container */
  restartCounts?: (number | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Container */
  statusJSONs?: (string | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Container */
  resourceVersions?: (number | null)[] | null;
  /** containerIDs is list variant of containerID of K8Container */
  containerIDs?: (string | null)[] | null;

  orderBy?: (_K8ContainerOrdering | null)[] | null;

  filter?: _K8ContainerFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ImagesK8PodArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ContainersK8PodArgs {
  /** name of K8Container */
  name?: string | null;
  /** imageName of K8Container */
  imageName?: string | null;
  /** timestamp of K8Container */
  timestamp?: string | null;
  /** environment of K8Container */
  environment?: string | null;
  /** containerJSON of K8Container */
  containerJSON?: string | null;
  /** state of K8Container */
  state?: string | null;
  /** stateReason of K8Container */
  stateReason?: string | null;
  /** ready of K8Container */
  ready?: boolean | null;
  /** restartCount of K8Container */
  restartCount?: number | null;
  /** statusJSON of K8Container */
  statusJSON?: string | null;
  /** resourceVersion of K8Container */
  resourceVersion?: number | null;
  /** containerID of K8Container */
  containerID?: string | null;
  /** names is list variant of name of K8Container */
  names?: (string | null)[] | null;
  /** imageNames is list variant of imageName of K8Container */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Container */
  timestamps?: (string | null)[] | null;
  /** environments is list variant of environment of K8Container */
  environments?: (string | null)[] | null;
  /** containerJSONs is list variant of containerJSON of K8Container */
  containerJSONs?: (string | null)[] | null;
  /** states is list variant of state of K8Container */
  states?: (string | null)[] | null;
  /** stateReasons is list variant of stateReason of K8Container */
  stateReasons?: (string | null)[] | null;
  /** readys is list variant of ready of K8Container */
  readys?: (boolean | null)[] | null;
  /** restartCounts is list variant of restartCount of K8Container */
  restartCounts?: (number | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Container */
  statusJSONs?: (string | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Container */
  resourceVersions?: (number | null)[] | null;
  /** containerIDs is list variant of containerID of K8Container */
  containerIDs?: (string | null)[] | null;

  orderBy?: (_K8ContainerOrdering | null)[] | null;

  filter?: _K8ContainerFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ImageK8ContainerArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;
}
export interface PodK8ContainerArgs {
  /** name of K8Pod */
  name?: string | null;
  /** phase of K8Pod */
  phase?: string | null;
  /** environment of K8Pod */
  environment?: string | null;
  /** timestamp of K8Pod */
  timestamp?: string | null;
  /** baseName of K8Pod */
  baseName?: string | null;
  /** namespace of K8Pod */
  namespace?: string | null;
  /** statusJSON of K8Pod */
  statusJSON?: string | null;
  /** host of K8Pod */
  host?: string | null;
  /** state of K8Pod */
  state?: string | null;
  /** specsJSON of K8Pod */
  specsJSON?: string | null;
  /** envJSON of K8Pod */
  envJSON?: string | null;
  /** metadataJSON of K8Pod */
  metadataJSON?: string | null;
  /** containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOff?: boolean | null;
  /** resourceVersion of K8Pod */
  resourceVersion?: number | null;
  /** names is list variant of name of K8Pod */
  names?: (string | null)[] | null;
  /** phases is list variant of phase of K8Pod */
  phases?: (string | null)[] | null;
  /** environments is list variant of environment of K8Pod */
  environments?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Pod */
  timestamps?: (string | null)[] | null;
  /** baseNames is list variant of baseName of K8Pod */
  baseNames?: (string | null)[] | null;
  /** namespaces is list variant of namespace of K8Pod */
  namespaces?: (string | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Pod */
  statusJSONs?: (string | null)[] | null;
  /** hosts is list variant of host of K8Pod */
  hosts?: (string | null)[] | null;
  /** states is list variant of state of K8Pod */
  states?: (string | null)[] | null;
  /** specsJSONs is list variant of specsJSON of K8Pod */
  specsJSONs?: (string | null)[] | null;
  /** envJSONs is list variant of envJSON of K8Pod */
  envJSONs?: (string | null)[] | null;
  /** metadataJSONs is list variant of metadataJSON of K8Pod */
  metadataJSONs?: (string | null)[] | null;
  /** containersCrashLoopBackOffs is list variant of containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOffs?: (boolean | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Pod */
  resourceVersions?: (number | null)[] | null;

  orderBy?: (_K8PodOrdering | null)[] | null;

  filter?: _K8PodFilter | null;
}
export interface BuildsWorkflowArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitStatusArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface CommitsHerokuAppArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitsApplicationArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitFingerprintArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface CommitsParentImpactArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitParentImpactArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface ExtraSentryEventArgs {
  git_sha?: string | null;
}
export interface RepoBranchArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface CommitBranchArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface PullRequestsBranchArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ByReviewArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitReviewArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface CommentsReviewArgs {
  /** id of Comment */
  id?: string | null;
  /** body of Comment */
  body?: string | null;
  /** timestamp of Comment */
  timestamp?: string | null;
  /** createdAt of Comment */
  createdAt?: string | null;
  /** updatedAt of Comment */
  updatedAt?: string | null;
  /** commentId of Comment */
  commentId?: string | null;
  /** gitHubId of Comment */
  gitHubId?: string | null;
  /** path of Comment */
  path?: string | null;
  /** position of Comment */
  position?: string | null;
  /** htmlUrl of Comment */
  htmlUrl?: string | null;
  /** commentType of Comment */
  commentType?: CommentCommentType | null;
  /** ids is list variant of id of Comment */
  ids?: (string | null)[] | null;
  /** bodys is list variant of body of Comment */
  bodys?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Comment */
  timestamps?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Comment */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Comment */
  updatedAts?: (string | null)[] | null;
  /** commentIds is list variant of commentId of Comment */
  commentIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Comment */
  gitHubIds?: (string | null)[] | null;
  /** paths is list variant of path of Comment */
  paths?: (string | null)[] | null;
  /** positions is list variant of position of Comment */
  positions?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Comment */
  htmlUrls?: (string | null)[] | null;
  /** commentTypes is list variant of commentType of Comment */
  commentTypes?: (CommentCommentType | null)[] | null;

  orderBy?: (_CommentOrdering | null)[] | null;

  filter?: _CommentFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestReviewArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;
}
export interface IssueCommentArgs {
  /** id of Issue */
  id?: string | null;
  /** number of Issue */
  number?: number | null;
  /** name of Issue */
  name?: string | null;
  /** title of Issue */
  title?: string | null;
  /** body of Issue */
  body?: string | null;
  /** state of Issue */
  state?: IssueState | null;
  /** timestamp of Issue */
  timestamp?: string | null;
  /** action of Issue */
  action?: string | null;
  /** createdAt of Issue */
  createdAt?: string | null;
  /** updatedAt of Issue */
  updatedAt?: string | null;
  /** closedAt of Issue */
  closedAt?: string | null;
  /** ids is list variant of id of Issue */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of Issue */
  numbers?: (number | null)[] | null;
  /** names is list variant of name of Issue */
  names?: (string | null)[] | null;
  /** titles is list variant of title of Issue */
  titles?: (string | null)[] | null;
  /** bodys is list variant of body of Issue */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Issue */
  states?: (IssueState | null)[] | null;
  /** timestamps is list variant of timestamp of Issue */
  timestamps?: (string | null)[] | null;
  /** actions is list variant of action of Issue */
  actions?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Issue */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Issue */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of Issue */
  closedAts?: (string | null)[] | null;

  orderBy?: (_IssueOrdering | null)[] | null;

  filter?: _IssueFilter | null;
}
export interface ReviewCommentArgs {
  /** id of Review */
  id?: string | null;
  /** gitHubId of Review */
  gitHubId?: string | null;
  /** reviewId of Review */
  reviewId?: string | null;
  /** body of Review */
  body?: string | null;
  /** state of Review */
  state?: ReviewState | null;
  /** submittedAt of Review */
  submittedAt?: string | null;
  /** htmlUrl of Review */
  htmlUrl?: string | null;
  /** ids is list variant of id of Review */
  ids?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Review */
  gitHubIds?: (string | null)[] | null;
  /** reviewIds is list variant of reviewId of Review */
  reviewIds?: (string | null)[] | null;
  /** bodys is list variant of body of Review */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Review */
  states?: (ReviewState | null)[] | null;
  /** submittedAts is list variant of submittedAt of Review */
  submittedAts?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Review */
  htmlUrls?: (string | null)[] | null;

  orderBy?: (_ReviewOrdering | null)[] | null;

  filter?: _ReviewFilter | null;
}
export interface PullRequestCommentArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;
}
export interface ByCommentArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;
}
export interface RepoDeletedBranchArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;
}
export interface CommitDeletedBranchArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface PullRequestsDeletedBranchArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ImageImageLinkedArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;
}
export interface CommitImageLinkedArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;
}
export interface PushPushImpactArgs {
  /** id of Push */
  id?: string | null;
  /** timestamp of Push */
  timestamp?: string | null;
  /** branch of Push */
  branch?: string | null;
  /** ids is list variant of id of Push */
  ids?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Push */
  timestamps?: (string | null)[] | null;
  /** branchs is list variant of branch of Push */
  branchs?: (string | null)[] | null;

  orderBy?: (_PushOrdering | null)[] | null;

  filter?: _PushFilter | null;
}
export interface PullRequestPullRequestImpactArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;
}
export interface UserUserJoinedChannelArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;
}
export interface ChannelUserJoinedChannelArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;
}
export interface CollaboratorsCardArgs {
  login?: (string | null)[] | null;
}
export interface ProvenanceCardArgs {
  name?: string | null;
}
export interface RepositoryCardArgs {
  owner?: (string | null)[] | null;

  name?: (string | null)[] | null;

  slug?: (string | null)[] | null;
}
export interface RecipientNotificationArgs {
  address?: (string | null)[] | null;
}
export interface CommitCommitIssueRelationshipArgs {
  owner?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  sha?: (string | null)[] | null;
}
export interface IssueCommitIssueRelationshipArgs {
  owner?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  name?: (string | null)[] | null;
}
export interface CommitDeploymentArgs {
  owner?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  sha?: (string | null)[] | null;
}
export interface SourceIssueRelationshipArgs {
  owner?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  issue?: (string | null)[] | null;
}
export interface TargetIssueRelationshipArgs {
  owner?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  issue?: (string | null)[] | null;
}
export interface RepoSdmBuildIdentifierArgs {
  name?: (string | null)[] | null;

  owner?: (string | null)[] | null;

  providerId?: (string | null)[] | null;
}
export interface RepoSdmVersionArgs {
  name?: (string | null)[] | null;

  owner?: (string | null)[] | null;

  providerId?: (string | null)[] | null;
}
export interface CorrelationContextAtomistLogArgs {
  correlation_id?: string | null;
}
export interface AutomationAtomistLogCorrelationContextArgs {
  name?: string | null;

  version?: string | null;
}
export interface RepoSdmGoalSetBadgeArgs {
  name?: (string | null)[] | null;

  owner?: (string | null)[] | null;

  providerId?: (string | null)[] | null;
}
export interface SetChatUserPreferenceMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The id of user */
  chatUserId?: string | null;
  /** The name of the preference */
  name?: string | null;
  /** The value of the preference */
  value?: string | null;
}
export interface SetPersonPreferenceMutationTypeArgs {
  /** The ID of the person */
  personId?: string | null;
  /** The name of the preference */
  name?: string | null;
  /** The value of the preference */
  value?: string | null;
}
export interface SetChatTeamPreferenceMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The name of the preference */
  name?: string | null;
  /** The value of the preference */
  value?: string | null;
}
export interface CreateSlackChannelMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The name of the channel to create */
  name?: string | null;
}
export interface AddBotToSlackChannelMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The id of the channel to join */
  channelId?: string | null;
}
export interface LinkSlackChannelToRepoMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The id of the channel to link */
  channelId?: string | null;
  /** The name of the repo to link */
  repo?: string | null;
  /** The owner of the repo to link */
  owner?: string | null;
  /** The provider id of the repo to link */
  providerId?: string | null;
}
export interface InviteUserToSlackChannelMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The id of the channel to join */
  channelId?: string | null;
  /** The id of the user to invite */
  userId?: string | null;
}
export interface UnlinkSlackChannelFromRepoMutationTypeArgs {
  /** The ID of the chat team */
  chatTeamId?: string | null;
  /** The id of the channel to link */
  channelId?: string | null;
  /** The name of the repo to link */
  repo?: string | null;
  /** The owner of the repo to link */
  owner?: string | null;
  /** The provider id of the repo to link */
  providerId?: string | null;
}
export interface SetOwnerLoginMutationTypeArgs {
  /** The owner name for the Organization/Team */
  owner?: string | null;
  /** The id of the Git provider for this Owner */
  providerId?: string | null;
  /** The login that should be used */
  login?: string | null;
}
export interface SetRepoLoginMutationTypeArgs {
  /** The owner name for the Organization/Team */
  repo?: string | null;
  /** The owner name for the Organization/Team */
  owner?: string | null;
  /** The id of the Git provider for this Owner */
  providerId?: string | null;
  /** The login that should be used */
  login?: string | null;
}
export interface SetTeamPropertiesMutationTypeArgs {
  /** The display name of the team */
  name?: string | null;
  /** The description of the team */
  description?: string | null;
  /** URL to a teams icon */
  iconUrl?: string | null;
}
export interface IssueSubscriptionTypeArgs {
  /** id of Issue */
  id?: string | null;
  /** number of Issue */
  number?: number | null;
  /** name of Issue */
  name?: string | null;
  /** title of Issue */
  title?: string | null;
  /** body of Issue */
  body?: string | null;
  /** state of Issue */
  state?: IssueState | null;
  /** timestamp of Issue */
  timestamp?: string | null;
  /** action of Issue */
  action?: string | null;
  /** createdAt of Issue */
  createdAt?: string | null;
  /** updatedAt of Issue */
  updatedAt?: string | null;
  /** closedAt of Issue */
  closedAt?: string | null;
  /** ids is list variant of id of Issue */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of Issue */
  numbers?: (number | null)[] | null;
  /** names is list variant of name of Issue */
  names?: (string | null)[] | null;
  /** titles is list variant of title of Issue */
  titles?: (string | null)[] | null;
  /** bodys is list variant of body of Issue */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Issue */
  states?: (IssueState | null)[] | null;
  /** timestamps is list variant of timestamp of Issue */
  timestamps?: (string | null)[] | null;
  /** actions is list variant of action of Issue */
  actions?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Issue */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Issue */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of Issue */
  closedAts?: (string | null)[] | null;

  orderBy?: (_IssueOrdering | null)[] | null;

  filter?: _IssueFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommentSubscriptionTypeArgs {
  /** id of Comment */
  id?: string | null;
  /** body of Comment */
  body?: string | null;
  /** timestamp of Comment */
  timestamp?: string | null;
  /** createdAt of Comment */
  createdAt?: string | null;
  /** updatedAt of Comment */
  updatedAt?: string | null;
  /** commentId of Comment */
  commentId?: string | null;
  /** gitHubId of Comment */
  gitHubId?: string | null;
  /** path of Comment */
  path?: string | null;
  /** position of Comment */
  position?: string | null;
  /** htmlUrl of Comment */
  htmlUrl?: string | null;
  /** commentType of Comment */
  commentType?: CommentCommentType | null;
  /** ids is list variant of id of Comment */
  ids?: (string | null)[] | null;
  /** bodys is list variant of body of Comment */
  bodys?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Comment */
  timestamps?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Comment */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of Comment */
  updatedAts?: (string | null)[] | null;
  /** commentIds is list variant of commentId of Comment */
  commentIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Comment */
  gitHubIds?: (string | null)[] | null;
  /** paths is list variant of path of Comment */
  paths?: (string | null)[] | null;
  /** positions is list variant of position of Comment */
  positions?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Comment */
  htmlUrls?: (string | null)[] | null;
  /** commentTypes is list variant of commentType of Comment */
  commentTypes?: (CommentCommentType | null)[] | null;

  orderBy?: (_CommentOrdering | null)[] | null;

  filter?: _CommentFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface LabelSubscriptionTypeArgs {
  /** id of Label */
  id?: string | null;
  /** name of Label */
  name?: string | null;
  /** default of Label */
  default?: string | null;
  /** color of Label */
  color?: string | null;
  /** ids is list variant of id of Label */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Label */
  names?: (string | null)[] | null;
  /** defaults is list variant of default of Label */
  defaults?: (string | null)[] | null;
  /** colors is list variant of color of Label */
  colors?: (string | null)[] | null;

  orderBy?: (_LabelOrdering | null)[] | null;

  filter?: _LabelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface RepoSubscriptionTypeArgs {
  /** id of Repo */
  id?: string | null;
  /** owner of Repo */
  owner?: string | null;
  /** name of Repo */
  name?: string | null;
  /** allowRebaseMerge of Repo */
  allowRebaseMerge?: boolean | null;
  /** allowSquashMerge of Repo */
  allowSquashMerge?: boolean | null;
  /** allowMergeCommit of Repo */
  allowMergeCommit?: boolean | null;
  /** repoId of Repo */
  repoId?: string | null;
  /** gitHubId of Repo */
  gitHubId?: string | null;
  /** defaultBranch of Repo */
  defaultBranch?: string | null;
  /** ids is list variant of id of Repo */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Repo */
  owners?: (string | null)[] | null;
  /** names is list variant of name of Repo */
  names?: (string | null)[] | null;
  /** allowRebaseMerges is list variant of allowRebaseMerge of Repo */
  allowRebaseMerges?: (boolean | null)[] | null;
  /** allowSquashMerges is list variant of allowSquashMerge of Repo */
  allowSquashMerges?: (boolean | null)[] | null;
  /** allowMergeCommits is list variant of allowMergeCommit of Repo */
  allowMergeCommits?: (boolean | null)[] | null;
  /** repoIds is list variant of repoId of Repo */
  repoIds?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Repo */
  gitHubIds?: (string | null)[] | null;
  /** defaultBranchs is list variant of defaultBranch of Repo */
  defaultBranchs?: (string | null)[] | null;

  orderBy?: (_RepoOrdering | null)[] | null;

  filter?: _RepoFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CommitSubscriptionTypeArgs {
  /** sha of Commit */
  sha?: string | null;
  /** message of Commit */
  message?: string | null;
  /** timestamp of Commit */
  timestamp?: string | null;
  /** shas is list variant of sha of Commit */
  shas?: (string | null)[] | null;
  /** messages is list variant of message of Commit */
  messages?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Commit */
  timestamps?: (string | null)[] | null;

  orderBy?: (_CommitOrdering | null)[] | null;

  filter?: _CommitFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PushSubscriptionTypeArgs {
  /** id of Push */
  id?: string | null;
  /** timestamp of Push */
  timestamp?: string | null;
  /** branch of Push */
  branch?: string | null;
  /** ids is list variant of id of Push */
  ids?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Push */
  timestamps?: (string | null)[] | null;
  /** branchs is list variant of branch of Push */
  branchs?: (string | null)[] | null;

  orderBy?: (_PushOrdering | null)[] | null;

  filter?: _PushFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BuildSubscriptionTypeArgs {
  /** id of Build */
  id?: string | null;
  /** buildId of Build */
  buildId?: string | null;
  /** name of Build */
  name?: string | null;
  /** status of Build */
  status?: BuildStatus | null;
  /** buildUrl of Build */
  buildUrl?: string | null;
  /** compareUrl of Build */
  compareUrl?: string | null;
  /** trigger of Build */
  trigger?: BuildTrigger | null;
  /** provider of Build */
  provider?: string | null;
  /** pullRequestNumber of Build */
  pullRequestNumber?: number | null;
  /** startedAt of Build */
  startedAt?: string | null;
  /** finishedAt of Build */
  finishedAt?: string | null;
  /** timestamp of Build */
  timestamp?: string | null;
  /** workflowId of Build */
  workflowId?: string | null;
  /** jobName of Build */
  jobName?: string | null;
  /** jobId of Build */
  jobId?: string | null;
  /** data of Build */
  data?: string | null;
  /** ids is list variant of id of Build */
  ids?: (string | null)[] | null;
  /** buildIds is list variant of buildId of Build */
  buildIds?: (string | null)[] | null;
  /** names is list variant of name of Build */
  names?: (string | null)[] | null;
  /** statuss is list variant of status of Build */
  statuss?: (BuildStatus | null)[] | null;
  /** buildUrls is list variant of buildUrl of Build */
  buildUrls?: (string | null)[] | null;
  /** compareUrls is list variant of compareUrl of Build */
  compareUrls?: (string | null)[] | null;
  /** triggers is list variant of trigger of Build */
  triggers?: (BuildTrigger | null)[] | null;
  /** providers is list variant of provider of Build */
  providers?: (string | null)[] | null;
  /** pullRequestNumbers is list variant of pullRequestNumber of Build */
  pullRequestNumbers?: (number | null)[] | null;
  /** startedAts is list variant of startedAt of Build */
  startedAts?: (string | null)[] | null;
  /** finishedAts is list variant of finishedAt of Build */
  finishedAts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Build */
  timestamps?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Build */
  workflowIds?: (string | null)[] | null;
  /** jobNames is list variant of jobName of Build */
  jobNames?: (string | null)[] | null;
  /** jobIds is list variant of jobId of Build */
  jobIds?: (string | null)[] | null;
  /** datas is list variant of data of Build */
  datas?: (string | null)[] | null;

  orderBy?: (_BuildOrdering | null)[] | null;

  filter?: _BuildFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WorkflowSubscriptionTypeArgs {
  /** id of Workflow */
  id?: string | null;
  /** name of Workflow */
  name?: string | null;
  /** workflowId of Workflow */
  workflowId?: string | null;
  /** provider of Workflow */
  provider?: string | null;
  /** config of Workflow */
  config?: string | null;
  /** ids is list variant of id of Workflow */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Workflow */
  names?: (string | null)[] | null;
  /** workflowIds is list variant of workflowId of Workflow */
  workflowIds?: (string | null)[] | null;
  /** providers is list variant of provider of Workflow */
  providers?: (string | null)[] | null;
  /** configs is list variant of config of Workflow */
  configs?: (string | null)[] | null;

  orderBy?: (_WorkflowOrdering | null)[] | null;

  filter?: _WorkflowFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface BranchSubscriptionTypeArgs {
  /** id of Branch */
  id?: string | null;
  /** name of Branch */
  name?: string | null;
  /** timestamp of Branch */
  timestamp?: string | null;
  /** isRemote of Branch */
  isRemote?: boolean | null;
  /** remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrl?: string | null;
  /** ids is list variant of id of Branch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Branch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Branch */
  timestamps?: (string | null)[] | null;
  /** isRemotes is list variant of isRemote of Branch */
  isRemotes?: (boolean | null)[] | null;
  /** remoteRepoHtmlUrls is list variant of remoteRepoHtmlUrl of Branch */
  remoteRepoHtmlUrls?: (string | null)[] | null;

  orderBy?: (_BranchOrdering | null)[] | null;

  filter?: _BranchFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface DeletedBranchSubscriptionTypeArgs {
  /** id of DeletedBranch */
  id?: string | null;
  /** name of DeletedBranch */
  name?: string | null;
  /** timestamp of DeletedBranch */
  timestamp?: string | null;
  /** ids is list variant of id of DeletedBranch */
  ids?: (string | null)[] | null;
  /** names is list variant of name of DeletedBranch */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DeletedBranch */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DeletedBranchOrdering | null)[] | null;

  filter?: _DeletedBranchFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatIdSubscriptionTypeArgs {
  /** id of ChatId */
  id?: string | null;
  /** screenName of ChatId */
  screenName?: string | null;
  /** userId of ChatId */
  userId?: string | null;
  /** provider of ChatId */
  provider?: string | null;
  /** isAtomistBot of ChatId */
  isAtomistBot?: string | null;
  /** isOwner of ChatId */
  isOwner?: string | null;
  /** isPrimaryOwner of ChatId */
  isPrimaryOwner?: string | null;
  /** isAdmin of ChatId */
  isAdmin?: string | null;
  /** isBot of ChatId */
  isBot?: string | null;
  /** timezoneLabel of ChatId */
  timezoneLabel?: string | null;
  /** ids is list variant of id of ChatId */
  ids?: (string | null)[] | null;
  /** screenNames is list variant of screenName of ChatId */
  screenNames?: (string | null)[] | null;
  /** userIds is list variant of userId of ChatId */
  userIds?: (string | null)[] | null;
  /** providers is list variant of provider of ChatId */
  providers?: (string | null)[] | null;
  /** isAtomistBots is list variant of isAtomistBot of ChatId */
  isAtomistBots?: (string | null)[] | null;
  /** isOwners is list variant of isOwner of ChatId */
  isOwners?: (string | null)[] | null;
  /** isPrimaryOwners is list variant of isPrimaryOwner of ChatId */
  isPrimaryOwners?: (string | null)[] | null;
  /** isAdmins is list variant of isAdmin of ChatId */
  isAdmins?: (string | null)[] | null;
  /** isBots is list variant of isBot of ChatId */
  isBots?: (string | null)[] | null;
  /** timezoneLabels is list variant of timezoneLabel of ChatId */
  timezoneLabels?: (string | null)[] | null;

  orderBy?: (_ChatIdOrdering | null)[] | null;

  filter?: _ChatIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatChannelSubscriptionTypeArgs {
  /** id of ChatChannel */
  id?: string | null;
  /** name of ChatChannel */
  name?: string | null;
  /** provider of ChatChannel */
  provider?: string | null;
  /** normalizedName of ChatChannel */
  normalizedName?: string | null;
  /** channelId of ChatChannel */
  channelId?: string | null;
  /** isDefault of ChatChannel */
  isDefault?: boolean | null;
  /** botInvitedSelf of ChatChannel */
  botInvitedSelf?: boolean | null;
  /** ids is list variant of id of ChatChannel */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatChannel */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatChannel */
  providers?: (string | null)[] | null;
  /** normalizedNames is list variant of normalizedName of ChatChannel */
  normalizedNames?: (string | null)[] | null;
  /** channelIds is list variant of channelId of ChatChannel */
  channelIds?: (string | null)[] | null;
  /** isDefaults is list variant of isDefault of ChatChannel */
  isDefaults?: (boolean | null)[] | null;
  /** botInvitedSelfs is list variant of botInvitedSelf of ChatChannel */
  botInvitedSelfs?: (boolean | null)[] | null;

  orderBy?: (_ChatChannelOrdering | null)[] | null;

  filter?: _ChatChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestSubscriptionTypeArgs {
  /** id of PullRequest */
  id?: string | null;
  /** number of PullRequest */
  number?: number | null;
  /** prId of PullRequest */
  prId?: string | null;
  /** name of PullRequest */
  name?: string | null;
  /** body of PullRequest */
  body?: string | null;
  /** state of PullRequest */
  state?: string | null;
  /** merged of PullRequest */
  merged?: boolean | null;
  /** timestamp of PullRequest */
  timestamp?: string | null;
  /** baseBranchName of PullRequest */
  baseBranchName?: string | null;
  /** branchName of PullRequest */
  branchName?: string | null;
  /** title of PullRequest */
  title?: string | null;
  /** createdAt of PullRequest */
  createdAt?: string | null;
  /** updatedAt of PullRequest */
  updatedAt?: string | null;
  /** closedAt of PullRequest */
  closedAt?: string | null;
  /** mergedAt of PullRequest */
  mergedAt?: string | null;
  /** ids is list variant of id of PullRequest */
  ids?: (string | null)[] | null;
  /** numbers is list variant of number of PullRequest */
  numbers?: (number | null)[] | null;
  /** prIds is list variant of prId of PullRequest */
  prIds?: (string | null)[] | null;
  /** names is list variant of name of PullRequest */
  names?: (string | null)[] | null;
  /** bodys is list variant of body of PullRequest */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of PullRequest */
  states?: (string | null)[] | null;
  /** mergeds is list variant of merged of PullRequest */
  mergeds?: (boolean | null)[] | null;
  /** timestamps is list variant of timestamp of PullRequest */
  timestamps?: (string | null)[] | null;
  /** baseBranchNames is list variant of baseBranchName of PullRequest */
  baseBranchNames?: (string | null)[] | null;
  /** branchNames is list variant of branchName of PullRequest */
  branchNames?: (string | null)[] | null;
  /** titles is list variant of title of PullRequest */
  titles?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of PullRequest */
  createdAts?: (string | null)[] | null;
  /** updatedAts is list variant of updatedAt of PullRequest */
  updatedAts?: (string | null)[] | null;
  /** closedAts is list variant of closedAt of PullRequest */
  closedAts?: (string | null)[] | null;
  /** mergedAts is list variant of mergedAt of PullRequest */
  mergedAts?: (string | null)[] | null;

  orderBy?: (_PullRequestOrdering | null)[] | null;

  filter?: _PullRequestFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface OrgSubscriptionTypeArgs {
  /** id of Org */
  id?: string | null;
  /** owner of Org */
  owner?: string | null;
  /** ownerType of Org */
  ownerType?: OwnerType | null;
  /** ids is list variant of id of Org */
  ids?: (string | null)[] | null;
  /** owners is list variant of owner of Org */
  owners?: (string | null)[] | null;
  /** ownerTypes is list variant of ownerType of Org */
  ownerTypes?: (OwnerType | null)[] | null;

  orderBy?: (_OrgOrdering | null)[] | null;

  filter?: _OrgFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmIdSubscriptionTypeArgs {
  /** login of SCMId */
  login?: string | null;
  /** name of SCMId */
  name?: string | null;
  /** logins is list variant of login of SCMId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of SCMId */
  names?: (string | null)[] | null;

  orderBy?: (_ScmIdOrdering | null)[] | null;

  filter?: _ScmIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface GitHubIdSubscriptionTypeArgs {
  /** login of GitHubId */
  login?: string | null;
  /** name of GitHubId */
  name?: string | null;
  /** logins is list variant of login of GitHubId */
  logins?: (string | null)[] | null;
  /** names is list variant of name of GitHubId */
  names?: (string | null)[] | null;

  orderBy?: (_GitHubIdOrdering | null)[] | null;

  filter?: _GitHubIdFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TagSubscriptionTypeArgs {
  /** id of Tag */
  id?: string | null;
  /** name of Tag */
  name?: string | null;
  /** description of Tag */
  description?: string | null;
  /** ref of Tag */
  ref?: string | null;
  /** timestamp of Tag */
  timestamp?: string | null;
  /** ids is list variant of id of Tag */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Tag */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Tag */
  descriptions?: (string | null)[] | null;
  /** refs is list variant of ref of Tag */
  refs?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Tag */
  timestamps?: (string | null)[] | null;

  orderBy?: (_TagOrdering | null)[] | null;

  filter?: _TagFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface K8PodSubscriptionTypeArgs {
  /** name of K8Pod */
  name?: string | null;
  /** phase of K8Pod */
  phase?: string | null;
  /** environment of K8Pod */
  environment?: string | null;
  /** timestamp of K8Pod */
  timestamp?: string | null;
  /** baseName of K8Pod */
  baseName?: string | null;
  /** namespace of K8Pod */
  namespace?: string | null;
  /** statusJSON of K8Pod */
  statusJSON?: string | null;
  /** host of K8Pod */
  host?: string | null;
  /** state of K8Pod */
  state?: string | null;
  /** specsJSON of K8Pod */
  specsJSON?: string | null;
  /** envJSON of K8Pod */
  envJSON?: string | null;
  /** metadataJSON of K8Pod */
  metadataJSON?: string | null;
  /** containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOff?: boolean | null;
  /** resourceVersion of K8Pod */
  resourceVersion?: number | null;
  /** names is list variant of name of K8Pod */
  names?: (string | null)[] | null;
  /** phases is list variant of phase of K8Pod */
  phases?: (string | null)[] | null;
  /** environments is list variant of environment of K8Pod */
  environments?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Pod */
  timestamps?: (string | null)[] | null;
  /** baseNames is list variant of baseName of K8Pod */
  baseNames?: (string | null)[] | null;
  /** namespaces is list variant of namespace of K8Pod */
  namespaces?: (string | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Pod */
  statusJSONs?: (string | null)[] | null;
  /** hosts is list variant of host of K8Pod */
  hosts?: (string | null)[] | null;
  /** states is list variant of state of K8Pod */
  states?: (string | null)[] | null;
  /** specsJSONs is list variant of specsJSON of K8Pod */
  specsJSONs?: (string | null)[] | null;
  /** envJSONs is list variant of envJSON of K8Pod */
  envJSONs?: (string | null)[] | null;
  /** metadataJSONs is list variant of metadataJSON of K8Pod */
  metadataJSONs?: (string | null)[] | null;
  /** containersCrashLoopBackOffs is list variant of containersCrashLoopBackOff of K8Pod */
  containersCrashLoopBackOffs?: (boolean | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Pod */
  resourceVersions?: (number | null)[] | null;

  orderBy?: (_K8PodOrdering | null)[] | null;

  filter?: _K8PodFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface K8ContainerSubscriptionTypeArgs {
  /** name of K8Container */
  name?: string | null;
  /** imageName of K8Container */
  imageName?: string | null;
  /** timestamp of K8Container */
  timestamp?: string | null;
  /** environment of K8Container */
  environment?: string | null;
  /** containerJSON of K8Container */
  containerJSON?: string | null;
  /** state of K8Container */
  state?: string | null;
  /** stateReason of K8Container */
  stateReason?: string | null;
  /** ready of K8Container */
  ready?: boolean | null;
  /** restartCount of K8Container */
  restartCount?: number | null;
  /** statusJSON of K8Container */
  statusJSON?: string | null;
  /** resourceVersion of K8Container */
  resourceVersion?: number | null;
  /** containerID of K8Container */
  containerID?: string | null;
  /** names is list variant of name of K8Container */
  names?: (string | null)[] | null;
  /** imageNames is list variant of imageName of K8Container */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of K8Container */
  timestamps?: (string | null)[] | null;
  /** environments is list variant of environment of K8Container */
  environments?: (string | null)[] | null;
  /** containerJSONs is list variant of containerJSON of K8Container */
  containerJSONs?: (string | null)[] | null;
  /** states is list variant of state of K8Container */
  states?: (string | null)[] | null;
  /** stateReasons is list variant of stateReason of K8Container */
  stateReasons?: (string | null)[] | null;
  /** readys is list variant of ready of K8Container */
  readys?: (boolean | null)[] | null;
  /** restartCounts is list variant of restartCount of K8Container */
  restartCounts?: (number | null)[] | null;
  /** statusJSONs is list variant of statusJSON of K8Container */
  statusJSONs?: (string | null)[] | null;
  /** resourceVersions is list variant of resourceVersion of K8Container */
  resourceVersions?: (number | null)[] | null;
  /** containerIDs is list variant of containerID of K8Container */
  containerIDs?: (string | null)[] | null;

  orderBy?: (_K8ContainerOrdering | null)[] | null;

  filter?: _K8ContainerFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface DockerImageSubscriptionTypeArgs {
  /** image of DockerImage */
  image?: string | null;
  /** imageName of DockerImage */
  imageName?: string | null;
  /** timestamp of DockerImage */
  timestamp?: string | null;
  /** images is list variant of image of DockerImage */
  images?: (string | null)[] | null;
  /** imageNames is list variant of imageName of DockerImage */
  imageNames?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of DockerImage */
  timestamps?: (string | null)[] | null;

  orderBy?: (_DockerImageOrdering | null)[] | null;

  filter?: _DockerImageFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ImageLinkedSubscriptionTypeArgs {
  /** timestamp of ImageLinked */
  timestamp?: string | null;
  /** timestamps is list variant of timestamp of ImageLinked */
  timestamps?: (string | null)[] | null;

  orderBy?: (_ImageLinkedOrdering | null)[] | null;

  filter?: _ImageLinkedFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReleaseSubscriptionTypeArgs {
  /** id of Release */
  id?: string | null;
  /** name of Release */
  name?: string | null;
  /** timestamp of Release */
  timestamp?: string | null;
  /** ids is list variant of id of Release */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Release */
  names?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Release */
  timestamps?: (string | null)[] | null;

  orderBy?: (_ReleaseOrdering | null)[] | null;

  filter?: _ReleaseFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface HerokuAppSubscriptionTypeArgs {
  /** app of HerokuApp */
  app?: string | null;
  /** url of HerokuApp */
  url?: string | null;
  /** timestamp of HerokuApp */
  timestamp?: string | null;
  /** user of HerokuApp */
  user?: string | null;
  /** appId of HerokuApp */
  appId?: string | null;
  /** release of HerokuApp */
  release?: string | null;
  /** apps is list variant of app of HerokuApp */
  apps?: (string | null)[] | null;
  /** urls is list variant of url of HerokuApp */
  urls?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of HerokuApp */
  timestamps?: (string | null)[] | null;
  /** users is list variant of user of HerokuApp */
  users?: (string | null)[] | null;
  /** appIds is list variant of appId of HerokuApp */
  appIds?: (string | null)[] | null;
  /** releases is list variant of release of HerokuApp */
  releases?: (string | null)[] | null;

  orderBy?: (_HerokuAppOrdering | null)[] | null;

  filter?: _HerokuAppFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ApplicationSubscriptionTypeArgs {
  /** id of Application */
  id?: string | null;
  /** state of Application */
  state?: string | null;
  /** host of Application */
  host?: string | null;
  /** timestamp of Application */
  timestamp?: string | null;
  /** domain of Application */
  domain?: string | null;
  /** data of Application */
  data?: string | null;
  /** ids is list variant of id of Application */
  ids?: (string | null)[] | null;
  /** states is list variant of state of Application */
  states?: (string | null)[] | null;
  /** hosts is list variant of host of Application */
  hosts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Application */
  timestamps?: (string | null)[] | null;
  /** domains is list variant of domain of Application */
  domains?: (string | null)[] | null;
  /** datas is list variant of data of Application */
  datas?: (string | null)[] | null;

  orderBy?: (_ApplicationOrdering | null)[] | null;

  filter?: _ApplicationFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface TeamSubscriptionTypeArgs {
  /** id of Team */
  id?: string | null;
  /** name of Team */
  name?: string | null;
  /** description of Team */
  description?: string | null;
  /** iconUrl of Team */
  iconUrl?: string | null;
  /** createdAt of Team */
  createdAt?: string | null;
  /** ids is list variant of id of Team */
  ids?: (string | null)[] | null;
  /** names is list variant of name of Team */
  names?: (string | null)[] | null;
  /** descriptions is list variant of description of Team */
  descriptions?: (string | null)[] | null;
  /** iconUrls is list variant of iconUrl of Team */
  iconUrls?: (string | null)[] | null;
  /** createdAts is list variant of createdAt of Team */
  createdAts?: (string | null)[] | null;

  orderBy?: (_TeamOrdering | null)[] | null;

  filter?: _TeamFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChatTeamSubscriptionTypeArgs {
  /** id of ChatTeam */
  id?: string | null;
  /** name of ChatTeam */
  name?: string | null;
  /** provider of ChatTeam */
  provider?: string | null;
  /** domain of ChatTeam */
  domain?: string | null;
  /** messageCount of ChatTeam */
  messageCount?: number | null;
  /** emailDomain of ChatTeam */
  emailDomain?: string | null;
  /** ids is list variant of id of ChatTeam */
  ids?: (string | null)[] | null;
  /** names is list variant of name of ChatTeam */
  names?: (string | null)[] | null;
  /** providers is list variant of provider of ChatTeam */
  providers?: (string | null)[] | null;
  /** domains is list variant of domain of ChatTeam */
  domains?: (string | null)[] | null;
  /** messageCounts is list variant of messageCount of ChatTeam */
  messageCounts?: (number | null)[] | null;
  /** emailDomains is list variant of emailDomain of ChatTeam */
  emailDomains?: (string | null)[] | null;

  orderBy?: (_ChatTeamOrdering | null)[] | null;

  filter?: _ChatTeamFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PersonSubscriptionTypeArgs {
  /** id of Person */
  id?: string | null;
  /** forename of Person */
  forename?: string | null;
  /** surname of Person */
  surname?: string | null;
  /** name of Person */
  name?: string | null;
  /** ids is list variant of id of Person */
  ids?: (string | null)[] | null;
  /** forenames is list variant of forename of Person */
  forenames?: (string | null)[] | null;
  /** surnames is list variant of surname of Person */
  surnames?: (string | null)[] | null;
  /** names is list variant of name of Person */
  names?: (string | null)[] | null;

  orderBy?: (_PersonOrdering | null)[] | null;

  filter?: _PersonFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface StatusSubscriptionTypeArgs {
  /** id of Status */
  id?: string | null;
  /** state of Status */
  state?: StatusState | null;
  /** description of Status */
  description?: string | null;
  /** targetUrl of Status */
  targetUrl?: string | null;
  /** context of Status */
  context?: string | null;
  /** timestamp of Status */
  timestamp?: string | null;
  /** ids is list variant of id of Status */
  ids?: (string | null)[] | null;
  /** states is list variant of state of Status */
  states?: (StatusState | null)[] | null;
  /** descriptions is list variant of description of Status */
  descriptions?: (string | null)[] | null;
  /** targetUrls is list variant of targetUrl of Status */
  targetUrls?: (string | null)[] | null;
  /** contexts is list variant of context of Status */
  contexts?: (string | null)[] | null;
  /** timestamps is list variant of timestamp of Status */
  timestamps?: (string | null)[] | null;

  orderBy?: (_StatusOrdering | null)[] | null;

  filter?: _StatusFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface EmailSubscriptionTypeArgs {
  /** address of Email */
  address?: string | null;
  /** addresss is list variant of address of Email */
  addresss?: (string | null)[] | null;

  orderBy?: (_EmailOrdering | null)[] | null;

  filter?: _EmailFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface FingerprintSubscriptionTypeArgs {
  /** name of Fingerprint */
  name?: string | null;
  /** sha of Fingerprint */
  sha?: string | null;
  /** data of Fingerprint */
  data?: string | null;
  /** names is list variant of name of Fingerprint */
  names?: (string | null)[] | null;
  /** shas is list variant of sha of Fingerprint */
  shas?: (string | null)[] | null;
  /** datas is list variant of data of Fingerprint */
  datas?: (string | null)[] | null;

  orderBy?: (_FingerprintOrdering | null)[] | null;

  filter?: _FingerprintFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ParentImpactSubscriptionTypeArgs {
  /** id of ParentImpact */
  id?: string | null;
  /** url of ParentImpact */
  url?: string | null;
  /** data of ParentImpact */
  data?: string | null;
  /** ids is list variant of id of ParentImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of ParentImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of ParentImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_ParentImpactOrdering | null)[] | null;

  filter?: _ParentImpactFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PushImpactSubscriptionTypeArgs {
  /** id of PushImpact */
  id?: string | null;
  /** url of PushImpact */
  url?: string | null;
  /** data of PushImpact */
  data?: string | null;
  /** ids is list variant of id of PushImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of PushImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of PushImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_PushImpactOrdering | null)[] | null;

  filter?: _PushImpactFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface PullRequestImpactSubscriptionTypeArgs {
  /** id of PullRequestImpact */
  id?: string | null;
  /** url of PullRequestImpact */
  url?: string | null;
  /** data of PullRequestImpact */
  data?: string | null;
  /** ids is list variant of id of PullRequestImpact */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of PullRequestImpact */
  urls?: (string | null)[] | null;
  /** datas is list variant of data of PullRequestImpact */
  datas?: (string | null)[] | null;

  orderBy?: (_PullRequestImpactOrdering | null)[] | null;

  filter?: _PullRequestImpactFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface GitHubProviderSubscriptionTypeArgs {
  /** id of GitHubProvider */
  id?: string | null;
  /** url of GitHubProvider */
  url?: string | null;
  /** providerId of GitHubProvider */
  providerId?: string | null;
  /** apiUrl of GitHubProvider */
  apiUrl?: string | null;
  /** gitUrl of GitHubProvider */
  gitUrl?: string | null;
  /** providerType of GitHubProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of GitHubProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of GitHubProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of GitHubProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of GitHubProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of GitHubProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_GitHubProviderOrdering | null)[] | null;

  filter?: _GitHubProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ScmProviderSubscriptionTypeArgs {
  /** id of SCMProvider */
  id?: string | null;
  /** url of SCMProvider */
  url?: string | null;
  /** providerId of SCMProvider */
  providerId?: string | null;
  /** apiUrl of SCMProvider */
  apiUrl?: string | null;
  /** gitUrl of SCMProvider */
  gitUrl?: string | null;
  /** providerType of SCMProvider */
  providerType?: ProviderType | null;
  /** ids is list variant of id of SCMProvider */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of SCMProvider */
  urls?: (string | null)[] | null;
  /** providerIds is list variant of providerId of SCMProvider */
  providerIds?: (string | null)[] | null;
  /** apiUrls is list variant of apiUrl of SCMProvider */
  apiUrls?: (string | null)[] | null;
  /** gitUrls is list variant of gitUrl of SCMProvider */
  gitUrls?: (string | null)[] | null;
  /** providerTypes is list variant of providerType of SCMProvider */
  providerTypes?: (ProviderType | null)[] | null;

  orderBy?: (_ScmProviderOrdering | null)[] | null;

  filter?: _ScmProviderFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface UserJoinedChannelSubscriptionTypeArgs {
  /** id of UserJoinedChannel */
  id?: string | null;
  /** ids is list variant of id of UserJoinedChannel */
  ids?: (string | null)[] | null;

  orderBy?: (_UserJoinedChannelOrdering | null)[] | null;

  filter?: _UserJoinedChannelFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface GitHubOrgWebhookSubscriptionTypeArgs {
  /** id of GitHubOrgWebhook */
  id?: string | null;
  /** url of GitHubOrgWebhook */
  url?: string | null;
  /** webhookType of GitHubOrgWebhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of GitHubOrgWebhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of GitHubOrgWebhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of GitHubOrgWebhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_GitHubOrgWebhookOrdering | null)[] | null;

  filter?: _GitHubOrgWebhookFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface WebhookSubscriptionTypeArgs {
  /** id of Webhook */
  id?: string | null;
  /** url of Webhook */
  url?: string | null;
  /** webhookType of Webhook */
  webhookType?: WebhookType | null;
  /** ids is list variant of id of Webhook */
  ids?: (string | null)[] | null;
  /** urls is list variant of url of Webhook */
  urls?: (string | null)[] | null;
  /** webhookTypes is list variant of webhookType of Webhook */
  webhookTypes?: (WebhookType | null)[] | null;

  orderBy?: (_WebhookOrdering | null)[] | null;

  filter?: _WebhookFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ChannelLinkSubscriptionTypeArgs {
  /** id of ChannelLink */
  id?: string | null;
  /** ids is list variant of id of ChannelLink */
  ids?: (string | null)[] | null;

  orderBy?: (_ChannelLinkOrdering | null)[] | null;

  filter?: _ChannelLinkFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface ReviewSubscriptionTypeArgs {
  /** id of Review */
  id?: string | null;
  /** gitHubId of Review */
  gitHubId?: string | null;
  /** reviewId of Review */
  reviewId?: string | null;
  /** body of Review */
  body?: string | null;
  /** state of Review */
  state?: ReviewState | null;
  /** submittedAt of Review */
  submittedAt?: string | null;
  /** htmlUrl of Review */
  htmlUrl?: string | null;
  /** ids is list variant of id of Review */
  ids?: (string | null)[] | null;
  /** gitHubIds is list variant of gitHubId of Review */
  gitHubIds?: (string | null)[] | null;
  /** reviewIds is list variant of reviewId of Review */
  reviewIds?: (string | null)[] | null;
  /** bodys is list variant of body of Review */
  bodys?: (string | null)[] | null;
  /** states is list variant of state of Review */
  states?: (ReviewState | null)[] | null;
  /** submittedAts is list variant of submittedAt of Review */
  submittedAts?: (string | null)[] | null;
  /** htmlUrls is list variant of htmlUrl of Review */
  htmlUrls?: (string | null)[] | null;

  orderBy?: (_ReviewOrdering | null)[] | null;

  filter?: _ReviewFilter | null;

  _id?: Long | null;

  _ids?: (Long | null)[] | null;

  first?: number | null;

  offset?: number | null;
}
export interface CardSubscriptionTypeArgs {
  key?: (string | null)[] | null;

  post?: (string | null)[] | null;

  shortTitle?: (string | null)[] | null;

  ts?: (number | null)[] | null;

  ttl?: (number | null)[] | null;

  type?: (string | null)[] | null;
}
export interface NotificationSubscriptionTypeArgs {
  body?: string | null;

  contentType?: string | null;

  key?: string | null;

  post?: (string | null)[] | null;

  ts?: number | null;

  ttl?: (number | null)[] | null;
}
export interface CommitIssueRelationshipSubscriptionTypeArgs {
  type?: (CommitIssueRelationshipType | null)[] | null;
}
export interface DeploymentSubscriptionTypeArgs {
  /** The name of environment the commit got deployed */
  environment?: (string | null)[] | null;

  ts?: (number | null)[] | null;
}
export interface IssueRelationshipSubscriptionTypeArgs {
  /** Unique id of the issue relationship */
  relationshipId?: (string | null)[] | null;

  type?: (string | null)[] | null;

  state?: (string | null)[] | null;
}
export interface SdmGoalSubscriptionTypeArgs {
  approvalRequired?: (boolean | null)[] | null;

  branch?: (string | null)[] | null;

  data?: (string | null)[] | null;

  description?: (string | null)[] | null;

  environment?: (string | null)[] | null;

  error?: (string | null)[] | null;

  externalKey?: (string | null)[] | null;

  externalUrl?: (string | null)[] | null;

  goalSet?: (string | null)[] | null;

  goalSetId?: (string | null)[] | null;

  name?: (string | null)[] | null;

  phase?: (string | null)[] | null;

  retryFeasible?: (boolean | null)[] | null;

  sha?: (string | null)[] | null;

  state?: (SdmGoalState | null)[] | null;

  ts?: (number | null)[] | null;

  uniqueName?: (string | null)[] | null;

  url?: (string | null)[] | null;
}
export interface SdmBuildIdentifierSubscriptionTypeArgs {
  identifier?: (string | null)[] | null;
}
export interface SdmDeployEnablementSubscriptionTypeArgs {
  owner?: (string | null)[] | null;

  providerId?: (string | null)[] | null;

  repo?: (string | null)[] | null;

  state?: (SdmDeployState | null)[] | null;
}
export interface SdmVersionSubscriptionTypeArgs {
  branch?: (string | null)[] | null;

  sha?: (string | null)[] | null;

  version?: (string | null)[] | null;
}
export interface AtomistLogSubscriptionTypeArgs {
  /** Status timestamp */
  timestamp?: (number | null)[] | null;
  /** Team ID for which log message is produced */
  team_id?: (string | null)[] | null;
  /** Log message level: debug, info, warn, error, fatal */
  level?: (string | null)[] | null;
  /** Log message */
  message?: (string | null)[] | null;
  /** Grouping, namespace etc. */
  category?: (string | null)[] | null;
}
export interface SdmGoalSetBadgeSubscriptionTypeArgs {
  sdm?: (string | null)[] | null;

  token?: (string | null)[] | null;
}
export interface FeedbackSubscriptionTypeArgs {
  email?: (string | null)[] | null;

  message?: (string | null)[] | null;

  invocation_id?: (string | null)[] | null;
}
export interface SentryAlertSubscriptionTypeArgs {
  culprit?: (string | null)[] | null;

  level?: (string | null)[] | null;

  message?: (string | null)[] | null;

  project?: (string | null)[] | null;

  project_name?: (string | null)[] | null;

  url?: (string | null)[] | null;
}

// ====================================================
// Enums
// ====================================================

/** Enum for IssueState */
export enum IssueState {
  open = "open",
  closed = "closed"
}
/** Ordering Enum for Issue */
export enum _IssueOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  number_asc = "number_asc",
  number_desc = "number_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  action_asc = "action_asc",
  action_desc = "action_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
  closedAt_asc = "closedAt_asc",
  closedAt_desc = "closedAt_desc"
}
/** Enum for ProviderType */
export enum ProviderType {
  bitbucket_cloud = "bitbucket_cloud",
  github_com = "github_com",
  ghe = "ghe",
  bitbucket = "bitbucket",
  gitlab = "gitlab"
}
/** Enum for OwnerType */
export enum OwnerType {
  user = "user",
  organization = "organization"
}
/** Enum for WebhookType */
export enum WebhookType {
  organization = "organization",
  repository = "repository"
}
/** Enum for BuildStatus */
export enum BuildStatus {
  passed = "passed",
  broken = "broken",
  failed = "failed",
  started = "started",
  canceled = "canceled"
}
/** Enum for BuildTrigger */
export enum BuildTrigger {
  pull_request = "pull_request",
  push = "push",
  tag = "tag",
  cron = "cron"
}
/** Enum for StatusState */
export enum StatusState {
  pending = "pending",
  success = "success",
  error = "error",
  failure = "failure"
}
/** Enum for ReviewState */
export enum ReviewState {
  requested = "requested",
  pending = "pending",
  approved = "approved",
  commented = "commented",
  unapproved = "unapproved",
  changes_requested = "changes_requested"
}
/** Enum for CommentCommentType */
export enum CommentCommentType {
  review = "review",
  pullRequest = "pullRequest",
  issue = "issue"
}
/** Ordering Enum for Repo */
export enum _RepoOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  owner_asc = "owner_asc",
  owner_desc = "owner_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  allowRebaseMerge_asc = "allowRebaseMerge_asc",
  allowRebaseMerge_desc = "allowRebaseMerge_desc",
  allowSquashMerge_asc = "allowSquashMerge_asc",
  allowSquashMerge_desc = "allowSquashMerge_desc",
  allowMergeCommit_asc = "allowMergeCommit_asc",
  allowMergeCommit_desc = "allowMergeCommit_desc",
  repoId_asc = "repoId_asc",
  repoId_desc = "repoId_desc",
  gitHubId_asc = "gitHubId_asc",
  gitHubId_desc = "gitHubId_desc",
  defaultBranch_asc = "defaultBranch_asc",
  defaultBranch_desc = "defaultBranch_desc"
}
/** Ordering Enum for Label */
export enum _LabelOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  default_asc = "default_asc",
  default_desc = "default_desc",
  color_asc = "color_asc",
  color_desc = "color_desc"
}
/** Ordering Enum for ChatChannel */
export enum _ChatChannelOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  normalizedName_asc = "normalizedName_asc",
  normalizedName_desc = "normalizedName_desc",
  channelId_asc = "channelId_asc",
  channelId_desc = "channelId_desc",
  isDefault_asc = "isDefault_asc",
  isDefault_desc = "isDefault_desc",
  botInvitedSelf_asc = "botInvitedSelf_asc",
  botInvitedSelf_desc = "botInvitedSelf_desc"
}
/** Ordering Enum for ChatId */
export enum _ChatIdOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  screenName_asc = "screenName_asc",
  screenName_desc = "screenName_desc",
  userId_asc = "userId_asc",
  userId_desc = "userId_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  isAtomistBot_asc = "isAtomistBot_asc",
  isAtomistBot_desc = "isAtomistBot_desc",
  isOwner_asc = "isOwner_asc",
  isOwner_desc = "isOwner_desc",
  isPrimaryOwner_asc = "isPrimaryOwner_asc",
  isPrimaryOwner_desc = "isPrimaryOwner_desc",
  isAdmin_asc = "isAdmin_asc",
  isAdmin_desc = "isAdmin_desc",
  isBot_asc = "isBot_asc",
  isBot_desc = "isBot_desc",
  timezoneLabel_asc = "timezoneLabel_asc",
  timezoneLabel_desc = "timezoneLabel_desc"
}
/** Ordering Enum for Email */
export enum _EmailOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  address_asc = "address_asc",
  address_desc = "address_desc"
}
/** Ordering Enum for SCMId */
export enum _ScmIdOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  login_asc = "login_asc",
  login_desc = "login_desc",
  name_asc = "name_asc",
  name_desc = "name_desc"
}
/** Ordering Enum for GitHubProvider */
export enum _GitHubProviderOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  providerId_asc = "providerId_asc",
  providerId_desc = "providerId_desc",
  apiUrl_asc = "apiUrl_asc",
  apiUrl_desc = "apiUrl_desc",
  gitUrl_asc = "gitUrl_asc",
  gitUrl_desc = "gitUrl_desc",
  providerType_asc = "providerType_asc",
  providerType_desc = "providerType_desc"
}
/** Ordering Enum for Team */
export enum _TeamOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  iconUrl_asc = "iconUrl_asc",
  iconUrl_desc = "iconUrl_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc"
}
/** Ordering Enum for Person */
export enum _PersonOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  forename_asc = "forename_asc",
  forename_desc = "forename_desc",
  surname_asc = "surname_asc",
  surname_desc = "surname_desc",
  name_asc = "name_asc",
  name_desc = "name_desc"
}
/** Ordering Enum for GitHubId */
export enum _GitHubIdOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  login_asc = "login_asc",
  login_desc = "login_desc",
  name_asc = "name_asc",
  name_desc = "name_desc"
}
/** Ordering Enum for SCMProvider */
export enum _ScmProviderOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  providerId_asc = "providerId_asc",
  providerId_desc = "providerId_desc",
  apiUrl_asc = "apiUrl_asc",
  apiUrl_desc = "apiUrl_desc",
  gitUrl_asc = "gitUrl_asc",
  gitUrl_desc = "gitUrl_desc",
  providerType_asc = "providerType_asc",
  providerType_desc = "providerType_desc"
}
/** Ordering Enum for Org */
export enum _OrgOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  owner_asc = "owner_asc",
  owner_desc = "owner_desc",
  ownerType_asc = "ownerType_asc",
  ownerType_desc = "ownerType_desc"
}
/** Ordering Enum for GitHubOrgWebhook */
export enum _GitHubOrgWebhookOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  webhookType_asc = "webhookType_asc",
  webhookType_desc = "webhookType_desc"
}
/** Ordering Enum for Webhook */
export enum _WebhookOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  webhookType_asc = "webhookType_asc",
  webhookType_desc = "webhookType_desc"
}
/** Ordering Enum for ChatTeam */
export enum _ChatTeamOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  domain_asc = "domain_asc",
  domain_desc = "domain_desc",
  messageCount_asc = "messageCount_asc",
  messageCount_desc = "messageCount_desc",
  emailDomain_asc = "emailDomain_asc",
  emailDomain_desc = "emailDomain_desc"
}
/** Ordering Enum for ChannelLink */
export enum _ChannelLinkOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc"
}
/** Ordering Enum for PullRequest */
export enum _PullRequestOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  number_asc = "number_asc",
  number_desc = "number_desc",
  prId_asc = "prId_asc",
  prId_desc = "prId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  merged_asc = "merged_asc",
  merged_desc = "merged_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  baseBranchName_asc = "baseBranchName_asc",
  baseBranchName_desc = "baseBranchName_desc",
  branchName_asc = "branchName_asc",
  branchName_desc = "branchName_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
  closedAt_asc = "closedAt_asc",
  closedAt_desc = "closedAt_desc",
  mergedAt_asc = "mergedAt_asc",
  mergedAt_desc = "mergedAt_desc"
}
/** Ordering Enum for Commit */
export enum _CommitOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  sha_asc = "sha_asc",
  sha_desc = "sha_desc",
  message_asc = "message_asc",
  message_desc = "message_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for Build */
export enum _BuildOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  buildId_asc = "buildId_asc",
  buildId_desc = "buildId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  status_asc = "status_asc",
  status_desc = "status_desc",
  buildUrl_asc = "buildUrl_asc",
  buildUrl_desc = "buildUrl_desc",
  compareUrl_asc = "compareUrl_asc",
  compareUrl_desc = "compareUrl_desc",
  trigger_asc = "trigger_asc",
  trigger_desc = "trigger_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  pullRequestNumber_asc = "pullRequestNumber_asc",
  pullRequestNumber_desc = "pullRequestNumber_desc",
  startedAt_asc = "startedAt_asc",
  startedAt_desc = "startedAt_desc",
  finishedAt_asc = "finishedAt_asc",
  finishedAt_desc = "finishedAt_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  workflowId_asc = "workflowId_asc",
  workflowId_desc = "workflowId_desc",
  jobName_asc = "jobName_asc",
  jobName_desc = "jobName_desc",
  jobId_asc = "jobId_asc",
  jobId_desc = "jobId_desc",
  data_asc = "data_asc",
  data_desc = "data_desc"
}
/** Ordering Enum for Push */
export enum _PushOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  branch_asc = "branch_asc",
  branch_desc = "branch_desc"
}

export enum SdmGoalState {
  success = "success",
  requested = "requested",
  waiting_for_approval = "waiting_for_approval",
  failure = "failure",
  planned = "planned",
  in_process = "in_process",
  skipped = "skipped"
}
/** Ordering Enum for Tag */
export enum _TagOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  ref_asc = "ref_asc",
  ref_desc = "ref_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for Release */
export enum _ReleaseOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for DockerImage */
export enum _DockerImageOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  image_asc = "image_asc",
  image_desc = "image_desc",
  imageName_asc = "imageName_asc",
  imageName_desc = "imageName_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for K8Pod */
export enum _K8PodOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  phase_asc = "phase_asc",
  phase_desc = "phase_desc",
  environment_asc = "environment_asc",
  environment_desc = "environment_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  baseName_asc = "baseName_asc",
  baseName_desc = "baseName_desc",
  namespace_asc = "namespace_asc",
  namespace_desc = "namespace_desc",
  statusJSON_asc = "statusJSON_asc",
  statusJSON_desc = "statusJSON_desc",
  host_asc = "host_asc",
  host_desc = "host_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  specsJSON_asc = "specsJSON_asc",
  specsJSON_desc = "specsJSON_desc",
  envJSON_asc = "envJSON_asc",
  envJSON_desc = "envJSON_desc",
  metadataJSON_asc = "metadataJSON_asc",
  metadataJSON_desc = "metadataJSON_desc",
  containersCrashLoopBackOff_asc = "containersCrashLoopBackOff_asc",
  containersCrashLoopBackOff_desc = "containersCrashLoopBackOff_desc",
  resourceVersion_asc = "resourceVersion_asc",
  resourceVersion_desc = "resourceVersion_desc"
}
/** Ordering Enum for K8Container */
export enum _K8ContainerOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  imageName_asc = "imageName_asc",
  imageName_desc = "imageName_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  environment_asc = "environment_asc",
  environment_desc = "environment_desc",
  containerJSON_asc = "containerJSON_asc",
  containerJSON_desc = "containerJSON_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  stateReason_asc = "stateReason_asc",
  stateReason_desc = "stateReason_desc",
  ready_asc = "ready_asc",
  ready_desc = "ready_desc",
  restartCount_asc = "restartCount_asc",
  restartCount_desc = "restartCount_desc",
  statusJSON_asc = "statusJSON_asc",
  statusJSON_desc = "statusJSON_desc",
  resourceVersion_asc = "resourceVersion_asc",
  resourceVersion_desc = "resourceVersion_desc",
  containerID_asc = "containerID_asc",
  containerID_desc = "containerID_desc"
}
/** Ordering Enum for Workflow */
export enum _WorkflowOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  workflowId_asc = "workflowId_asc",
  workflowId_desc = "workflowId_desc",
  provider_asc = "provider_asc",
  provider_desc = "provider_desc",
  config_asc = "config_asc",
  config_desc = "config_desc"
}
/** Ordering Enum for Status */
export enum _StatusOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  targetUrl_asc = "targetUrl_asc",
  targetUrl_desc = "targetUrl_desc",
  context_asc = "context_asc",
  context_desc = "context_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for HerokuApp */
export enum _HerokuAppOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  app_asc = "app_asc",
  app_desc = "app_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  user_asc = "user_asc",
  user_desc = "user_desc",
  appId_asc = "appId_asc",
  appId_desc = "appId_desc",
  release_asc = "release_asc",
  release_desc = "release_desc"
}
/** Ordering Enum for Application */
export enum _ApplicationOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  host_asc = "host_asc",
  host_desc = "host_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  domain_asc = "domain_asc",
  domain_desc = "domain_desc",
  data_asc = "data_asc",
  data_desc = "data_desc"
}
/** Ordering Enum for Fingerprint */
export enum _FingerprintOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  sha_asc = "sha_asc",
  sha_desc = "sha_desc",
  data_asc = "data_asc",
  data_desc = "data_desc"
}
/** Ordering Enum for ParentImpact */
export enum _ParentImpactOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  data_asc = "data_asc",
  data_desc = "data_desc"
}
/** Ordering Enum for Branch */
export enum _BranchOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  isRemote_asc = "isRemote_asc",
  isRemote_desc = "isRemote_desc",
  remoteRepoHtmlUrl_asc = "remoteRepoHtmlUrl_asc",
  remoteRepoHtmlUrl_desc = "remoteRepoHtmlUrl_desc"
}
/** Ordering Enum for Review */
export enum _ReviewOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  gitHubId_asc = "gitHubId_asc",
  gitHubId_desc = "gitHubId_desc",
  reviewId_asc = "reviewId_asc",
  reviewId_desc = "reviewId_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  state_asc = "state_asc",
  state_desc = "state_desc",
  submittedAt_asc = "submittedAt_asc",
  submittedAt_desc = "submittedAt_desc",
  htmlUrl_asc = "htmlUrl_asc",
  htmlUrl_desc = "htmlUrl_desc"
}
/** Ordering Enum for Comment */
export enum _CommentOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  body_asc = "body_asc",
  body_desc = "body_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
  commentId_asc = "commentId_asc",
  commentId_desc = "commentId_desc",
  gitHubId_asc = "gitHubId_asc",
  gitHubId_desc = "gitHubId_desc",
  path_asc = "path_asc",
  path_desc = "path_desc",
  position_asc = "position_asc",
  position_desc = "position_desc",
  htmlUrl_asc = "htmlUrl_asc",
  htmlUrl_desc = "htmlUrl_desc",
  commentType_asc = "commentType_asc",
  commentType_desc = "commentType_desc"
}
/** Ordering Enum for DeletedBranch */
export enum _DeletedBranchOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for ImageLinked */
export enum _ImageLinkedOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  timestamp_asc = "timestamp_asc",
  timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for PushImpact */
export enum _PushImpactOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  data_asc = "data_asc",
  data_desc = "data_desc"
}
/** Ordering Enum for PullRequestImpact */
export enum _PullRequestImpactOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc",
  url_asc = "url_asc",
  url_desc = "url_desc",
  data_asc = "data_asc",
  data_desc = "data_desc"
}
/** Ordering Enum for UserJoinedChannel */
export enum _UserJoinedChannelOrdering {
  atmTeamId_asc = "atmTeamId_asc",
  atmTeamId_desc = "atmTeamId_desc",
  id_asc = "id_asc",
  id_desc = "id_desc"
}
/** asc or desc ordering. Must be used with orderBy */
export enum _Ordering {
  desc = "desc",
  asc = "asc"
}

export enum CommitIssueRelationshipType {
  fixes = "fixes",
  references = "references"
}

export enum SdmDeployState {
  requested = "requested",
  disabled = "disabled"
}

// ====================================================
// END: Typescript template
// ====================================================

// ====================================================
// Documents
// ====================================================

export namespace SdmGoals {
  export type Variables = {
    goalSetId?: string[] | null;
    branch?: (string | null)[] | null;
  };

  export type Query = {
    __typename?: "Query";

    SdmGoal?: (SdmGoal | null)[] | null;
  };

  export type SdmGoal = {
    __typename?: "SdmGoal";

    ts?: number | null;

    state?: SdmGoalState | null;

    name?: string | null;

    environment?: string | null;
  };
}

export namespace SdmGoalSet {
  export type Variables = {
    owner?: string[] | null;
    repo?: string[] | null;
    providerId?: string[] | null;
    branch?: (string | null)[] | null;
  };

  export type Query = {
    __typename?: "Query";

    SdmGoal?: (SdmGoal | null)[] | null;
  };

  export type SdmGoal = {
    __typename?: "SdmGoal";

    goalSetId?: string | null;

    goalSet?: string | null;

    repo?: Repo | null;
  };

  export type Repo = {
    __typename?: "SdmRepository";

    name?: string | null;

    owner?: string | null;

    providerId?: string | null;
  };
}

export namespace SdmGoalSetBadge {
  export type Variables = {
    token?: string[] | null;
  };

  export type Query = {
    __typename?: "Query";

    SdmGoalSetBadge?: (SdmGoalSetBadge | null)[] | null;
  };

  export type SdmGoalSetBadge = {
    __typename?: "SdmGoalSetBadge";

    sdm?: string | null;

    repo?: Repo | null;
  };

  export type Repo = {
    __typename?: "SdmGoalSetBadgeRepository";

    name?: string | null;

    owner?: string | null;

    providerId?: string | null;
  };
}
