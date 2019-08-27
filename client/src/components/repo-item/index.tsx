import Taro, { Component, Config } from "@tarojs/taro"
import { View, Text, Image } from "@tarojs/components"
import "./index.scss"
import { IStarred } from "../../services/user"

interface RepoItemProps {
  repo: IStarred
}

const RepoItem = ({ repo }: RepoItemProps) => {
  if (!repo) {
    return null
  }
  const {
    id,
    node_id,
    name,
    full_name,
    owner: { avatar_url, login },
    html_url,
    description,
    fork,
    url,
    forks_url,
    keys_url,
    collaborators_url,
    teams_url,
    hooks_url,
    issue_events_url,
    events_url,
    assignees_url,
    branches_url,
    tags_url,
    blobs_url,
    git_tags_url,
    git_refs_url,
    trees_url,
    statuses_url,
    languages_url,
    stargazers_url,
    contributors_url,
    subscribers_url,
    subscription_url,
    commits_url,
    git_commits_url,
    comments_url,
    issue_comment_url,
    contents_url,
    compare_url,
    merges_url,
    archive_url,
    downloads_url,
    issues_url,
    pulls_url,
    milestones_url,
    notifications_url,
    labels_url,
    releases_url,
    deployments_url,
    created_at,
    updated_at,
    pushed_at,
    git_url,
    ssh_url,
    clone_url,
    svn_url,
    homepage,
    size,
    stargazers_count,
    watchers_count,
    language,
    has_issues,
    has_projects,
    has_downloads,
    has_wiki,
    has_pages,
    forks_count,
    mirror_url,
    archived,
    disabled,
    open_issues_count,
    license,
    forks,
    open_issues,
    watchers,
    default_branch,
    permissions
  } = repo

  return (
    <View>
      <View>
        <Image src={avatar_url}></Image>
      </View>
      <View>
        <View>
          <Text>{name}</Text>
          <Text>{language}</Text>
          {/* // TODO language color */}
        </View>
        <View>{description}</View>
        <View>
          <Text>{stargazers_count}</Text>
          <Text>{forks_count}</Text>
          <Text>{login}</Text>
        </View>
      </View>
    </View>
  )
}

export default RepoItem