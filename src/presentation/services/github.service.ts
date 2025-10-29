import { GitHubStarPayload } from '../../interfaces';

export class GitHubService {

  constructor() {}

  onStar(payload: GitHubStarPayload): string {
    const { action, sender, repository, starred_at } = payload;

    return `User ${ sender.login } ${ action } star on ${ repository.full_name }`;
  }

}
